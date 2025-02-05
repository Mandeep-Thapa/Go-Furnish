import Image from "next/image"
import { Button } from "@/components/ui/button"

const relatedProducts = [
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, tag: "New" },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: 2500000, oldPrice: null, tag: "" },
  { id: 3, name: "Lolito", description: "Luxury big sofa", price: 7000000, oldPrice: 14000000, tag: "New" },
  { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: 500000, oldPrice: null, tag: "New" },
]

export default function RelatedProducts() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="bg-white group cursor-pointer">
            <div className="relative h-[300px]">
              <Image src="/placeholder.svg" alt={product.name} fill className="object-cover" />
              {product.tag && (
                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  {product.tag}
                </span>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" className="bg-white">
                  Add to cart
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex items-center">
                <p className="font-semibold">Rp {product.price.toLocaleString()}</p>
                {product.oldPrice && (
                  <p className="text-gray-500 line-through ml-2">Rp {product.oldPrice.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" className="border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">
          Show More
        </Button>
      </div>
    </section>
  )
}

