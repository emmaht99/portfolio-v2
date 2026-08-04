type ContentSectionProps = {
  heading: string;
  content: string;
  headingLevel?: "h2" | "h3";
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
}: ContentSectionProps) {
  const Heading = headingLevel;
  const chunks = content.split("\n\n").filter((chunk) => chunk.trim().length > 0);

  return (
    <section className="flex flex-col gap-6">
      <Heading className="font-display text-h2 text-ink">{heading}</Heading>
      <div className="flex flex-col gap-4">
        {chunks.map((chunk, index) =>
          isSubheading(chunk) ? (
            <h3 key={index} className="font-display text-h3 text-ink">
              {chunk}
            </h3>
          ) : (
            <p key={index}>{chunk}</p>
          ),
        )}
      </div>
    </section>
  );
}
