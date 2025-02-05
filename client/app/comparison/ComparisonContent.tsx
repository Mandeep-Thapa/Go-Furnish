"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would typically come from an API or database
const products = [
  {
    id: "asgaard-sofa",
    name: "Asgaard Sofa",
    price: 250000,
    rating: 4.2,
    reviews: 204,
    image: "/placeholder.svg",
    specs: {
      dimensions: { width: "265.32 cm", height: "76 cm", depth: "167.76 cm" },
      warranty: "1 Year Manufacturing Warranty",
      package: "1 sectional sofa",
      material: "Solid Wood",
      color: "Bright Grey & Lion",
      weight: "45 KG",
      seatHeight: "41.52 cm",
      legHeight: "5.46 cm",
    },
  },
  {
    id: "outdoor-sofa",
    name: "Outdoor Sofa Set",
    price: 224000,
    rating: 4.7,
    reviews: 145,
    image: "/placeholder.svg",
    specs: {
      dimensions: { width: "265.32 cm", height: "76 cm", depth: "167.76 cm" },
      warranty: "1.2 Year Manufacturing Warranty",
      package: "1 Three Seater, 2 Single Seater",
      material: "Solid Wood",
      color: "Bright Grey & Lion",
      weight: "65 KG",
      seatHeight: "41.52 cm",
      legHeight: "5.46 cm",
    },
  },
  // Add more products as needed
]

export default function ComparisonContent() {
  const searchParams = useSearchParams()
  const product1Id = searchParams.get("product1")
  const product2Id = searchParams.get("product2")

  const product1 = products.find((p) => p.id === product1Id) || products[0]
  const product2 = products.find((p) => p.id === product2Id) || products[1]

  const compareProducts = [product1, product2]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-900">Comparison</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Product Comparison</h1>

      <div className="mb-8">
        <p className="mb-2">Go to Product page for more Products</p>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Choose a Product" />
          </SelectTrigger>
          <SelectContent>
            {products.map((product) => (
              <SelectItem key={product.id} value={product.id}>
                {product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div></div>
        {compareProducts.map((product, index) => (
          <div key={index} className="text-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-[#B88E2F] font-bold mb-2">Rs. {product.price.toLocaleString()}</p>
            <div className="flex justify-center items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${star <= Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2">{product.rating}</span>
            </div>
            <p className="text-gray-600 mb-4">{product.reviews} Review</p>
            <Button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white mb-4">Add To Cart</Button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">General</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold">Dimensions</div>
          {compareProducts.map((product, index) => (
            <div key={index}>
              <p>Width: {product.specs.dimensions.width}</p>
              <p>Height: {product.specs.dimensions.height}</p>
              <p>Depth: {product.specs.dimensions.depth}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Warranty</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold">Warranty Summary</div>
          {compareProducts.map((product, index) => (
            <div key={index}>{product.specs.warranty}</div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Product</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold">Sales Package</div>
          {compareProducts.map((product, index) => (
            <div key={index}>{product.specs.package}</div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="mr-4">
          View More
        </Button>
        <Button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">Add A Product</Button>
      </div>
    </div>
  )
}

