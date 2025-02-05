"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer1() {
  return (
    <footer className="bg-[#F9F5F0] dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-serif text-primary dark:text-primary-light">GoFurnish</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              400 University Drive Suite 200 Coral
              <br />
              Gables, FL 33134 USA
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">Help</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/payment-options"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary-light"
              />
              <Button type="submit" className="w-full btn-primary">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GoFurnish. All rights reserved
            </p>
            <div className="flex space-x-4">
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

