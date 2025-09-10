import { FiSearch } from 'react-icons/fi'; // Exemplo com react-icons

const Search = () => {
  return (
    <div className="relative w-[70%]">
      <input
        className="w-full h-10 max-sm:h-7 pl-5 pr-10 rounded-xl max-sm:rounded-lg bg-pinkWeak text-base max-sm:text-sm border-none text-brownText placeholder:text-brownPlaceholder outline-none focus:ring-2 focus:ring-pinkStrong"
        type="text"
        placeholder="procurar..."
      />
      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brownPlaceholder pointer-events-none text-base max-sm:text-sm" />
    </div>
  );
};

export default Search;
