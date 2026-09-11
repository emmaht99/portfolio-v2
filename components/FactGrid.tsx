import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type FactGridProps = {
  role?: string;
  context?: string;
  timeline?: string;
  team?: string;
  tools?: string[];
  deliverables?: string[];
  locale: Locale;
};

type Fact =
  | { label: string; kind: "text"; value: string }
  | { label: string; kind: "list"; value: string[] };

export default function FactGrid({
  role,
  context,
  timeline,
  team,
  tools,
  deliverables,
  locale,
}: FactGridProps) {
  const dict = getDictionary(locale);
  const facts: Fact[] = [
    role ? { label: dict.factGrid.role, kind: "text", value: role } : null,
    context ? { label: dict.factGrid.context, kind: "text", value: context } : null,
    timeline ? { label: dict.factGrid.timeline, kind: "text", value: timeline } : null,
    team ? { label: dict.factGrid.team, kind: "text", value: team } : null,
    tools && tools.length > 0
      ? { label: dict.factGrid.tools, kind: "list", value: tools }
      : null,
    deliverables && deliverables.length > 0
      ? { label: dict.factGrid.deliverables, kind: "list", value: deliverables }
      : null,
  ].filter((fact): fact is Fact => fact !== null);

  if (facts.length === 0) return null;

  return (
    <dl className="flex flex-col divide-y divide-neutral/20 border-y border-neutral/20 sm:flex-row sm:divide-x sm:divide-y-0">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="flex flex-col gap-1 py-3 sm:flex-1 sm:px-6 sm:py-4"
        >
          <dt className="text-meta text-neutral">{fact.label}</dt>
          <dd>
            {fact.kind === "list" ? (
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-meta">
                {fact.value.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <span className="text-meta">{fact.value}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
