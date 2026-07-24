import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/content/projects';

export default function ProjectsGrid() {
  const [row1, row2] = [projects.slice(0, 2), projects.slice(2, 4)];

  return (
    <section className="px-16 py-24">
      <span className="block text-muted text-sm tracking-[2px] uppercase mb-12">
        Selected Projects
      </span>

      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-[1.4fr_1fr] gap-6">
          {row1.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {row2.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
