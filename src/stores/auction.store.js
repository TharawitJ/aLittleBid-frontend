import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  apiGetAllAuction,
  apiCreateAuction,
  apiGetAuctionById,
  apiUpdateAuction,
  apiDeleteAuction,
} from "../api/apiMain.js";

const useAuctionStore = create()(
  persist((set, get) => ({
    allAuction: null,
    auctionById: null,
    getAllAuction: async () => {
      const resp = await apiGetAllAuction;
      console.log("apiGetAllAuction",apiGetAllAuction)
      set({allAuction:resp.data.token})
    },
    createAuction: async (body) => {
      await apiCreateAuction(body);
      console.log("apiCreateAuction",apiCreateAuction)
      const resp = await apiGetAllAuction;
      set({allAuction:resp.data.token})
    },
    getAuctionById: async (auctionId) => {
      const resp = await apiGetAuctionById(auctionId);
      console.log("apiGetAuctionById",apiGetAuctionById)
      set({auctionById:resp.data.token})

    },
    updateAuction: async (auctionId) => {
      const resp = await apiUpdateAuction(auctionId);
      console.log("apiUpdateAuction",apiUpdateAuction)
      set({allAuction:resp.data.token})

    },
    deleteAuction: async (auctionId) => {
      const resp = await apiDeleteAuction(auctionId);
      console.log("apiDeleteAuction",apiDeleteAuction)
      set({allAuction:resp.data.token})

    },
  })),
);
export default useAuctionStore