import Link from "next/link";

export default function Logo({ size = 'text-lg' }: { size?: string }) {
  return (
    <Link
      href="/"
      className={`${size} font-heading transition-colors hover:text-accent`}
    >
      H K
    </Link>
  );
}
