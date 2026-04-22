import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiGetAllBid,apiGetBidById } from "../api/apiMain";

const useBidStore = create()(
  persist((set, get) => ({
    bidData: null,
    getAllBid: async () => {
      const resp = await apiGetAllBid();
    //   console.log("resp", resp.data.responses);
      set({bidData:resp.data.responses});
    },
    getBidById: async () => {
      const resp = await apiGetBidById();
      console.log('apiGetBidById', resp)
    },
  })),
);

export default useBidStore;
