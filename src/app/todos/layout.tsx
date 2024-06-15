import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="mb-6 text-center text-xl font-semibold leading-5 text-eclipse-950">
        TO-DO List Demo App with Tanstack Query
      </header>
      {children}
    </>
  );
}
