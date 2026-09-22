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
        <div className="flex items-center text-sm gap-3">
          <Logo size="text-sm"/>
          <span className="border-l border-border text-muted pl-3">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
