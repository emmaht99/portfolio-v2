import Image from "next/image";
import type { Project } from "@/lib/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { title, description, coverImage } = project;

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
