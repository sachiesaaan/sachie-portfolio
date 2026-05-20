import ProjectsGrid from "@/components/ProjectsGrid";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsHomePage() {
  return (
    <div data-screen-label="projects">
      <div className="page-title">Projects</div>
      <ProjectsGrid projects={PROJECTS} />
    </div>
  );
}
