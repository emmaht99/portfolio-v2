import {
  projects,
  type InterviewPanelData,
  type ProcessStage,
  type Project,
  type ProjectGuideline,
  type ProjectImage,
} from "@/lib/projects";
import {
  projectTranslations,
  type ProjectImageTranslation,
  type ProjectTranslation,
} from "@/lib/projects.no";
import type { Locale } from "./config";

function localizeImage(
  image: ProjectImage,
  t: ProjectImageTranslation | undefined,
): ProjectImage {
  if (!t) return image;
  return {
    ...image,
    alt: t.alt ?? image.alt,
    caption: t.caption ?? image.caption,
    sideNote: t.sideNote ?? image.sideNote,
    afterHeading: t.afterHeading ?? image.afterHeading,
    annotations: image.annotations?.map((annotation, index) => {
      const text = t.annotations?.[index];
      return text ? { ...annotation, text } : annotation;
    }),
  };
}

function localizeImages(
  images: ProjectImage[],
  translations: ProjectTranslation["images"],
): ProjectImage[] {
  if (!translations) return images;
  return images.map((image) => localizeImage(image, translations[image.src]));
}

function localizeProcessTimeline(
  stages: ProcessStage[] | undefined,
  translations: ProjectTranslation["processTimeline"],
): ProcessStage[] | undefined {
  if (!stages || !translations) return stages;
  return stages.map((stage, index) => {
    const t = translations[index];
    if (!t) return stage;
    return { ...stage, label: t.label, points: t.points, note: t.note ?? stage.note };
  });
}

function localizeInterviewPanel(
  panel: InterviewPanelData | undefined,
  translations: ProjectTranslation["interviewPanel"],
): InterviewPanelData | undefined {
  if (!panel || !translations) return panel;
  return {
    ...panel,
    note: translations.note ?? panel.note,
    headingAnchor: translations.headingAnchor ?? panel.headingAnchor,
    groups: panel.groups.map((group, index) => {
      const t = translations.groups[index];
      if (!t) return group;
      return { ...group, title: t.title, points: t.points };
    }),
  };
}

function localizeGuidelines(
  guidelines: ProjectGuideline[] | undefined,
  translations: ProjectTranslation["guidelines"],
): ProjectGuideline[] | undefined {
  if (!guidelines || !translations) return guidelines;
  return guidelines.map((guideline, index) => {
    const t = translations[index];
    if (!t) return guideline;
    return { ...guideline, title: t.title, description: t.description };
  });
}

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") return project;

  const t = projectTranslations[project.slug];
  if (!t) return project;

  return {
    ...project,
    title: t.title ?? project.title,
    titleNote: t.titleNote ?? project.titleNote,
    description: t.description ?? project.description,
    role: t.role ?? project.role,
    context: t.context ?? project.context,
    timeline: t.timeline ?? project.timeline,
    tools: t.tools ?? project.tools,
    deliverables: t.deliverables ?? project.deliverables,
    challenge: t.challenge ?? project.challenge,
    process: t.process ?? project.process,
    processFindings: t.processFindings ?? project.processFindings,
    outcome: t.outcome ?? project.outcome,
    processTimeline: localizeProcessTimeline(project.processTimeline, t.processTimeline),
    interviewPanel: localizeInterviewPanel(project.interviewPanel, t.interviewPanel),
    guidelines: localizeGuidelines(project.guidelines, t.guidelines),
    coverImage: project.coverImage
      ? localizeImage(project.coverImage, t.coverImage)
      : project.coverImage,
    heroImage: project.heroImage
      ? localizeImage(project.heroImage, t.heroImage)
      : project.heroImage,
    images: localizeImages(project.images, t.images),
  };
}

export function getLocalizedProjects(locale: Locale): Project[] {
  return projects.map((project) => localizeProject(project, locale));
}

export function getLocalizedProject(slug: string, locale: Locale): Project | undefined {
  const project = projects.find((candidate) => candidate.slug === slug);
  return project ? localizeProject(project, locale) : undefined;
}
