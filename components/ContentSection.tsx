import type { ReactNode } from "react";

type ContentSectionProps = {
  heading: string;
  children: ReactNode;
  headingLevel?: "h2" | "h3";
};

export default function ContentSection({
  heading,
  children,
  headingLevel = "h2",
}: ContentSectionProps) {
  const Heading = headingLevel;

  return (
    <section className="flex flex-col gap-4">
      <Heading className="font-display text-h2 text-ink">{heading}</Heading>
      <div>{children}</div>
    </section>
  );
}
