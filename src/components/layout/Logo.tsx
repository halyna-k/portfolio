import Link from 'next/link';

export default function Logo({ size = 'text-lg' }: { size?: string }) {
  return (
    <Link href="/" aria-label="Halyna Kozlovska, home" className={`${size} font-heading flex items-center gap-[3px] transition-colors hover:text-muted`}>
      H
      <span aria-hidden="true" className="text-accent-text text-[0.7em]">{"\u2715"}</span>
      K
    </Link>
  );
}
