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
    year: 2024,
    description:
      "A redesign of Dansk Stalking Center's Skytsengel app, transforming it from a safety tool into a broader support ecosystem for people experiencing stalking.",
  
    role:
      "UX Researcher and Designer. In a team of five, I contributed across all parts of the project, with a primary focus on planning and conducting user interviews, qualitative analysis, concept development, and Figma prototyping.",
  
    context:
      "Master's course project: Design-driven Innovation. External case partner: Dansk Stalking Center.",
  
    timeline:
      "Completed during my Master's 3rd semester. One semester project completed alongside three other course projects.",
  
    tools: [
      "Figma",
      "User Interviews",
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
      "Skytsengel was originally designed to help stalking victims quickly contact their personal network during emergencies and document incidents for police purposes. Through research, we discovered an important limitation: many victims did not have a strong support network to rely on.\n\nThe challenge became: How can Skytsengel support stalking victims who feel isolated while providing guidance and information, without creating a false sense of security?",
  
    process:
      "We began by building an understanding of stalking and evaluating the existing Skytsengel app to identify usability issues and limitations.\n\nI designed the interview guide and helped conduct five semi-structured interviews with people involved in stalking cases: two individuals with lived experience of stalking, a representative from Dansk Stalking Center, a police officer working with stalking cases, and a psychologist.\n\nBecause of the sensitive nature of the topic, we focused on creating a flexible interview structure and adapting conversations based on participants' comfort levels. One participant was recruited through Dansk Stalking Center, while another was contacted directly after sharing their experience through a book and podcast.\n\nThrough qualitative coding, we identified recurring themes around isolation, the need for understanding and support, and the importance of ethical safety features.\n\nUsing these insights, we redesigned the core concept through ideation workshops and developed a clickable Figma prototype.",
  
    outcome:
      "The final concept shifted Skytsengel from primarily being an emergency tool into a support ecosystem focused on three areas: emotional support, knowledge about stalking, and safe community connection.\n\nThe redesigned concept included daily supportive content, mindfulness exercises, educational resources, moderated support groups, professional guidance, and improved incident documentation.\n\nThe prototype was presented to Dansk Stalking Center, who responded positively and highlighted that a solution like this could be valuable for supporting people affected by stalking.\n\nThe project taught me the importance of precision and care when designing for sensitive situations. With more time, I would continue by testing the prototype with users and refining the functionality of the final product.",

    images: [],
  },
  {
    title: "Caritas Fællesskab",
    slug: "caritas-faellesskab",
    category: "UX Design",
    year: 2025,
    description:
      "Caritas Fællesskab is a digital platform concept created for Caritas Danmark, exploring how technology can support senior communities while respecting existing social practices and individual needs.",
    role:
      "UX and Product Designer. Working together with one thesis partner, I contributed equally across research, design, analysis, workshop facilitation, concept development, and prototyping.",
    context:
      "Master's Thesis project with external partner Caritas Danmark. The project explored how digital technology can support senior communities while recognizing that every community has unique social structures, values, and ways of communicating.",
    timeline:
      "Completed in 2025 as a Master's thesis project.",
    tools: [
      "Design ethnography",
      "Interviews",
      "Co-design workshops",
      "Figma",
      "Qualitative analysis",
    ],
    deliverables: [
      "Research findings",
      "Design guidelines",
      "Co-design workshop",
      "Clickable Figma prototype",
      "Digital platform concept",
    ],
    challenge:
      "The challenge was understanding how digital technology could support senior communities without replacing the physical interactions and social practices that already created value.\n\nRather than designing technology for seniors as passive users, the project explored how seniors could become active contributors in shaping technology that reflects their own communities.",
    process:
      "Discovery\n\nWe used a design ethnographic approach, immersing ourselves in Caritas Denmark's senior communities through observations, conversations, and informal interactions. We intentionally used the term conversations rather than interviews, as these meetings were designed to happen in the participants' own environments and allow them to guide the direction of the discussion.\n\nCo-design\n\nThe insights from the conversations informed a co-design workshop with members of Caritas Denmark's senior communities. Using picture cards, value timelines, and scenario-based discussions, participants helped explore how digital technology could meaningfully support their existing practices.\n\nAnalysis\n\nBy analyzing conversations and workshop findings, we identified key needs around communication, personalization, accessibility, and maintaining the value of physical gatherings.",
    outcome:
      "The outcome was a set of six design guidelines for a unified digital platform: fostering connection, supporting rather than replacing activities, ensuring accessibility, enabling personalization, providing timely communication, and creating spaces for member interaction.\n\nTo demonstrate how these principles could be applied, we created Caritas Fællesskab — a clickable Figma prototype for a digital community platform. The prototype was presented to Caritas Danmark and members of the senior communities, receiving very positive feedback. Caritas is currently exploring the possibility of deploying the concept in the future.\n\nA key learning from the project was the importance of designing with communities rather than simply designing for them. The project strengthened my understanding of participatory design, ethical research, and creating technology that respects existing human connections.",
    prototypeLink:
      "https://www.figma.com/proto/mPl1AkUoDNWE7stMJSiN8K/Caritas-App?node-id=1-6&starting-point-node-id=1%3A6&t=8yJBzKvtpItpY2gV-1",
    images: [],
  },
  {
    title: "Deichman Wrapped",
    slug: "deichman-wrapped",
    category: "AI / Prototyping",
    year: 2025,
    description:
      "Deichman Wrapped is a self-initiated product concept exploring how public libraries can create more engaging digital experiences. Inspired by Spotify Wrapped, the project transforms library activity into a playful and personalized year-in-review experience.",
    role:
      "Product Designer & AI-Assisted Prototyper. I led the project from concept development and research to UX design, prototyping, and building a functional demo experience using AI-assisted tools.",
    context:
      "A self-initiated project exploring how public institutions can use personal data and familiar digital patterns to create stronger emotional connections with users.",
    timeline:
      "Created in 2025 as an independent design exploration.",
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
    images: [],
  },
  {
    title: "TMNDEF Wine Label",
    slug: "tmndef-wine-label",
    category: "Visual Design",
    year: 2024,
    description:
      "A custom wine label created for the release party of artist Kamilla Wigestrand's first single, 'Tekst meg når du er full'. The project translated the song's visual identity into a physical product experience.",
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
    images: [],
  },
];


