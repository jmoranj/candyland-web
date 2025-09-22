'use client'

import { OrderContext } from '@/context/OrderContext'
import Link from 'next/link'
import { useContext } from 'react'
import CartIcon from '../icons/header/CartIcon'

export default function CartButton() {
  const { getTotalItems } = useContext(OrderContext)
  const totalItems = getTotalItems()

  return (
    <figure className="relative bg-pinkStrong w-10 h-full p-2 rounded-xl ml-4 text-white max-sm:w-7 max-sm:p-1.5 max-sm:rounded-lg">
      <Link href="/pedidos">
        <CartIcon />
      </Link>

      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 max-sm:text-[10px] max-sm:px-1 max-sm:py-0 rounded-full">
          {totalItems}
        </span>
      )}
    </figure>
  )
}
