'use client'

import { useFilter } from '@/context/FilterContext';
import { useProductsQuery } from '@/services/ProductsService';
import ProductCard from './ProductCard';

export default function ProductsTable() {
  const { data: fetchedProducts = [] } = useProductsQuery();
  const { selectedCategory, searchText } = useFilter();

  // Função de filtro
  const filteredProducts = fetchedProducts.filter(product => {
    const matchesCategory = selectedCategory
      ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Agrupar se nenhuma categoria estiver selecionada
  const groupedByCategory = filteredProducts.reduce((acc, product) => {
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
