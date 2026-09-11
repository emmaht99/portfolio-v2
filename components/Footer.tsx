import Link from "next/link";
import { Sparkle } from "@/components/Doodles";
import { MailIcon, LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const iconLinkClasses =
  "group inline-flex min-h-11 items-center gap-2 text-ink transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const footerNavClasses =
  "inline-flex min-h-11 items-center font-sans text-sm text-ink transition-colors duration-200 hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="relative border-t border-neutral/20">
      <Sparkle className="absolute left-10 top-8 hidden h-6 w-6 -rotate-6 text-highlight lg:block" />
      <Sparkle className="absolute right-16 top-14 hidden h-7 w-7 rotate-12 text-highlight lg:block" />
      <Sparkle className="absolute bottom-10 left-1/3 hidden h-5 w-5 rotate-3 text-highlight lg:block" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-display text-h3 text-ink">Emma Helene Tandle</p>
            <p className="max-w-xs text-neutral">{dict.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href={localizePath("/work", locale)} className={footerNavClasses}>
                    {dict.nav.work}
                  </Link>
                </li>
                <li>
                  <Link href={localizePath("/about", locale)} className={footerNavClasses}>
                    {dict.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href={localizePath("/contact", locale)} className={footerNavClasses}>
                    {dict.contact.metaTitle}
                  </Link>
                </li>
              </ul>
            </nav>

            <ul className="flex flex-col gap-2">
              <li>
                <a href="mailto:emma@tandle.no" className={iconLinkClasses}>
                  <MailIcon />
                  emma@tandle.no
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emmatandle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconLinkClasses}
                >
                  <LinkedInIcon />
                  LinkedIn
                  <span className="sr-only">{dict.footer.opensInNewTab}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/emmaht99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconLinkClasses}
                >
                  <GitHubIcon />
                  GitHub
                  <span className="sr-only">{dict.footer.opensInNewTab}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start gap-4 border-t border-neutral/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-meta text-neutral">
            &copy; {new Date().getFullYear()} Emma Helene Tandle
          </p>
          <a
            href="#"
            className="inline-flex min-h-11 items-center text-meta text-neutral transition-colors duration-200 hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {dict.footer.backToTop}
            <span aria-hidden="true"> ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
