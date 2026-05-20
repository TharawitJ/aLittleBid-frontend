import { io } from "socket.io-client";
import useUserStore from "../stores/user.store.js";
import useBidStore from "../stores/bid.store.js";
import useAuctionStore from "../stores/auction.store.js";
import Swal from "sweetalert2";
import { convertDateTimeTo24HrTime } from "../utils/time.js";
import { mainButtonColor } from "../common/mainColor.js";

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
  } else {
    socket.connect();
  }
};

export const joinAuctionRoom = (auctionId) => {
  if (!socket) {
     connectSocket();
  };

    socket.emit("join_auction", auctionId);

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
        Swal.fire({
        title: "Auction started",
        icon: "success",
        confirmButtonText: "OK",
      })
      console.log("auction started", object);
      useAuctionStore.getState().getAuctionById(object.auctionId);
    });

    socket.on("end_time_extended", (data) => {
      console.log('data from end time extended', data);
      Swal.fire({
        title: "End Time Extended",
        text: `New end time is ${convertDateTimeTo24HrTime(data.newEndTime)}`,
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: mainButtonColor
      })
      useAuctionStore.getState().getAllAuction();
      // get product id from zustand
    });

    socket.on("reserve_not_met", (message) => {
       Swal.fire({
        title: "No Winner...",
        text: "Reserve price not met",
        icon: "success",
        confirmButtonText: "OK",
      })
      // alert user with this message
      console.log("message from socket", message);
    });
};

export const leaveAuctionRoom = (auctionId) => {
  if (!socket) return;
  socket.emit("leave_auction", auctionId);
  socket?.off();
  useBidStore.getState().reset();
};

export const placeBid = (amount, auctionId) => {
  console.log("ting socket", socket);
  socket?.emit("send_bid", { amount: amount, auctionId: auctionId });
};

export const disconnectSocket = () => {
  socket?.off();
  socket?.disconnect();
  socket = null;
};
