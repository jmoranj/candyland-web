'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type CategoryContextType = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Hook personalizado
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory deve ser usado dentro de um CategoryProvider');
  }
  return context;
};
