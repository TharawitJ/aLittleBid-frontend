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
        getAllBid: async (auctionId) => {
            const resp = await apiGetAllBid(auctionId);
            //   console.log("resp", resp.data.responses);
            set({ bidData: resp.data.responses });
        },
        getBidById: async () => {
            const resp = await apiGetBidById();
            console.log('apiGetBidById', resp)
        },
    })),

     { name: 'bid-storage' }
);

export default useBidStore;
