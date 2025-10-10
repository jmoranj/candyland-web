'use client';

import { useQueryState } from 'nuqs';
import { FiSearch } from 'react-icons/fi';

interface SearchProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
}

export default function Search({ searchInput, setSearchInput }: SearchProps) {

  return (
    <div className="relative w-full">
      <input
        className="w-full items-center h-10 max-sm:h-7 pl-10 pr-10 rounded-md max-sm:rounded-lg ring-1 ring-gray-300 
        bg-white text-base max-sm:text-sm text-brownText placeholder:text-brownPlaceholder outline-none focus:ring-2 focus:ring-pinkStrong"

        type="text"
        placeholder="Procurar"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brownPlaceholder pointer-events-none text-base max-sm:text-sm" />
    </div>
  );
};

