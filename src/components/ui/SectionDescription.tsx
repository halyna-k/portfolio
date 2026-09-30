export default function SectionDescription({ text, italic = false, className = '' }: {
  text: string;
  italic?: boolean;
  className?: string;
}) {
  return (
    <p className={`font-heading text-muted text-lg md:text-xl max-w-xl ${italic ? 'italic' : ''} ${className}`}>
      {text}
    </p>
  );
}
