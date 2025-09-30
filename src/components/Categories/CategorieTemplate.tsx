
const CategoryTemplate: React.FC<{
  name: string;
  icon: string;
  onClick?: () => void;
  selected?: boolean;
}> = ({ name, icon, onClick, selected }) => {
  return (
    <button onClick={onClick}>
      <figure className="flex flex-col items-center gap-2 ">
        <div
          className={`w-14 h-14 rounded-full cursor-pointer flex justify-center items-center text-2xl transition
            ${selected ? 'bg-pink-500 text-white' : 'bg-pinkWeak text-black'}`}
        >
          {icon}
        </div>
        <span className={`font-semibold text-sm ${selected ? 'text-pink-800' : ''}`}>
          {name}
        </span>
      </figure>
    </button>
  );
};
export default CategoryTemplate
