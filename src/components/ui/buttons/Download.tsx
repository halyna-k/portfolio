export default function Download({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 border border-accent text-accent text-sm rounded-sm hover:bg-accent hover:text-bg transition-colors"
    >
      {label}
    </a>
  );
}
