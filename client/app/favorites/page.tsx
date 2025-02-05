import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard"

// This would typically come from a state management solution or API
const favoriteProducts = [
  { id: 1, name: "Asgaard sofa", description: "Stylish sofa", price: 250000, image: "/placeholder.svg" },
  { id: 2, name: "Outdoor Sofa Set", description: "Perfect for patios", price: 224000, image: "/placeholder.svg" },
]

export default function FavoritesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      {favoriteProducts.length === 0 ? (
        <div>
          <p>You haven't added any products to your favorites yet.</p>
          <Link href="/shop">
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favoriteProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
              <div className="mt-2 flex justify-between">
                <Button variant="outline" className="w-full mr-2">
                  Remove
                </Button>
                <Button className="w-full bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

