"use client";

import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

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
  locale: Locale;
};

export default function ProjectFilters({
  selected,
  onChange,
  resultCount,
  locale,
}: ProjectFiltersProps) {
  const dict = getDictionary(locale);
  const categoryLabel = (category: ProjectFilterCategory) =>
    category === "All" ? dict.work.all : dict.work.categories[category];

  return (
    <div>
      <div
        role="group"
        aria-label={dict.work.filterAriaLabel}
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
              {categoryLabel(category)}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="sr-only">
        {resultCount !== undefined
          ? resultCount === 1
            ? dict.work.resultsFoundOne
            : dict.work.resultsFoundOther.replace("{count}", String(resultCount))
          : null}
      </div>
    </div>
  );
}
