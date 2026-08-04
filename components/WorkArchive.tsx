"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters, {
  type ProjectFilterCategory,
} from "@/components/ProjectFilters";
import type { Project } from "@/lib/projects";

type WorkArchiveProps = {
  projects: Project[];
};

export default function WorkArchive({ projects }: WorkArchiveProps) {
  const [selected, setSelected] = useState<ProjectFilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (selected === "All") return projects;
    return projects.filter((project) => project.category === selected);
  }, [projects, selected]);

  return (
    <div className="flex flex-col gap-8">
      <ProjectFilters
        selected={selected}
        onChange={setSelected}
        resultCount={filteredProjects.length}
      />

      {filteredProjects.length > 0 ? (
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} headingLevel="h2" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects match this category yet.</p>
      )}
    </div>
  );
}
