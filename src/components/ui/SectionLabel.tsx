export default function SectionLabel({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`block font-body text-muted text-sm tracking-[2px] uppercase ${className}`}>
      {children}
    </span>
  );
}
