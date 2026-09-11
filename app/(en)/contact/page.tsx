import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = {
  title: getDictionary("en").contact.metaTitle,
};

export default function Page() {
  return <ContactPage locale="en" />;
}
