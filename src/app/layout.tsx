import '@/styles/globals.css';
import { Inter, Roboto_Condensed } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Provider from './provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inter',
});
const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Alan K | Portfolio | 2023',
  description: "Alan's updated portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
      <Analytics />
    </html>
  );
}
