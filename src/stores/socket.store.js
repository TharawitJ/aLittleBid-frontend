import { persist } from "zustand/middleware";

const useSocketStore = create()(persist((set, get) => ({
    socket: null,
        connect: () => {
          
        },
})))