'use client'

import { OrderType } from '@/schemas/Order'
import { ProductType } from '@/schemas/Product'
import { createContext, useEffect, useState } from 'react'

interface OrderContextType {
  order: OrderType
  addItem: (item: ProductType) => void
  getTotalItems: () => number
  removeProduct: (productId: string) => void
  clearOrder: () => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

export const OrderContext = createContext<OrderContextType>({
  order: {
    products: [],
  },
  addItem: () => {
    //
  },
  getTotalItems: () => 0,
  removeProduct: () => {
    //
  },
  clearOrder: () => {
    //
  },
  increaseQuantity: () => {
    //
  },
  decreaseQuantity: () => {
    //
  },
})

export default function OrderProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [order, setOrder] = useState<OrderType>({
    products: [],
  })

  useEffect(() => {
    const storedOrder = localStorage.getItem('order')
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder))
    }
  }, [])

  useEffect(() => {
    try {
      if (order.products.length > 0) {
        localStorage.setItem('order', JSON.stringify(order))
      } else {
        // Remove do localStorage quando carrinho está vazio
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
          products: [...prevOrder.products, product],
        }
      }

      const updatedProducts = [...prevOrder.products]

      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        quantity: updatedProducts[existingProductIndex].quantity + 1,
      }

      return {
        products: updatedProducts,
      }
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
      const updatedProducts = prevOrder.products.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      )
      return { products: updatedProducts }
    })
  }

  const getTotalItems = () => {
    return order.products.reduce(
      (total, product) => total + product.quantity,
      0,
    )
  }

  const removeProduct = (productId: string) => {
    setOrder((prevOrder) => ({
      products: prevOrder.products.filter(
        (product) => product.id !== productId,
      ),
    }))
  }

  const clearOrder = () => {
    setOrder({
      products: [],
    })
    // Remove explicitamente do localStorage
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
