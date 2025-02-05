"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Search, Heart, ShoppingCart, User, Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const searchablePages = ["/", "/shop", "/search"]

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false)
    router.push(href)
  }

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mr-2 md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold text-primary dark:text-primary-light font-serif">
                GoFurnish
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-semibold hover-underline",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push("/login")} className="hidden sm:flex hover:text-primary">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            </Button>
            <Button variant="ghost" onClick={() => setShowSearch(!showSearch)} className="hover:text-primary">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/favorites")}
              className="hidden sm:flex hover:text-primary"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            </Button>
            <Button variant="ghost" onClick={() => router.push("/cart")} className="hover:text-primary">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            </Button>
            <Button variant="ghost" onClick={handleThemeChange} className="hidden sm:flex hover:text-primary">
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden mt-4 py-4 border-t transition-all duration-300",
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-semibold",
                )}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("/favorites")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-semibold"
            >
              Favorites
            </button>
            <button
              onClick={handleThemeChange}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-semibold"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                router.push(`/search?q=${(e.target as HTMLFormElement).search.value}`)
              }}
            >
              <div className="flex items-center">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search for furniture..."
                  className="flex-grow border-2 border-primary focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="ml-2 btn-primary">
                  Search
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

