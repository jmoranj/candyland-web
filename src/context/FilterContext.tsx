'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type FilterContextType = {
  selectedCategory: string | null;
  applyCategorie: (category: string) => void;
};


const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const applyCategorie = (category: string) => {
    if (category == selectedCategory) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }

  return (
    <FilterContext.Provider value={{ selectedCategory, applyCategorie }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook personalizado
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter deve ser usado dentro de um FilterProvider');
  }
  return context;
};
