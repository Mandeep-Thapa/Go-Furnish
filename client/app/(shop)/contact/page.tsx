import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trophy, CheckCircle, Truck, Headphones } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gray-50">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image src="/placeholder.svg" alt="Furniro icon" width={48} height={48} className="mb-4" />
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be
            There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-4">Address</h3>
              <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <Input id="name" placeholder="Abc" className="mt-1 w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input id="email" type="email" placeholder="Abc@def.com" className="mt-1 w-full" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input id="subject" placeholder="This is an optional" className="mt-1 w-full" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" placeholder="Hi! I'd like to ask about" className="mt-1 w-full h-32" />
            </div>

            <Button type="submit" className="w-full bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Trophy className="w-16 h-16 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">High Quality</h3>
              <p className="text-gray-600">crafted from top materials</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-16 h-16 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">Warranty Protection</h3>
              <p className="text-gray-600">Over 2 years</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Truck className="w-16 h-16 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Order over 150 $</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Headphones className="w-16 h-16 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">24 / 7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

