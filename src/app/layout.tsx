import type { Metadata } from 'next';
import { Archivo, Bodoni_Moda } from 'next/font/google';
import '@/styles/globals.css';
import { Footer, Header } from '@/components';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-heading',
  style: ['normal', 'italic'],
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500','600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A portfolio website showcasing the work and projects of H.K.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${bodoniModa.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
