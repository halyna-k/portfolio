import Link from 'next/link';
import Container from '@/components/layout/Container';
import Logo from '@/components/layout/Logo';

export default function Footer() {
  return (
    <Container as="footer" className="py-6 md:py-8 border-t border-border">
      <div className="flex items-center justify-between">
        <Link
          href="/contact"
          className="text-muted text-sm hover:text-accent transition-colors"
        >
          Contact
        </Link>
        <div className="flex items-center text-sm gap-3">
          <Logo size="text-sm" />
          <span className="border-l border-border text-muted pl-3">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </Container>
  );
}
