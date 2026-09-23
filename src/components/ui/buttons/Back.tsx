import Link from 'next/link';

export default function Back({ href = '/', label = 'Back' }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 w-fit px-16 py-8 text-accent text-sm hover:text-accent-hover transition-colors"
    >
      <span aria-hidden="true">&larr;</span>
      <span>{label}</span>
    </Link>
  );
}
