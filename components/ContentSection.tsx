import { Fragment, type ReactNode } from "react";
import { Loop } from "@/components/Doodles";
import HandwrittenUnderline from "@/components/HandwrittenUnderline";
import MediaFrame from "@/components/MediaFrame";
import MediaGroup from "@/components/MediaGroup";
import type { ProjectImage } from "@/lib/projects";

type ContentSectionVariant = "challenge" | "process" | "outcome";

type ContentSectionProps = {
  heading: string;
  content: string;
  headingLevel?: "h2" | "h3";
  variant?: ContentSectionVariant;
  kicker?: string;
  sketchbook?: boolean;
  mediaAfterHeading?: Record<string, ProjectImage[]>;
  modelSlot?: ReactNode;
};

const SUBHEADING_MAX_LENGTH = 30;
const SENTENCE_ENDINGS = [".", "!", "?"];

function isSubheading(chunk: string): boolean {
  if (chunk.length === 0 || chunk.length > SUBHEADING_MAX_LENGTH) return false;
  if (chunk.includes("\n")) return false;
  const lastChar = chunk.charAt(chunk.length - 1);
  return !SENTENCE_ENDINGS.includes(lastChar);
}

// Marking text with ==like this== in project copy renders it with a
// handwritten pink underline, for calling out a single key phrase.
function renderWithHighlights(text: string): ReactNode[] {
  const parts = text.split(/==(.+?)==/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <HandwrittenUnderline key={index}>{part}</HandwrittenUnderline>
    ) : (
      part
    ),
  );
}

export default function ContentSection({
  heading,
  content,
  headingLevel = "h2",
  variant = "process",
  kicker,
  sketchbook = false,
  mediaAfterHeading,
  modelSlot,
}: ContentSectionProps) {
  const Heading = headingLevel;
  const chunks = content
    .split("\n\n")
    .filter((chunk) => chunk.trim().length > 0);

  const useLede = variant === "challenge" || variant === "outcome";
  const subheadingColor =
    variant === "process" ? "text-accent" : "text-ink";

  return (
    <section
      className={`relative flex flex-col gap-6 ${
        variant === "outcome" ? "border-t border-neutral/20 pt-8" : ""
      }`}
    >
      {sketchbook && variant === "process" ? (
        <Loop className="pointer-events-none absolute left-[-5rem] top-[88%] hidden h-28 w-16 -translate-y-1/2 text-highlight lg:block" />
      ) : null}

      {kicker ? (
        <p className="text-meta text-neutral">
          {kicker} — {heading}
        </p>
      ) : null}
      <Heading className="font-display text-h2 text-ink">{heading}</Heading>
      {modelSlot}
      <div className="flex flex-col gap-4">
        {chunks.map((chunk, index) => {
          if (isSubheading(chunk)) {
            return (
              <h3
                key={index}
                className={`font-display text-h3 ${subheadingColor}`}
              >
                {chunk}
              </h3>
            );
          }

          const isLede = useLede && index === 0;
          const precedingChunk = index > 0 ? chunks[index - 1] : null;
          const inlineImages =
            precedingChunk && isSubheading(precedingChunk)
              ? mediaAfterHeading?.[precedingChunk]
              : undefined;
          const pairedImage =
            inlineImages?.length === 1 && inlineImages[0].pairWithText
              ? inlineImages[0]
              : undefined;

          if (pairedImage) {
            return (
              <div
                key={index}
                className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8"
              >
                <p className={isLede ? "text-h3" : undefined}>
                  {renderWithHighlights(chunk)}
                </p>
                <MediaFrame image={pairedImage} />
              </div>
            );
          }

          return (
            <Fragment key={index}>
              <p className={isLede ? "text-h3" : undefined}>
                {renderWithHighlights(chunk)}
              </p>
              {inlineImages && inlineImages.length > 0 ? (
                <MediaGroup images={inlineImages} emphasis="supporting" />
              ) : null}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
