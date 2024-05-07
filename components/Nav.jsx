import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 flex items-center h-16 border-b bg-background px-6">
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link
          href="/"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="playground"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Playground
        </Link>
        <Link
          href="settings"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Einstellungen
        </Link>
      </nav>
    </header>
  );
}
