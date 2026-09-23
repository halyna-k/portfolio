import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      target={project.isExternal ? '_blank' : undefined}
      rel={project.isExternal ? 'noopener noreferrer' : undefined}
      className="group relative flex flex-col justify-between p-8 bg-bg-elevated border border-border rounded-sm overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-xl hover:bg-bg-elevated/40 transition-all"
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 -right-2 font-heading italic text-8xl text-border select-none pointer-events-none"
      >
        {project.index}
      </span>

      <div className="relative flex flex-col gap-3 max-w-[85%]">
        <span className="text-accent text-sm">
          {project.index}{project.year && ` · ${project.year}`}
        </span>
        <h3 className="font-heading text-2xl">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {project.stack.length > 0 && (
        <div className="relative mt-6">
          <div className="w-10 h-px bg-accent mb-4" />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs text-muted border border-border rounded-full px-2.5 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </Link>
  );
}
