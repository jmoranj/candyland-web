import { ToastProvider } from '@/components/Ui/ToastProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import AdminSideBar from '@/components/Sidebar/AdminSideBar';

const luckyBones = localFont({
  src: '../assets/fonts/LuckyBones-Bold.otf',
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
    <div>
      <ToastProvider />
      <div className="w-screen h-screen flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-64 md:min-w-64 h-full">
          <AdminSideBar />
        </div>
        <div className="flex-1 h-full overflow-auto">
          <div className="w-full h-full px-4 md:px-6  bg-[var(--adminBackground)]">{children}</div>
        </div>
      </div>
    </div>
  );
}
