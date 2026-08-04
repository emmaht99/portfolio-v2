import TextLink from "./TextLink";

const linkClasses =
  "inline-flex min-h-11 items-center text-accent underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8">
        <p className="font-display">Emma Helene Tandle</p>

        <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <li>
            <a href="mailto:emma@tandle.no" className={linkClasses}>
              emma@tandle.no
            </a>
          </li>
          <li>
            <TextLink
              href="https://www.linkedin.com/in/emmatandle/"
              external
              className="inline-flex min-h-11 items-center"
            >
              LinkedIn
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://github.com/emmaht99/"
              external
              className="inline-flex min-h-11 items-center"
            >
              GitHub
            </TextLink>
          </li>
        </ul>

        <p>&copy; {new Date().getFullYear()} Emma Helene Tandle</p>
      </div>
    </footer>
  );
}
