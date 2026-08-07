import type { ProjectGuideline } from "@/lib/projects";

type GuidelineListProps = {
  items: ProjectGuideline[];
};

export default function GuidelineList({ items }: GuidelineListProps) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-8 border-t border-neutral/20 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {items.map((item) => (
        <div key={item.code} className="flex flex-col gap-2">
          <p className="text-meta text-accent">{item.code}</p>
          <p className="font-display text-h3 text-ink">{item.title}</p>
          <p className="text-body text-neutral">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
