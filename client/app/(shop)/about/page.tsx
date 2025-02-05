import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About GoFurnish</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            GoFurnish was founded in 2023 with a simple mission: to provide high-quality, stylish furniture at
            affordable prices. We believe that everyone deserves to live in a space they love, and we're here to make
            that possible.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of passionate designers and craftsmen work tirelessly to create furniture that not only looks great
            but stands the test of time. We source sustainable materials and partner with ethical manufacturers to
            ensure that our products are as good for the planet as they are for your home.
          </p>
          <Button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">Learn More</Button>
        </div>
        <div className="relative h-[400px]">
          <Image src="/placeholder.svg" alt="About GoFurnish" fill className="object-cover rounded-lg" />
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              We never compromise on the quality of our products. Each piece is crafted to last.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to reducing our environmental impact through responsible sourcing and production.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority. We're here to help you create your dream space.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">Join Our Community</h2>
        <p className="text-gray-600 text-center mb-6">
          Stay up to date with our latest collections, design tips, and exclusive offers.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
            <Button type="submit" className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white rounded-r-lg">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

