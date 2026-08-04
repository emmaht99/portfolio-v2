import Image from "next/image";
import type { Project } from "@/lib/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { title, description, coverImage } = project;

  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-h1 text-ink">{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>

      {coverImage ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral/10">
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
        <div className="aspect-[16/9] bg-neutral/10" aria-hidden="true" />
      )}
    </header>
  );
}
