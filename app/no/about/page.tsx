import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { getAboutContent } from "@/lib/i18n/about-content";

export const metadata: Metadata = {
  title: getAboutContent("no").metaTitle,
};

export default function Page() {
  return <AboutPage locale="no" />;
}
