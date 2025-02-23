'use client'

import Image from 'next/image'
import { Product } from '@/interfaces/Product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl shadow-red-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.imageUrl || './public/logo.jpg'}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pink-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-700">
            R$ {product.price.toFixed(2)}
          </span>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
