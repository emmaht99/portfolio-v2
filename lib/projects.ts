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

export interface ProjectImageAnnotation {
  text?: string;
  className: string;
  size?: "base" | "lg" | "xl";
  icon?: "book" | "lightbulb" | "thought";
  arrowClassName?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  annotations?: ProjectImageAnnotation[];
  section?: "challenge" | "process" | "outcome";
  size?: "hero" | "large" | "standard" | "wide" | "square" | "phone";
  group?: string;
  afterHeading?: string;
  pairWithText?: boolean;
  sideNote?: string;
  compact?: boolean;
}

export interface ProcessStage {
  label: string;
  icon: "search" | "chat" | "lines" | "lightbulb";
  points: string[];
  note?: string;
}

export interface InterviewGroup {
  title: string;
  icon: "person" | "badge" | "heart";
  points: string[];
}

export interface ProjectGuideline {
  code: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  year?: number;
  description?: string;
  coverImage?: ProjectImage;
  heroImage?: ProjectImage;
  titleNote?: string;
  sketchbook?: boolean;
  role?: string;
  context?: string;
  timeline?: string;
  tools: string[];
  deliverables: string[];
  challenge?: string;
  process?: string;
  processFindings?: string;
  outcome?: string;
  processTimeline?: ProcessStage[];
  interviewPanel?: { groups: InterviewGroup[]; note?: string };
  guidelines?: ProjectGuideline[];
  images: ProjectImage[];
  prototypeLink?: string;
}

