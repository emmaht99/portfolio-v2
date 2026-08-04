import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/CaseStudyHero";
import FactGrid from "@/components/FactGrid";
import ContentSection from "@/components/ContentSection";
import MediaFrame from "@/components/MediaFrame";
import MediaGroup from "@/components/MediaGroup";
import { projects, type ProjectImage } from "@/lib/projects";

type MediaBlock =
  | { type: "single"; image: ProjectImage }
  | { type: "group"; key: string; images: ProjectImage[] };

function toMediaBlocks(images: ProjectImage[]): MediaBlock[] {
  const blocks: MediaBlock[] = [];
  const seenGroups = new Set<string>();

  for (const image of images) {
    if (image.group) {
      if (seenGroups.has(image.group)) continue;
      seenGroups.add(image.group);
      blocks.push({
        type: "group",
        key: image.group,
        images: images.filter((candidate) => candidate.group === image.group),
      });
    } else {
      blocks.push({ type: "single", image });
    }
  }

  return blocks;
}

function MediaBlocks({ images }: { images: ProjectImage[] }) {
  const blocks = toMediaBlocks(images);
  if (blocks.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block) =>
        block.type === "group" ? (
          <MediaGroup key={block.key} images={block.images} />
        ) : (
          <MediaFrame key={block.image.src} image={block.image} />
        ),
      )}
    </div>
  );
}

export default async function Page(props: PageProps<"/work/[project]">) {
  const { project: slug } = await props.params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    notFound();
  }

  const challengeImages = project.images.filter(
    (image) => image.section === "challenge",
  );
  const processImages = project.images.filter(
    (image) => image.section === "process",
  );
  const outcomeImages = project.images.filter(
    (image) => image.section === "outcome",
  );
  const unassignedImages = project.images.filter((image) => !image.section);

  return (
    <main className="flex flex-col gap-16 pb-16">
      <CaseStudyHero project={project} />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4">
        <FactGrid
          role={project.role}
          context={project.context}
          timeline={project.timeline}
          tools={project.tools}
          deliverables={project.deliverables}
        />

        {project.challenge ? (
          <div className="flex flex-col gap-8">
            <ContentSection heading="Challenge" content={project.challenge} />
            <MediaBlocks images={challengeImages} />
          </div>
        ) : null}

        {project.process ? (
          <div className="flex flex-col gap-8">
            <ContentSection heading="Process" content={project.process} />
            <MediaBlocks images={processImages} />
          </div>
        ) : null}

        {project.outcome ? (
          <div className="flex flex-col gap-8">
            <ContentSection heading="Outcome" content={project.outcome} />
            <MediaBlocks images={outcomeImages} />
          </div>
        ) : null}

        {unassignedImages.length > 0 ? (
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-h2 text-ink">
              Additional images
            </h2>
            <MediaBlocks images={unassignedImages} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
