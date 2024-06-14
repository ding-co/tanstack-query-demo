import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="text-center text-xl font-semibold mb-6 leading-5 text-eclipse-950">
        TO-DO List Demo App with Tanstack Query
      </header>
      {children}
    </>
  );
}
