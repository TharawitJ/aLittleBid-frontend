// store/auctionStore.js
import { create } from 'zustand'

export const useAuction2Store = create((set) => ({
  // Connection state
  isConnected: false,

  // Auction data
  currentItem: null,
  currentHighestBid: null,
  bids: [],
  winner: null,
  status: 'idle', // idle | active | ended

  // Actions
  setConnected: (status) => set({ isConnected: status }),

   setBidHistory: (bids) => set({
    bids,
    currentHighestBid: bids[0] ?? null, // assume sorted desc from DB
    isBidsLoading: false,
  }),

  setAuctionData: (data) => set({
    currentItem: data.item,
    currentHighestBid: data.highestBid,
    status: data.status,
  }),

  addBid: (bid) => set((state) => ({
    bids: [bid, ...state.bids],
    currentHighestBid: bid.amount > (state.currentHighestBid ?? 0)
      ? bid
      : state.currentHighestBid,
  })),

  setWinner: (winner) => set({ winner, status: 'ended' }),

  reset: () => set({ bids: [], winner: null, currentHighestBid: null, status: 'idle' }),
}))