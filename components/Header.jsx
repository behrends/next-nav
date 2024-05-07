'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const appRoutes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/playground',
    label: 'Playground',
  },
  {
    href: '/settings',
    label: 'Einstellungen',
  },
];

export default function Header() {
  // determine the current page with hook
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex items-center h-16 border-b bg-background px-6">
      <nav className="flex items-center gap-6 text-sm font-medium">
        {appRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-muted-foreground transition-colors hover:text-foreground',
              { 'text-foreground': route.href === pathname }
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
