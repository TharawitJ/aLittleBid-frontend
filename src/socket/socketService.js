import { io } from "socket.io-client";
import useUserStore from "../stores/user.store.js";
import useBidStore from "../stores/bid.store.js";
import useAuctionStore from "../stores/auction.store.js";

let socket = null;

export const connectSocket = () => {
  if (socket?.connected) return;

  if (!socket) {
    socket = io("http://localhost:3000", {
      auth: { token: useUserStore.getState().token },
      reconnection: true,
    });

    // Define listeners ONCE when socket is created
    socket.on("connect", () => {
      useBidStore.getState().setConnected(true);
      console.log("socket is connected", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.log("Connection error:", err.message);
    });

    socket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
    });

    socket.on("newest_bid", (bid) => {
      console.log("bid from backend received", bid);
      useBidStore.getState().addBid(bid);
    });

    socket.on("auction_ended", (winner) => {
      console.log("auction ended, winner:", winner);
      useBidStore.getState().setWinner(winner);
      // modal tell user that winner
    });

    socket.on("auction_started", (object) => {
      console.log("auction started", object);
      useAuctionStore.getState().getAuctionById(object.auctionId);
    });

    socket.on("end_time_extended", (object) => {
      console.log("alert new end time", object);
      useAuctionStore.getState().getAllAuction();
      // get product id from zustand
      // alert user
      useAuctionStore.getState().triggerExtension(object.auctionId);
    });

    socket.on("reserve_not_met", (message) => {
      // alert user with this message
      console.log("message from socket", message);
    });
  } else {
    socket.connect();
  }
};

export const joinAuctionRoom = (auctionId) => {
  if (!socket) return;

  if (socket.connected) {
    socket.emit("join_auction", auctionId);
  } else {
    socket.once("connect", () => {
      socket.emit("join_auction", auctionId);
    });
  }
};

export const leaveAuctionRoom = (auctionId) => {
  if (!socket) return;
  socket.emit("leave_auction", auctionId);
  useBidStore.getState().reset();
};

export const placeBid = (amount, auctionId) => {
  console.log("ting socket", socket);
  socket?.emit("send_bid", { amount: amount, auctionId: auctionId });
};

export const disconnectSocket = () => {
  socket?.disconnect();
  socket = null;
};
