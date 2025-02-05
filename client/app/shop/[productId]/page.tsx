"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Facebook, Twitter, Instagram } from "lucide-react"
import RelatedProducts from "@/components/RelatedProducts"

// This would typically come from an API or database
const products = [
  {
    id: "asgaard-sofa",
    name: "Asgaard sofa",
    price: 250000,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    rating: 5,
    reviews: 5,
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
  },
  // Add more products as needed
]

export default function ProductPage({ params }: { params: { productId: string } }) {
  const router = useRouter()
  const product = products.find((p) => p.id === params.productId)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    notFound()
  }

  const handleCompare = () => {
    router.push(`/comparison?product1=${product.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          Home
        </Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          Shop
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-900 dark:text-gray-100">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <Image src="/placeholder.svg" alt={product.name} width={600} height={400} className="w-full" />
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src="/placeholder.svg"
                alt={`${product.name} ${i}`}
                width={150}
                height={100}
                className="w-full"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{product.name}</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <Heart className={`h-6 w-6 ${isFavorite ? "fill-current text-red-500" : ""}`} />
            </Button>
          </div>
          <p className="text-2xl font-bold text-[#B88E2F] dark:text-[#D9B88F] mb-4">
            Rs. {product.price.toLocaleString()}
          </p>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 dark:text-gray-400">{product.reviews} Customer Review</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Size</h3>
              <div className="flex gap-2">
                <Button variant="outline">L</Button>
                <Button variant="outline">XL</Button>
                <Button variant="outline">XS</Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Color</h3>
              <div className="flex gap-2">
                <Button className="w-8 h-8 rounded-full bg-purple-500" />
                <Button className="w-8 h-8 rounded-full bg-black dark:bg-white" />
                <Button className="w-8 h-8 rounded-full bg-yellow-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center border rounded dark:border-gray-700">
              <Button variant="ghost" className="px-3 py-1">
                -
              </Button>
              <Input type="number" defaultValue={1} className="w-16 text-center border-none" />
              <Button variant="ghost" className="px-3 py-1">
                +
              </Button>
            </div>
            <Button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white dark:bg-[#D9B88F] dark:hover:bg-[#D9B88F]/90 dark:text-gray-900">
              Add To Cart
            </Button>
            <Button variant="outline" onClick={handleCompare}>
              Compare
            </Button>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p>
              <span className="font-semibold">SKU:</span> {product.sku}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Tags:</span> {product.tags.join(", ")}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Share:</span>
              <Facebook size={16} />
              <Twitter size={16} />
              <Instagram size={16} />
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-16">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="additional">Additional Information</TabsTrigger>
          <TabsTrigger value="reviews">Reviews [{product.reviews}]</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <p className="text-gray-600 dark:text-gray-400">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the
            unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the
            bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </TabsContent>
        <TabsContent value="additional">Additional information content here.</TabsContent>
        <TabsContent value="reviews">Customer reviews content here.</TabsContent>
      </Tabs>

      <RelatedProducts />
    </div>
  )
}

