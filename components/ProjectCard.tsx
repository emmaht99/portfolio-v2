import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
};

export default function ProjectCard({
  project,
  locale,
  priority = false,
  headingLevel = "h3",
}: ProjectCardProps) {
  const { title, slug, category, year, description, coverImage, tools } = project;
  const Heading = headingLevel;
  const dict = getDictionary(locale);

  return (
    <article>
      <Link
        href={localizePath(`/work/${slug}`, locale)}
        className="block origin-center transition-transform duration-300 ease-out motion-safe:hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral/10">
          {coverImage ? (
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={priority}
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-col gap-2 py-4">
          <p className="text-meta text-neutral">
            {dict.work.categories[category]}
            {year ? ` · ${year}` : ""}
          </p>

          <Heading className="font-display text-h3 text-ink">{title}</Heading>

          {description ? <p>{description}</p> : null}

          {tools.length > 0 ? (
            <ul className="flex flex-wrap gap-2 text-meta text-neutral">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          ) : null}

          <span className="text-meta font-medium text-accent">
            {dict.work.viewCaseStudy}
            <span aria-hidden="true"> →</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
