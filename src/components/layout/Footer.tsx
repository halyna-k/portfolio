import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="px-16 py-8 border-t border-border">
      <div className="flex items-center justify-between">
        <Link
          href="/contact"
          className="text-muted text-sm hover:text-accent transition-colors"
        >
          Contact
        </Link>
        <div className="flex items-center text-muted text-sm gap-3">
          <span className="text-sm">
            <Logo size="text-sm" />
          </span>
          <span className="border-l border-border pl-3">&copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
