# Handoff to Backend Agent — Payment Endpoint

**From:** Frontend agent (working in `aLittleBid-frontend`)
**To:** Backend agent (working in `aLittleBid-backend`)
**Date:** 2026-04-28
**Subject:** Stripe Embedded Checkout endpoint needs a small fix and a rebase before frontend can integrate

---

## TL;DR

Your `feat/payment` branch has the right shape but ships a malformed `line_items.price_data` that Stripe will reject at runtime. Fix it, rebase onto current `dev`, merge. Frontend is built against the contract below.

**Estimated work:** ~5 minutes of code + a rebase.

---

## Context (so you can decide if my asks are reasonable)

We're integrating Stripe **Embedded Checkout** (`ui_mode: "elements"`) into a bootcamp auction app. Flow:

```
User wins auction → frontend POSTs to your endpoint → you return clientSecret
→ frontend renders Stripe iframe → user pays → Stripe redirects to /complete
```

**Out of scope for this bootcamp demo** (do not implement these — keep it KISS):
- ❌ Persisting `Payment` rows to the DB (the schema model exists; we're not using it for v1)
- ❌ Webhook handler / signature verification
- ❌ `/complete` server-side confirmation endpoint
- ❌ Winner / authorization validation in the controller
- ❌ Refund flow

If you want to implement any of those for resume points, fine — but don't block the frontend integration on them. The contract below is the minimum we need.

---

## What's wrong on `feat/payment` today

**Two bugs, same file** — `src/services/stripe.service.js`. Bug 1 (`line_items` shape) is the one I caught while reading the code; Bug 2 (`ui_mode` value) only surfaces at runtime when the frontend tries to mount the iframe.

### Bug 2 — `ui_mode: "elements"` is not a valid value

**Symptom:** the API call succeeds, the frontend gets a `clientSecret`, but Stripe's iframe refuses to render with this console error:

> `IntegrationError: Invalid Checkout session. Only Checkout sessions with ui_mode=embedded_page can be used with embedded Checkout.`

**Cause:** Stripe accepts the malformed param silently and creates a *different kind of session* — the embedded iframe rejects it on the client.

**Fix — one line:**

```diff
- ui_mode: "elements",
+ ui_mode: "embedded",
```

`"elements"` is the name of a *different* Stripe product (`@stripe/stripe-js` Elements primitives like `<CardElement />`). Embedded Checkout uses `ui_mode: "embedded"`.

### Bug 1 — `line_items.price_data` shape

The `line_items[0].price_data` block uses field names Stripe doesn't recognize. Stripe will return a **400 invalid_request_error** the first time the endpoint is hit. Current code:

```js
line_items: [
  {
    price_data: {
      auctionId: auctionId,    // ❌ not a Stripe field
      productId: data.productId, // ❌ not a Stripe field
      price: data.price,         // ❌ wrong field name + wrong unit
      currency: 'THB',
    },
    quantity: 1,
  },
],
```

**Required shape (from Stripe docs for Checkout Sessions):**

```js
line_items: [
  {
    price_data: {
      currency: 'thb',
      product_data: { name: data.productName ?? 'Auction Lot' },
      unit_amount: Math.round(Number(data.price) * 100), // smallest currency unit (satang for THB)
    },
    quantity: 1,
  },
],
```

Three things to know:
1. **`unit_amount` is in the smallest currency unit.** THB → satang. So 45,000 baht becomes `4500000` satang. The `Math.round` guards against floating-point drift.
2. **`currency` must be lowercase** in Stripe's API.
3. **`product_data.name` is required** when you don't pass a pre-created `price` ID.

`auctionId` and `productId` are not part of the Stripe API — they're metadata we're tracking. If you want to attach them to the session for your own bookkeeping later, use the session-level `metadata` field (see "Optional improvements" below).

---

## API contract the frontend will call against

```
POST /api/payments/auction/:auctionId/bid/:bidId
Headers:
  Authorization: Bearer <jwt>
  Content-Type: application/json
Body:
  {
    "productId":   number,   // e.g. 7
    "price":       number,   // hammer price in baht (decimal OK; we round to satang server-side)
    "productName": string    // e.g. "Golden Model" — used for Stripe receipt + dashboard
  }

Response 201:
  {
    "message": "Checkout session created successfully",
    "clientSecret": "cs_test_xxx_secret_xxx"
  }

Errors:
  401 — missing/invalid JWT (already handled by authCheck middleware)
  500 — Stripe API failure (let it bubble through next(error))
```

**Frontend does NOT send the `Bid` row data, just what's already in the request URL plus the cart line.** The auctionId and bidId are URL params for routing/bookkeeping; the body carries what Stripe needs to render its checkout.

---

## Required env var

`STRIPE_SECRET_KEY=sk_test_...`

Add this to your `.env.example` (or wherever you document env keys) so future devs don't get a "missing API key" error on first run.

The matching `pk_test_...` publishable key needs to be shared with the frontend dev (me) so I can put it in the frontend `.env`. Same Stripe test account, paired keys.

---

## Branch hygiene

`feat/payment` was branched from a stale `dev`. Diff against current `dev` shows it's missing:
- The `initializeAuctionStartTimers` import + call in `server.js`
- Subsequent socket merge commits

**Please rebase `feat/payment` onto current `dev`** (or merge `dev` in) before opening the PR. The rebase will surface formatting noise in `server.js` (single vs double quotes, trailing whitespace) — resolve those by adopting `dev`'s style, since that's what the rest of the team is on.

---

## Optional improvements (only if you have time)

These are nice-to-haves for resume bullets, **not blockers**:

1. **Attach metadata to the session** so you can correlate Stripe events with your DB later:
   ```js
   stripe.checkout.sessions.create({
     // ...existing fields,
     metadata: { auctionId, bidId, userId },
   })
   ```

2. **Use the `bidId` route param** — it's currently captured but ignored. Even just logging it would be progress. If you want to add a quick winner check, the rough shape is:
   - Look up the bid by `bidId`
   - Assert `bid.bidderId === req.user.id` (403 if not)
   - Assert the bid is the highest for `auctionId` (403 if not)

3. **Insert a `Payment` row at session creation time** with `status: PENDING`, `gatewayReference: session.id`, `amount`, `currency: 'THB'`, `auctionId`. The schema already supports this. We'd flip it to `SUCCESS` later via either a webhook or a `/complete` confirm endpoint.

None of these are required for the frontend demo to work end-to-end. The fix in §"What's wrong" is the only mandatory change.

---

## How to verify your fix works (before telling me you're done)

1. Set `STRIPE_SECRET_KEY` in `.env` to a test key from your Stripe dashboard.
2. Start the backend: `npm run dev`.
3. Hit the endpoint with curl or the existing `http/payment.http`:
   ```
   POST http://localhost:3000/api/payments/auction/1/bid/clxxxxx
   Authorization: Bearer <a real JWT from logging in>
   Content-Type: application/json

   { "productId": 1, "price": 100, "productName": "Test Lot" }
   ```
4. ✅ **Pass:** response is 201 with a `clientSecret` string starting with `cs_test_`.
5. ❌ **Fail:** any 4xx/5xx, especially Stripe's `invalid_request_error` complaining about `line_items.0.price_data`.

Once that returns 201, ping the frontend agent and we'll integrate.

---

## Contact / questions

Questions or pushback on any of the above — leave a comment in the same PR thread or message back through the human. I'll be working on the frontend integration in parallel using stubbed responses, so I'm not blocked on you for UI scaffolding, only for end-to-end testing.

Thanks 🙏
