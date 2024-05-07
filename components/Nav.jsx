'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Nav() {
  // determine the current page with hook
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex items-center h-16 border-b bg-background px-6">
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            'text-muted-foreground transition-colors hover:text-foreground',
            { 'text-foreground': pathname === '/' }
          )}
        >
          Home
        </Link>
        <Link
          href="playground"
          className={cn(
            'text-muted-foreground transition-colors hover:text-foreground',
            { 'text-foreground': pathname === '/playground' }
          )}
        >
          Playground
        </Link>
        <Link
          href="settings"
          className={cn(
            'text-muted-foreground transition-colors hover:text-foreground',
            { 'text-foreground': pathname === '/settings' }
          )}
        >
          Einstellungen
        </Link>
      </nav>
    </header>
  );
}
