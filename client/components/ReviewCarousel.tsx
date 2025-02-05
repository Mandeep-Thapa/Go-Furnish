"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "/placeholder.svg",
    rating: 5,
    review: "Excellent furniture and great customer service! I'm very satisfied with my purchase.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/placeholder.svg",
    rating: 4,
    review: "The quality of the furniture is outstanding. Delivery was prompt and hassle-free.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: "/placeholder.svg",
    rating: 5,
    review: "I love the modern designs. GoFurnish has transformed my living room!",
  },
]

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(nextReview, 5000)
    return () => clearInterval(interval)
  }, [nextReview]) // Added nextReview to dependencies

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <Button variant="ghost" onClick={prevReview} className="absolute left-0 z-10">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="text-center max-w-2xl mx-auto px-4">
          <Image
            src={reviews[currentReview].image || "/placeholder.svg"}
            alt={reviews[currentReview].name}
            width={80}
            height={80}
            className="rounded-full mx-auto mb-4"
          />
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < reviews[currentReview].rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg mb-4">{reviews[currentReview].review}</p>
          <p className="font-semibold">{reviews[currentReview].name}</p>
        </div>
        <Button variant="ghost" onClick={nextReview} className="absolute right-0 z-10">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

