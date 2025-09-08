import CartButton from '../Buttons/CartBtn';
import CandyLogo from '../icons/CandyLogo';
import Search from './Search';

export default function Header() {
  return (
    <div className="w-full h-max flex justify-between items-center">
      <CandyLogo />
      <Search />
      <CartButton />
    </div>
  );
}
