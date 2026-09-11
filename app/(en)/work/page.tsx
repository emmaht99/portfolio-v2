import type { Metadata } from "next";
import WorkPage from "@/components/pages/WorkPage";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = {
  title: getDictionary("en").work.metaTitle,
};

export default function Page() {
  return <WorkPage locale="en" />;
}
