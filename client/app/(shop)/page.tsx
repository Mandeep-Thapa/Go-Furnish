import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Truck, Shield } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import ReviewCarousel from "@/components/ReviewCarousel"

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Modern Sofa",
    description: "Comfortable and stylish sofa",
    price: 999.99,
    image: "/placeholder.svg?height=300&width=300",
    oldPrice: null,
    discount: null,
    isNew: false,
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    description: "Perfect for family dinners",
    price: 599.99,
    image: "/placeholder.svg?height=300&width=300",
    oldPrice: null,
    discount: null,
    isNew: false,
  },
  {
    id: 3,
    name: "Cozy Armchair",
    description: "Relax in style",
    price: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    oldPrice: null,
    discount: null,
    isNew: false,
  },
  {
    id: 4,
    name: "Minimalist Bed Frame",
    description: "Sleep in comfort",
    price: 799.99,
    image: "/placeholder.svg?height=300&width=300",
    oldPrice: null,
    discount: null,
    isNew: false,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern living room"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to GoFurnish</h1>
          <p className="text-xl md:text-2xl mb-8">Discover Comfort and Style for Your Home</p>
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Shop Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="About GoFurnish"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About GoFurnish</h2>
              <p className="text-lg mb-6">
                At GoFurnish, we believe that everyone deserves a beautiful and comfortable home. Our curated collection
                of furniture and home decor items are designed to bring style and functionality to your living spaces.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose GoFurnish</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p>We source only the best materials and craftsmanship for our furniture.</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Enjoy quick and reliable shipping on all your orders.</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p>Your satisfaction is our top priority. Easy returns and excellent support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8">Explore our collection and find the perfect pieces for your space.</p>
          <Link href="/shop">
            <Button size="lg" variant="secondary">
              Start Shopping Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

