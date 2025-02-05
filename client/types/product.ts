export interface Product {
  id: number | string
  name: string
  description: string
  price: number
  oldPrice: number | null
  discount: number | null
  isNew: boolean
  image: string
}

