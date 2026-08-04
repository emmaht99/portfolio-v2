import Image from "next/image";
import type { Project } from "@/lib/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { title, description, coverImage } = project;

  return (
    <header className="flex flex-col gap-8">
      {coverImage ? (
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
      ) : (
        <div className="aspect-[21/9] w-full bg-neutral/10" aria-hidden="true" />
      )}

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4">
        <h1 className="font-display text-h1 text-ink">{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
