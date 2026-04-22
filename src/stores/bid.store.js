import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiGetAllBid } from "../api/apiMain";

const useBidStore = create()(persist((set, get) => ({
    bidData: null,
    getAllBid: async () => {
        const resp = await apiGetAllBid()
        console.log('resp', resp.data.responses)
        set({bidData: resp.data.responses})
    }
})))

export default useBidStore