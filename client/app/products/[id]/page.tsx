import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 999.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A comfortable and stylish sofa for your living room.",
  },
  {
    id: 2,
    name: "Dining Table",
    price: 599.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A spacious dining table for family gatherings.",
  },
  {
    id: 3,
    name: "Bed Frame",
    price: 799.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A sturdy and elegant bed frame for a good night's sleep.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-6">{product.description}</p>
        <Button size="lg">Add to Cart</Button>
      </div>
    </div>
  )
}