export const projects: Project[] = [
  {
    title: "Skytsengel",
    slug: "skytsengel",
    category: "UX Design",
    year: 2024,
    description:
      "A redesign of Dansk Stalking Center's Skytsengel app, transforming it from a safety tool into a broader support ecosystem for people experiencing stalking.",

    titleNote: "translates to “guardian angel”",

    prototypeLink:
      "https://www.figma.com/proto/8zc4vgDHYOjZgGzaBzTArJ/Ny-Skytsengel-Prototype?node-id=0-1",

    coverImage: {
      src: "/projects/skytsengel/mockup.png",
      alt: "Mockup of the redesigned Skytsengel app interface",
    },

    heroImage: {
      src: "/projects/skytsengel/mockup-hero.png",
      alt: "Mockup of the redesigned Skytsengel app interface",
      annotations: [
        {
          text: "custom redesigned logo",
          className: "bottom-[16%] left-[6%] max-w-[7rem] rotate-[-24deg]",
        },
        {
          text: "home page",
          className: "bottom-[22%] right-[14%] max-w-[6rem] rotate-[-8deg] text-right",
        },
      ],
    },

    role:
      "UX Researcher & Designer — team of five, focused on interviews, analysis, and prototyping.",

    context: "Master's course project with Dansk Stalking Center.",

    timeline: "Master's 3rd semester, alongside three parallel course projects.",
  
    tools: [
      "Figma",
      "User Interviews",
      "Brainwriting",
      "Qualitative Analysis",
      "UX Research"
    ],

    deliverables: [
      "Interview guide",
      "Research analysis",
      "UX concept",
      "Interactive Figma prototype"
    ],

    challenge:
      "Skytsengel was originally designed to help people experiencing stalking quickly alert their personal network during emergencies and document incidents for police purposes. Through research, we discovered an important limitation: many people affected by stalking don't have an existing network to rely on — a group the app's current design doesn't account for.\n\nOur problem statement became: How can Skytsengel ensure that stalking-affected people without a network feel safe and cared for, while still offering guidance and information?",

    process:
      "We worked iteratively, moving back and forth between the process stages. The early interviews reshaped our problem statement, which sent us back to define and empathize again. Because of the sensitive nature of the topic, we kept every interview structure flexible and adapted each conversation to the participant's comfort level.\n\nA poster presentation midway through pushed us to sharpen an initially broad problem statement into its final, more specific form. We visualized the sharpened concept as a clickable Figma prototype and presented it to Dansk Stalking Center, our lecturers, and fellow students.",

    processFindings:
      "Across the interviews, three conflicts kept surfacing: isolation was a near-universal experience among stalking-affected people, most lacked real knowledge about what stalking is and how to respond to it, and Skytsengel's alarm-based approach risked giving a false sense of security. These three findings became the foundation for the redesigned concept.",

    outcome:
      "The final concept shifted Skytsengel from primarily being an emergency tool into a support ecosystem focused on three areas: emotional support, knowledge about stalking, and safe community connection.\n\nAlongside a redesigned app identity, the concept introduced daily supportive content and mindfulness exercises, an in-app library of educational content about stalking, moderated peer support groups, one-on-one chat with an advisor, and an improved calendar-based log for documenting incidents.\n\nThe prototype was presented to Dansk Stalking Center, who responded positively and highlighted that a solution like this could be valuable for supporting people affected by stalking. We also received critical feedback on privacy and data handling, which would need to be resolved before the concept could move beyond a prototype.\n\nThe project taught me the importance of precision and care when designing for sensitive situations. With more time, I would continue by testing the prototype with users and refining the functionality of the final product.",

    processTimeline: [
      {
        label: "Empathize",
        icon: "search",
        points: [
          "App critique and desktop research",
          "Introductory meeting with Dansk Stalking Center",
          "Early finding: stalking is systematic, not a single event",
        ],
      },
      {
        label: "Define",
        icon: "lines",
        points: [
          "Framing the problem from a user's perspective",
          "Initial problem statement drafted",
          "Iterating between defining and interviewing",
        ],
      },
      {
        label: "Interview & Ideation",
        icon: "chat",
        points: [
          "Interviews with police, a psychologist, and two informants",
          "Coding and categorizing interview data",
          "Brainwriting session to generate solution ideas",
        ],
      },
      {
        label: "Prototype & Test",
        icon: "lightbulb",
        points: [
          "Poster presentation, then a pivot to a sharper problem",
          "Clickable Figma prototype",
          "Presentation to Dansk Stalking Center",
        ],
      },
    ],

    interviewPanel: {
      note: "we talked to people with various roles, to ensure the final solution was a help to both victims of stalking and the professionals supporting them",
      groups: [
        {
          title: "Lived experience",
          icon: "person",
          points: [
            "Losing trust in others, including the police",
            "Isolating themselves out of fear",
          ],
        },
        {
          title: "Police",
          icon: "badge",
          points: [
            "What data police need for legal cases",
            "Use the app day-to-day — but call 112 in an emergency",
            "Alarm features can create a false sense of security",
          ],
        },
        {
          title: "Psychologist",
          icon: "heart",
          points: [
            "So many feel truly alone with it",
            "Who is responsible for guidance given inside the app?",
          ],
        },
      ],
    },

    images: [
      {
        src: "/projects/skytsengel/prototype-home.png",
        alt: "Home screen of the final Skytsengel prototype, with a daily supportive message and mindfulness content",
        section: "outcome",
        size: "phone",
        group: "Prototype screens",
      },
      {
        src: "/projects/skytsengel/prototype-knowledge.png",
        alt: "Knowledge about stalking section of the final Skytsengel prototype",
        section: "outcome",
        size: "phone",
        group: "Prototype screens",
      },
      {
        src: "/projects/skytsengel/prototype-groups.png",
        alt: "Moderated peer support group screen of the final Skytsengel prototype",
        section: "outcome",
        size: "phone",
        group: "Prototype screens",
      },
      {
        src: "/projects/skytsengel/prototype-log.png",
        alt: "Calendar-based incident log screen of the final Skytsengel prototype",
        section: "outcome",
        size: "phone",
        group: "Prototype screens",
      },
    ],
  },
  {
    title: "Caritas Fællesskab",
    slug: "caritas-faellesskab",
    category: "UX Design",
    year: 2025,
    description:
      "A Master's thesis exploring how digital technology can support Caritas Denmark's senior communities, translated into six design guidelines and a clickable prototype for a community platform.",

    coverImage: {
      src: "/projects/caritas-faellesskab/sign-in-mockup.png",
      alt: "Sign-in screen of the Caritas Fællesskab platform concept",
    },

    heroImage: {
      src: "/projects/caritas-faellesskab/sign-in-mockup.png",
      alt: "Sign-in screen of the Caritas Fællesskab platform concept",
      compact: true,
      annotations: [
        {
          text: "created an app after project end, to show Caritas how they could implement the guidelines we created",
          className: "top-[4%] right-[2%] max-w-[10rem] rotate-[2deg] text-right",
        },
      ],
    },

    role:
      "UX & Product Designer. Thesis with one partner, equal contribution throughout.",

    context: "Master's thesis with external partner Caritas Denmark.",

    timeline: "Spring 2025, IT University of Copenhagen.",

    tools: [
      "Design ethnography",
      "Semi-structured interviews",
      "Co-design workshops",
      "Figma",
      "Grounded theory coding",
    ],

    deliverables: [
      "Stakeholder analysis",
      "Six design guidelines",
      "Co-design workshop",
      "Clickable Figma prototype",
    ],

    challenge:
      "Caritas Denmark's senior communities meet in person: walking, crafting, gathering over coffee. But information about them lives scattered across Facebook, word of mouth, and paper flyers, with sign-up details often buried in comment threads. New and less-connected members were the ones who missed out.\n\nThe challenge was designing a digital platform that could ==fix that fragmentation without asking members to trade their physical community for a digital one==. Our problem statement: how can we tailor digital technology to support senior communities, while acknowledging that every community is unique?",

    process:
      "Fieldwork\n\nOver two months, we joined Caritas Ramblers' weekly walks and Caritas Krea's workshops as participants. We called our meetings conversations rather than interviews, held on participants' own terms, in their own environments, at their own pace.\n\nInterviews\n\nWe paired the fieldwork with semi-structured interviews across seven people, spanning Caritas Workers, Volunteers, and Participants, then coded the material with grounded theory to find patterns across both.\n\nCo-Design Workshop\n\nThe fieldwork left us with six hypotheses about what makes the community work. We tested them in a 90-minute workshop with four members and a Caritas coordinator, using picture cards, a value timeline, and scenario cards to get past small talk into what the community actually meant to people.\n\nChoosing a photo of a shared workshop table, one Krea member put it simply: “You don't always have a space in your daily life... coming to another place and being together, I think that's very important for the creative process.”",

    processFindings:
      "Three patterns stood out. Information had no single source of truth, spread thin across Facebook, word of mouth, and paper flyers. Members valued their freedom to come and go, choosing Caritas specifically for that flexibility: as one put it, “you can come and go as you please.” And despite relying on Facebook, several people actively avoided it, finding it more overwhelming than useful. Together, these patterns shaped the six guidelines below more than any single feature request could.",

    outcome:
      "The fieldwork and workshop converged on six tailored design guidelines for a unified Caritas platform: not a spec for an app, but a set of principles for keeping the existing community at the center of any digital solution.\n\nTo show how the guidelines could come together in practice, we designed Caritas Fællesskab, a clickable Figma prototype built directly on these six principles. It was presented to Caritas Denmark and members of both communities, who responded positively; Caritas is currently exploring the possibility of deploying the concept.\n\nA key learning was the importance of designing with communities rather than simply designing for them. The project strengthened my understanding of participatory design, ethical research, and building technology that respects relationships that already work.",

    processTimeline: [
      {
        label: "Fieldwork",
        icon: "search",
        points: [
          "Two months embedded in Caritas Ramblers and Caritas Krea",
          "Autoethnography: joining as members, not observers",
          "Conversations held on participants' own terms",
        ],
      },
      {
        label: "Interviews",
        icon: "chat",
        points: [
          "Semi-structured conversations with 7 community members",
          "Coded with grounded theory to surface shared patterns",
        ],
      },
      {
        label: "Co-Design Workshop",
        icon: "lines",
        points: [
          "Picture cards, a value timeline, and scenario cards",
          "4 participants and a Caritas coordinator, testing 6 hypotheses",
        ],
      },
      {
        label: "Guidelines",
        icon: "lightbulb",
        points: [
          "Findings translated into six tailored design guidelines",
          "Presented back to Caritas Denmark and community members",
        ],
      },
    ],

    interviewPanel: {
      note: "roles blur constantly: participants become volunteers, and volunteers stay participants",
      groups: [
        {
          title: "Caritas Workers",
          icon: "badge",
          points: [
            "Plan and coordinate every community",
            "Motivated by purpose and creating space for others",
          ],
        },
        {
          title: "Volunteers",
          icon: "heart",
          points: [
            "Guide the walks and creative workshops",
            "Contribute without expecting anything back",
          ],
        },
        {
          title: "Participants",
          icon: "person",
          points: [
            "Join for connection, not obligation",
            "Value being free to come and go as they please",
          ],
        },
      ],
    },

    guidelines: [
      {
        code: "G1",
        title: "One official platform",
        description:
          "Bring Facebook, word of mouth, and paper flyers into a single trusted, synced source.",
      },
      {
        code: "G2",
        title: "Support, don't replace",
        description:
          "Keep the platform a coordination layer for the physical community, not another feed to perform on.",
      },
      {
        code: "G3",
        title: "Minimize barriers",
        description:
          "Quick sign-up with just a name, email, and phone. No public profile required.",
      },
      {
        code: "G4",
        title: "Personalization",
        description:
          "Let members choose which activities and notifications actually reach them.",
      },
      {
        code: "G5",
        title: "Right time, right information",
        description:
          "Timely alerts before an activity; open space for suggestions and photos after.",
      },
      {
        code: "G6",
        title: "Designated spaces",
        description:
          "Separate, clearly labeled areas for sign-ups, suggestions, and photo sharing.",
      },
    ],

    prototypeLink:
      "https://www.figma.com/proto/mPl1AkUoDNWE7stMJSiN8K/Caritas-App?node-id=1-6&starting-point-node-id=1%3A6&t=8yJBzKvtpItpY2gV-1",

    images: [
      {
        src: "/projects/caritas-faellesskab/krea-workshop.jpg",
        alt: "Members of Caritas Krea decorating gingerbread cookies together at a shared table",
        caption: "A Caritas Krea session, one of the two communities studied through fieldwork",
        section: "process",
        size: "standard",
        afterHeading: "Fieldwork",
        pairWithText: true,
        sideNote:
          "learning the needs of the target group by embracing their environment is key to creating something useful",
      },
      {
        src: "/projects/caritas-faellesskab/workshop-timeline.jpg",
        alt: "Paper timeline from the co-design workshop, with sticky-note values placed along it and arrows showing before, during, and after an activity",
        caption: "Participants stretched their values across a timeline of before, during, and after an activity",
        section: "process",
        size: "hero",
        afterHeading: "Co-Design Workshop",
        annotations: [
          {
            icon: "thought",
            text: "all stakeholders putting our brains together and communicating our perspectives",
            size: "lg",
            className: "top-[4%] left-[102%] max-w-[10rem] rotate-[-2deg]",
          },
        ],
      },
      {
        src: "/projects/caritas-faellesskab/workshop-values.jpg",
        alt: "Collage of community photos with hand-written value labels on sticky notes, arranged in a bullseye pattern",
        caption: "The picture-card collage, with core community values placed at its center",
        section: "process",
        size: "large",
        group: "Workshop artifacts",
      },
      {
        src: "/projects/caritas-faellesskab/workshop-scenarios.jpg",
        alt: "Scenario cards from the co-design workshop, each posing a realistic situation and a follow-up question",
        caption: "Scenario cards used to surface unspoken norms, like who to ask before sharing a photo",
        section: "process",
        size: "standard",
        group: "Workshop artifacts",
      },
    ],
  },
  {
    title: "Deichman Wrapped",
    slug: "deichman-wrapped",
    category: "AI / Prototyping",
    year: 2025,
    description:
      "Deichman Wrapped is a self-initiated product concept exploring how public libraries can create more engaging digital experiences. Inspired by Spotify Wrapped, the project transforms library activity into a playful and personalized year-in-review experience.",
    coverImage: {
      src: "/projects/deichman-wrapped/cover.png",
      alt: "Deichman Wrapped title card reading “Ditt år i bøker” over a warm gradient background",
    },
    heroImage: {
      src: "/projects/deichman-wrapped/hero-collage.png",
      alt: "Three phone screens from Deichman Wrapped showing favorite genres, a thank-you message, and a reading statistic",
    },
    sketchbook: true,
    prototypeLink: "https://deichman-wrapped--emmaht99.replit.app/",
    role: "Product Designer & AI-Assisted Prototyper",
    context: "Self-initiated project for a public library",
    timeline: "Fall 2025",
    tools: [
      "Figma",
      "Figma Make",
      "Replit",
      "Claude Code",
      "AI-assisted prototyping",
    ],
    deliverables: [
      "Brand analysis",
      "UX concept",
      "Interaction design",
      "High-fidelity prototype",
      "Published web prototype",
    ],
    challenge:
      "How can I get people to want to use the library and make libraries feel relevant and engaging for the digital generation?\n\nInspired by the success of Spotify Wrapped, the project explored how personalized data storytelling could create curiosity, reflection, and emotional connection with a public institution.",
    process:
      "Research & Strategy\n\nI analyzed existing year-in-review experiences and explored why these formats create engagement. I also audited Deichman's visual identity and mission to ensure the concept felt like a natural extension of the existing brand.\n\nIdeation\n\nI explored which data points could create meaningful moments for users, moving beyond simple usage statistics toward more personal and playful reflections.\n\nDesign\n\nI created low-fidelity sketches to establish information hierarchy, interaction flow, and a clear data storytelling structure.\n\nPrototyping\n\nI developed the concept into a high-fidelity interactive prototype using Figma Make and continued experimentation in Replit, where I created and published a working demo. AI tools were used as design and development partners throughout the process.",
    outcome:
      "The outcome was a complete product concept and published prototype exploring how libraries can use personalization and data storytelling to increase engagement.\n\nThe project strengthened my understanding of designing for engagement, maintaining brand authenticity while creating something new, and using AI as a collaborative partner in the design and development process.",
    images: [
      {
        src: "/projects/deichman-wrapped/brand-posters.png",
        alt: "Existing Deichman library campaign posters, each addressed to a different reader",
        caption: "Deichman's existing “Kjære …” campaign posters",
        section: "process",
        size: "wide",
        group: "Existing Deichman identity",
        afterHeading: "Research & Strategy",
      },
      {
        src: "/projects/deichman-wrapped/brand-icons.png",
        alt: "Deichman's wayfinding icon system used across its libraries",
        caption: "Deichman's wayfinding icon system",
        section: "process",
        size: "square",
        group: "Existing Deichman identity",
        afterHeading: "Research & Strategy",
      },
      {
        src: "/projects/deichman-wrapped/research.png",
        alt: "Research board comparing year-in-review formats and brainstorming ideas for Deichman Wrapped",
        caption:
          "Mapping similar year-in-review formats and brainstorming what a library version could show",
        annotations: [
          {
            text: "the brainstorm",
            icon: "lightbulb",
            size: "xl",
            className: "top-2 left-2 -rotate-2",
          },
          {
            text: "familiar branding",
            className: "top-2 right-3 -rotate-2 text-right",
          },
          {
            text: "stats inspo",
            className: "top-[42%] left-2 rotate-1",
          },
          {
            text: "made many low-fidelity prototypes before finding out what works",
            className: "bottom-2 right-3 max-w-[12rem] rotate-1 text-right",
          },
        ],
        section: "process",
        size: "large",
      },
    ],
  },
  {
    title: "TMNDEF Wine Label",
    slug: "tmndef-wine-label",
    category: "Visual Design",
    year: 2024,
    description:
      "A custom wine label created for the release party of artist Kamilla Wigestrand's first single, 'Tekst meg når du er full'. The project translated the song's visual identity into a physical product experience.",
    coverImage: {
      src: "/projects/tmndef-wine-label/bottle-in-hand.png",
      alt: "The finished wine bottle with its custom label, held up at the release party",
    },
    role:
      "Visual Designer & Illustrator. I developed the illustration style, designed the wine label, created mockups, and produced the final physical product.",
    context:
      "A self-initiated gift project created for artist Kamilla Wigestrand's single release party. The goal was to create a personalized physical artifact that connected with the identity of the song and release event.",
    timeline:
      "Created in 2024 for the release of Kamilla Wigestrand's first single.",
    tools: ["Adobe Illustrator", "Canva", "Adobe Photoshop"],
    deliverables: [
      "Custom line-art illustration",
      "Wine label design",
      "Product mockups",
      "Physical printed wine bottle",
    ],
    challenge:
      "The challenge was transforming an existing cover image into a new visual expression that could work as a physical product while maintaining the connection to the original artwork and the identity of the song.",
    process:
      "Illustration\n\nI traced elements from the original cover image and transformed it into a custom line-art illustration style using Adobe Illustrator.\n\nDesign\n\nThe illustration was developed into a wine label design using Canva, focusing on creating a cohesive visual identity suitable for the physical product.\n\nPresentation\n\nI created product mockups in Photoshop and produced the final physical wine bottle by printing and applying the label.",
    outcome:
      "The final wine bottle was created as a personalized release-party artifact and shared by both the artist and the hosting bar on social media.\n\nThe project strengthened my understanding of translating digital design into physical experiences and adapting visual identities across different formats.",
    images: [
      {
        src: "/projects/tmndef-wine-label/original-cover.jpg",
        alt: "Original single cover artwork for 'Tekst meg når du er full'",
        caption: "The original single cover — the starting point for the illustration",
        section: "challenge",
        size: "square",
      },
      {
        src: "/projects/tmndef-wine-label/illustration-outline.png",
        alt: "Custom line-art illustration traced from the original cover photo",
        caption: "The traced line-art illustration",
        section: "process",
        afterHeading: "Illustration",
        size: "square",
      },
      {
        src: "/projects/tmndef-wine-label/illustration-outline-inverted.jpg",
        alt: "The line-art illustration rendered in white on a black background",
        section: "process",
        afterHeading: "Illustration",
        size: "square",
      },
      {
        src: "/projects/tmndef-wine-label/bottle-in-hand.png",
        alt: "The finished wine bottle with its custom label, held up at the release party",
        section: "outcome",
        size: "large",
      },
      {
        src: "/projects/tmndef-wine-label/label-final.png",
        alt: "The finished wine label design, flat view",
        caption: "The finished label design",
        section: "outcome",
        group: "outcome-proof",
        size: "wide",
      },
      {
        src: "/projects/tmndef-wine-label/release-party-repost.jpg",
        alt: "Instagram story repost from the release party venue showing the wine bottle",
        caption: "Reposted by the release party venue",
        section: "outcome",
        group: "outcome-proof",
        size: "phone",
      },
    ],
  },
];


