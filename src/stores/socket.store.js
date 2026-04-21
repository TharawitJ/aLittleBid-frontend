import { create } from "zustand";
import { persist } from "zustand/middleware";
import { io } from 'socket.io-client'

const useSocketStore = create()(persist((set, get) => ({
    socket: null,
    connect: () => {
        if (!get().socket) {
            const newSocket = io('http://localhost:3000', {
                // auth: { token: localStorage.getItem('token') }
            });

            newSocket.on('connect', () => {
                console.log('Connected');
            });

            set({ socket: newSocket });
        }
    },
    disconnect: () => {
        try {
            get().socket
            if (socket) {
                socket.off()
                socket.disconnect()
                set({ socket: null })
            }
        } catch (error) {
            alert("Logout failed")
        }
    },
    joinAuction: (auctionId) => {
        try {
            get().socket
        if (socket) {
            socket.emit('join_auction', auctionId);
        }
        } catch (error) {
            alert("join failed")
        }
    },
    leaveAuction: (auctionId) => {
        try {
            get().socket
        if (socket) {
            socket.emit('leave_auction', auntionId);
        } 
        } catch (error) {
            alert("Cant' leave")
        }
    }
})))

export default useSocketStore