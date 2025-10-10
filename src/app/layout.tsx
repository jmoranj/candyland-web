import { ToastProvider } from '@/components/Ui/ToastProvider';
import type { Metadata } from 'next';
import QueryProvider from '@/Providers/QueryProvider';
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
          <div className="w-screen h-screen flex flex-col md:flex-row">
            <div className="flex-1 h-full overflow-auto">
              <div className="w-full h-full">{children}</div>
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
