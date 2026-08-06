import { Loop } from "@/components/Doodles";

type ContentSectionVariant = "challenge" | "process" | "outcome";

type ContentSectionProps = {
  heading: string;
  content: string;
  headingLevel?: "h2" | "h3";
  variant?: ContentSectionVariant;
  kicker?: string;
  sketchbook?: boolean;
};

const SUBHEADING_MAX_LENGTH = 30;
const SENTENCE_ENDINGS = [".", "!", "?"];

function isSubheading(chunk: string): boolean {
  if (chunk.length === 0 || chunk.length > SUBHEADING_MAX_LENGTH) return false;
  if (chunk.includes("\n")) return false;
  const lastChar = chunk.charAt(chunk.length - 1);
  return !SENTENCE_ENDINGS.includes(lastChar);
}

export default function ContentSection({
  heading,
  content,
  headingLevel = "h2",
  variant = "process",
  kicker,
  sketchbook = false,
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
        <Loop className="pointer-events-none absolute left-[-5rem] top-[79%] hidden h-28 w-16 -translate-y-1/2 text-highlight lg:block" />
      ) : null}

      {kicker ? (
        <p className="text-meta text-neutral">
          {kicker} — {heading}
        </p>
      ) : null}
      <Heading className="font-display text-h2 text-ink">{heading}</Heading>
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

          return (
            <p key={index} className={isLede ? "text-h3" : undefined}>
              {chunk}
            </p>
          );
        })}
      </div>
    </section>
  );
}
