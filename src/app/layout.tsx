import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tanstack-query Demo App',
  description: 'TO DO List App with Tanstack-query',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
