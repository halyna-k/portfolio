import Link from 'next/link';

export default function BackLink({ href = '/', label = 'Back' }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 py-6 md:py-8 text-accent-text hover:text-text text-sm transition-colors"
    >
      <span aria-hidden="true">&larr;</span>
      <span>{label}</span>
    </Link>
  );
}
