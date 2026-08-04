import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/CaseStudyHero";
import FactGrid from "@/components/FactGrid";
import ContentSection from "@/components/ContentSection";
import MediaFrame from "@/components/MediaFrame";
import { projects } from "@/lib/projects";

export default async function Page(props: PageProps<"/work/[project]">) {
  const { project: slug } = await props.params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
      <CaseStudyHero project={project} />

      <FactGrid
        role={project.role}
        context={project.context}
        timeline={project.timeline}
        tools={project.tools}
        deliverables={project.deliverables}
      />

      {project.challenge ? (
        <ContentSection heading="Challenge">{project.challenge}</ContentSection>
      ) : null}

      {project.process ? (
        <ContentSection heading="Process">{project.process}</ContentSection>
      ) : null}

      {project.outcome ? (
        <ContentSection heading="Outcome">{project.outcome}</ContentSection>
      ) : null}

      {project.images.length > 0 ? (
        <div className="flex flex-col gap-8">
          {project.images.map((image, index) => (
            <MediaFrame key={`${image.src}-${index}`} image={image} />
          ))}
        </div>
      ) : null}
    </main>
  );
}
