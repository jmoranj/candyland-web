import BagIcon from '../icons/sidebar/bagIcon';

export default function AddToCartButton() {
  return (
    <button className="flex justify-center items-center gap-2 bg-pinkStrong  text-base max-sm:text-[10px] font-semibold hover:bg-pinkDark text-white w-max px-10 py-2 max-sm:px-7 max-sm:py-0 rounded-lg max-sm:rounded-base transition hover:scale-105 hover:brightness-110">
      <span>Comprar</span>
      <BagIcon className="inline-block w-5 h-5 max-sm:w-3.5 max-sm:h-4" />
    </button>
  );
}
