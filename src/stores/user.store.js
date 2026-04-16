import { create } from "zustand"
import { editUserAddressById, getUserById } from "../api/apiMain";
import { persist, createJSONStorage } from "zustand/middleware";
import {
    apiLogin,
    apiRegister,
    apiGetAllUser,
    apiGetUserById,
    apiDeleteUserById,
} from "../api/apiMain.js";

const useUserStore = create()(
    persist(
        (set, get) => ({
            user: null,
            token: "",
            userAddresses: [],

            // Action to log in by Jammy
            login: async (body) => {
                const resp = await apiLogin(body);
                set({ token: resp.data.token, user: resp.data.user });
                return resp;
            },

            getUserById: async () => {
                const id = 7
                const resp = await apiGetUserById(id);
                set({ user: resp.data.responses })
                // console.log(resp.data.responses)
                return resp.data.responses
            },

            // Action to log out
            logout: () => set({ user: null, token: "" }),

            deleteUser: async (userId) => {
                try {
                    await apiDeleteUserById(userId);
                } catch (err) {
                    console.error("Failed to delete user account", err);
                    throw err;
                }
            },
            getUserById: async (userId) => {
                const resp = await getUserById(userId)
            },
            editUserAddress: async (userId, adressId, data) => {
                console.log('editaddress', data)
                const resp = await editUserAddressById(userId, adressId, data)
                console.log('resp_editAddress', resp)
                set({ userAddress: resp.data })
            }
        }),
        {
            name: "userProfile-storage",
        },
    ),
);

export default useUserStore;
