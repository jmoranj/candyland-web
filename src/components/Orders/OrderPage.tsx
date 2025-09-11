'use client'

import TrashIcon from '@/components/icons/trashIcon'
import { OrderContext } from '@/context/OrderContext'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function CartPage() {
  const {
    order,
    clearOrder,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(OrderContext)

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (productId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(productId)) {
      newExpanded.delete(productId)
    } else {
      newExpanded.add(productId)
    }
    setExpandedItems(newExpanded)
  }

  if (order.products.length === 0) {
    return (
      <div className="min-h-screen p-4 bg-gray-50 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-candyland text-pink-800 mb-4">
              Meu Carrinho
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Seu carrinho está vazio
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Adicione alguns doces deliciosos ao seu carrinho!
            </p>
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🍰 Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-candyland text-pinkStrong mb-4">
            Meu Carrinho
          </h1>
          <div className="flex justify-center">
            <button
              onClick={clearOrder}
              className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <TrashIcon width={16} height={16} />
              Limpar Carrinho
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 max-sm:p-3">
            <div className="space-y-4 overflow-x-auto max-h-96 max-sm:max-h-80 scrollbarNone sm:p-5">
              {order.products.map((product) => {
                const isExpanded = expandedItems.has(product.id)
                return (
                  <div
                    key={product.id}
                    className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                  >
                    {/* Header do Accordion */}
                    <div
                      className="flex items-center gap-4 p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleItem(product.id)}
                    >
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src="/cake.jpg"
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg max-sm:text-sm font-semibold text-gray-800">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <div
                          className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        >
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo Expansível */}
                    <div
                      className={`transition-all duration-300 overflow-hidden 
                        ${isExpanded
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="p-4 bg-white border-t">
                        <div className="flex flex-col md:flex-row items-center justify-between text-black">
                          <div className="flex-1">
                            <p className="text-md mb-2">
                              {product.description}
                            </p>
                            <div className="space-y-2 text-lg">
                              <div className="flex justify-between">
                                <span>Preço unitário:</span>
                                <span className="font-medium">
                                  R$ {Number(product.price).toFixed(2)}
                                </span>
                              </div>

                              <div className="flex justify-between">
                                <span>Quantidade:</span>
                                <span className="font-medium">
                                  <div className="flex items-center gap-5 bg-gray-50 rounded-md p-1">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        decreaseQuantity(product.id)
                                      }}
                                      className="text-pink-500"
                                      title="Diminuir quantidade"
                                    >
                                      −
                                    </button>

                                    <span>{product.quantity == undefined ? product.quantity = 1 : product.quantity}</span>

                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        increaseQuantity(product.id)
                                      }}
                                      className="text-pink-500 "
                                      title="Aumentar quantidade"
                                    >
                                      +
                                    </button>
                                  </div>
                                </span>
                              </div>

                              <div className="flex justify-between border-t pt-2">
                                <span className="font-semibold">Subtotal:</span>
                                <span className="font-bold text-pinkStrong">
                                  R${' '}
                                  {(
                                    Number(product.price) * product.quantity
                                  ).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-4 mt-4">
                          {/* Botão Remover */}
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
                          >
                            <TrashIcon width={16} height={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between items-center mb-4 text-black">
                <span className="text-lg font-semibold">Total de itens:</span>
                <span className="text-lg">{order.products.length}</span>
              </div>
              <div className="flex justify-between items-center mb-6 text-black">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-pinkStrong">
                  R${' '}
                  {order.products
                    .reduce(
                      (acc, product) =>
                        acc + Number(product.price) * Number(product.quantity),
                      0,
                    )
                    .toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = '/')}
                  className="w-full md:w-auto bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Continuar Comprando
                </button>
                <button
                  onClick={() =>
                    alert('Funcionalidade de checkout em desenvolvimento!')
                  }
                  className="w-full md:w-auto bg-pinkStrong text-white py-3 px-6 rounded-lg hover:bg-pinkStrongHover transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
