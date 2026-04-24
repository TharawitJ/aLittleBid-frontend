import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  apiLogin,
  apiGetUserById,
  apiDeleteUserById,
  apiEditUserAddressById,
  apiEditUserProfileById,
  apiGetAllUser,
  apiRegister,
} from "../api/apiMain.js";
import useSocketStore from "./socket.store.js";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      users: null,
      token: "",
      userAddresses: [],

      // Action to log in by Jammy
      login: async (body) => {
        const resp = await apiLogin(body);
        set({ token: resp.data.token, user: resp.data.user });
        return resp;
      },
      register: async (body) => {
        const resp = await apiRegister(body);
      },

      getAllUser: async () => {
        console.log("getalluser");
        const resp = await apiGetAllUser();
        console.log("resp_getAllUser", resp);
        set({ users: resp.data.responses });
        return resp.data.responses;
      },

      getUserById: async (id) => {
        const resp = await apiGetUserById(id);
        set({
          user: resp.data.responses,
          userAddresses: resp.data.responses.addresses,
        });
        console.log("getUserById", resp.data.responses);
        return resp.data.responses;
      },

      // Action to log out
      logout: () => {
        useSocketStore.getState().disconnect();
        set({ user: null, token: "" });
      },

      deleteUser: async (userId) => {
        try {
          await apiDeleteUserById(userId);
        } catch (err) {
          console.error("Failed to delete user account", err);
          throw err;
        }
      },

      editUserProfile: async (userId, data) => {
        try {
          const resp = await apiEditUserProfileById(userId, data);
          set({ user: resp.data.responses });
          return resp.data.responses;
        } catch (error) {
          console.error("error", error);
          throw error;
        }
      },

      editUserAddress: async (userId, addressId, data) => {
        try {
          const resp = await apiEditUserAddressById(userId, addressId, data);
          set((state) => ({
            userAddresses: state.userAddresses.map((e) =>
              e.id === addressId ? resp.data.responses : e,
            ),
          }));
          return resp.data.responses;
        } catch (error) {
          console.error("error", error);
          throw error;
        }
      },
    }),
    {
      name: "userProfile-storage",
    },
  ),
);

export default useUserStore;
