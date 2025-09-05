'use client'

import { useProductsQuery } from '@/services/ProductsService'
import ProductCard from './ProductCard'

export default function ProductsTable() {
  const { data: fetchedProducts } = useProductsQuery()

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="font-candyland font-candyland-bold text-4xl text-pink-800 mb-8 text-center">
        Especialidades da Casa
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fetchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
