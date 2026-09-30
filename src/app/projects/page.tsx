import Container from "@/components/layout/Container";
import BackLink from "@/components/ui/BackLink";
import SectionDescription from "@/components/ui/SectionDescription";
import ProjectsList from "@/components/projects/ProjectsList";


export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <Container as="section" className="pb-16 md:pb-24">
    <BackLink href="/" label="Home" />
      <h1 className="font-heading text-4xl md:text-5xl mb-6">All projects</h1>
      <SectionDescription className="mb-10" text="Web apps and AI assistants I've built." />
      <ProjectsList variant="all" />
    </Container>
  );
}
