# Handoff — Order Viewing (Payment Persistence + OrderList)

**From:** Frontend agent (working in `aLittleBid-frontend`, branch `cornman`)
**To:** Backend agent + frontend follow-up developer (`aLittleBid-backend`, branch `cornman`/`feat/payment`)
**Date:** 2026-04-29
**Subject:** Stripe Embedded Checkout flow is live end-to-end. Closing the loop now requires persisting payments in the DB and wiring `OrderList.jsx` to a real endpoint.

---

## TL;DR

Payment flow has been **smoke-tested successfully** with Stripe test card on 2026-04-29. Money moves, redirect works, `/complete` page shows. The gap: nothing in our DB records that the payment happened, and the "My Orders" page is still hardcoded mock data.

This handoff defines the work needed to close that loop. **Scope is small and additive — no existing endpoint changes, no schema changes** (the `Payment` model already supports everything below).

**Estimated work:** ~1 hour backend, ~1 hour frontend.

---

## What's working today (verified 2026-04-29)

✅ Auction win modal "Continue" → navigates to `/payment/:auctionId/:bidId`
✅ Frontend POSTs to `POST /api/payments/auction/:auctionId/bid/:bidId`
✅ Backend creates Stripe Checkout Session and returns `{ clientSecret }`
✅ Stripe Embedded Checkout iframe renders
✅ Test card `4242 4242 4242 4242` succeeds
✅ Browser redirects to `/complete?session_id=cs_test_xxx`
✅ Static success page renders

## What's missing

❌ Backend never writes a `Payment` row, so the DB has zero record of the transaction
❌ No way for the user to see what they bought after the success page closes
❌ `OrderList.jsx` at `/my_orders` is hardcoded fake data
❌ No `GET /api/payments/me` (or equivalent) endpoint to list a user's payments

The Prisma `Payment` model has all the columns needed — we just don't write to it.

---

## Backend tasks

### Task B1 — Insert a `Payment` row at session creation

**File:** `src/services/stripe.service.js`

After `stripe.checkout.sessions.create()` resolves but before returning, insert a Prisma row:

```js
import prisma from "../lib/prisma.js"; // adjust import to your existing prisma client

// inside createStripeCheckoutSession, after `session` is created:
await prisma.payment.create({
  data: {
    auctionId: Number(auctionId),
    amount: Number(data.price),
    currency: "THB",
    method: "CREDIT_CARD",
    status: "PENDING",
    gatewayReference: session.id, // cs_test_xxx — Stripe session ID, used to look up later
  },
});
```

The Prisma model already has these columns. No migration needed.

`auctionId` may need to be passed as `Number(...)` since URL params come in as strings — match the column type (`Int`).

### Task B2 — Confirm endpoint that flips PENDING → SUCCESS

**File:** `src/routes/payment.route.js`

Add a new route:

```js
paymentRoutes.get('/session/:sessionId', authCheck, confirmCheckoutController);
```

**File:** `src/controllers/payment.controller.js`

```js
import { confirmStripeCheckoutSession } from "../services/stripe.service.js";

export async function confirmCheckoutController(req, res, next) {
  try {
    const { sessionId } = req.params;
    const result = await confirmStripeCheckoutSession(sessionId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
```

**File:** `src/services/stripe.service.js`

```js
export async function confirmStripeCheckoutSession(sessionId) {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  // Stripe says paid? Update our row.
  if (session.payment_status === "paid") {
    const updated = await prisma.payment.update({
      where: { gatewayReference: sessionId },
      data: {
        status: "SUCCESS",
        paidAt: new Date(),
        gatewayResponse: session, // optional, useful for debugging
      },
    });
    return { status: "SUCCESS", payment: updated };
  }

  // Otherwise leave it as PENDING / FAILED based on Stripe's verdict
  return { status: "PENDING", reason: session.payment_status };
}
```

Why polling-based confirmation instead of a webhook: KISS bootcamp scope. A real webhook handler with signature verification is the production answer, but it requires a public URL (ngrok or deploy) for Stripe to call back. Polling on `/complete` is acceptable for a demo and the failure mode is benign (row stays PENDING).

### Task B3 — List endpoint for the current user

**File:** `src/routes/payment.route.js`

```js
paymentRoutes.get('/me', authCheck, getMyPaymentsController);
```

**File:** `src/controllers/payment.controller.js`

```js
import { getPaymentsForUser } from "../services/stripe.service.js";

export async function getMyPaymentsController(req, res, next) {
  try {
    const userId = req.user.id;
    const payments = await getPaymentsForUser(userId);
    res.status(200).json({ message: "OK", responses: payments });
  } catch (error) {
    next(error);
  }
}
```

**File:** `src/services/stripe.service.js`

```js
export async function getPaymentsForUser(userId) {
  // Join through Auction → Bid to find payments where the user was the winner.
  // The exact query depends on how you decide "this user paid for this auction".
  // Cleanest: payments where the auction's winning bid (highest, by user) matches.
  return prisma.payment.findMany({
    where: {
      auction: {
        bids: {
          some: { bidderId: userId },
        },
      },
    },
    include: {
      auction: {
        include: {
          product: { include: { images: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}
```

A simpler v1 if the join logic is annoying: add a `userId` foreign key to the `Payment` model, populate it at insertion in B1, and filter by that. One migration. Cleaner.

### Task B4 — Document new env requirements

Already exists — no new env vars needed.

---

## Frontend tasks

### Task F1 — Add API endpoints

**File:** `src/api/apiMain.js` (under the existing `//PAYMENT` section)

```js
export const apiConfirmCheckout = (sessionId) =>
  mainApi.get(`/payments/session/${sessionId}`);

export const apiGetMyPayments = () => mainApi.get(`/payments/me`);
```

