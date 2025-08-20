'use client'

import ProductPage from '@/components/Products/ProductPage'
import { useParams } from 'next/navigation'

export default function Product() {
  const params = useParams()

  const productId = params.product as string

  return <ProductPage productId={productId} />
}
