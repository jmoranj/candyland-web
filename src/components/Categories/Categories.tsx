'use client';

import { useCategoriesQuery } from '@/services/CategoryService';
import { Key } from 'react';
import CategoryTemplate from './CategorieTemplate';

export default function Categories() {
  const { data: categories } = useCategoriesQuery();
  console.log(categories);
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="font-candyland 2xl:text-2xl text-xl max-sm:text-lg">
        Categorias
      </div>
      <div className="w-full flex gap-6 scrollbarNone overflow-x-auto">
        {categories.map(
          (
            category: { categoryName: string; categoryIcon: string },
            index: Key | null | undefined,
          ) => (
            <CategoryTemplate
              key={index}
              name={category.categoryName}
              icon={category.categoryIcon}
            />
          ),
        )}
      </div>
    </div>
  );
}
