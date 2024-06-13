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
          'max-w-[30rem] my-0 mx-auto min-h-screen bg-background font-sans antialiased',
          notoSansKR.variable
        )}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
