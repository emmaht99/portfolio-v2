import Image from "next/image";
import Button from "@/components/Button";
import { Book, Lines, Sparkle } from "@/components/Doodles";
import Scribble from "@/components/Scribble";
import type { Project } from "@/lib/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const {
    title,
    description,
    coverImage,
    heroImage,
    prototypeLink,
    sketchbook,
    titleNote,
  } = project;

  if (heroImage) {
    return (
      <header className="w-full border-b border-neutral/20">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-[0.7fr_1.9fr] md:gap-12 md:py-24">
          {sketchbook ? (
            <>
              <Book className="pointer-events-none absolute -left-2 top-4 hidden h-10 w-10 -rotate-6 text-highlight sm:block" />
              <Sparkle className="pointer-events-none absolute left-9 -top-1 hidden h-4 w-4 rotate-12 text-highlight sm:block" />
              <Sparkle className="pointer-events-none absolute left-1 top-16 hidden h-3 w-3 -rotate-6 text-highlight sm:block" />
              <Sparkle className="pointer-events-none absolute -left-5 top-10 hidden h-5 w-5 rotate-3 text-highlight sm:block" />

              <Lines className="pointer-events-none absolute -right-1 top-6 hidden h-8 w-14 -rotate-3 text-highlight sm:block" />
            </>
          ) : null}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              {titleNote ? (
                <Scribble className="text-halo w-fit -rotate-2 font-handwritten text-lg leading-tight text-highlight">
                  {titleNote}
                </Scribble>
              ) : null}
              <h1 className="font-display text-h1 text-ink">{title}</h1>
            </div>
            {description ? <p className="max-w-md">{description}</p> : null}
            {prototypeLink ? (
              <div className="relative inline-flex w-fit flex-col">
                <Button href={prototypeLink} external className="rounded-full">
                  View live prototype
                </Button>
                {sketchbook ? (
                  <Scribble className="text-halo absolute -bottom-6 left-1/2 -translate-x-1/2 rotate-2 whitespace-nowrap font-handwritten text-xl text-highlight">
                    try it out!
                  </Scribble>
                ) : null}
              </div>
            ) : null}
          </div>

          <div
            className={`relative mx-auto w-full max-w-none ${sketchbook ? "pt-12" : ""}`}
          >
            {sketchbook ? (
              <Scribble className="text-halo absolute -top-4 right-2 max-w-[11rem] -rotate-2 text-right font-handwritten text-xl leading-tight text-highlight">
                a little peek into the experience
              </Scribble>
            ) : null}

            <div className="relative aspect-square w-full">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 768px) 75vw, 95vw"
                priority
                className="object-contain"
              />

              {heroImage.annotations?.map((note) => (
                <Scribble
                  key={note.text}
                  className={`text-halo pointer-events-none absolute font-handwritten text-lg leading-tight text-highlight ${note.className}`}
                >
                  {note.text}
                </Scribble>
              ))}
            </div>

            {sketchbook ? (
              <>
                <Sparkle className="pointer-events-none absolute -left-4 bottom-6 h-8 w-8 rotate-6 text-highlight" />
                <Sparkle className="pointer-events-none absolute -left-1 bottom-16 h-5 w-5 -rotate-12 text-highlight" />
              </>
            ) : null}
          </div>
        </div>
      </header>
    );
  }

  if (!coverImage) {
    return (
      <header className="w-full border-b border-neutral/20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-24 sm:py-32">
          <h1 className="font-display text-display text-ink">{title}</h1>
          {description ? <p className="max-w-2xl">{description}</p> : null}
        </div>
      </header>
    );
  }

  return (
    <header className="flex flex-col gap-8">
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral/10">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4">
        <h1 className="font-display text-h1 text-ink">{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
