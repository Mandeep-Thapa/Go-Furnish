"use client"

import type React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import { useDispatch } from "react-redux"
import { setUser } from "../store/authSlice"
import { login } from "../lib/api"
import { useRouter } from "next/router"
import Link from "next/link"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userData = await login({ email, password })
      dispatch(setUser(userData))
      router.push("/")
    } catch (err) {
      setError("Invalid email or password")
    }
  }

  return (
    <Layout title="Login | E-commerce Website">
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default LoginPage

