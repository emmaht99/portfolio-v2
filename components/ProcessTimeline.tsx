import type { ComponentType } from "react";
import { Chat, Lightbulb, Lines, Search } from "@/components/Doodles";
import type { DoodleProps } from "@/components/Doodles";
import type { ProcessStage } from "@/lib/projects";

type ProcessTimelineProps = {
  stages: ProcessStage[];
};

const icons: Record<ProcessStage["icon"], ComponentType<DoodleProps>> = {
  search: Search,
  chat: Chat,
  lines: Lines,
  lightbulb: Lightbulb,
};

export default function ProcessTimeline({ stages }: ProcessTimelineProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {stages.map((stage, index) => {
        const Icon = icons[stage.icon];
        return (
          <div key={stage.label} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral/20 bg-canvas text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-meta text-neutral">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <h4 className="font-display text-h3 text-ink">{stage.label}</h4>
            <ul className="flex flex-col gap-1 text-body text-neutral">
              {stage.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
