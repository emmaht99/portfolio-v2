import Image from "next/image";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import ProjectCard from "@/components/ProjectCard";
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
          <div className="relative aspect-[2/3] overflow-hidden shadow-md">
            <Image
              src="/home/emma-louisiana.png"
              alt="Emma standing in a gallery, looking at a sculpture beside a wall of windows overlooking trees"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
            />
            <p className="text-halo absolute left-4 top-4 max-w-[80%] -rotate-2 font-handwritten text-xl text-ink">
              I design digital experiences that connect people, communities,
              and technology.
            </p>
          </div>

          <div className="relative flex flex-col gap-6">
            <p className="flex flex-wrap items-baseline gap-x-2 font-sans text-lg text-ink">
              {"Hi my name is Emma and I am a".split(" ").map((word, i, arr) => {
                const t = (i - (arr.length - 1) / 2) / ((arr.length - 1) / 2);
                return (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      transform: `rotate(${(t * 12).toFixed(2)}deg) translateY(${(t * t * 14).toFixed(2)}px)`,
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>

            <h1 className="font-display text-h1 italic text-ink">
              UX &amp; Product Designer
            </h1>

            <p className="max-w-md">Welcome to my portfolio!</p>

            <div>
              <Button href="/contact" className="rounded-full">
                Contact<span aria-hidden="true"> ↗</span>
              </Button>
            </div>

            <p className="font-handwritten -rotate-2 self-end text-2xl text-highlight">
              scroll down to see my work
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">
        <h2 className="font-display text-h2 text-ink">Featured Projects</h2>
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
