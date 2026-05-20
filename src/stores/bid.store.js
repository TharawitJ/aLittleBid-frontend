import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiGetAllBid, apiGetBidById } from "../api/apiMain";

const useBidStore = create()(
  persist(
    (set, get) => ({
      bidData: null,
      newBid: [],
      winners: {},
      bids: null,
      currentHighestBid: null,
      timeExtension: null,
      setNewBid: (newPrice) => {
        set((state) => ({
          newBid:
            typeof newPrice === "function" ? newPrice(state.newBid) : newPrice,
        }));
      },
      getAllBid: async () => {
        const resp = await apiGetAllBid();
        //   console.log("resp", resp.data.responses);
        set({ bidData: resp.data.responses });
        // console.log('getAllBid', resp.data.responses)
      },
      getBidById: async (bidId) => {
        const resp = await apiGetBidById(bidId);
        // console.log('apiGetBidById', resp)
      },
      // Actions
      setConnected: (status) => set({ isConnected: status }),

      setBidHistory: (bids) => {
        console.log("setBidhistoty");
        set({
          bids,
          currentHighestBid: bids[0] ?? null, // assume sorted desc from DB
          isBidsLoading: false,
        });
      },

      addBid: (bid) => {
        console.log("add bid", bid);
        set((state) => ({
          bids: [bid, ...(state.bids ?? [])],
          currentHighestBid: bid,
        }));
        console.log("currentHighestBid", get().currentHighestBid);
      },

      setWinner: (newWinner) => {
        const { auctionId } = newWinner;

        set((state) => ({
          winners: {
        ...state.winners,       
        [auctionId]: newWinner, 
        },
       }));
        console.log("winner from zustand:", get().winner);
      },
      
      clearWinner: (auctionId) => {
        set((state) => {
          const { [auctionId]: removedWinner, ...remainingWinners } = state.winners;
          return {
            winners: remainingWinners
          };
        });
        
        console.log(`Cleared winner for room ${auctionId}. Remaining:`, get().winners);
      },

      extendTime: () => {
        set({ timeExtension: true });
      },

      reset: () =>
        set({
          bids: [],
          winner: {},
          currentHighestBid: null,
          status: "idle",
        }),
    }),
    { name: "bid-storage" },
  ),
);

export default useBidStore;
