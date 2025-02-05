import ProductList from "@/components/admin/ProductList"
import AddProductForm from "@/components/admin/AddProductForm"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Product Management</h1>
      <AddProductForm />
      <ProductList />
    </div>
  )
}

