import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { cn } from '@/lib/utils';
import Providers from './providers';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'Tanstack Query Demo App',
  description: 'TO-DO List Demo App with Tanstack Query',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          'w-full min-h-screen font-sans antialiased leading-none disable-blur overflow-x-clip bg-sisal-300',
          notoSansKR.variable
        )}
        suppressHydrationWarning={true}
      >
        <div className="container flex flex-col py-8 px-6 my-0 mx-auto">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
