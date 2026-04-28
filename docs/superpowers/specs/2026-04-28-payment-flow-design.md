# Payment Flow Integration — Design Spec

**Date:** 2026-04-28
**Scope:** Bootcamp demo. KISS implementation of Stripe Embedded Checkout.
**Constraint:** Frontend-only deliverable. Backend changes are handed off to the backend agent — see `docs/superpowers/handoffs/2026-04-28-payment-backend-handoff.md`.

## Goal

Wire the existing static `Payment.jsx` page to a working Stripe Embedded Checkout flow, triggered by the "Continue" button on the post-auction win modal. Demo-ready end-to-end on Stripe test mode (`pk_test_...` / `sk_test_...`) using card `4242 4242 4242 4242`.

## Out of scope (deliberate)

- Persisting `Payment` rows to the database (schema exists but stays unused for v1)
- Backend winner/authorization validation (anyone with the URL can pay — acceptable for a demo with no real money)
- `/complete` page server-side confirmation (frontend trusts Stripe's redirect)
- Stripe webhook handler
- Buyer's premium / shipping calculation (UI mockup numbers are visual garnish only)
- OrderList "Complete Payment" button wiring
- Refund flow

## Architecture

```
AuctionResultModal "Continue"
    │ navigate(`/payment/${auctionId}/${bidId}`)
    ▼
/payment/:auctionId/:bidId  (Payment.jsx)
    │ on mount:
    │   POST /api/payments/auction/:auctionId/bid/:bidId
    │     body: { productId, price, productName }
    │   ← { clientSecret }
    │
    │ <EmbeddedCheckoutProvider clientSecret>
    │   <EmbeddedCheckout />            ← Stripe owns the iframe
    │ </EmbeddedCheckoutProvider>
    │
    │ Stripe handles card collection + 3DS internally.
    │ On success, browser redirects to return_url:
    ▼
/complete?session_id=cs_test_xxx  (Complete.jsx)
    "🎉 Payment received"
    Link → /my_orders
```

## Backend dependency (handed off)

The backend's `feat/payment` branch needs one bug fix to its `line_items.price_data` shape and must be rebased onto current `dev`. **This work is owned by the backend agent** — see the dedicated handoff doc:

📄 `docs/superpowers/handoffs/2026-04-28-payment-backend-handoff.md`

The frontend will be coded against the API contract defined in that handoff. The contract is:

- `POST /api/payments/auction/:auctionId/bid/:bidId`
  - Headers: `Authorization: Bearer <jwt>`, `Content-Type: application/json`
  - Body: `{ productId, price, productName }`
  - Response 201: `{ message: string, clientSecret: string }`

If the backend isn't ready yet, frontend integration testing is blocked at the "create session" step. UI scaffolding (loading/error/success states, routing, store wiring) can be built independently using a stubbed `clientSecret` for layout work.

## Frontend changes

### Dependencies

Add to `package.json`:
- `@stripe/stripe-js` (loadStripe)
- `@stripe/react-stripe-js` (`EmbeddedCheckoutProvider`, `EmbeddedCheckout`)

### Environment

Add to `.env` (and document in any `.env.example`):
- `VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...`

The publishable key is paired with the backend's `STRIPE_SECRET_KEY` from the same Stripe test account.

### File-by-file changes

**`src/api/apiMain.js`** — add one endpoint function:

```js
export const apiCreateCheckout = (auctionId, bidId, body) =>
  mainApi.post(`/payments/auction/${auctionId}/bid/${bidId}`, body);
```

**`src/stores/payment.store.js`** — currently empty. Implement a minimal Zustand store:

```js
import { create } from "zustand";
import { apiCreateCheckout } from "../api/apiMain.js";

const usePaymentStore = create((set) => ({
  clientSecret: null,
  loading: false,
  error: null,

  createCheckout: async (auctionId, bidId, body) => {
    set({ loading: true, error: null, clientSecret: null });
    try {
      const resp = await apiCreateCheckout(auctionId, bidId, body);
      set({ clientSecret: resp.data.clientSecret, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message ?? err.message, loading: false });
    }
  },

  reset: () => set({ clientSecret: null, loading: false, error: null }),
}));

export default usePaymentStore;
```

**`src/pages/Payment.jsx`** — full rewrite. Replace the static mockup with a real container that:

1. Reads `auctionId` and `bidId` from URL params (`useParams`)
2. Pulls the winning bid + product details from existing stores:
   - `price` ← `useBidStore().winner.amount` (set by socket auction-end event)
   - `productId` ← `useAuctionStore().auctionById.product.id`
   - `productName` ← `useAuctionStore().auctionById.product.name`

   If `auctionById` is not already loaded for the routed `:auctionId`, call `getAuctionById(auctionId)` first.

3. On mount, calls `createCheckout(auctionId, bidId, { productId, price, productName })` from `payment.store.js`
4. Renders three states:
   - **Loading** — spinner / skeleton while `clientSecret` resolves
   - **Error** — friendly message + "Back to My Orders" link if checkout creation failed
   - **Ready** — `<EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}><EmbeddedCheckout /></EmbeddedCheckoutProvider>`
5. The visual chrome (header, breadcrumbs, sidebar with price breakdown) can be kept from the existing mockup as decoration — only the card-input region is replaced by the Stripe iframe

`stripePromise` is created **once at module level** with `loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)`.

**`src/pages/Complete.jsx`** — new file. Reads `session_id` from `useSearchParams()`, renders a static success view:

- "🎉 Payment received"
- Optionally show the truncated session id for debug
- Link to `/my_orders`

No API call. We trust the redirect — KISS.

**`src/routes/AppRouter.jsx`** — two route edits:

```js
// inside the userRouter children array:
{ path: "payment/:auctionId/:bidId", element: <Payment /> },
{ path: "complete", element: <Complete /> },
```

Remove the existing parameterless `payment` route (or leave as a 404 redirect — implementation detail).

**`src/components/AuctionResultModal.jsx`** — wire the "Continue" button.

The current `WinnerContent` component receives `amount` and `bidId` but no `auctionId`. The parent `AuctionResultModal` already has `auctionId` as a prop. Pass it through:

```jsx
<WinnerContent
  amount={winner.amount}
  bidId={winner.bidId}
  auctionId={auctionId}
  onClose={clearWinner}
/>
```

In `WinnerContent`, replace the `onClick={onClose}` on the "Continue" button with a navigate call. Since `onClose === clearWinner` already (passed in by parent), call it once before navigating so the modal closes cleanly:

```jsx
import { useNavigate } from "react-router";
// inside WinnerContent:
const navigate = useNavigate();
// ...
onClick={() => {
  onClose();
  navigate(`/payment/${auctionId}/${bidId}`);
}}
```

**Verify before coding:** confirm that `winner.bidId` is reliably populated by the socket payload. If not, add `auctionId` and `bidId` to the auction-end emit and update `bid.store.js` accordingly.

## Data flow on the wire

**Request — create session:**
```
POST /api/payments/auction/42/bid/clxxx
Headers: Authorization: Bearer <jwt>
Body:    { productId: 7, price: 45000, productName: "Golden Model" }
```

**Response:**
```
201
{ "message": "Checkout session created successfully",
  "clientSecret": "cs_test_xxx_secret_xxx" }
```

**Stripe redirect after card submit:**
```
GET <CLIENT_URL>/complete?session_id=cs_test_xxx
```

## Error handling

| Failure | UX |
|---|---|
| Stripe API error during session creation | Toast + "Back to My Orders" link on Payment.jsx |
| Card declined / 3DS fail | Stripe Elements shows inline message — no work for us |
| Network error fetching `clientSecret` | Same as Stripe API error path |
| User lands on `/complete` with no `session_id` | Render fallback "Payment status unknown" + link to orders |

## Testing approach

- Stripe test key + card `4242 4242 4242 4242` (any future expiry, any CVC)
- Manual smoke test: log in → bid on a short auction → win → click "Continue" → land on `/payment/:auctionId/:bidId` → see Stripe iframe → enter test card → submit → land on `/complete` → see success
- No automated tests (bootcamp scope)

## Verification checkpoints (before implementation)

1. Confirm `winner` payload in `bid.store.js` carries `auctionId` and `bidId`. If not, patch the socket emit + store handler.
2. Confirm a Stripe test publishable key exists (paired with the backend's secret key). Get it from your friend.
3. Confirm the backend `feat/payment` branch will be rebased onto current `dev` and the `line_items` fix landed before frontend integration testing.
