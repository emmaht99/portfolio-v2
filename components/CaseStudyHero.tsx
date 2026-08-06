import Image from "next/image";
import Button from "@/components/Button";
import { Arrow, Circle, Sparkle } from "@/components/Doodles";
import type { Project } from "@/lib/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { title, description, coverImage, heroImage, prototypeLink } = project;

  if (heroImage) {
    return (
      <header className="w-full border-b border-neutral/20">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-h1 text-ink">{title}</h1>
            {description ? <p className="max-w-md">{description}</p> : null}
            {prototypeLink ? (
              <div>
                <Button href={prototypeLink} external className="rounded-full">
                  View live prototype
                </Button>
              </div>
            ) : null}
          </div>

          <div className="relative mx-auto w-full max-w-xs pt-10">
            <p className="text-halo absolute -top-2 right-4 -rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
              the final experience
            </p>
            <Circle className="pointer-events-none absolute -top-6 right-0 h-11 w-52 -rotate-2 text-highlight" />
            <Arrow className="pointer-events-none absolute -top-1 right-16 h-10 w-10 rotate-45 text-highlight" />

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
