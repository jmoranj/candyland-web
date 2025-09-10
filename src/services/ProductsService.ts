import api from '@/api/Api';
import { ProductType } from '@/schemas/Product';
import { useSuspenseQuery } from '@tanstack/react-query';

const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await api.get('/products');

    const data = await response.data;

    return data;
  } catch (error: unknown) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const fetchProduct = async (id: string): Promise<ProductType | null> => {
  try {
    const response = await api.get('/products/' + id);

    const data = await response.data;

    return data;
  } catch (error: unknown) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const useProductsQuery = () => {
  return useSuspenseQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};

export const useProductByIdQuery = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
