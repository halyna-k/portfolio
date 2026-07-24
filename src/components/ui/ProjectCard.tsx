import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  const isAllProjects = project.id === 'all-projects';

  return (
    <Link
      href={project.href}
      target={project.isExternal ? '_blank' : undefined}
      rel={project.isExternal ? 'noopener noreferrer' : undefined}
      className="group flex flex-col justify-between p-8 bg-bg-elevated border border-border rounded-sm hover:border-accent hover:-translate-y-1 hover:shadow-xl hover:bg-bg-elevated/40 transition-all"
    >
      <div className="flex flex-col gap-3">
        <span className="text-accent text-sm">{project.num}</span>
        <h3 className="font-heading text-2xl">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {!isAllProjects && project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
