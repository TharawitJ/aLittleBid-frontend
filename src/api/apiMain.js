import useUserStore from '../stores/userStore'
import axios from 'axios'

export const mainApi = axios.create({
  baseURL : 'http://localhost:3500/',
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

export const getAllUser=()=>mainApi.get('/api/users');
export const getUserById=(userid)=>mainApi.get(`/api/users/${userid}`);
export const deleteUserById=(userid)=>mainApi.delete(`/api/users/${userid}`);