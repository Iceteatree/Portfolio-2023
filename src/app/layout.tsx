import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
