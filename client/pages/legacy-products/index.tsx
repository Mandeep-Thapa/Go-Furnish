import type React from "react"
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { fetchProducts } from "../../lib/api"
import Link from "next/link"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load products. Please try again later.")
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return (
      <Layout title="Products | E-commerce Website">
        <div>Loading...</div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout title="Products | E-commerce Website">
        <div>{error}</div>
      </Layout>
    )
  }

  return (
    <Layout title="Products | E-commerce Website">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default ProductsPage

