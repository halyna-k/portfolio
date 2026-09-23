import { Back, ProjectsGrid } from "@/components";

export default function ProjectsPage() {
  return (
    <>
      <Back href="/" label="Home" />
      <ProjectsGrid variant="all" />
    </>
  );
}
