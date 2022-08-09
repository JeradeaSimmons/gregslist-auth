import { baseURL } from '../env.js'


export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 8000,
  withCredentials: true
})
