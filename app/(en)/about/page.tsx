import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { getAboutContent } from "@/lib/i18n/about-content";

export const metadata: Metadata = {
  title: getAboutContent("en").metaTitle,
};

export default function Page() {
  return <AboutPage locale="en" />;
}
