import Image from "next/image";
import Button from "@/components/Button";
import CollageVideo from "@/components/CollageVideo";
import Scribble from "@/components/Scribble";
import { Sparkle } from "@/components/Doodles";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <header className="relative w-full border-b border-neutral/20">
        <Sparkle className="absolute right-12 top-16 hidden h-8 w-8 rotate-12 text-highlight sm:block" />
        <Sparkle className="absolute right-32 top-32 hidden h-5 w-5 -rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute right-4 top-48 hidden h-6 w-6 rotate-3 text-highlight lg:block" />

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-24 sm:py-32">
          <h1 className="max-w-3xl font-display text-display text-ink">
            Beyond the canvas
          </h1>
          <p className="max-w-2xl">
            I&apos;m a UX &amp; Product Designer who believes curiosity,
            empathy, and exploration are essential parts of creating
            meaningful experiences.
          </p>
          <p className="max-w-2xl">
            When I&apos;m not designing, you&apos;ll find me making or
            drinking coffee, caught up in conversation, or diving into a new
            hobby, usually related to creating something! I believe that the
            best insights come from staying curious and engaging with the
            world around me. This collage is a small window into the moments
            and perspectives that fuel my creativity.
          </p>
        </div>
      </header>

      <section className="relative mx-auto w-full max-w-5xl px-4">
        <Sparkle className="absolute -left-10 top-16 hidden h-8 w-8 rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -left-6 top-72 hidden h-5 w-5 -rotate-12 text-highlight lg:block" />
        <Sparkle className="absolute -right-10 top-40 hidden h-9 w-9 -rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -right-6 top-96 hidden h-6 w-6 rotate-12 text-highlight lg:block" />

        <div className="flex flex-wrap items-start gap-x-8 gap-y-12">
          {/* Painting cluster */}
          <div className="relative -rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/abstract-painting.png"
              alt="An abstract acrylic painting in warm pinks, blues, and purples"
              width={2279}
              height={1618}
              priority
              className="h-auto w-full max-w-md"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
              painting
            </Scribble>
          </div>

          <div className="rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/watercolor-fish.jpg"
              alt="Watercolor painting of four colorful fish"
              width={801}
              height={2051}
              className="h-auto w-full max-w-[140px]"
            />
          </div>

          <div className="-rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/watercolor-red-panda.jpg"
              alt="Watercolor painting of a red panda"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[180px]"
            />
          </div>

          {/* Bunad cluster */}
          <div className="relative rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/bunad-waterfront.jpg"
              alt="Standing by the waterfront in traditional Norwegian bunad, with a Norwegian flag"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[220px]"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-1 whitespace-nowrap font-handwritten text-2xl text-highlight">
              bunad
            </Scribble>
          </div>

          <div className="-rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/bunad-bus.jpg"
              alt="Candid photo on a bus, wearing traditional Norwegian bunad"
              width={1244}
              height={2208}
              className="h-auto w-full max-w-[180px]"
            />
          </div>

          {/* Latte art */}
          <div className="relative rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/latte-art.jpg"
              alt="A latte with swan-shaped latte art"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[220px]"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
              making latteart
            </Scribble>
          </div>

          <div className="-rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/latte-art-two.jpg"
              alt="Holding a latte with rosette latte art up against a grassy, flowering field"
              width={1242}
              height={2208}
              className="h-auto w-full max-w-[160px]"
            />
          </div>

          {/* Music video */}
          <div className="relative -rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <CollageVideo
              src="/about/playing-music.mp4"
              className="h-auto w-full max-w-[200px]"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-1 whitespace-nowrap font-handwritten text-2xl text-highlight">
              playing muuuusic
            </Scribble>
          </div>

          {/* Singing cluster */}
          <div className="relative rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/singing.jpg"
              alt="Singing on keyboard and guitar with a band at an outdoor evening show"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[220px]"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-1 whitespace-nowrap font-handwritten text-2xl text-highlight">
              singing with the band
            </Scribble>
          </div>

          <div className="-rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/singing-at-idyll.jpg"
              alt="Singing on stage in a pink dress with a festival backdrop"
              width={1170}
              height={1651}
              className="h-auto w-full max-w-[160px]"
            />
          </div>

          {/* Handcraft cluster */}
          <div className="relative -rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/handcraft.jpg"
              alt="Shaping a clay sculpture by hand at a pottery studio"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[200px]"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-1 whitespace-nowrap font-handwritten text-2xl text-highlight">
              getting crafty
            </Scribble>
          </div>

          <div className="rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/knitting.jpg"
              alt="A half-finished mohair knitting project resting on a sketchbook with knitting notes"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[180px]"
            />
          </div>

          {/* Reading */}
          <div className="relative -rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
            <Image
              src="/about/good-book.jpg"
              alt="Reading a novel with sunlight casting a rainbow across the pages"
              width={3024}
              height={4032}
              className="h-auto w-full max-w-[200px]"
            />
            <Scribble className="text-halo absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
              a good book
            </Scribble>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 border-t border-neutral/20 px-4 pt-16">
        <p className="max-w-2xl">Feel free to get in touch :)</p>
        <div>
          <Button href="mailto:emma@tandle.no">Let&apos;s connect!</Button>
        </div>
      </section>
    </main>
  );
}
