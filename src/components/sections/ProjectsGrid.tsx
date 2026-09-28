import Link from 'next/link';
import Container from '@/components/ui/Container';
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
      <Container as="section" className="py-16 md:py-24 border-t border-border">
        <SectionLabel className="mb-8">Selected Projects</SectionLabel>

        <div className="flex flex-col gap-6 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr] gap-6">
            {firstRow.map((p) => p && <ProjectCard key={p.id} project={p} />)}
          </div>
          {remainingRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 gap-6 ${row.length === 2 ? 'md:grid-cols-2' : ''}`}
            >
              {row.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-block mt-10 md:mt-12 text-accent text-sm hover:text-accent-hover transition-colors"
        >
          All Projects &rarr;
        </Link>
      </Container>
    );
  }

  return (
    <Container as="section" className="pb-16 md:pb-24 flex flex-col gap-6">
      <h1 className="font-heading text-4xl md:text-5xl mb-4">All Projects</h1>
      <p className="text-muted text-base md:text-lg max-w-xl mb-6 md:mb-10">
        A collection of my work, showcasing a range of projects that highlight my skills and expertise in various areas of development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Container>
  );
}
