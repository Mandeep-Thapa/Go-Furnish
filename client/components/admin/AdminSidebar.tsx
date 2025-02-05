import Link from "next/link"
import { Home, Package, DollarSign, Settings } from "lucide-react"

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link href="/admin" className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">Admin Panel</span>
      </Link>
      <nav>
        <Link
          href="/admin"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Package className="inline-block mr-2" size={20} />
          Products
        </Link>
        <Link
          href="/admin/sales"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <DollarSign className="inline-block mr-2" size={20} />
          Sales
        </Link>
        <Link
          href="/admin/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Settings className="inline-block mr-2" size={20} />
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default AdminSidebar

