"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import ARViewer from "./ARViewer"

interface Product {
  id: number | string
  name: string
  description: string
  price: number
  oldPrice: number | null
  discount: number | null
  isNew: boolean
  images: string[]
  modelUrl: string // New field for 3D model URL
  specifications: {
    dimensions: string
    material: string
    color: string
    weight: string
  }
  careInstructions: string[]
  reviews: {
    rating: number
    comment: string
    author: string
    date: string
  }[]
}

export default function ProductDetails({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-[400px] md:h-[500px] mb-4">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2"
                >
                  &lt;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden ${index === currentImageIndex ? "ring-2 ring-primary" : ""}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <div className="mt-6">
            <ARViewer modelUrl={product.modelUrl} fallbackImageUrl={product.images[0]} />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${star <= Math.round(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({product.reviews.length} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-primary dark:text-primary-light mb-4">
            ${product.price.toLocaleString()}
            {product.oldPrice && (
              <span className="text-gray-500 dark:text-gray-400 line-through ml-2 text-lg">
                ${product.oldPrice.toLocaleString()}
              </span>
            )}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-lg" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                -
              </button>
              <span className="px-3 py-1 text-lg">{quantity}</span>
              <button className="px-3 py-1 text-lg" onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <Button className="btn-primary flex-grow">Add to Cart</Button>
            <Button
              variant="outline"
              className={`p-2 ${isFavorite ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className="w-6 h-6 fill-current" />
            </Button>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <ul className="space-y-2">
              <li>
                <strong>Dimensions:</strong> {product.specifications.dimensions}
              </li>
              <li>
                <strong>Material:</strong> {product.specifications.material}
              </li>
              <li>
                <strong>Color:</strong> {product.specifications.color}
              </li>
              <li>
                <strong>Weight:</strong> {product.specifications.weight}
              </li>
            </ul>
          </div>
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Care Instructions</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.careInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-serif font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {review.author} - {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

