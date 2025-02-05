import { Button } from "@/components/ui/button"
import Link from "next/link"

const AdminPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Link href="/">
          <Button variant="outline">Back to Site</Button>
        </Link>
      </div>
      <div className="space-y-4">
        <Button>Add New Product</Button>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b">Modern Sofa</td>
              <td className="py-3 px-4 border-b">$599.99</td>
              <td className="py-3 px-4 border-b">10</td>
              <td className="py-3 px-4 border-b">
                <Button variant="outline" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">Dining Table</td>
              <td className="py-3 px-4 border-b">$399.99</td>
              <td className="py-3 px-4 border-b">5</td>
              <td className="py-3 px-4 border-b">
                <Button variant="outline" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPage

