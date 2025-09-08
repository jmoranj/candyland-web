import CategoryTemplate from './CategorieTemplate';

const categories: Array<{ name: string; icon: string }> = [
  { name: 'Bolos', icon: '🎂' },
  { name: 'Doces', icon: '🍬' },
  { name: 'Tortas', icon: '🍰' },
];

export default function Categories() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="font-candyland 2xl:text-2xl text-xl max-sm:text-base">
        Categorias
      </div>
      <div className="w-full flex max-sm:justify-around gap-6 flex-wrap">
        {categories.map((category) => (
          <CategoryTemplate name={category?.name} icon={category?.icon} />
        ))}
      </div>
    </div>
  );
}
