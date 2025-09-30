'use client';

import { useFilter } from '@/context/FilterContext'; // Importa o hook
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  const { searchText, setSearchText } = useFilter(); // Usa o contexto

  return (
    <div className="relative w-full">
      <input
        className="w-full items-center h-10 max-sm:h-7 pl-5 pr-10 rounded-md max-sm:rounded-lg bg-pinkWeak text-base max-sm:text-sm border-none text-brownText placeholder:text-brownPlaceholder outline-none focus:ring-2 focus:ring-pinkStrong"
        type="text"
        placeholder="procurar..."
        value={searchText} // Controlado
        onChange={(e) => setSearchText(e.target.value)} // Atualiza contexto
      />
      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brownPlaceholder pointer-events-none text-base max-sm:text-sm" />
    </div>
  );
};

export default Search;
