export default function ProjectImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-bg-elevated via-bg to-bg-elevated border-b border-border flex items-center justify-center">
      <span className="font-heading text-5xl text-accent/30 select-none">
        {label}
      </span>
    </div>
  );
}
