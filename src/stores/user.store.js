import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware";
import {
    apiLogin,
    apiRegister,
    apiGetAllUser,
    apiGetUserById,
    apiDeleteUserById,
    apiEditUserAddressById,
    apiEditUserProfileById
} from "../api/apiMain.js";
import useSocketStore from './socket.store.js'

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

            getUserById: async (id) => {
                const resp = await apiGetUserById(id);
                set({
                    user: resp.data.responses,
                    userAddresses: resp.data.responses.addresses
                })
                console.log('getuser', resp.data.responses)
                return resp.data.responses
            },

            // Action to log out
            logout: () => {
                set({ user: null, token: "" })
                useSocketStore.getState().disconnect();
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
                console.log('editaddress', data)
                try {
                    const resp = await apiEditUserProfileById(userId, data)
                    // console.log('resp_editprofile', resp.data.responses)
                    set({ user: resp.data.responses, })
                    return resp.data.responses
                } catch (error) {
                    console.error('error', error)
                    throw error
                }
            },

            editUserAddress: async (userId, addressId, data) => {
                console.log('editaddress', data)
                try {
                    const resp = await apiEditUserAddressById(userId, addressId, data)
                    // console.log('resp_editAddress', resp.data.responses)
                    set((state) => ({
                        userAddresses: state.userAddresses.map((e) => e.id === addressId ? resp.data.responses : e)
                    }))
                    return resp.data.responses
                } catch (error) {
                    console.error('error', error)
                    throw error
                }
            }
        }),
        {
            name: "userProfile-storage",
        },
    ),
);

export default useUserStore;
