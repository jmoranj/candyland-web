import Categories from '@/components/Categories/Categories';
import Header from '@/components/Header/Header';
import ProductsTable from '@/components/Products/ProductsTable';

export default function Home() {
  return (
    <div className="w-[90%] h-full flex flex-col items-center pt-10 gap-10">
      <header className="w-full justify-center items-center">
        <Header />
      </header>
      <main className="w-full ">
        <Categories />
        <ProductsTable />
      </main>
    </div>
  );
}
