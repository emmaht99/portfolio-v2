// Structured project content model.
// Field shapes follow the Content Model defined in docs/REDESIGN_SPEC.md.
//
// Detail fields (year, description, coverImage, role, context, timeline,
// tools, deliverables, challenge, process, outcome, images, prototypeLink)
// are left empty or omitted for now — this repo does not yet contain the
// real case-study content for these projects. They must be filled in with
// actual project details before these entries are used on any page.

export type ProjectCategory =
  | "UX Design"
  | "Product Design"
  | "Visual Design"
  | "AI / Prototyping";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  year?: number;
  description?: string;
  coverImage?: ProjectImage;
  role?: string;
  context?: string;
  timeline?: string;
  tools: string[];
  deliverables: string[];
  challenge?: string;
  process?: string;
  outcome?: string;
  images: ProjectImage[];
  prototypeLink?: string;
}

export const projects: Project[] = [
  {
    title: "Skytsengel",
    slug: "skytsengel",
    category: "UX Design",
    tools: [],
    deliverables: [],
    images: [],
  },
  {
    title: "Caritas Fællesskab",
    slug: "caritas-faellesskab",
    category: "Product Design",
    tools: [],
    deliverables: [],
    images: [],
  },
  {
    title: "Deichman Wrapped",
    slug: "deichman-wrapped",
    category: "AI / Prototyping",
    tools: [],
    deliverables: [],
    images: [],
  },
  {
    title: "TMNDEF Wine Label",
    slug: "tmndef-wine-label",
    category: "Visual Design",
    tools: [],
    deliverables: [],
    images: [],
  },
];
