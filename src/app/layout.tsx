import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import './globals.css';
import Providers from './providers';

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
          'disable-blur min-h-screen w-full overflow-x-clip bg-sisal-300 font-sans leading-none antialiased',
          notoSansKR.variable,
        )}
        suppressHydrationWarning={true}
      >
        <div className="container mx-auto my-0 flex flex-col px-6 py-8">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
