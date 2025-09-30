import QueryProvider from '@/Providers/QueryProvider';
import { ToastProvider } from "@/components/Ui/ToastProvider";
import { CategoryProvider } from '@/context/CategoryContext';
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
          <ToastProvider />
          <CategoryProvider>
            <OrderProvider>
              <div className="w-screen h-screen flex justify-center">
                {children}
              </div>
            </OrderProvider>
          </CategoryProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
