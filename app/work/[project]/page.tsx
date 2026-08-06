import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/CaseStudyHero";
import FactGrid from "@/components/FactGrid";
import CaseStudySection from "@/components/CaseStudySection";
import MediaFrame from "@/components/MediaFrame";
import ProcessTimeline from "@/components/ProcessTimeline";
import InterviewPanel from "@/components/InterviewPanel";
import GuidelineList from "@/components/GuidelineList";
import Scribble from "@/components/Scribble";
import { projects, type ProjectImage } from "@/lib/projects";

type SectionVariant = "challenge" | "process" | "outcome";

type SectionDef = {
  variant: SectionVariant;
  heading: string;
  content?: string;
  images: ProjectImage[];
};

export default async function Page(props: PageProps<"/work/[project]">) {
  const { project: slug } = await props.params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    notFound();
  }

  const sectionDefs: SectionDef[] = [
    {
      variant: "challenge",
      heading: "Challenge",
      content: project.challenge,
      images: project.images.filter((image) => image.section === "challenge"),
    },
    {
      variant: "process",
      heading: "Process",
      content: project.process,
      images: project.images.filter((image) => image.section === "process"),
    },
    {
      variant: "outcome",
      heading: "Outcome",
      content: project.outcome,
      images: project.images.filter((image) => image.section === "outcome"),
    },
  ];

  const sections = sectionDefs.filter(
    (section): section is SectionDef & { content: string } =>
      Boolean(section.content),
  );

  const unassignedImages = project.images.filter((image) => !image.section);

  return (
    <main className="flex flex-col gap-16 pb-16">
      <CaseStudyHero project={project} />

      <div className="mx-auto w-full max-w-5xl px-4">
        <FactGrid
          role={project.role}
          context={project.context}
          timeline={project.timeline}
          tools={project.tools}
          deliverables={project.deliverables}
        />
      </div>

      {sections.map((section, index) => (
        <div key={section.variant} className="flex flex-col gap-16">
          <CaseStudySection
            kicker={String(index + 1).padStart(2, "0")}
            heading={section.heading}
            content={section.content}
            variant={section.variant}
            images={section.images}
            sketchbook={project.sketchbook}
            modelSlot={
              section.variant === "process" && project.processTimeline ? (
                <ProcessTimeline stages={project.processTimeline} />
              ) : undefined
            }
          />

          {section.variant === "process" && project.interviewPanel ? (
            <div className="mx-auto w-full max-w-5xl px-4">
              <InterviewPanel
                groups={project.interviewPanel.groups}
                note={project.interviewPanel.note}
              />
            </div>
          ) : null}

          {section.variant === "process" && project.processFindings ? (
            <div className="mx-auto w-full max-w-5xl px-4">
              <p>{project.processFindings}</p>
            </div>
          ) : null}

          {section.variant === "outcome" && project.guidelines ? (
            <div className="mx-auto w-full max-w-5xl px-4">
              <GuidelineList items={project.guidelines} />
            </div>
          ) : null}
        </div>
      ))}

      {project.sketchbook ? (
        <div className="mx-auto w-full max-w-5xl px-4">
          <Scribble className="text-halo w-fit -rotate-1 font-handwritten text-2xl text-highlight">
            crossing my fingers that this will exist in the future!
          </Scribble>
        </div>
      ) : null}

      {unassignedImages.length > 0 ? (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">
          <h2 className="font-display text-h2 text-ink">Additional images</h2>
          <div className="flex flex-col gap-6">
            {unassignedImages.map((image) => (
              <MediaFrame key={image.src} image={image} />
            ))}
          </div>
        </div>
      ) : null}
    </main>
  );
}
