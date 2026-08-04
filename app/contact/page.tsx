import Button from "@/components/Button";
import TextLink from "@/components/TextLink";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <header className="w-full border-b border-neutral/20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-24 sm:py-32">
          <h1 className="max-w-3xl font-display text-display text-ink">
            Let&apos;s talk
          </h1>
          <p className="max-w-2xl">
            Whether you have a project in mind, a question about my work, or
            just want to say hi — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Button href="mailto:emma@tandle.no">Email me</Button>
            <TextLink href="https://www.linkedin.com/in/emmatandle/" external>
              LinkedIn
            </TextLink>
            <TextLink href="https://github.com/emmaht99/" external>
              GitHub
            </TextLink>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4">
        <p className="max-w-2xl">
          Fair warning: I get just as excited talking about a good coffee as
          I do about a good design problem.
        </p>
      </section>
    </main>
  );
}
