import QueryProvider from '@/Providers/QueryProvider';
import Header from '@/components/Header/Header';
import OrderProvider from '@/context/OrderContext';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const luckyBones = localFont({
  src: './assets/fonts/LuckyBones-Bold.otf',
  variable: '--font-lucky-bones',
  weight: '700',
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Candyland',
  description: 'Thought and Code by @jmorangus',
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
          <OrderProvider>
            <div className="w-screen h-screen">
              <div className="flex justify-center">
                <header className="w-[90%] justify-center">
                  <Header />
                </header>
              </div>
            </div>
          </OrderProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
