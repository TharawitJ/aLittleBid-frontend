import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  apiGetAllAuction,
  apiCreateAuction,
  apiGetAuctionById,
  apiUpdateAuction,
  apiDeleteAuction,
} from "../api/apiMain.js";
import { connect } from "socket.io-client";

const useAuctionStore = create()(
  persist((set, get) => ({
    allAuction: null,
    auctionById: null,
    currentPrice: 0,
    endTime: 0,
    serverOffset: 0,
    setCurrentPrice: (newBid) => {
      set({
        currentPrice: newBid
      })
    },
    syncTime: ({endTime, serverTime}) => {
      const offset = serverTime - Date.now()
      set({endTime, serverOffset: offset})
    },
    updateEndtime: (endTime) => {
      set({endTime})
    },

    getAllAuction: async () => {
      const resp = await apiGetAllAuction();
      console.log('respGet', resp)
      // console.log("apiGetAllAuction",apiGetAllAuction)
      set({allAuction:resp.data.responses})
      return resp.data.responses
    },
    createAuction: async (body) => {
      await apiCreateAuction(body);
      console.log("apiCreateAuction",apiCreateAuction)
      const resp = await apiGetAllAuction();
      set({allAuction:resp.data.responses})
      return resp.data.responses
    },
    getAuctionById: async (auctionId) => {
      console.log('auctionidddd', auctionId)
      const resp = await apiGetAuctionById(auctionId);
      console.log("respauctionbyid",resp.data.responses)
      set({auctionById:resp.data.responses})
      return resp.data.responses
    },
    updateAuction: async (auctionId) => {
      const resp = await apiUpdateAuction(auctionId);
      console.log("apiUpdateAuction",apiUpdateAuction)
      set({allAuction:resp.data.responses})
      return resp.data.responses

    },
    deleteAuction: async (auctionId) => {
      const resp = await apiDeleteAuction(auctionId);
      console.log("apiDeleteAuction",apiDeleteAuction)
      set({allAuction:resp.data.responses})
      return resp.data.responses

    },
  })),
);
export default useAuctionStore