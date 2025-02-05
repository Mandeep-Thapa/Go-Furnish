import type React from "react"
import type { GetServerSideProps } from "next"
import Layout from "../../components/Layout"
import { fetchProduct } from "../../lib/api"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice"

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

interface ProductPageProps {
  product: Product
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }
  try {
    const product = await fetchProduct(id)
    return {
      props: { product },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 }))
  }

  return (
    <Layout title={`${product.name} | E-commerce Website`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

