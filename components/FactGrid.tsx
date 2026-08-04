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
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((fact) => (
        <div key={fact.label} className="flex flex-col gap-1">
          <dt className="text-meta text-neutral">{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
