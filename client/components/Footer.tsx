import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-600">We offer the best products at competitive prices.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="text-gray-600">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Information</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">My Account</h3>
            <ul className="text-gray-600">
              <li>
                <Link href="/account">Account</Link>
              </li>
              <li>
                <Link href="/orders">Orders</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-600 mb-2">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 border rounded-l" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-gray-600">
          <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

