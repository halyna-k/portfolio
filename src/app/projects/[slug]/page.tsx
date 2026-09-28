import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { Back, Container, LinkExternal, PlaceholderNote, ProjectImagePlaceholder } from '@/components';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const sections: { label: string; content?: string }[] = [
    { label: 'Problem', content: project.problem },
    { label: 'Solution', content: project.solution },
    { label: 'Results', content: project.results },
  ];

  return (
    <article>
      <Back href="/projects" label="Projects" />
      <ProjectImagePlaceholder label={project.index} />

      <Container as="section" className="pt-10 md:pt-16 pb-8">
        <span className="block text-accent text-sm mb-4">{project.index}</span>
        <h1 className="font-heading text-4xl md:text-5xl mb-6">{project.title}</h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && <LinkExternal href={project.liveUrl}>Live Demo</LinkExternal>}
          {project.githubUrl && <LinkExternal href={project.githubUrl} variant="secondary">GitHub</LinkExternal>}
        </div>
      </Container>

      <Container as="section" className="py-8 flex flex-col gap-10 max-w-3xl">
        {sections.map((s) => (
          <div key={s.label}>
            <h2 className="font-heading text-2xl mb-3">{s.label}</h2>
            {s.content ? (
              <p className="text-muted leading-relaxed">{s.content}</p>
            ) : (
              <PlaceholderNote />
            )}
          </div>
        ))}

        {project.stack.length > 0 && (
          <div>
            <h2 className="font-heading text-2xl mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
