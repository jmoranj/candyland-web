'use client'

import { Product, ProductSchema } from '@/interfaces/Product'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

// Rest of the component remains the same

const mockProductService = {
  getProducts: (): Product[] => {
    const products = [
      {
        id: '1',
        name: 'Chocolate Cake',
        price: 29.99,
        category: 'Cake',
        description: 'Rich chocolate cake with ganache',
        imageUrl: '',
      },
      {
        id: '2',
        name: 'Strawberry Delight',
        price: 34.5,
        category: 'Cake',
        description: 'Fresh strawberry cream cake',
        imageUrl: '',
      },
      {
        id: '3',
        name: 'Strawberry Delight',
        price: 34.5,
        category: 'Cake',
        description: 'Fresh strawberry cream cake',
        imageUrl: '',
      },
    ]

    // Validate each product against the schema
    return products.map((product) => ProductSchema.parse(product))
  },
}

export default function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    try {
      // Validate products during fetch
      const fetchedProducts = mockProductService.getProducts()

      // Additional validation if needed
      const validatedProducts = fetchedProducts
        .map((product) => {
          try {
            return ProductSchema.parse(product)
          } catch (validationError) {
            console.error('Product validation error', validationError)
            return null
          }
        })
        .filter(Boolean) as Product[]

      setProducts(validatedProducts)
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch products', error)
      setError('Failed to load products')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <div>Loading products...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="font-candyland font-candyland-bold text-4xl text-pink-800 mb-8 text-center">
        Especialidades da Casa
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
