import Image from "next/image";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import ProjectCard from "@/components/ProjectCard";
import { Sparkle, Squiggle } from "@/components/Doodles";
import { projects } from "@/lib/projects";

const featuredSlugs = ["skytsengel", "caritas-faellesskab", "deichman-wrapped"];

export default function Home() {
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> =>
      Boolean(project),
    );

  return (
    <main className="flex flex-col gap-16 pb-16">
      <header className="w-full">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="flex flex-col gap-4">
            <p className="-ml-6 -rotate-3 font-handwritten text-xl text-highlight">
              I design digital experiences that connect people, communities,
              and technology.
            </p>

            <div className="relative aspect-[2/3] shadow-md">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/home/emma-louisiana.png"
                  alt="Emma standing in a gallery, looking at a sculpture beside a wall of windows overlooking trees"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>

              <Sparkle className="absolute -left-2 -top-2 h-9 w-9 rotate-3 text-highlight" />
              <Sparkle className="absolute left-7 -top-1 h-5 w-5 -rotate-6 text-highlight" />

              <Sparkle className="absolute -bottom-3 -right-2 h-9 w-9 -rotate-6 text-highlight" />
              <Sparkle className="absolute bottom-6 right-9 h-6 w-6 rotate-12 text-highlight" />
              <Sparkle className="absolute bottom-1 right-16 h-4 w-4 -rotate-3 text-highlight" />
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <p className="font-sans text-lg text-ink">
              Hi my name is Emma and I am a
            </p>

            <h1 className="font-display text-h1 italic text-ink">
              UX &amp; Product Designer
            </h1>

            <p className="max-w-md">Welcome to my portfolio!</p>

            <div>
              <Button href="/contact" className="rounded-full">
                Contact
              </Button>
            </div>

            <p className="font-handwritten -rotate-2 self-end text-2xl text-highlight">
              scroll down to see my work
            </p>
          </div>
        </div>
      </header>

      <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">
        <div>
          <h2 className="font-display text-h2 text-ink">Featured Projects</h2>
          <Squiggle className="h-3 w-40 text-highlight" />
        </div>

        <Sparkle className="absolute -left-10 top-24 hidden h-8 w-8 rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -left-16 top-44 hidden h-6 w-6 -rotate-12 text-highlight lg:block" />
        <Sparkle className="absolute -left-8 top-60 hidden h-5 w-5 rotate-3 text-highlight lg:block" />

        <Sparkle className="absolute -right-10 top-28 hidden h-8 w-8 -rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -right-16 top-48 hidden h-9 w-9 rotate-12 text-highlight lg:block" />
        <Sparkle className="absolute -right-6 top-72 hidden h-5 w-5 -rotate-3 text-highlight lg:block" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
              headingLevel="h3"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 border-t border-neutral/20 px-4 pt-16">
        <h2 className="font-display text-h2 text-ink">Let&apos;s talk</h2>
        <p className="max-w-2xl">
          Interested in collaborating or discussing design? I&apos;d love to
          hear from you.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="mailto:emma@tandle.no">Email me</Button>
          <TextLink href="https://www.linkedin.com/in/emmatandle/" external>
            LinkedIn
          </TextLink>
        </div>
      </section>
    </main>
  );
}
