import type { ComponentType } from "react";
import { Badge, Heart, Person } from "@/components/Doodles";
import type { DoodleProps } from "@/components/Doodles";
import Scribble from "@/components/Scribble";
import type { InterviewGroup } from "@/lib/projects";

type InterviewPanelProps = {
  groups: InterviewGroup[];
  note?: string;
};

const icons: Record<InterviewGroup["icon"], ComponentType<DoodleProps>> = {
  person: Person,
  badge: Badge,
  heart: Heart,
};

export default function InterviewPanel({ groups, note }: InterviewPanelProps) {
  return (
    <div className="relative flex flex-col divide-y divide-neutral/20 border-y border-neutral/20 sm:flex-row sm:divide-x sm:divide-y-0">
      {groups.map((group) => {
        const Icon = icons[group.icon];
        return (
          <div
            key={group.title}
            className="flex flex-col gap-3 py-6 sm:flex-1 sm:px-6 sm:py-8"
          >
            <Icon className="h-7 w-7 text-accent" />
            <h4 className="font-display text-h3 text-ink">{group.title}</h4>
            <ul className="flex flex-col gap-1 text-body text-neutral">
              {group.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        );
      })}

      {note ? (
        <Scribble className="text-halo pointer-events-none absolute -top-5 right-4 max-w-[12rem] -rotate-1 text-right font-handwritten text-lg leading-tight text-highlight">
          {note}
        </Scribble>
      ) : null}
    </div>
  );
}
