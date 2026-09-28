import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Back({ href = '/', label = 'Back' }: { href?: string; label?: string }) {
  return (
    <Container>
      <Link
        href={href}
        className="inline-flex items-center gap-1 py-6 md:py-8 text-accent text-sm hover:text-accent-hover transition-colors"
      >
        <span aria-hidden="true">&larr;</span>
        <span>{label}</span>
      </Link>
    </Container>
  );
}
