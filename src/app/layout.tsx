import QueryProvider from '@/Providers/QueryProvider';
import { ToastProvider } from "@/components/Ui/ToastProvider";
import { FilterProvider } from '@/context/FilterContext';
import OrderProvider from '@/context/OrderContext';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Sidebar from '@/components/Sidebar/SideBar';

const luckyBones = localFont({
  src: './assets/fonts/LuckyBones-Bold.otf',
  variable: '--font-lucky-bones',
  weight: '700',
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Candyland',
  description: 'Thought and coded by sons of @jmoranj',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={luckyBones.variable}>
      <body
        className={`${luckyBones.variable} antialiased font-sans bg-foreground`}
      >
        <QueryProvider>
          <FilterProvider>
            <ToastProvider />
            <OrderProvider>
              <div className="w-screen h-screen flex flex-col md:flex-row">
                {/* Sidebar - Hidden on mobile, fixed width on desktop */}
                <div className='hidden md:flex md:w-64 md:min-w-64 h-full'>
                  <Sidebar />
                </div>

                {/* Main content area - Full width on mobile, remaining space on desktop */}
                <div className='flex-1 h-full overflow-auto'>
                  <div className='w-full h-full px-4 md:px-6'>
                    {children}
                  </div>
                </div>
              </div>
            </OrderProvider>
          </FilterProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
