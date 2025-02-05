import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  // This would typically come from a state management solution or API
  const cartItems = [
    { id: 1, name: "Asgaard sofa", price: 250000, quantity: 1, image: "/placeholder.svg" },
    { id: 2, name: "Outdoor Sofa Set", price: 224000, quantity: 2, image: "/placeholder.svg" },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Rs. {item.price.toLocaleString()}</p>
                    <div className="flex items-center mt-2">
                      <Button variant="outline" size="sm">
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button variant="outline" size="sm">
                        +
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-red-500">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
              <Button className="w-full mt-6 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">Proceed to Checkout</Button>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/shop">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

