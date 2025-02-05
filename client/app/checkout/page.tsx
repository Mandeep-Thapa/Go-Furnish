import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Checkout</h1>
        <div className="flex items-center gap-2">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900">Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Company Name (Optional)" />
            <Input placeholder="Street address" />
            <Input placeholder="ZIP code" />
            <Input placeholder="Town / City" />
            <Input placeholder="Phone" />
            <Input placeholder="Email address" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Country / Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="western">Western Province</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Additional information" />
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your order</h2>
          <div className="bg-gray-100 p-6 rounded">
            <div className="flex justify-between mb-4 font-bold">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between mb-4 pb-4 border-b">
              <span>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4 pb-4 border-b">
              <span>Total</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="radio" name="payment" value="bank" className="mr-2" />
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-600 ml-6 mt-2">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="radio" name="payment" value="cash" className="mr-2" />
                Cash On Delivery
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Your personal data will be used to support your experience throughout this website, to manage access to
              your account, and for other purposes described in our privacy policy.
            </p>
            <Button className="w-full bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">Place order</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

