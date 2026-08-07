import type { ReactNode } from "react";
import ContentSection from "@/components/ContentSection";
import MediaFrame from "@/components/MediaFrame";
import MediaGroup from "@/components/MediaGroup";
import type { ProjectImage } from "@/lib/projects";

type CaseStudySectionVariant = "challenge" | "process" | "outcome";

type CaseStudySectionProps = {
  kicker: string;
  heading: string;
  content: string;
  variant: CaseStudySectionVariant;
  images: ProjectImage[];
  sketchbook?: boolean;
  modelSlot?: ReactNode;
  panelAfterHeading?: Record<string, ReactNode>;
};

// Internal composition unit. Keeping this as a discriminated union (rather
// than inlining the layout logic) is what lets future block types — a pull
// quote, a stat, a timeline — slot in later as new variants without
// reshaping how a section is assembled.
type SectionBlock =
  | { type: "text"; key: string }
  | { type: "media"; key: string; image: ProjectImage }
  | { type: "media-group"; key: string; images: ProjectImage[] };

function groupImages(images: ProjectImage[]) {
  const groups = new Map<string, ProjectImage[]>();
  const singles: ProjectImage[] = [];

  for (const image of images) {
    if (image.group) {
      const existing = groups.get(image.group) ?? [];
      existing.push(image);
      groups.set(image.group, existing);
    } else {
      singles.push(image);
    }
  }

  return { groups: Array.from(groups.entries()), singles };
}

function buildBlocks(images: ProjectImage[]): SectionBlock[] {
  const { groups, singles } = groupImages(images);
  const [leadImage, ...trailingSingles] = singles;
  const blocks: SectionBlock[] = [];

  if (leadImage) {
    blocks.push({ type: "media", key: leadImage.src, image: leadImage });
  }

  blocks.push({ type: "text", key: "text" });

  for (const image of trailingSingles) {
    blocks.push({ type: "media", key: image.src, image });
  }

  for (const [groupKey, groupImages] of groups) {
    blocks.push({ type: "media-group", key: groupKey, images: groupImages });
  }

  return blocks;
}

function buildMediaAfterHeading(images: ProjectImage[]) {
  const map: Record<string, ProjectImage[]> = {};
  for (const image of images) {
    if (!image.afterHeading) continue;
    map[image.afterHeading] = [...(map[image.afterHeading] ?? []), image];
  }
  return map;
}

export default function CaseStudySection({
  kicker,
  heading,
  content,
  variant,
  images,
  sketchbook = false,
  modelSlot,
  panelAfterHeading,
}: CaseStudySectionProps) {
  const blockImages = images.filter((image) => !image.afterHeading);
  const inlineImages = images.filter((image) => image.afterHeading);
  const mediaAfterHeading = buildMediaAfterHeading(inlineImages);

  const hasImages = blockImages.length > 0;
  const emphasis =
    hasImages && variant === "outcome" ? "feature" : "supporting";
  const mediaWidthClass = emphasis === "feature" ? "max-w-6xl" : "max-w-5xl";
  const blocks = buildBlocks(blockImages);

  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block) => {
        if (block.type === "text") {
          return (
            <div key={block.key} className="mx-auto w-full max-w-5xl px-4">
              <ContentSection
                kicker={kicker}
                heading={heading}
                content={content}
                variant={variant}
                sketchbook={sketchbook}
                mediaAfterHeading={mediaAfterHeading}
                panelAfterHeading={panelAfterHeading}
                modelSlot={modelSlot}
              />
            </div>
          );
        }

        if (block.type === "media") {
          return (
            <div
              key={block.key}
              className={`mx-auto w-full px-4 ${mediaWidthClass}`}
            >
              <MediaFrame image={block.image} />
            </div>
          );
        }

        return (
          <div
            key={block.key}
            className={`mx-auto w-full px-4 ${mediaWidthClass}`}
          >
            <MediaGroup images={block.images} emphasis={emphasis} />
          </div>
        );
      })}
    </div>
  );
}
