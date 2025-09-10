import SideBar from '@/components/Sidebar/SideBar'
import OrderProvider from '@/context/OrderContext'
import { ToastProvider } from "@/components/Ui/ToastProvider";
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const luckyBones = localFont({
  src: "./assets/fonts/LuckyBones-Bold.otf",
  variable: "--font-lucky-bones",
  weight: "700",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Candyland",
  description: "Thought and Code by @jmorangus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={luckyBones.variable}>
      <body className={`${luckyBones.variable} antialiased font-sans`}>
        <ToastProvider />
        <OrderProvider>
          <div className="flex">
            <SideBar />
            <main className="flex-1 transition-all duration-300 md:ml-64">
              {children}
            </main>
          </div>
        </OrderProvider>
      </body>
    </html>
  );
}
