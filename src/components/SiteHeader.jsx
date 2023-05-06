// inspired by https://github.com/shadcn/next-template
import MainNav from '@/components/MainNav';

export default function SiteHeader() {
  const navItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blockpläne',
      href: '/blockplan',
    },
    {
      title: 'Screen',
      href: '/screen',
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={navItems} />
      </div>
    </header>
  );
}
