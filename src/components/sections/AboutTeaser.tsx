import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import { about } from '@/content/about';

export default function AboutTeaser() {
  return (
    <Container as="section" className="py-16 md:py-24 border-t border-border">
      <SectionLabel className="mb-8">About</SectionLabel>
      <p className="font-heading text-xl md:text-2xl italic leading-snug max-w-lg md:max-w-2xl mb-8">
        {about.hook}
      </p>
      <Link
        href="/about"
        className="inline-block px-7 py-3.5 border border-accent text-accent text-sm rounded-sm hover:bg-accent hover:text-bg transition-colors"
      >
        More about me →
      </Link>
    </Container>
  );
}
