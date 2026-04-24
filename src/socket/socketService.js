import { io } from 'socket.io-client'
import { useAuction2Store } from '../stores/auctionStore.js'
import useUserStore from '../stores/user.store.js'

let socket = null

export const connectSocket = () => {
  if (socket?.connected) return

  socket = io('http://localhost:3000', {
       auth: { token: useUserStore.getState().token },
     reconnection: true
  })

  socket.on('connect', () => {
    useAuction2Store.getState().setConnected(true);
    console.log('socket', 'socket is connected')
  })

  socket.on('disconnect', () => {
    useAuction2Store.getState().setConnected(false);
  })
}

export const joinAuctionRoom = (auctionId) => {
  if (!socket) return
  socket.emit('join_auction', auctionId)

  socket.on('join_auction', (data) => {
    useAuction2Store.getState().setAuctionData(data)
  })

  socket.on('newest_bid', (bid) => {
      console.log('newest bid socket socket', socket)
    useAuction2Store.getState().addBid(bid);
    console.log('bid from backend received', bid)
  })

  socket.on('auction_ended', (winner) => {
    useAuction2Store.getState().setWinner(winner)
  })
}

export const leaveAuctionRoom = (auctionId) => {
  if (!socket) return
  socket.emit('leave_auction', { auctionId })

  socket.off('newest_bid')
  socket.off('auction_ended')

  useAuction2Store.getState().reset()
}

export const placeBid = (amount, auctionId) => {
    console.log('ting socket', socket)
  socket?.emit('send_bid', { amount: amount, auctionId: auctionId });
}

export const disconnectSocket = () => {
  socket?.disconnect()
  socket = null
}