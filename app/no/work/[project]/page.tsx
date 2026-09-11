import type { Metadata } from "next";
import CaseStudyPage from "@/components/pages/CaseStudyPage";
import { getLocalizedProject } from "@/lib/i18n/localize-projects";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata(
  props: PageProps<"/no/work/[project]">,
): Promise<Metadata> {
  const { project: slug } = await props.params;
  const project = getLocalizedProject(slug, "no");
  return { title: project?.title ?? getDictionary("no").work.metaTitle };
}

export default async function Page(props: PageProps<"/no/work/[project]">) {
  const { project: slug } = await props.params;
  return <CaseStudyPage slug={slug} locale="no" />;
}
