import { create } from "zustand";
import { persist } from "zustand/middleware";
import { editUserAddressById, getUserById } from "../api/apiMain";

const useUserStore = create(persist((set, get) => ({
    user: null,
    token: '',
    userAddress: null,
    getUserById: async (userId) => {
        const resp = await getUserById(userId)
    },
    editUserAddress: async (userId, adressId, data) => {
        console.log('editaddress', data)
        const resp = await editUserAddressById(userId, adressId, data)
        console.log('resp_editAddress', resp)
        set({userAddress: resp.data})
    }
})))