export default function ExternalLink({ href, children, variant = 'primary' } : {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const styles = variant === 'primary'
    ? 'border-accent text-accent-text hover:bg-accent hover:text-text'
    : 'border-border text-muted hover:border-accent hover:text-text';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block border rounded-sm px-4 py-3 text-sm md:text-base transition-colors ${styles}`}
    >
      {children} <span aria-hidden="true">{"\u2197"}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
