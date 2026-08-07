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
    <div className={`relative ${note ? "pt-20 sm:pt-16" : ""}`}>
      {note ? (
        <Scribble className="text-halo pointer-events-none absolute top-0 right-0 max-w-[15rem] -rotate-1 text-right font-handwritten text-base leading-snug text-highlight sm:max-w-[13rem]">
          {note}
        </Scribble>
      ) : null}

      <div className="flex flex-col divide-y divide-neutral/20 border-y border-neutral/20 sm:flex-row sm:divide-x sm:divide-y-0">
        {groups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.title}
              className="flex flex-col gap-3 py-6 sm:flex-1 sm:px-6 sm:py-8"
            >
              <Icon className="h-7 w-7 text-accent" />
              <p className="font-display text-h3 text-ink">{group.title}</p>
              <ul className="flex flex-col gap-1 text-body text-neutral">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
