"use client"

import type React from "react"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = "E-commerce Website" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

