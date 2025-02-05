"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: number | string
  name: string
  description: string
  price: number
  oldPrice: number | null
  discount: number | null
  isNew: boolean
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product.name} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
    })
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 group relative w-full sm:w-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative h-[250px] sm:h-[300px]">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          {product.discount && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              New
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 truncate">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between flex-wrap mt-2">
            <div>
              <p className="font-semibold text-lg text-primary dark:text-primary-light">
                ${product.price.toLocaleString()}
              </p>
              {product.oldPrice && (
                <p className="text-gray-500 dark:text-gray-400 line-through text-sm">
                  ${product.oldPrice.toLocaleString()}
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className={`${isFavorite ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}
                onClick={handleFavoriteClick}
              >
                <Heart className="h-5 w-5 fill-current" />
                <span className="sr-only">{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-primary dark:text-primary-light"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

