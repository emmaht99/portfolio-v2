import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { fontVariables } from "@/lib/fonts";
import { getDictionary } from "@/lib/i18n/dictionaries";
import "../globals.css";

const locale = "no" as const;
const dict = getDictionary(locale);

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.tandle.no"),
  title: {
    default: dict.site.defaultTitle,
    template: dict.site.titleTemplate,
  },
  description: dict.site.description,
  alternates: {
    languages: {
      en: "/",
      no: "/no",
    },
  },
  openGraph: {
    title: dict.site.defaultTitle,
    description: dict.site.description,
    url: "/no",
    siteName: "Emma H. Tandle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dict.site.defaultTitle,
    description: dict.site.description,
  },
};

export default function NorwegianRootLayout({ children }: LayoutProps<"/no">) {
  return (
    <html lang={locale} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-ink focus:px-4 focus:text-canvas focus:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Hopp til hovedinnhold
        </a>
        <SiteHeader locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
