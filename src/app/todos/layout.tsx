import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen p-6 flex flex-col border border-solid">
      <header className="text-center">
        <h1 className="text-xl text-macaroni-and-cheese-700">
          TO-DO List Demo App with Tanstack Query
        </h1>
      </header>
      {children}
    </div>
  );
}
