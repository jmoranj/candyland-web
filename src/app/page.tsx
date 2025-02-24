import ProductsTable from '@/components/Products/ProductsTable'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 bg-white">
        <ProductsTable />
      </main>
    </div>
  )
}
