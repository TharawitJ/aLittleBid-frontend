import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  apiLogin,
  apiGetUserById,
  apiDeleteUserById,
  apiEditUserAddressById,
  apiEditUserProfileById,
} from "../api/apiMain.js";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",
      userAddresses: [],

      login: async (body) => {
        const resp = await apiLogin(body);
        set({ token: resp.data.token, user: resp.data.user });
        return resp;
      },

      getUserById: async () => {
        try {
          const resp = await apiGetUserById();
          set({
            user: resp.data.responses,
            userAddresses: resp.data.responses.addresses,
          });
          return resp.data.responses;
        } catch (error) {
          if (error.response?.status === 401) {
            set({ user: null, token: "", userAddresses: [] });
          }
          throw error;
        }
      },

      logout: () => set({ user: null, token: "", userAddresses: [] }),

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
