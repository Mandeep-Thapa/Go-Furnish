"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddProductForm = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend API
    console.log("New product:", { name, price, stock })
    // Reset form
    setName("")
    setPrice("")
    setStock("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="stock">Stock</Label>
        <Input id="stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
      </div>
      <Button type="submit">Add Product</Button>
    </form>
  )
}

export default AddProductForm

