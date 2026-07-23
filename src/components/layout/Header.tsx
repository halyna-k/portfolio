import Logo from '@/components/ui/Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-16 py-8 border-b border-border">
      <Logo />
      <Nav />
    </header>
  );
}
