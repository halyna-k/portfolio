import Link from 'next/link';
import { about } from '@/content/about';

export default function AboutTeaser() {
  return (
    <section className="px-16 py-24 border-t border-border">
      <p className="font-heading text-2xl italic max-w-3xl mb-8">
        {about.hook}
      </p>
      <Link
        href="/about"
        className="text-accent text-sm hover:text-accent-hover transition-colors"
      >
        More about me →
      </Link>
    </section>
  );
}
