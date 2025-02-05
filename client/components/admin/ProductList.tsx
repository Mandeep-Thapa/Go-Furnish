import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  price: number
  stock: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Modern Sofa", price: 999.99, stock: 10 },
    { id: "2", name: "Dining Table", price: 599.99, stock: 5 },
    { id: "3", name: "Bed Frame", price: 799.99, stock: 8 },
  ])

  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2">
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProductList

