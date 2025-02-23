'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <aside className="w-64 min-h-screen bg-pink-50 shadow-lg">
      <div className="pt-6 px-4 flex justify-center">
        <Image
          className="text-2xl font-bold text-pink-800"
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className={`font-candyland font-candyland-bold text-xl rounded flex items-center px-4 py-2 text-pink-800 hover:bg-pink-100 transition-colors
                ${
                  isActive('/')
                    ? 'bg-pink-200 text-pink-900'
                    : 'text-pink-800 hover:bg-pink-100'
                }`}
            >
              Cakes
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`font-candyland font-candyland-bold text-xl rounded flex items-center px-4 py-2 text-pink-800 hover:bg-pink-100 transition-colors
                ${
                  isActive('/contact')
                    ? 'bg-pink-200 text-pink-900'
                    : 'text-pink-800 hover:bg-pink-100'
                }`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
