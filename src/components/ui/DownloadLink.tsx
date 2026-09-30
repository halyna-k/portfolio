'use client';
import { useEffect, useRef, useState } from 'react';

export default function DownloadLink({ href, label }: { href: string; label: string }) {
  const [message, setMessage] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function handleClick() {
    clearTimeout(timer.current);
    setMessage('Download...');
    timer.current = setTimeout(() => setMessage(''), 4000);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <a
        href={href}
        download
        onClick={handleClick}
        className="inline-block px-6 py-3 border border-accent text-accent-text text-sm rounded-sm hover:bg-accent hover:text-text transition-colors"
      >
        {label}
      </a>
      <p role="status" className="min-h-5 text-sm text-muted">
        {message}
      </p>
    </div>
  );
}
