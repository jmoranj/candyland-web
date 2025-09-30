'use client'

import { OrderType } from '@/schemas/Order'
import { ProductType } from '@/schemas/Product'
import { createContext, useEffect, useState } from 'react'

interface OrderContextType {
  order: OrderType
  addItem: (item: ProductType) => void
  getTotalItems: () => number
  getTotalPrice: () => number
  removeProduct: (productId: string) => void
  clearOrder: () => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

export const OrderContext = createContext<OrderContextType>({
  order: {
    products: [],
  },
  addItem: () => { },
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
  removeProduct: () => { },
  clearOrder: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
})

export default function OrderProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<OrderType>({
    products: [],
  })

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedOrder = localStorage.getItem('order')
    if (storedOrder) {
      try {
        setOrder(JSON.parse(storedOrder))
      } catch (error) {
        console.error('Erro ao fazer parse do pedido salvo:', error)
      }
    }
  }, [])

  // Atualiza localStorage sempre que o pedido mudar
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      if (order.products.length > 0) {
        localStorage.setItem('order', JSON.stringify(order))
      } else {
        localStorage.removeItem('order')
      }
    } catch (error) {
      console.error('Erro ao gerenciar localStorage:', error)
    }
  }, [order])

  const addItem = (product: ProductType) => {
    setOrder((prevOrder) => {
      const existingProductIndex = prevOrder.products.findIndex(
        (p) => p.id === product.id,
      )

      if (existingProductIndex === -1) {
        return {
          products: [...prevOrder.products, { ...product, quantity: 1 }],
        }
      }

      const updatedProducts = [...prevOrder.products]
      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        quantity: updatedProducts[existingProductIndex].quantity + 1,
      }

      return { products: updatedProducts }
    })
  }

  const increaseQuantity = (productId: string) => {
    setOrder((prevOrder) => {
      const updatedProducts = prevOrder.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      )
      return { products: updatedProducts }
    })
  }

  const decreaseQuantity = (productId: string) => {
    setOrder((prevOrder) => {
      const updatedProducts = prevOrder.products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0)

      return { products: updatedProducts }
    })
  }

  const getTotalItems = () => {
    return order.products.reduce(
      (total, product) => total + product.quantity,
      0,
    )
  }

  const getTotalPrice = () => {
    return order.products.reduce(
      (total, product) => total + (Number(product.price) || 0) * product.quantity,
      0,
    )
  }


  const removeProduct = (productId: string) => {
    setOrder((prevOrder) => ({
      products: prevOrder.products.filter((product) => product.id !== productId),
    }))
  }

  const clearOrder = () => {
    setOrder({ products: [] })
    try {
      localStorage.removeItem('order')
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error)
    }
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addItem,
        getTotalItems,
        getTotalPrice,
        removeProduct,
        clearOrder,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
