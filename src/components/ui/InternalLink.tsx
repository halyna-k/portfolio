import Link from 'next/link';

export default function InternalLink({ href, children, variant = 'primary' } : {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const styles = variant === 'primary'
  ? 'text-accent-text hover:text-text'
  : 'border border-accent rounded-sm px-7 py-3.5 text-accent-text hover:bg-accent hover:text-text';

  return (
    <Link
      href={href}
      className={`inline-block text-base md:text-lg transition-colors ${styles}`}
    >
      {children} <span aria-hidden="true">{"\u2192"}</span>
    </Link>
  );
}
