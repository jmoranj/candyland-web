'use client'

import ProductsTable from '@/components/Products/ProductsTable'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 bg-white">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsTable />
        </Suspense>
      </main>
    </div>
  )
}
