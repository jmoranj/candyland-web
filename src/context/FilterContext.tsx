'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type FilterContextType = {
  selectedCategory: string | null;
  searchText: string;
  setSearchText: (text: string) => void;
  applyCategorie: (category: string) => void;
};


const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>(''); // novo estado

  const applyCategorie = (category: string) => {
    if (category == selectedCategory) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }

  return (
    <FilterContext.Provider value={{ selectedCategory, applyCategorie, searchText, setSearchText }}>
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
