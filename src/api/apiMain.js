import useUserStore from '../stores/userStore'
import axios from 'axios'

export const mainApi = axios.create({
  baseURL : 'http://localhost:3500/api',
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
export const apiLogin = (body) => mainApi.post("/auth/login", body);
export const apiRegister = (body) => mainApi.post("/auth/register", body);
export const apiGetAllUser=()=>mainApi.get('/users');
export const apiGetUserById=(userid)=>mainApi.get(`/users/${userid}`);
export const apiDeleteUserById=(userid)=>mainApi.delete(`/users/${userid}`);