import useUserStore from '../stores/user.store.js'
import axios from 'axios'

export const mainApi = axios.create({
  baseURL : 'http://localhost:3000/api',
  headers : {
    'Content-Type' : 'application/json'
  }
})
mainApi.interceptors.request.use( config => {
  const token = useUserStore.getState().token
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// api Path connecting with backend using by zustand at stores
export const getAllUser=()=>mainApi.get('/api/users');
export const getUserById=(userid)=>mainApi.get(`/api/users/${userid}`);
export const deleteUserById=(userid)=>mainApi.delete(`/api/users/${userid}`);

export const apiLogin = (body) => mainApi.post("/auth/login", body);
export const apiRegister = (body) => mainApi.post("/auth/register", body);
export const apiGetAllUser=()=>mainApi.get('/users');
export const apiGetUserById=(userid)=>mainApi.get(`/users/${userid}`);
export const apiDeleteUserById=(userid)=>mainApi.delete(`/users/${userid}`);
export const apiEditUserAddressById=(userId, addressId, data)=>mainApi.patch(`/users/${userId}/addresses/${addressId}`, data);
