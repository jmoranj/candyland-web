'use client'

import { parseAsString, useQueryState } from 'nuqs';
import Search from './Search';

export default function Header() {

  const [searchInput, setSearchInput] = useQueryState('searchInput', {
    ...parseAsString,
    defaultValue: ''
  });

  return (
    <div className="w-full h-max flex justify-between items-center">
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
}
