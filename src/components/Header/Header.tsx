import CandyLogo from '../icons/CandyLogo';
import CartIcon from '../icons/header/CartIcon';
import Search from './Search';

export default function Header() {
  return (
    <div className="w-full h-max flex justify-between items-center">
      <CandyLogo />
      <Search />
      <figure className="bg-pinkStrong w-10 max-sm:w-7 h-full p-2 max-sm:p-1.5 rounded-xl max-sm:rounded-lg ml-4 text-white">
        <CartIcon />
      </figure>
    </div>
  );
}
