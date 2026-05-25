import { create } from "zustand";
import { apiCreateCheckout, apiGetMyPayments, apiCreateTopUp, apiConfirmCheckout } from "../api/apiMain.js";

const usePaymentStore = create((set) => ({
  clientSecret: null,
  loading: false,
  error: null,

  // My Payments list state
  myPayments: [],
  myPaymentsLoading: false,
  myPaymentsError: null,

  createCheckout: async (auctionId, bidId, body) => {
    set({ loading: true, error: null, clientSecret: null });
    try {
      const resp = await apiCreateCheckout(auctionId, bidId, body);
      let cs = resp.data.clientSecret;
      // Defensive: if backend accidentally URL-encoded the value
      // (Stripe's clientSecret naturally contains /, + which break when encoded),
      // decode once. Safe no-op when no %XX sequences are present.
      if (typeof cs === "string" && cs.includes("%")) {
        try {
          cs = decodeURIComponent(cs);
          console.warn(
            "[payment] clientSecret arrived URL-encoded — decoded as a workaround",
          );
        } catch {
          // leave as-is if it isn't valid percent-encoding
        }
      }
      set({ clientSecret: cs, loading: false });
    } catch (err) {
      const message =
        err?.response?.data?.message ?? err?.message ?? "Payment service unavailable";
      set({ error: message, loading: false });
    }
  },

  createTopUpSession: async (amount) => {
    set({ loading: true, error: null });
    try {
      const resp = await apiCreateTopUp({ amount });
      set({ loading: false });
      return resp.data.url;
    } catch (err) {
      const message = err?.response?.data?.message ?? err?.message ?? "Payment service unavailable";
      set({ error: message, loading: false });
      throw new Error(message);
    }
  },

  confirmCheckout: async (sessionId) => {
    try {
      const resp = await apiConfirmCheckout(sessionId);
      return resp.data;
    } catch (err) {
      console.error("Error confirming checkout:", err);
      throw err;
    }
  },

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

  reset: () => set({ clientSecret: null, loading: false, error: null }),
}));

export default usePaymentStore;