import { projects } from '@/content/projects';
import { chunk } from '@/lib/utils';
import ProjectCard from './ProjectCard';

export default function ProjectsList({ variant = 'all' }: { variant?: 'featured' | 'all' }) {
  if (variant === 'all') {
    return (
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.id} className="flex"><ProjectCard project={p} /></li>
        ))}
      </ul>
    );
  }

  const featured = projects.filter((p) => p.featured);
  const lead = featured.find((p) => p.size === 'large');
  const rest = featured.filter((p) => p !== lead);
  const firstRow = lead ? [lead, ...rest.slice(0, 1)] : rest.slice(0, 2);
  const remainingRows = chunk(lead ? rest.slice(1) : rest.slice(2), 2);

  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
        {firstRow.map((p) => (
          <li key={p.id} className="flex"><ProjectCard project={p} /></li>
        ))}
      </ul>
      {remainingRows.map((row, i) => (
        <ul key={i} className={`grid grid-cols-1 gap-6 ${row.length === 2 ? 'md:grid-cols-2' : ''}`}>
          {row.map((p) => (
            <li key={p.id} className="flex"><ProjectCard project={p} /></li>
          ))}
        </ul>
      ))}
    </div>
  );
}
