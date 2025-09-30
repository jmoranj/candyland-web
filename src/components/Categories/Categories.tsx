'use client';

import { useFilter } from '@/context/FilterContext';
import { useCategoriesQuery } from '@/services/CategoryService';
import CategoryTemplate from './CategorieTemplate';

export default function Categories() {
  const { data: categories } = useCategoriesQuery();
  const { applyCategorie, selectedCategory } = useFilter();

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="font-candyland 2xl:text-2xl text-xl max-sm:text-lg">
        Categorias
      </div>
      <div className="w-full flex gap-6 scrollbarNone overflow-x-auto">
        {categories.map((category: { categoryName: string; categoryIcon: string }) => {
          const isSelected = selectedCategory === category.categoryName;

          return (
            <CategoryTemplate
              key={category.categoryName}
              name={category.categoryName}
              icon={category.categoryIcon}
              onClick={() => applyCategorie(category.categoryName)}
              selected={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
