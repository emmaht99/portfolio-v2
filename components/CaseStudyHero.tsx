import Image from "next/image";
import Button from "@/components/Button";
import { Book, Circle, Sparkle, Squiggle } from "@/components/Doodles";
import type { Project } from "@/lib/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { title, description, coverImage, heroImage, prototypeLink } = project;

  if (heroImage) {
    return (
      <header className="w-full border-b border-neutral/20">
        <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <Book className="pointer-events-none absolute -left-2 top-4 hidden h-10 w-10 -rotate-6 text-highlight sm:block" />

          <div className="flex flex-col gap-6">
            <h1 className="font-display text-h1 text-ink">{title}</h1>
            {description ? <p className="max-w-md">{description}</p> : null}
            {prototypeLink ? (
              <div className="relative inline-flex w-fit flex-col">
                <Button href={prototypeLink} external className="rounded-full">
                  View live prototype
                </Button>
                <p className="text-halo absolute -bottom-6 left-1/2 -translate-x-1/2 rotate-2 whitespace-nowrap font-handwritten text-xl text-highlight">
                  try it out!
                </p>
                <Squiggle
                  variant={2}
                  className="absolute -bottom-9 left-1/2 h-3 w-28 -translate-x-1/2 rotate-2 text-highlight"
                />
              </div>
            ) : null}
          </div>

          <div className="relative mx-auto w-full max-w-xs pt-12">
            <div className="absolute -top-11 right-2 flex h-20 w-48 items-center justify-center">
              <Circle className="pointer-events-none absolute inset-0 h-full w-full text-highlight" />
              <p className="text-halo relative -rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
                a sneak peek
              </p>
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                priority
                className="object-contain"
              />
            </div>

            <Sparkle className="pointer-events-none absolute -left-4 bottom-6 h-8 w-8 rotate-6 text-highlight" />
            <Sparkle className="pointer-events-none absolute -left-1 bottom-16 h-5 w-5 -rotate-12 text-highlight" />
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
