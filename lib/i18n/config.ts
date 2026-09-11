export const locales = ["en", "no"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Prefix for each locale's routes. The default locale is unprefixed so
// existing URLs (/, /work, /about, /contact) keep working unchanged.
export const localePrefixes: Record<Locale, string> = {
  en: "",
  no: "/no",
};

export function localizePath(pathname: string, locale: Locale): string {
  // Strip whichever locale prefix is currently on the path, then re-apply
  // the target locale's prefix. Used by the language toggle to preserve
  // the current page when switching languages.
  const withoutPrefix =
    pathname === "/no" || pathname.startsWith("/no/")
      ? pathname.slice(3) || "/"
      : pathname;
  const prefix = localePrefixes[locale];
  if (withoutPrefix === "/") return prefix || "/";
  return `${prefix}${withoutPrefix}`;
}
