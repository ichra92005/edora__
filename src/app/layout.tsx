import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import { Cairo, Amiri, Tajawal } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Nexus Library',
  description: 'Your personal gateway to a world of books.',
};

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <head>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased dark">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
