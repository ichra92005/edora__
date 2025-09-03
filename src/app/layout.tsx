import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Bellefair, Barlow_Condensed } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Edora Library',
  description: 'Your personal gateway to a world of books.',
};

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bellefair',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-barlow-condensed',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
