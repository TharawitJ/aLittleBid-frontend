# Payment Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire the existing static `Payment.jsx` page to a working Stripe Embedded Checkout flow, triggered by the "Continue" button on the post-auction win modal.

**Architecture:** Win modal navigates to `/payment/:auctionId/:bidId`. Page calls backend `POST /api/payments/auction/:auctionId/bid/:bidId` for a `clientSecret`, mounts Stripe `<EmbeddedCheckout />`, Stripe redirects to `/complete` after card submit. Static success page — no server-side confirmation (KISS bootcamp scope).

**Tech Stack:** React 19 + Vite + Zustand + react-router 7 + axios + Tailwind. Adding `@stripe/stripe-js` and `@stripe/react-stripe-js`.

**Important context for the executing engineer:**
- 🚨 **No automated test framework exists in this project.** This plan uses manual browser-based smoke checks instead of unit tests. This is a deliberate KISS choice for a bootcamp demo, not a recommendation for production work.
- 🤝 **Backend dependency:** the `aLittleBid-backend` repo's `feat/payment` branch must have its `line_items.price_data` bug fixed and be merged into `dev` before end-to-end testing (Task 9). UI scaffolding tasks (1-8) can complete without it. See `docs/superpowers/handoffs/2026-04-28-payment-backend-handoff.md`.
- 🔑 **Stripe test publishable key** must be obtained from the Stripe dashboard (paired with the backend's secret key). Format: `pk_test_...`.
- 📦 Reference spec: `docs/superpowers/specs/2026-04-28-payment-flow-design.md`.

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `package.json` | Modify | Add `@stripe/stripe-js` + `@stripe/react-stripe-js` deps |
| `.gitignore` | Modify | Add `.env` (defensive — currently absent) |
| `.env` | Create | Holds `VITE_STRIPE_PUBLISHABLE_KEY` (NOT committed) |
| `src/api/apiMain.js` | Modify | Add `apiCreateCheckout()` endpoint function |
| `src/stores/payment.store.js` | Modify (file is empty stub) | Zustand store: `clientSecret`, `loading`, `error`, `createCheckout()`, `reset()` |
| `src/lib/stripe.js` | Create | Module-level singleton `stripePromise = loadStripe(env.VITE_STRIPE_PUBLISHABLE_KEY)` |
| `src/pages/Payment.jsx` | Rewrite | Reads URL params, fetches clientSecret on mount, renders `<EmbeddedCheckoutProvider>` |
| `src/pages/Complete.jsx` | Create | Static success page; reads `session_id` from query string |
| `src/routes/AppRouter.jsx` | Modify | Add `/payment/:auctionId/:bidId` and `/complete` routes |
| `src/components/AuctionResultModal.jsx` | Modify | Wire "Continue" button to `navigate(/payment/:auctionId/:bidId)` |

---

## Task 1: Install Stripe SDK dependencies

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install both packages**

```bash
cd E:/aut/aLittleBid-frontend
npm install @stripe/stripe-js @stripe/react-stripe-js
```

- [ ] **Step 2: Verify they appear in package.json**

```bash
grep -E '"@stripe/' package.json
```

Expected output: two lines, one for `@stripe/react-stripe-js` and one for `@stripe/stripe-js`, both with version strings.

- [ ] **Step 3: Verify the dev server still starts**

```bash
npm run dev
```

Expected: vite output `Local: http://localhost:5173/` with no module errors. Press `q` or Ctrl+C to stop.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add stripe SDK dependencies for embedded checkout"
```

---

## Task 2: Configure Stripe publishable key in env

**Files:**
- Modify: `.gitignore`
- Create: `.env`

- [ ] **Step 1: Add `.env` to `.gitignore`**

Append a new line to the existing `.gitignore`:

```
.env
```

The current `.gitignore` only excludes `*.local`, which won't catch a plain `.env`. Add `.env` on its own line at the end.

- [ ] **Step 2: Create `.env` with the publishable key**

Create `E:/aut/aLittleBid-frontend/.env` with one line:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_REPLACE_WITH_YOUR_KEY_FROM_STRIPE_DASHBOARD
```

The `VITE_` prefix is required — Vite only exposes env vars to the browser when prefixed with `VITE_`. Vite reads `.env` automatically.

The placeholder `pk_test_REPLACE_...` MUST be swapped for a real Stripe test publishable key before Task 9. Get it from the Stripe dashboard (paired with the backend's `STRIPE_SECRET_KEY`).

- [ ] **Step 3: Verify .env is gitignored**

```bash
git status --short
```

Expected: `.env` does NOT appear in the output (because it's now ignored). `.gitignore` DOES appear as modified.

- [ ] **Step 4: Commit the gitignore change**

```bash
git add .gitignore
git commit -m "chore: gitignore .env file"
```

---

## Task 3: Add createCheckout API function

**Files:**
- Modify: `src/api/apiMain.js`

- [ ] **Step 1: Add the endpoint export**

Open `src/api/apiMain.js`. After the `//BID` section (currently the last section, ending with `apiGetBidById`), add a new section:

```js
//PAYMENT
export const apiCreateCheckout = (auctionId, bidId, body) =>
  mainApi.post(`/payments/auction/${auctionId}/bid/${bidId}`, body);
```

The path matches the backend route on `feat/payment` exactly. JWT injection happens automatically via the existing `mainApi.interceptors.request.use` block — no extra auth code needed here.

- [ ] **Step 2: Verify it imports cleanly**

```bash
npm run dev
```

Expected: vite starts without errors. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/api/apiMain.js
git commit -m "feat(api): add apiCreateCheckout endpoint"
```

---

## Task 4: Implement payment store

**Files:**
- Modify: `src/stores/payment.store.js` (currently 2-line empty stub)

- [ ] **Step 1: Replace the file contents with the full store**

Open `src/stores/payment.store.js` and replace its entire content with:

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
      const message =
        err?.response?.data?.message ?? err?.message ?? "Payment service unavailable";
      set({ error: message, loading: false });
    }
  },

  reset: () => set({ clientSecret: null, loading: false, error: null }),
}));

export default usePaymentStore;
```

This deliberately does NOT use `persist` middleware — a `clientSecret` is a one-shot token that should not survive a page reload. The other stores in this codebase use `persist`; we're intentionally diverging.

- [ ] **Step 2: Verify dev server still compiles**

```bash
npm run dev
```

Expected: no errors. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/stores/payment.store.js
git commit -m "feat(store): implement payment store with createCheckout action"
```

---

## Task 5: Create Stripe singleton module

**Files:**
- Create: `src/lib/stripe.js`

The `loadStripe()` call returns a Promise that should be created **once at module load**, not on every render. Sharing it from a dedicated module is the canonical pattern.

- [ ] **Step 1: Create the file**

Create `src/lib/stripe.js`:

```js
import { loadStripe } from "@stripe/stripe-js";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  console.error(
    "[stripe] VITE_STRIPE_PUBLISHABLE_KEY is not set. Add it to your .env file."
  );
}

export const stripePromise = loadStripe(publishableKey);
```

The `if` guard logs a console error in dev rather than throwing — this lets the rest of the app boot even if a developer forgot to set the key, and gives a clear hint about what's missing.

- [ ] **Step 2: Verify dev server still compiles**

```bash
npm run dev
```

Expected: no errors, no console messages about missing key (assuming `.env` was set correctly in Task 2). Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/lib/stripe.js
git commit -m "feat(stripe): add module-level stripePromise singleton"
```

---

## Task 6: Create Complete (success) page

**Files:**
- Create: `src/pages/Complete.jsx`

This is a static page that renders after Stripe redirects post-payment. It does NOT verify the payment server-side — KISS bootcamp scope.

- [ ] **Step 1: Create the file**

Create `src/pages/Complete.jsx`:

```jsx
import { useSearchParams, Link } from "react-router";

export default function Complete() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbf9f6] px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-sm shadow-sm text-center space-y-6">
        <div className="text-6xl">🎉</div>
        <h1 className="text-3xl font-['Newsreader'] italic">Payment received</h1>
        <p className="text-[#59413e] leading-relaxed">
          Thank you. Your acquisition has been confirmed and the seller has
          been notified.
        </p>

        {sessionId && (
          <p className="text-[10px] tracking-widest uppercase text-[#59413e]/60 break-all">
            Ref: {sessionId}
          </p>
        )}

        <Link
          to="/my_orders"
          className="inline-block bg-[#7a0009] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#9e1b1b] transition-colors"
        >
          View My Orders
        </Link>
      </div>
    </div>
  );
}
```

The session ID is shown only as a debug aid. Without verifying it server-side, we can't claim it actually paid — we just trust the redirect happened.

- [ ] **Step 2: Verify dev server still compiles**

```bash
npm run dev
```

Expected: no errors. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Complete.jsx
git commit -m "feat(pages): add Complete success page"
```

---

## Task 7: Rewrite Payment page with embedded Stripe checkout

**Files:**
- Modify: `src/pages/Payment.jsx` (full rewrite — current 154-line static mockup is replaced)

- [ ] **Step 1: Replace Payment.jsx contents**

Open `src/pages/Payment.jsx` and replace the ENTIRE file content with:

```jsx
import { useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { stripePromise } from "../lib/stripe.js";
import usePaymentStore from "../stores/payment.store.js";
import useAuctionStore from "../stores/auction.store.js";
import useBidStore from "../stores/bid.store.js";

export default function Payment() {
  const { auctionId, bidId } = useParams();
  const { clientSecret, loading, error, createCheckout, reset } =
    usePaymentStore();
  const { auctionById, getAuctionById } = useAuctionStore();
  const { winner } = useBidStore();

  // Ensure we have product data for the routed auction
  useEffect(() => {
    if (!auctionById?.product || String(auctionById.id) !== String(auctionId)) {
      getAuctionById(auctionId);
    }
  }, [auctionId, auctionById, getAuctionById]);

  // Kick off checkout once we have everything we need
  useEffect(() => {
    if (clientSecret || loading || error) return;
    if (!auctionById?.product) return;
    if (!winner?.amount) return;

    createCheckout(auctionId, bidId, {
      productId: auctionById.product.id,
      productName: auctionById.product.name,
      price: winner.amount,
    });
  }, [
    auctionId,
    bidId,
    auctionById,
    winner,
    clientSecret,
    loading,
    error,
    createCheckout,
  ]);

  // Reset store when leaving the page
  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope'] py-12 px-4">
      <main className="max-w-2xl mx-auto space-y-8">
        <header className="space-y-2">
          <nav className="text-[10px] tracking-[0.2em] font-bold text-[#59413e]/60 uppercase">
            Payment
          </nav>
          <h1 className="text-4xl font-['Newsreader'] italic">Complete your acquisition</h1>
          {auctionById?.product && winner?.amount && (
            <p className="text-[#59413e]">
              <span className="font-bold">{auctionById.product.name}</span>
              {" — ฿"}
              {Number(winner.amount).toLocaleString()}
            </p>
          )}
        </header>

        {loading && (
          <div className="bg-white p-12 rounded-sm shadow-sm text-center text-[#59413e]">
            Preparing checkout…
          </div>
        )}

        {error && (
          <div className="bg-white p-8 rounded-sm shadow-sm space-y-4">
            <p className="text-[#7a0009] font-bold">Could not start payment</p>
            <p className="text-sm text-[#59413e]">{error}</p>
            <Link
              to="/my_orders"
              className="inline-block text-xs font-bold uppercase tracking-widest text-[#7a0009] hover:underline"
            >
              ← Back to My Orders
            </Link>
          </div>
        )}

        {clientSecret && (
          <div className="bg-white p-2 rounded-sm shadow-sm">
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        )}
      </main>
    </div>
  );
}
```

Notes for the engineer:
- The original 154-line mockup is being deleted on purpose — KISS scope. The visual chrome from the mockup (sidebar, breadcrumbs with hardcoded strings) was hardcoded mock data; replacing it with dynamic store data + the Stripe iframe is simpler and more honest.
- Three view states (loading / error / ready) are mutually exclusive thanks to the store's setters in Task 4.
- The `String(auctionById.id) !== String(auctionId)` check handles the type mismatch — URL params are strings, DB ids are numbers.
- `winner.amount` comes from the persisted `bid-storage` Zustand slice, so it survives the navigation from the win modal.

- [ ] **Step 2: Verify dev server compiles**

```bash
npm run dev
```

Expected: no errors. Don't navigate yet — routing comes in Task 8.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Payment.jsx
git commit -m "feat(pages): rewrite Payment page with stripe embedded checkout"
```

---

## Task 8: Wire routes

**Files:**
- Modify: `src/routes/AppRouter.jsx`

- [ ] **Step 1: Import Complete and update routes**

Open `src/routes/AppRouter.jsx`. After the existing `import Payment from ...` line, add:

```jsx
import Complete from "../pages/Complete.jsx";
```

Then in the `userRouter` children array, find this existing entry:

```jsx
      { path: "payment", element: <Payment /> },
```

Replace it with these two entries:

```jsx
      { path: "payment/:auctionId/:bidId", element: <Payment /> },
      { path: "complete", element: <Complete /> },
```

- [ ] **Step 2: Smoke test the routes in a browser**

```bash
npm run dev
```

Open browser to `http://localhost:5173/payment/1/test-bid-id` (must be logged in as a user). Expected:
- Page renders with "Complete your acquisition" header
- A "Preparing checkout…" message OR a "Could not start payment" error (depending on whether the backend is running and whether `auctionById` / `winner` happen to be in your local Zustand storage)
- **No JavaScript errors in the console** about missing modules / undefined components

Then visit `http://localhost:5173/complete?session_id=cs_test_dummy`. Expected:
- "🎉 Payment received" page renders with the dummy session ID shown

Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/routes/AppRouter.jsx
git commit -m "feat(routes): add /payment/:auctionId/:bidId and /complete"
```

---

## Task 9: Wire AuctionResultModal "Continue" button

**Files:**
- Modify: `src/components/AuctionResultModal.jsx`

The modal currently has a "Continue" button on the WinnerContent that just calls `onClose`. We need it to also navigate to the payment page.

- [ ] **Step 1: Add useNavigate import and thread auctionId into WinnerContent**

Open `src/components/AuctionResultModal.jsx`. The current top imports are:

```jsx
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useBidStore from "../stores/bid.store.js";
import { apiGetUserById } from "../api/apiMain.js";
```

Add a `useNavigate` import after the React import:

```jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useBidStore from "../stores/bid.store.js";
import { apiGetUserById } from "../api/apiMain.js";
```

Then find this block in the parent `AuctionResultModal` component (around line 60-66 of the current file):

```jsx
        {isWinner ? (
          <WinnerContent
            amount={winner.amount}
            bidId={winner.bidId}
            onClose={clearWinner}
          />
        ) : (
```

Replace it with (adding `auctionId` as a prop):

```jsx
        {isWinner ? (
          <WinnerContent
            amount={winner.amount}
            bidId={winner.bidId}
            auctionId={auctionId}
            onClose={clearWinner}
          />
        ) : (
```

(The parent `AuctionResultModal` already receives `auctionId` as a destructured prop — line 6: `function AuctionResultModal({ currentUserId, auctionId })`. We're just forwarding it.)

- [ ] **Step 2: Update WinnerContent signature and wire navigation**

Find the `WinnerContent` function (around line 79):

```jsx
function WinnerContent({ amount, bidId, onClose }) {
  return (
```

Update the signature to accept `auctionId` and add the `useNavigate` hook:

```jsx
function WinnerContent({ amount, bidId, auctionId, onClose }) {
  const navigate = useNavigate();
  return (
```

Then find the "Continue" button (around line 125-137):

```jsx
      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95"
        style={{
          background:
            "linear-gradient(135deg, rgb(122, 0, 0) 0%, #450a0a 100%)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
```

Replace the `onClick={onClose}` line with a handler that closes the modal AND navigates:

```jsx
      <button
        onClick={() => {
          onClose();
          navigate(`/payment/${auctionId}/${bidId}`);
        }}
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95"
        style={{
          background:
            "linear-gradient(135deg, rgb(122, 0, 0) 0%, #450a0a 100%)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
```

- [ ] **Step 3: Smoke test in the browser**

```bash
npm run dev
```

This requires actually winning an auction to test naturally. As a quick alternative, you can manually inject a fake winner into the persisted store via the browser console while on an auction page:

```js
// In browser devtools console, on an /auction_bid/:id page:
const bidStore = JSON.parse(localStorage.getItem('bid-storage'));
bidStore.state.winner = { amount: 1000, bidId: 'test-bid-cuid', winnerId: <YOUR_USER_ID> };
localStorage.setItem('bid-storage', JSON.stringify(bidStore));
location.reload();
```

The modal will appear. Click "Continue". Expected: navigation to `/payment/<auctionId>/test-bid-cuid` and the "Preparing checkout…" state shows.

Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/components/AuctionResultModal.jsx
git commit -m "feat(modal): wire Continue button to payment page"
```

---

## Task 10: End-to-end smoke test

**Files:** None modified. This task is verification only.

**Pre-requisites:**
- ✅ Backend `feat/payment` branch has the `line_items.price_data` fix from the handoff doc
- ✅ Backend has been merged into `dev` and is running on `localhost:3000`
- ✅ Backend `.env` has `STRIPE_SECRET_KEY=sk_test_...`
- ✅ Frontend `.env` has the matching `VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...`

If any of those aren't ready, this task is blocked. Skip and report back.

- [ ] **Step 1: Start the backend**

In the backend repo:

```bash
cd E:/aut/aLittleBid-backend
npm run dev
```

Expected: `server is running at http://localhost:3000`.

- [ ] **Step 2: Start the frontend**

In a separate terminal:

```bash
cd E:/aut/aLittleBid-frontend
npm run dev
```

Expected: vite serves on `localhost:5173`.

- [ ] **Step 3: Walk through the flow**

In the browser:

1. Log in as a buyer user
2. Navigate to an active auction with a short remaining time
3. Place the highest bid
4. Wait for the auction to end (socket emits `auction_ended`)
5. Win modal appears → click "Continue"
6. Land on `/payment/<auctionId>/<bidId>` → "Preparing checkout…" → Stripe iframe loads
7. Enter test card: `4242 4242 4242 4242`, any future expiry (e.g. `12/34`), any 3-digit CVC, any postal code
8. Click "Pay" inside the Stripe iframe
9. Browser redirects to `/complete?session_id=cs_test_xxx`
10. "🎉 Payment received" page renders with the session ID

- [ ] **Step 4: Verify in Stripe dashboard**

Open the Stripe test-mode dashboard → Payments. Expected: a successful payment for the auction's hammer price (in THB) appears within ~5 seconds.

- [ ] **Step 5: If everything passes, mark feature complete**

No commit needed — this is verification only. If something fails, debug from the failure point and revisit the relevant earlier task.

---

## Self-review notes

This plan has been reviewed against the spec. Coverage check:

| Spec section | Implemented in |
|---|---|
| Goal & architecture | Task 7 (Payment.jsx), Task 8 (routes), Task 9 (modal wire) |
| Backend dependency (handed off) | Out of scope — see handoff doc, Task 10 prerequisite |
| Dependencies | Task 1 |
| Environment | Task 2 |
| `apiCreateCheckout` | Task 3 |
| `payment.store.js` | Task 4 |
| `Payment.jsx` rewrite | Task 7 (with Task 5 supporting `stripePromise`) |
| `Complete.jsx` | Task 6 |
| `AppRouter.jsx` route updates | Task 8 |
| `AuctionResultModal.jsx` continue button | Task 9 |
| Wire-format request/response | Task 3 (URL), Task 7 (body), Task 10 (verification) |
| Error handling table | Task 7 (states), Task 4 (error capture) |
| Manual test approach | Task 10 |
| Verification checkpoints | Pre-task verified during plan-writing — `winner` payload confirmed (`amount`, `bidId`, `winnerId`); modal already receives `auctionId`; `auctionById.product` confirmed |

No placeholder content. No "TBD" / "TODO" / "fill in" / "similar to Task N". All code blocks are concrete and complete.
