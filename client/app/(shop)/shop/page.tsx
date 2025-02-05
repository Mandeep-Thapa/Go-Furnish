"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/ProductCard"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import type { Product } from "@/types/product"
import { Input } from "@/components/ui/input"
import { debounce } from "lodash"

// API function to fetch products
async function fetchProducts(
  page: number,
  limit: number,
  sort: string,
  search: string,
): Promise<{ products: Product[]; total: number }> {
  const response = await fetch(
    `/api/products?page=${page}&limit=${limit}&sort=${sort}&search=${encodeURIComponent(search)}`,
  )
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  return response.json()
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(16)
  const [sort, setSort] = useState("default")
  const [search, setSearch] = useState("")
  const [total, setTotal] = useState(0)
  const { toast } = useToast()

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true)
      const { products: fetchedProducts, total } = await fetchProducts(page, limit, sort, search)
      setProducts(fetchedProducts)
      setTotal(total)
      setIsLoading(false)
    } catch (err) {
      setError("Failed to load products. Please try again later.")
      setIsLoading(false)
      toast({
        title: "Error",
        description: "Failed to load products. Please try again later.",
        variant: "destructive",
      })
    }
  }, [page, limit, sort, search, toast])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const debouncedSearch = debounce((value: string) => {
    setSearch(value)
    setPage(1)
  }, 300)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-[250px] w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p className="mb-4">{error}</p>
        <Button onClick={() => loadProducts()}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Shop</h1>
        <div className="flex items-center gap-2">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900">Shop</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <Input type="text" placeholder="Search products..." className="w-full sm:w-64" onChange={handleSearchChange} />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <span className="text-sm">
            Showing {products.length} of {total} results
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            <Select value={limit.toString()} onValueChange={(value) => setLimit(Number(value))}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Show 16" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16">Show 16</SelectItem>
                <SelectItem value="32">Show 32</SelectItem>
                <SelectItem value="48">Show 48</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Default sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default sorting</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No products found</h2>
          <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {total > limit && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="mx-1"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="mx-1"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page * limit >= total}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

