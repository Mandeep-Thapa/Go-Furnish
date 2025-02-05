import type React from "react"
import Layout from "../components/Layout"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store"
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice"
import Link from "next/link"

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <Layout title="Cart | E-commerce Website">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link href="/products" className="text-blue-500 hover:underline">
            Continue shopping
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button onClick={() => handleRemoveItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <div className="mt-4 space-x-4">
              <button onClick={handleClearCart} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Clear Cart
              </button>
              <Link href="/checkout" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default CartPage

