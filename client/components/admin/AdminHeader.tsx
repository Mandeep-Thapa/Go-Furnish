import { Bell, User } from "lucide-react"

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader

