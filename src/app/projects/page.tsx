import ProjectCard from "@/components/features/projects/ProjectCard";
import { mockProject2Details, mockProjectDetail } from "@/mock/projects";

export default function ProjectsPage() {
  const projects = [mockProjectDetail, mockProject2Details];
  return (
    <div className="container mx-auto mt-20 p-5">
      <h1 className="text-4xl font-bold pt-5 pb-3">Featured projects</h1>

      {/* Filter */}
      {/* <PillFilter /> */}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
