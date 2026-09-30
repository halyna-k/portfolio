export default function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`block font-body text-muted text-sm tracking-[2px] uppercase ${className}`}>
      {children}
    </h2>
  );
}
