import api from '@/api/Api';
import { useSuspenseQuery } from '@tanstack/react-query';

const fetchCategories = async () => {
  try {
    const response = await api.get('/category');
    return response.data;
  } catch (error: unknown) {
    console.error('Erro ao trazer categorias:', error);
    return [];
  }
};

export const useCategoriesQuery = () => {
  return useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
