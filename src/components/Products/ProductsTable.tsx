'use client'

import { useCategory } from '@/context/CategoryContext';
import { useProductsQuery } from '@/services/ProductsService';
import ProductCard from './ProductCard';

export default function ProductsTable() {
  const { data: fetchedProducts = [] } = useProductsQuery();
  const { selectedCategory } = useCategory();
  console.log(fetchedProducts)

  // Se uma categoria estiver selecionada, filtra diretamente
  if (selectedCategory) {
    const filtered = fetchedProducts.filter(
      (product) => product.category === selectedCategory.toLocaleLowerCase()
    );

    return (
      <div className='w-full my-20'>
        <div className='mb-10 flex flex-col gap-5 sm:border-b-2'>
          <h2 className='font-candyland 2xl:text-2xl text-xl max-sm:text-lg capitalize'>
            {selectedCategory}
          </h2>
          <div className="flex justify-between gap-6 flex-wrap ">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Caso nenhuma categoria esteja selecionada → renderiza agrupado
  const groupedByCategory = fetchedProducts.reduce((acc, product) => {
    const category = product.category || 'Sem categoria';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof fetchedProducts>);

  return (
    <div className='w-full my-20'>
      {Object.entries(groupedByCategory).map(([category, products]) => (
        <div key={category} className='mb-10 flex flex-col gap-5 sm:border-b-2'>
          <h2 className='font-candyland 2xl:text-2xl text-xl max-sm:text-lg capitalize'>
            {category}
          </h2>
          <div className="flex justify-between gap-6 flex-wrap ">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
