'use client'

import { api } from '@/Api/Api'
import { ProductType } from '@/schemas/Product'
import { useSuspenseQuery } from '@tanstack/react-query'

interface ProductPageProps {
  productId: string
}

export default function ProductPage({ productId }: ProductPageProps) {
  const getProduct = async (productId: string): Promise<ProductType> => {
    const response = await api(`/api/products/${productId}`)
    return response.json()
  }

  const { data } = useSuspenseQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
  })

  return (
    <div className="w-full flex items-center justify-center min-h-screen p-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-lg">{data.description}</p>
        <p className="text-lg">R$ {data.price}</p>
      </div>
    </div>
  )
}
