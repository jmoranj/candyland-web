'use client';

import api from '@/api/Api';
import { useQuery } from '@tanstack/react-query';
import { Key } from 'react';
import CategoryTemplate from './CategorieTemplate';

export default function Categories() {
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await api.get('/category');
      return res.data;
    },
  });

  if (categories.isLoading) {
    return <div>Carregando Categorias...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="font-candyland 2xl:text-2xl text-xl max-sm:text-base">
        Categorias
      </div>
      <div className="w-full flex max-sm:justify-around gap-6 flex-wrap">
        {categories.data.map(
          (
            category: { categoryTitle: string; categoryIcon: string },
            index: Key | null | undefined,
          ) => (
            <CategoryTemplate
              key={index}
              name={category.categoryTitle}
              icon={category.categoryIcon}
            />
          ),
        )}
      </div>
    </div>
  );
}
