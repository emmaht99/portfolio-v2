type FactGridProps = {
  role?: string;
  context?: string;
  timeline?: string;
  team?: string;
  tools?: string[];
  deliverables?: string[];
};

type Fact = {
  label: string;
  value: string;
};

export default function FactGrid({
  role,
  context,
  timeline,
  team,
  tools,
  deliverables,
}: FactGridProps) {
  const facts: Fact[] = [
    role ? { label: "Role", value: role } : null,
    context ? { label: "Context", value: context } : null,
    timeline ? { label: "Timeline", value: timeline } : null,
    team ? { label: "Team", value: team } : null,
    tools && tools.length > 0
      ? { label: "Tools", value: tools.join(", ") }
      : null,
    deliverables && deliverables.length > 0
      ? { label: "Deliverables", value: deliverables.join(", ") }
      : null,
  ].filter((fact): fact is Fact => fact !== null);

  if (facts.length === 0) return null;

  return (
    <dl className="flex flex-col divide-y divide-neutral/20 border-y border-neutral/20 sm:flex-row sm:divide-x sm:divide-y-0">
      {facts.map((fact) => (
        <div key={fact.label} className="flex flex-col gap-1 py-3 sm:flex-1 sm:px-6 sm:py-4">
          <dt className="text-meta text-neutral">{fact.label}</dt>
          <dd className="text-meta">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
