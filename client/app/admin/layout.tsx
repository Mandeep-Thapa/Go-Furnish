import type { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">{children}</main>
    </div>
  )
}