### Task F2 — Wire `Complete.jsx` to the confirm endpoint

**File:** `src/pages/Complete.jsx`

Currently the page renders a static "🎉 Payment received" without verifying anything. Replace with a small fetch:

```jsx
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import { apiConfirmCheckout } from "../api/apiMain.js";

export default function Complete() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [state, setState] = useState({ loading: true, status: null, error: null });

  useEffect(() => {
    if (!sessionId) {
      setState({ loading: false, status: "MISSING_SESSION", error: null });
      return;
    }
    apiConfirmCheckout(sessionId)
      .then((resp) => setState({ loading: false, status: resp.data.status, error: null }))
      .catch((err) => setState({
        loading: false,
        status: null,
        error: err?.response?.data?.message ?? err.message,
      }));
  }, [sessionId]);

  // render loading / success / failure / unknown variants — see existing page
  // for the success layout, just gate it on state.status === "SUCCESS"
}
```

Keep the existing burgundy success card layout for the SUCCESS state. Add a "Payment processing — refresh in a moment" state for PENDING and an error state for failure.

### Task F3 — Implement order list against the new endpoint

**File:** `src/pages/OrderList.jsx` — full rewrite (currently 121 lines of hardcoded mocks).

Steps:

1. Create or expand `src/stores/payment.store.js` to add a `myPayments` slice and `getMyPayments` action that calls `apiGetMyPayments`.
2. Rewrite `OrderList.jsx`:
   - On mount, call `getMyPayments`
   - Show loading skeleton while fetching
   - Map each payment to the existing card layout (the visual structure is fine — just feed real data)
   - The fields you have from the join: `payment.id`, `payment.amount`, `payment.status`, `payment.paidAt`, `payment.auction.id`, `payment.auction.product.name`, `payment.auction.product.images[0].imageUrl`
   - Empty state: "No acquisitions yet" + link to active auctions

Suggested store extension:

```js
// src/stores/payment.store.js — add to the existing store
myPayments: [],
myPaymentsLoading: false,
myPaymentsError: null,

getMyPayments: async () => {
  set({ myPaymentsLoading: true, myPaymentsError: null });
  try {
    const resp = await apiGetMyPayments();
    set({ myPayments: resp.data.responses, myPaymentsLoading: false });
  } catch (err) {
    set({
      myPaymentsError: err?.response?.data?.message ?? err.message,
      myPaymentsLoading: false,
    });
  }
},
```

### Task F4 — Polish (optional, only if time)

- Add a "Pay now" button on PENDING orders that re-routes to `/payment/:auctionId/:bidId` (lets users complete an abandoned checkout)
- Format `paidAt` with `toLocaleDateString`
- Show a "test mode" badge in dev when payment is PENDING for over 60s (likely they'll need to re-pay)

---

## End-to-end acceptance criteria

After all tasks above are merged, the following flow works without any localStorage planting:

1. User logs in
2. Wins an auction (or uses the dev "Plant test winner" button)
3. Pays with `4242 4242 4242 4242`
4. Lands on `/complete?session_id=cs_test_xxx`
5. **Page calls `GET /api/payments/session/cs_test_xxx`**
6. **Backend retrieves the Stripe session, sees `payment_status: paid`, flips local Payment row to SUCCESS**
7. Page shows "🎉 Payment received"
8. User clicks "View My Orders"
9. **`OrderList` calls `GET /api/payments/me`**
10. **The new payment shows up in the list with status SUCCESS, the auction's product name + image, and the amount**

## What's still out of scope (do not implement)

- ❌ Real Stripe webhook with signature verification (overkill for bootcamp; the polling pattern in B2 covers us)
- ❌ Refund flow (schema supports `REFUNDED` status, no UI for it)
- ❌ Buyer's premium / shipping math (UI mockup numbers stay garnish for now)
- ❌ Email receipts (Stripe sends test-mode receipts to the buyer's email field automatically — leave it)
- ❌ Authorization tightening on the create-checkout endpoint (still no winner validation — see prior handoff for follow-up if time permits)

---

## State at the end of this session (2026-04-29)

**Frontend repo (`aLittleBid-frontend`):**
- Branch `cornman` ahead of `dev` by ~15 commits
- Payment integration complete and smoke-tested
- Includes parallel work: zod validation on Login + Register, eye icon password toggle, loading-state hardening
- Build passes (`npm run build`)
- Eslint: 1 pre-existing unused-import error in `AuctionResultModal.jsx` line 3 (`axios`) — unrelated to my work
- Docs: `docs/superpowers/specs/2026-04-28-payment-flow-design.md`, `docs/superpowers/plans/2026-04-28-payment-frontend.md`, `docs/superpowers/handoffs/2026-04-28-payment-backend-handoff.md`, this file

**Backend repo (`aLittleBid-backend`):**
- Branch `cornman` (was `feat/payment` originally) — ahead with the `line_items` and `ui_mode` fixes
- Working tree has uncommitted changes (`prisma/seed.js`, `src/services/stripe.service.js`, etc.) — coordinate with backend dev before applying tasks above

## Branch hygiene reminder

Both repos have parallel `cornman` branches. Before opening PRs, rebase onto current `dev` and resolve any conflicts (frontend likely has clean conflicts in `package.json` only; backend may need attention on `server.js` formatting and `seed.js`).

## Contact

Frontend questions → look at the spec/plan/handoff docs in `docs/superpowers/`. The plan is task-by-task with concrete code, the spec is design rationale, the handoff is "what backend needs to do." Everything is reproducible from those.

Thanks 🙏 — payment integration was a good one to ship.
