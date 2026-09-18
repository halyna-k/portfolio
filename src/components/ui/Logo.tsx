import Link from 'next/link';

export default function Logo({ size = 'text-lg' }: { size?: string }) {
  return (
    <Link href="/" className={`${size} font-heading flex items-center gap-0.75 transition-colors hover:text-muted`}
    >
      H
      <span className="text-accent text-[0.7em]">✕</span>
      K
    </Link>
  );
}
