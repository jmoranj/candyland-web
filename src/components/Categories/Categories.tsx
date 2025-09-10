'use client';

import { useCategoriesQuery } from '@/services/CategoryService';
import { Key } from 'react';
import CategoryTemplate from './CategorieTemplate';

export default function Categories() {
  const { data: categories } = useCategoriesQuery();
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="font-candyland 2xl:text-2xl text-xl max-sm:text-base">
        Categorias
      </div>
      <div className="w-full flex max-sm:justify-around gap-6 flex-wrap">
        {categories.map(
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
