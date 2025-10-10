'use client'

import { OrderContext } from '@/context/OrderContext'
import { ProductType } from '@/schemas/Product'
import { useContext } from 'react'
import BagIcon from '../icons/sidebar/bagIcon'

export default function ProductCard({ product }: { product: ProductType }) {
  const { addItem } = useContext(OrderContext)

  return (
    <div className="flex max-w-md pb-4 mb-4">
      <div className="w-40 h-full max-sm:w-32">
        <img
          src="/cake.jpg"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between px-5 flex-1">
        <div className='flex flex-col gap-1'>
          <h3 className="text-xl max-sm:text-base font-semibold text-pinkStrong">{product.name}</h3>
          <p className="text-base max-sm:text-sm mt-2">{product.description}</p>
        </div>
        <span className="text-xl max-sm:text-base font-semibold text-pinkStrong">R${Number(product.price).toFixed(2)}</span>
        <button
          onClick={() => { addItem(product) }}
          className="flex justify-center items-center gap-2 px-10 py-2 bg-pinkStrong text-base max-sm:text-sm text-white font-semibold rounded hover:opacity-65 transition w-max"
        >
          <BagIcon width={20} height={20} />
          Adicionar
        </button>
      </div>
    </div>
  );
}
