import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <Container as="section" className="pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24">
      <span className="block text-accent text-sm tracking-[2px] uppercase mb-6">
        React · TypeScript · AI Integration
      </span>
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-7">
        Building products where design meets AI
      </h1>
      <p className="text-muted text-base md:text-lg max-w-xl mb-10">
        Full-stack developer focused on React, TypeScript, and practical AI integration for real business problems.
      </p>
      <Link
        href="/projects"
        className="inline-block px-7 py-3.5 border border-accent text-accent text-sm rounded-sm hover:bg-accent hover:text-bg transition-colors"
      >
        View Projects
      </Link>
    </Container>
  );
}
