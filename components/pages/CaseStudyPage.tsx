import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/CaseStudyHero";
import FactGrid from "@/components/FactGrid";
import CaseStudySection from "@/components/CaseStudySection";
import MediaFrame from "@/components/MediaFrame";
import ProcessTimeline from "@/components/ProcessTimeline";
import InterviewPanel from "@/components/InterviewPanel";
import GuidelineList from "@/components/GuidelineList";
import Scribble from "@/components/Scribble";
import type { ProjectImage } from "@/lib/projects";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocalizedProject, getLocalizedProjects } from "@/lib/i18n/localize-projects";

type SectionVariant = "challenge" | "process" | "outcome";

type SectionDef = {
  variant: SectionVariant;
  heading: string;
  content?: string;
  images: ProjectImage[];
};

type CaseStudyPageProps = {
  slug: string;
  locale: Locale;
};

export default function CaseStudyPage({ slug, locale }: CaseStudyPageProps) {
  const dict = getDictionary(locale);
  const project = getLocalizedProject(slug, locale);

  if (!project) {
    notFound();
  }

  const sectionDefs: SectionDef[] = [
    {
      variant: "challenge",
      heading: dict.caseStudy.challenge,
      content: project.challenge,
      images: project.images.filter((image) => image.section === "challenge"),
    },
    {
      variant: "process",
      heading: dict.caseStudy.process,
      content: project.process,
      images: project.images.filter((image) => image.section === "process"),
    },
    {
      variant: "outcome",
      heading: dict.caseStudy.outcome,
      content: project.outcome,
      images: project.images.filter((image) => image.section === "outcome"),
    },
  ];

  const sections = sectionDefs.filter(
    (section): section is SectionDef & { content: string } =>
      Boolean(section.content),
  );

  const unassignedImages = project.images.filter((image) => !image.section);

  const localizedProjects = getLocalizedProjects(locale);
  const currentIndex = localizedProjects.findIndex(
    (candidate) => candidate.slug === project.slug,
  );
  const nextProject = localizedProjects[(currentIndex + 1) % localizedProjects.length];

  // Interview panels inline themselves right after the subheading named by
  // interviewPanel.headingAnchor (translated per-locale in lib/projects.no.ts),
  // when the process copy has one; otherwise they fall back to sitting below
  // the whole process section, as before.
  const interviewsHeading = project.interviewPanel?.headingAnchor;
  const hasInterviewsHeading = interviewsHeading
    ? (project.process
        ?.split("\n\n")
        .some((chunk) => chunk.trim() === interviewsHeading) ?? false)
    : false;

  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col gap-16 pb-16">
      <CaseStudyHero project={project} locale={locale} />

      <div className="mx-auto w-full max-w-5xl px-4">
        <FactGrid
          role={project.role}
          context={project.context}
          timeline={project.timeline}
          tools={project.tools}
          deliverables={project.deliverables}
          locale={locale}
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
            panelAfterHeading={
              section.variant === "process" &&
              project.interviewPanel &&
              hasInterviewsHeading &&
              interviewsHeading
                ? {
                    [interviewsHeading]: (
                      <InterviewPanel
                        groups={project.interviewPanel.groups}
                        note={project.interviewPanel.note}
                      />
                    ),
                  }
                : undefined
            }
          />

          {section.variant === "process" &&
          project.interviewPanel &&
          !hasInterviewsHeading ? (
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
            {dict.caseStudy.sketchbookNote}
          </Scribble>
        </div>
      ) : null}

      {unassignedImages.length > 0 ? (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">
          <h2 className="font-display text-h2 text-ink">
            {dict.caseStudy.additionalImages}
          </h2>
          <div className="flex flex-col gap-6">
            {unassignedImages.map((image) => (
              <MediaFrame key={image.src} image={image} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mx-auto w-full max-w-5xl border-t border-neutral/20 px-4 pt-8">
        <div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={localizePath("/work", locale)}
            className="group inline-flex min-h-11 items-center gap-2 font-sans text-sm text-ink underline underline-offset-2 transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
            {dict.caseStudy.backToAllWorks}
          </Link>

          <Link
            href={localizePath(`/work/${nextProject.slug}`, locale)}
            className="group inline-flex min-h-11 items-center justify-end gap-3 self-end focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="flex flex-col items-end gap-0.5">
              <span className="text-meta text-neutral">
                {dict.caseStudy.nextProjectLabel}
              </span>
              <span className="font-display text-h3 text-ink transition-colors duration-200 group-hover:text-accent">
                {nextProject.title}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-ink transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
