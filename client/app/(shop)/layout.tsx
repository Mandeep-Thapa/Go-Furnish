import type { ReactNode } from "react"
import Header1 from "../components/header1"
import Footer1 from "../components/footer1"

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header1 />
      <main className="flex-grow pt-20 sm:pt-24">{children}</main>
      <Footer1 />
    </>
  )
}

