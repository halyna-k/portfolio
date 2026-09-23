export default function LinkExternal({ href, children, variant = 'primary' } : {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const styles = variant === 'primary'
      ? 'border-accent text-accent hover:bg-accent hover:text-bg'
      : 'border-border text-muted hover:border-accent hover:text-accent';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 border text-sm rounded-sm transition-colors ${styles}`}
    >
      {children} {"\u2197"}
    </a>
  );
}
