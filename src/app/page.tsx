import Categories from '@/components/Categories/Categories';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <main className="w-[90%] h-full flex flex-col items-center pt-10 gap-10">
      <header className="w-full justify-center items-center">
        <Header />
      </header>
      <main className="w-full ">
        <Categories />
      </main>
    </main>
  );
}
