import type React from "react"
import Link from "next/link"
import { useSelector } from "react-redux"
import type { RootState } from "../store"

const Header: React.FC = () => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          E-commerce
        </Link>
        <div className="flex items-center">
          <Link href="/products" className="text-gray-600 hover:text-gray-800 mx-4">
            Products
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-gray-800 mx-4">
            Cart ({cartItemsCount})
          </Link>
          {isAuthenticated ? (
            <Link href="/account" className="text-gray-600 hover:text-gray-800 mx-4">
              Account
            </Link>
          ) : (
            <Link href="/login" className="text-gray-600 hover:text-gray-800 mx-4">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header

