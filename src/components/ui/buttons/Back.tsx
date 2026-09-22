import Link from 'next/link';

export default function Back({ href = '/', label = '← Back' }: { href?: string; label?: string }) {
  return (
    <Link href={href} className="block px-16 py-8 text-accent text-sm hover:text-accent-hover transition-colors">
      {label}
    </Link>
  );
}
