'use client'

import { useProductByIdQuery } from '@/services/ProductsService'

interface ProductPageProps {
  productId: string
}

export default function ProductPage({ productId }: ProductPageProps) {
  const { data: fetchedProduct } = useProductByIdQuery(productId)

  return (
    <div className="w-full flex items-center justify-center min-h-screen p-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{fetchedProduct?.name}</h1>
        <p className="text-lg">{fetchedProduct?.description}</p>
        <p className="text-lg">R$ {fetchedProduct?.price}</p>
      </div>
    </div>
  )
}
