const CategoryTemplate: React.FC<{
  name: string;
  icon: string;
  onClick?: () => void;
}> = ({ name, icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <figure className="flex flex-col items-center gap-2 ">
        <div className="bg-pinkWeak w-14 h-14 rounded-full cursor-pointer flex justify-center items-center text-2xl">
          {icon}
        </div>
        <span className="font-semibold text-sm">{name}</span>
      </figure>
    </button>
  );
};

export default CategoryTemplate;
