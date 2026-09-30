import Container from '@/components/layout/Container';
import SectionLabel from '@/components/ui/SectionHeading';
import ProjectsGrid from '@/components/projects/ProjectsList';
import LinkInternal from '@/components/ui/InternalLink';

export default function FeaturedProjects() {
  return (
    <Container as="section" className="py-16 md:py-24 border-t border-border">
      <SectionLabel className="mb-8">Selected projects</SectionLabel>
      <ProjectsGrid variant="featured" />
      <div className="mt-10">
        <LinkInternal href="/projects">All projects</LinkInternal>
      </div>
    </Container>
  );
}
