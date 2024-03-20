import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dormakaba Frontend Coding Challenge',
  description: 'coding challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen bg-zinc-950 px-4 py-10 sm:p-24`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
