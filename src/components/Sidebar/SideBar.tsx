'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function SideBar() {
  const pathname = usePathname()
  const [isSidebarHidden, setIsSidebarHidden] = useState(false)

  const isActive = (href: string) => pathname === href

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden)
  }

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
      >
        {isSidebarHidden ? '>' : '<'}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0
        w-64 min-h-screen bg-pink-50 shadow-lg
        transition-transform duration-300 ease-in-out
        md:translate-x-0
        z-10
        ${isSidebarHidden ? '-translate-x-full' : 'translate-x-0'}
      `}
      >
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
                  ${isActive('/') ? 'bg-pink-200 text-pink-900' : 'text-pink-800 hover:bg-pink-100'}`}
              >
                Cakes
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-candyland font-candyland-bold text-xl rounded flex items-center px-4 py-2 text-pink-800 hover:bg-pink-100 transition-colors
                  ${isActive('/contact') ? 'bg-pink-200 text-pink-900' : 'text-pink-800 hover:bg-pink-100'}`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}
