import type { Metadata } from "next";
import WorkArchive from "@/components/WorkArchive";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
};

export default function Page() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-h1 text-ink">Work</h1>
        <p>
          A complete archive of my UX and product design work — filter by
          category to explore a specific area of practice.
        </p>
      </div>

      <WorkArchive projects={projects} />
    </main>
  );
}
