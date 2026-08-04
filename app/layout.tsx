import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emma H. Tandle — UX & Product Designer",
  description:
    "Portfolio of Emma H. Tandle, a UX & Product Designer exploring research-driven digital experiences, interaction design, and emerging technology.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
