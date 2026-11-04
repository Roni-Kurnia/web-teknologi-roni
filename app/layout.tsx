import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Web Teknologi - UIA',
  description: 'Pembelajaran Web Teknologi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}