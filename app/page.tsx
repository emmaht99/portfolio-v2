import Image from "next/image";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { Sparkle, Squiggle } from "@/components/Doodles";
import Scribble from "@/components/Scribble";
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
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-4 py-8 md:grid-cols-2 md:gap-16 md:py-10">
          <div className="flex flex-col gap-4">
            <Scribble className="-ml-2 -rotate-3 font-handwritten text-xl text-highlight md:-ml-6">
              I design digital experiences that connect people, communities,
              and technology.
            </Scribble>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm shadow-md md:mx-0">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/home/emma-louisiana.png"
                  alt="Emma standing in a gallery, looking at a sculpture beside a wall of windows overlooking trees"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  priority
                  className="object-cover"
                />
              </div>

              <Sparkle className="absolute -left-2 -top-2 h-9 w-9 rotate-3 text-highlight" />
              <Sparkle className="absolute left-7 -top-1 h-5 w-5 -rotate-6 text-highlight" />
              <Sparkle className="absolute -left-4 top-1/2 hidden h-5 w-5 rotate-6 text-highlight sm:block" />

              <Sparkle className="absolute -bottom-3 -right-2 h-9 w-9 -rotate-6 text-highlight" />
              <Sparkle className="absolute bottom-6 right-9 h-6 w-6 rotate-12 text-highlight" />
              <Sparkle className="absolute bottom-1 right-16 h-4 w-4 -rotate-3 text-highlight" />
              <Sparkle className="absolute -right-4 top-1/3 hidden h-6 w-6 -rotate-12 text-highlight sm:block" />
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <Sparkle className="absolute -right-2 -top-4 hidden h-7 w-7 rotate-6 text-highlight sm:block" />

            <p className="font-sans text-lg text-ink">
              Hi my name is Emma and I am a
            </p>

            <h1 className="font-display text-h1 italic text-ink">
              UX &amp; Product Designer
            </h1>

            <p className="max-w-md">Welcome to my portfolio!</p>

            <div className="relative">
              <Button href="/contact" className="rounded-full">
                Contact
              </Button>
              <Sparkle className="absolute -right-6 -top-3 h-5 w-5 rotate-12 text-highlight" />
            </div>

            <Scribble className="font-handwritten -rotate-2 self-end text-2xl text-highlight">
              scroll down to see my work
            </Scribble>
          </div>
        </div>
      </header>

      <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">
        <div className="relative">
          <h2 className="font-display text-h2 text-ink">Featured Projects</h2>
          <Squiggle className="h-3 w-40 text-highlight" />
          <Sparkle className="absolute -right-1 -top-3 h-6 w-6 rotate-12 text-highlight sm:hidden" />
          <Sparkle className="absolute right-16 top-0 hidden h-6 w-6 -rotate-6 text-highlight sm:block lg:hidden" />
        </div>

        <Sparkle className="absolute -left-10 top-24 hidden h-8 w-8 rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -left-16 top-44 hidden h-6 w-6 -rotate-12 text-highlight lg:block" />
        <Sparkle className="absolute -left-8 top-60 hidden h-5 w-5 rotate-3 text-highlight lg:block" />
        <Sparkle className="absolute -left-14 top-80 hidden h-4 w-4 rotate-12 text-highlight lg:block" />

        <Sparkle className="absolute -right-10 top-28 hidden h-8 w-8 -rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -right-16 top-48 hidden h-9 w-9 rotate-12 text-highlight lg:block" />
        <Sparkle className="absolute -right-6 top-72 hidden h-5 w-5 -rotate-3 text-highlight lg:block" />
        <Sparkle className="absolute -right-12 top-96 hidden h-4 w-4 rotate-6 text-highlight lg:block" />

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
    </main>
  );
}
