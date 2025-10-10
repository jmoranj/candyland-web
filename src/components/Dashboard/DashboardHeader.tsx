import Search from '@/components/Header/Search';
import { ClipboardClock, CircleCheckBig, CircleX } from 'lucide-react';
import { useQueryState, parseAsString } from 'nuqs';

export default function DashboardHeader() {
  const [searchInput, setSearchInput] = useQueryState('searchInput', {
    ...parseAsString,
    defaultValue: '',
  });

  const buttons = [
    {
      icon: <ClipboardClock className="text-[--pinkStrong]" />,
      label: 'Pedidos Pendentes',
    },
    {
      icon: <CircleCheckBig className="text-[--pinkStrong]" />,
      label: 'Pedidos Finalizados',
    },
    {
      icon: <CircleX className="text-[--pinkStrong]" />,
      label: 'Pedidos Cancelados',
    },
  ];

  return (
    <header className="flex flex-col p-8 gap-4 w-full">
      <h1 className="text-3xl font-bold text-[--pinkStrong]">Dashboard</h1>
      <div className="flex flex-row gap-10 items-center flex-wrap">
        <div className="flex-1 min-w-[250px]">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
        <div className="flex flex-row gap-4 flex-wrap justify-end">
          {buttons.map((b, i) => (
            <button
              key={i}
              className="flex items-center gap-2 bg-white text-[--textOff] px-4 py-2 rounded-md border border-[--pinkStrong] hover:bg-[--fdd5df] hover:text-black transition-colors"
            >
              {b.icon}
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
