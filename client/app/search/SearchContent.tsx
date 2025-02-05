"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard"

// This would typically come from an API call
const allProducts = [
  { id: 1, name: "Asgaard sofa", description: "Stylish sofa", price: 250000, image: "/placeholder.svg" },
  { id: 2, name: "Outdoor Sofa Set", description: "Perfect for patios", price: 224000, image: "/placeholder.svg" },
  { id: 3, name: "Wooden Dining Table", description: "Elegant dining table", price: 180000, image: "/placeholder.svg" },
]

export default function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <form className="mb-8">
        <div className="flex items-center">
          <Input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search for furniture..."
            className="flex-grow"
          />
          <Button type="submit" className="ml-2">
            Search
          </Button>
        </div>
      </form>
      {filteredProducts.length === 0 ? (
        <p>No products found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

