import WorkArchive from "@/components/WorkArchive";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocalizedProjects } from "@/lib/i18n/localize-projects";
import type { Locale } from "@/lib/i18n/config";

type WorkPageProps = {
  locale: Locale;
};

export default function WorkPage({ locale }: WorkPageProps) {
  const dict = getDictionary(locale);
  const projects = getLocalizedProjects(locale);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-h1 text-ink">{dict.work.heading}</h1>
        <p>{dict.work.intro}</p>
      </div>

      <WorkArchive projects={projects} locale={locale} />
    </main>
  );
}
