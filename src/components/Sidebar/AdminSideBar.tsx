'use client';

import CandyLogo from '../icons/CandyLogo';
import Link from 'next/link';
import {
  LayoutDashboard,
  ShoppingCart,
  CalendarPlus,
  PackagePlus,
  LogOut,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AdminSideBar() {
  const pathname = usePathname();

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="pt-6 px-4 flex justify-center">
          <CandyLogo sizeClasses='w-[150px] h-[150px]"' />
        </div>

        <nav className="flex flex-col items-center mt-6">
          <ul className="text-2xl">
            <li
              className={`border-[2px] border-solid rounded-md mt-2 ${
                pathname === '/admin/dashboard'
                  ? 'border-[--pinkStrong] text-[--pinkStrong]'
                  : 'border-transparent text-[--textOff]'
              }`}
            >
              <Link
                href="/admin/dashboard"
                className="font-semibold text-base flex items-center gap-4 py-2 px-10"
              >
                <LayoutDashboard />
                Dashboard
              </Link>
            </li>

            <li
              className={`border-[2px] border-solid rounded-md mt-2 ${
                pathname === '/admin/pedidos'
                  ? 'border-[--pinkStrong] text-[--pinkStrong]'
                  : 'border-transparent text-[--textOff]'
              }`}
            >
              <Link
                href="/admin/pedidos"
                className="font-semibold text-base flex items-center gap-4 py-2 px-10"
              >
                <ShoppingCart />
                Pedidos
              </Link>
            </li>

            <li
              className={`border-[2px] border-solid rounded-md mt-2 ${
                pathname === '/admin/categorias'
                  ? 'border-[--pinkStrong] text-[--pinkStrong]'
                  : 'border-transparent text-[--textOff]'
              }`}
            >
              <Link
                href="/admin/categorias"
                className="font-semibold text-base flex items-center gap-4 py-2 px-10"
              >
                <CalendarPlus />
                Categorias
              </Link>
            </li>

            <li
              className={`border-[2px] border-solid rounded-md mt-2 ${
                pathname === '/admin/produtos'
                  ? 'border-[--pinkStrong] text-[--pinkStrong]'
                  : 'border-transparent text-[--textOff]'
              }`}
            >
              <Link
                href="/admin/produtos"
                className="font-semibold text-base flex items-center gap-4 py-2 px-10"
              >
                <PackagePlus />
                Produtos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-4 pt-4 flex py-8">
        <button className="flex items-center gap-4 font-semibold text-base text-[--textOff] hover:text-[--pinkStrong] transition-colors py-2 px-10">
          <LogOut />
          Sair
        </button>
      </div>
    </div>
  );
}
