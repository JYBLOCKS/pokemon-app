import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ErrorBoundary } from './_error_handling';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hola</title>
        <script></script>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
