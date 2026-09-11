"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localizePath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const labels: Record<Locale, string> = {
  en: "EN",
  no: "NO",
};

type LanguageToggleProps = {
  locale: Locale;
  className?: string;
};

export default function LanguageToggle({ locale, className }: LanguageToggleProps) {
  const pathname = usePathname();
  const dict = getDictionary(locale);

  return (
    <div
      role="group"
      aria-label={dict.languageToggle.switchToLabel[locale === "en" ? "no" : "en"]}
      className={`inline-flex items-center gap-1 font-sans text-sm text-ink ${className ?? ""}`}
    >
      {locales.map((candidate, index) => {
        const isActive = candidate === locale;
        return (
          <span key={candidate} className="inline-flex items-center">
            {index > 0 ? <span aria-hidden="true" className="px-1 text-neutral">/</span> : null}
            {isActive ? (
              <span aria-current="true" className="min-h-11 px-1 py-1 font-medium text-accent">
                {labels[candidate]}
              </span>
            ) : (
              <Link
                href={localizePath(pathname, candidate)}
                aria-label={dict.languageToggle.switchToLabel[candidate]}
                className="inline-flex min-h-11 items-center px-1 py-1 transition-colors duration-200 hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {labels[candidate]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
