import { ProjectSectionCard } from "./ProjectSectionCard";
import { ProjectSectionInfo } from "./ProjectSectionInfo";
import { projectCards } from "./data";

export const ProjectSection = () => {
  return (
    <section className="space-y-6 px-4 py-20 md:px-12">
      <ProjectSectionInfo />
      <div className="grid place-content-center gap-8 sm:grid-cols-3">
        {projectCards.map((project, idx) => (
          <ProjectSectionCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};
