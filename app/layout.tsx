import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans, Caveat } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const title = "Emma H. Tandle — UX & Product Designer";
const description =
  "Portfolio of Emma H. Tandle, a UX & Product Designer exploring research-driven digital experiences, interaction design, and emerging technology.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.tandle.no"),
  title: {
    default: title,
    template: "%s — Emma H. Tandle",
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Emma H. Tandle",
    type: "website",
  },
  // Without an explicit card type, unfurlers that follow the Twitter Card
  // spec (Notion included) default to "summary", which renders the image
  // as a small, center-cropped square instead of the full 1200x630 og-image.
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-ink focus:px-4 focus:text-canvas focus:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
