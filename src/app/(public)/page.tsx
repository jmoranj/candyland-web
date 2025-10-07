import Categories from '@/components/Categories/Categories';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/SideBar';
import ProductsTable from '@/components/Products/ProductsTable';
import { Suspense } from 'react';


export default function Home() {
  return (
      <div className="w-full h-full flex flex-col items-center pt-10 gap-10">
        <header className="w-full justify-center items-center">
          <Header />
        </header>
        <main className="w-full">
          <Suspense fallback={<div>Carregando Categorias</div>}>
            <Categories />
          </Suspense>
          <Suspense fallback={<div>Carregando Produtos</div>}>
            <ProductsTable />
          </Suspense>
        </main>
      </div>
  );
}
