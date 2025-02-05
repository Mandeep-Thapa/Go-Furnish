import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="py-8 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="Furniro Logo" width={40} height={40} />
          <span className="text-xl font-semibold">Furniro</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-gray-600">
            Shop
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <button className="hover:opacity-80">
            <User className="w-6 h-6" />
          </button>
          <button className="hover:opacity-80">
            <Search className="w-6 h-6" />
          </button>
          <button className="hover:opacity-80">
            <Heart className="w-6 h-6" />
          </button>
          <button className="hover:opacity-80">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

