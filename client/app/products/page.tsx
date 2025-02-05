import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Modern Sofa", price: 999.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Dining Table", price: 599.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Bed Frame", price: 799.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${product.id}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

