import axios from "axios"

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const fetchProducts = async () => {
  const response = await api.get("/products")
  return response.data
}

export const fetchProduct = async (id: string) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const createOrder = async (orderData: any) => {
  const response = await api.post("/orders", orderData)
  return response.data
}

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post("/auth/login", credentials)
  localStorage.setItem("token", response.data.token)
  return response.data
}

export const register = async (userData: { email: string; password: string; name: string }) => {
  const response = await api.post("/auth/register", userData)
  return response.data
}

