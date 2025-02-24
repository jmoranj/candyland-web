'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ProductPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileImageHidden] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="w-full flex items-center justify-center min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl z-0">
        {/* Image Section - Left Side */}
        {(!isMobile || !isMobileImageHidden) && (
          <div className="relative h-96 w-full">
            <Image
              src="/cake.jpg"
              alt="Chocolate Cake"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
            />
          </div>
        )}
        {/* Product Information - Right Side */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-candyland font-candyland-bold text-pink-900">
            Chocolate Cake
          </h1>

          <h2 className="text-xl text-gray-700 font-semibold">
            Ingredients: Chocolate, Sugar, Flour, Eggs, Milk
          </h2>

          <h3 className="text-3xl font-bold text-pink-700">R$ 29.99</h3>

          <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors text-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
