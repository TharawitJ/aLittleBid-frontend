import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiGetAllBid, apiGetBidById } from "../api/apiMain";

const useBidStore = create()(
    persist((set, get) => ({
        bidData: null,
        newBid: [],
        setNewBid: (newPrice) => {
            set((state) => ({
                newBid: typeof newPrice === 'function' ? newPrice(state.newBid) : newPrice
            }))
        },
        getAllBid: async () => {
            const resp = await apiGetAllBid();
            //   console.log("resp", resp.data.responses);
            set({ bidData: resp.data.responses });
            console.log('getAllBid', resp.data.responses)
        },
        getBidById: async (bidId) => {
            const resp = await apiGetBidById(bidId);
            console.log('apiGetBidById', resp)
        },
    })),

     { name: 'bid-storage' }
);

export default useBidStore;
