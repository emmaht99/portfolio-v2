"use client";

export type ProjectFilterCategory =
  | "All"
  | "UX Design"
  | "Product Design"
  | "Visual Design"
  | "AI / Prototyping";

export const projectFilterCategories: ProjectFilterCategory[] = [
  "All",
  "UX Design",
  "Product Design",
  "Visual Design",
  "AI / Prototyping",
];

type ProjectFiltersProps = {
  selected: ProjectFilterCategory;
  onChange: (category: ProjectFilterCategory) => void;
  resultCount?: number;
};

export default function ProjectFilters({
  selected,
  onChange,
  resultCount,
}: ProjectFiltersProps) {
  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {projectFilterCategories.map((category) => {
          const isSelected = category === selected;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(category)}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center px-4 text-meta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isSelected
                  ? "bg-accent text-canvas"
                  : "border border-neutral/30 text-ink"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="sr-only">
        {resultCount !== undefined
          ? `${resultCount} project${resultCount === 1 ? "" : "s"} found`
          : null}
      </div>
    </div>
  );
}
