import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects } from '@/content/projects';
import { chunk } from '@/lib/utils';

export default function ProjectsGrid({ variant = 'all' }: { variant?: 'featured' | 'all' }) {
  const visible = variant === 'featured' ? projects.filter((p) => p.featured) : projects;

  const featuredCard = visible.find((p) => p.size === 'large');
  const rest = visible.filter((p) => p.id !== featuredCard?.id);

  const firstRow = featuredCard ? [featuredCard, rest[0]].filter(Boolean) : rest.slice(0, 2);
  const remaining = featuredCard ? rest.slice(1) : rest.slice(2);
  const remainingRows = chunk(remaining, 2);

  if (variant === 'featured') {
    return (
      <section className="px-16 py-24">
        <SectionLabel className="mb-8">Selected Projects</SectionLabel>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-[1.4fr_1fr] gap-6">
            {firstRow.map((p) => p && <ProjectCard key={p.id} project={p} />)}
          </div>
          {remainingRows.map((row, i) => (
            <div key={i} className={`grid gap-6 ${row.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {row.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-block mt-12 text-accent text-sm hover:text-accent-hover transition-colors"
        >
          All Projects &rarr;
        </Link>
      </section>
    );
  }

  return (
    <section className="px-16 pb-24 flex flex-col gap-6">
      <h1 className="font-heading text-5xl mb-4">All Projects</h1>
      <p className="text-muted text-lg max-w-xl mb-10">
        A collection of my work, showcasing a range of projects that highlight my skills and expertise in various areas of development.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
