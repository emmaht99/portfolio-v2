import type { ProjectCategory } from "@/lib/projects";
import type { Locale } from "./config";

export type Dictionary = {
  site: {
    titleTemplate: string;
    defaultTitle: string;
    description: string;
  };
  nav: {
    work: string;
    about: string;
    homeAriaLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  languageToggle: {
    switchToLabel: Record<Locale, string>;
  };
  footer: {
    tagline: string;
    backToTop: string;
    opensInNewTab: string;
  };
  home: {
    scribbleIntro: string;
    heroImageAlt: string;
    greeting: string;
    heroTitle: string;
    welcome: string;
    contactCta: string;
    scrollHint: string;
    featuredHeading: string;
  };
  work: {
    metaTitle: string;
    heading: string;
    intro: string;
    filterAriaLabel: string;
    all: string;
    noResults: string;
    viewCaseStudy: string;
    resultsFoundOne: string;
    resultsFoundOther: string;
    categories: Record<ProjectCategory, string>;
  };
  caseStudy: {
    challenge: string;
    process: string;
    outcome: string;
    backToAllWorks: string;
    nextProjectLabel: string;
    additionalImages: string;
    viewLivePrototype: string;
    tryItOut: string;
    peekCaption: string;
    sketchbookNote: string;
  };
  factGrid: {
    role: string;
    context: string;
    timeline: string;
    team: string;
    tools: string;
    deliverables: string;
  };
  contact: {
    metaTitle: string;
    sayHello: string;
    heading: string;
    intro: string;
    channels: { email: string; linkedin: string; github: string };
    joke: string;
  };
};

const en: Dictionary = {
  site: {
    titleTemplate: "%s — Emma H. Tandle",
    defaultTitle: "Emma H. Tandle — UX & Product Designer",
    description:
      "Portfolio of Emma H. Tandle, a UX & Product Designer exploring research-driven digital experiences, interaction design, and emerging technology.",
  },
  nav: {
    work: "Work",
    about: "About",
    homeAriaLabel: "Emma H. Tandle — Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  languageToggle: {
    switchToLabel: {
      en: "Switch to English",
      no: "Switch to Norwegian",
    },
  },
  footer: {
    tagline: "UX & Product Designer exploring research-driven digital experiences.",
    backToTop: "Back to top",
    opensInNewTab: " (opens in a new tab)",
  },
  home: {
    scribbleIntro:
      "I design digital experiences that connect people, communities, and technology.",
    heroImageAlt:
      "Emma standing in a gallery, looking at a sculpture beside a wall of windows overlooking trees",
    greeting: "Hi my name is Emma and I am a",
    heroTitle: "UX & Product Designer",
    welcome: "Welcome to my portfolio!",
    contactCta: "Contact",
    scrollHint: "scroll down to see my work",
    featuredHeading: "Featured Projects",
  },
  work: {
    metaTitle: "Work",
    heading: "Work",
    intro:
      "A complete archive of my UX and product design work — filter by category to explore a specific area of practice.",
    filterAriaLabel: "Filter projects by category",
    all: "All",
    noResults: "No projects match this category yet.",
    viewCaseStudy: "View case study",
    resultsFoundOne: "1 project found",
    resultsFoundOther: "{count} projects found",
    categories: {
      "UX Design": "UX Design",
      "Product Design": "Product Design",
      "Visual Design": "Visual Design",
      "AI / Prototyping": "AI / Prototyping",
    },
  },
  caseStudy: {
    challenge: "Challenge",
    process: "Process",
    outcome: "Outcome",
    backToAllWorks: "Back to All Works",
    nextProjectLabel: "Next project",
    additionalImages: "Additional images",
    viewLivePrototype: "View live prototype",
    tryItOut: "try it out!",
    peekCaption: "a little peek into the experience",
    sketchbookNote: "crossing my fingers that this will exist in the future!",
  },
  factGrid: {
    role: "Role",
    context: "Context",
    timeline: "Timeline",
    team: "Team",
    tools: "Tools",
    deliverables: "Deliverables",
  },
  contact: {
    metaTitle: "Contact",
    sayHello: "say hello",
    heading: "Let's talk",
    intro:
      "Whether you have a project in mind, a question about my work, or just want to say hi, I'd love to hear from you.",
    channels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    joke: "As a former barista, I will never say no to a cup of coffee *wink wink*",
  },
};

const no: Dictionary = {
  site: {
    titleTemplate: "%s — Emma H. Tandle",
    defaultTitle: "Emma H. Tandle — UX- og produktdesigner",
    description:
      "Portefølje til Emma H. Tandle, en UX- og produktdesigner som utforsker forskningsdrevne digitale opplevelser, interaksjonsdesign og ny teknologi.",
  },
  nav: {
    work: "Prosjekter",
    about: "Om meg",
    homeAriaLabel: "Emma H. Tandle — Hjem",
    openMenu: "Åpne meny",
    closeMenu: "Lukk meny",
  },
  languageToggle: {
    switchToLabel: {
      en: "Bytt til engelsk",
      no: "Bytt til norsk",
    },
  },
  footer: {
    tagline: "UX- og produktdesigner som utforsker forskningsdrevne digitale opplevelser.",
    backToTop: "Til toppen",
    opensInNewTab: " (åpnes i ny fane)",
  },
  home: {
    scribbleIntro:
      "Jeg designer digitale opplevelser som knytter sammen mennesker, fellesskap og teknologi.",
    heroImageAlt:
      "Emma står i et galleri og ser på en skulptur ved siden av en vegg med vinduer og utsikt over trær",
    greeting: "Hei, jeg heter Emma og jeg er en",
    heroTitle: "UX- og produktdesigner",
    welcome: "Velkommen til porteføljen min!",
    contactCta: "Kontakt",
    scrollHint: "scroll ned for å se arbeidet mitt",
    featuredHeading: "Utvalgte prosjekter",
  },
  work: {
    metaTitle: "Prosjekter",
    heading: "Prosjekter",
    intro:
      "Et komplett arkiv over UX- og produktdesignarbeidet mitt — filtrer etter kategori for å utforske et bestemt fagområde.",
    filterAriaLabel: "Filtrer prosjekter etter kategori",
    all: "Alle",
    noResults: "Ingen prosjekter matcher denne kategorien ennå.",
    viewCaseStudy: "Se casestudien",
    resultsFoundOne: "1 prosjekt funnet",
    resultsFoundOther: "{count} prosjekter funnet",
    categories: {
      "UX Design": "UX-design",
      "Product Design": "Produktdesign",
      "Visual Design": "Visuell design",
      "AI / Prototyping": "KI / Prototyping",
    },
  },
  caseStudy: {
    challenge: "Utfordring",
    process: "Prosess",
    outcome: "Resultat",
    backToAllWorks: "Tilbake til alle prosjekter",
    nextProjectLabel: "Neste prosjekt",
    additionalImages: "Flere bilder",
    viewLivePrototype: "Se prototypen live",
    tryItOut: "prøv den!",
    peekCaption: "et lite innblikk i opplevelsen",
    sketchbookNote: "krysser fingrene for at dette blir virkelighet en dag!",
  },
  factGrid: {
    role: "Rolle",
    context: "Kontekst",
    timeline: "Tidslinje",
    team: "Team",
    tools: "Verktøy",
    deliverables: "Leveranser",
  },
  contact: {
    metaTitle: "Kontakt",
    sayHello: "si hei",
    heading: "La oss prate",
    intro:
      "Enten du har et prosjekt i tankene, et spørsmål om arbeidet mitt, eller bare vil si hei, hører jeg gjerne fra deg.",
    channels: { email: "E-post", linkedin: "LinkedIn", github: "GitHub" },
    joke: "Som tidligere barista sier jeg aldri nei til en kopp kaffe *blunk blunk*",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, no };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
