import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <Container as="header" className="flex items-center justify-between py-6 md:py-8 border-b border-border">
      <Logo />
      <Nav />
    </Container>
  );
}
