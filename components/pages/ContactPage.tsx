import Scribble from "@/components/Scribble";
import { Sparkle } from "@/components/Doodles";
import { MailIcon, LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type ContactPageProps = {
  locale: Locale;
};

export default function ContactPage({ locale }: ContactPageProps) {
  const dict = getDictionary(locale);

  const channels = [
    {
      label: dict.contact.channels.email,
      value: "emma@tandle.no",
      href: "mailto:emma@tandle.no",
      icon: MailIcon,
      external: false,
    },
    {
      label: dict.contact.channels.linkedin,
      value: "@emmatandle",
      href: "https://www.linkedin.com/in/emmatandle/",
      icon: LinkedInIcon,
      external: true,
    },
    {
      label: dict.contact.channels.github,
      value: "@emmaht99",
      href: "https://github.com/emmaht99/",
      icon: GitHubIcon,
      external: true,
    },
  ];

  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col gap-10 pb-24">
      <header className="relative w-full border-b border-neutral/20">
        <Sparkle className="absolute right-10 top-12 hidden h-8 w-8 rotate-12 text-highlight sm:block" />
        <Sparkle className="absolute right-24 top-28 hidden h-5 w-5 -rotate-6 text-highlight lg:block" />

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-16 sm:py-20">
          <Scribble className="-ml-1 -rotate-2 font-handwritten text-xl text-highlight">
            {dict.contact.sayHello}
          </Scribble>

          <h1 className="max-w-3xl font-display text-display text-ink">
            {dict.contact.heading}
          </h1>

          <p className="max-w-2xl">{dict.contact.intro}</p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex origin-center flex-col gap-4 border border-neutral/20 p-6 transition-all duration-300 ease-out hover:border-accent motion-safe:hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon className="h-6 w-6 text-ink transition-colors duration-200 group-hover:text-accent" />
                <div className="flex flex-col gap-1">
                  <p className="font-display text-h3 text-ink">{label}</p>
                  <p className="text-neutral">{value}</p>
                </div>
                {external ? (
                  <span className="sr-only">{dict.footer.opensInNewTab}</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4">
        <Scribble className="-ml-1 rotate-1 font-handwritten text-2xl text-highlight">
          {dict.contact.joke}
        </Scribble>
      </section>
    </main>
  );
}
