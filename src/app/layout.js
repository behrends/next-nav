import './globals.css';
import { Inter } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beispiel-App',
  description: 'Basierend auf Next.js und tailwindcss',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
