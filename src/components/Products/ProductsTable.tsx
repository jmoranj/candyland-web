'use client'

import { useProductsQuery } from '@/services/ProductsService'
import ProductCard from './ProductCard'

export default function ProductsTable() {
  const { data: fetchedProducts = [] } = useProductsQuery()

  // Agrupa os produtos por categoria
  const groupedByCategory = fetchedProducts.reduce((acc, product) => {
    const category = product.category || 'Sem categoria'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {} as Record<string, typeof fetchedProducts>)

  return (
    <div className='w-full my-20'>
      {Object.entries(groupedByCategory).map(([category, products]) => (
        <div key={category} className='mb-10 flex flex-col gap-5'>
          <h2 className='text-2xl font-bold mb-4 capitalize'>{category}</h2>
          <div className="flex justify-between gap-6 flex-wrap ">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
