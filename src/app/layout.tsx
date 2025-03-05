import './globals.scss';

import React from 'react';
import { Montserrat } from 'next/font/google';
import './globals.scss';

import { Banner, Footer } from '@/components';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Banner />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
