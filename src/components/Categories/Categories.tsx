'use client';

import api from '@/api/api';
import { useEffect, useState } from 'react';
import CategoryTemplate from './CategorieTemplate';

interface Category {
  categoryTitle: string;
  categoryIcon: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await api.get('/category');
        setCategories(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="font-candyland 2xl:text-2xl text-xl max-sm:text-base">
        Categorias
      </div>

      {loading ? (
        <p>Carregando categorias...</p>
      ) : (
        <div className="w-full flex max-sm:justify-around gap-6 flex-wrap">
          {categories.map((category, idx) => (
            <CategoryTemplate
              key={idx}
              name={category.categoryTitle}
              icon={category.categoryIcon}
            />
          ))}
        </div>
      )}
    </div>
  );
}
