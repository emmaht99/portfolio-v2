import Image from "next/image";
import CollageVideo from "@/components/CollageVideo";
import Scribble from "@/components/Scribble";
import Sticker from "@/components/Sticker";
import {
  Sparkle,
  Heart,
  Smiley,
  Fish,
  CoffeeCup,
  Flower,
  MusicNote,
  HandCircle,
} from "@/components/Doodles";
import type { Locale } from "@/lib/i18n/config";
import { getAboutContent } from "@/lib/i18n/about-content";

type AboutPageProps = {
  locale: Locale;
};

export default function AboutPage({ locale }: AboutPageProps) {
  const content = getAboutContent(locale);

  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col gap-16 pb-16">
      <header className="relative w-full border-b border-neutral/20">
        <Sparkle className="absolute right-12 top-16 hidden h-8 w-8 rotate-12 text-highlight sm:block" />
        <Sparkle className="absolute right-32 top-32 hidden h-5 w-5 -rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute right-4 top-48 hidden h-6 w-6 rotate-3 text-highlight lg:block" />

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-24 sm:py-32">
          <h1 className="max-w-3xl font-display text-display text-ink">
            {content.heading}
          </h1>
          <p className="max-w-2xl">{content.intro1}</p>
          <p className="max-w-2xl">{content.intro2}</p>
        </div>
      </header>

      <section className="relative mx-auto w-full max-w-5xl px-4">
        <Sparkle className="absolute -left-10 top-16 hidden h-8 w-8 rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -left-6 top-72 hidden h-5 w-5 -rotate-12 text-highlight lg:block" />
        <Sparkle className="absolute -right-10 top-40 hidden h-9 w-9 -rotate-6 text-highlight lg:block" />
        <Sparkle className="absolute -right-6 top-96 hidden h-6 w-6 rotate-12 text-highlight lg:block" />

        <Scribble className="text-halo mb-8 -ml-1 -rotate-2 self-start font-handwritten text-2xl text-highlight">
          {content.stickerHint}
        </Scribble>

        <div className="relative mx-auto mb-12 h-44 w-full max-w-xl">
          <HandCircle className="absolute inset-0 h-full w-full text-highlight" />

          <Sticker className="absolute left-[4%] top-[32%]">
            <Sparkle className="h-8 w-8 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[15%] top-[68%]">
            <Sparkle className="h-4 w-4 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[23%] top-[10%]">
            <Smiley className="h-8 w-8 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[29%] top-[66%]">
            <Fish className="h-7 w-7 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[45%] top-[6%]">
            <Heart className="h-7 w-7 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[49%] top-[64%]">
            <Flower className="h-7 w-7 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[65%] top-[12%]">
            <MusicNote className="h-8 w-8 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[70%] top-[60%]">
            <Sparkle className="h-6 w-6 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[84%] top-[28%]">
            <CoffeeCup className="h-8 w-8 text-highlight" />
          </Sticker>

          <Sticker className="absolute left-[90%] top-[55%]">
            <Sparkle className="h-4 w-4 text-highlight" />
          </Sticker>
        </div>

        <div className="flex flex-wrap items-start gap-x-8 gap-y-12">
          {/* Iced latte video */}
          <Sticker>
            <div className="relative rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <CollageVideo
                src="/about/iced-latte.mp4"
                className="h-auto w-full max-w-[200px]"
              />
              <Scribble className="text-halo absolute -bottom-3 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.icedLatte}
              </Scribble>
            </div>
          </Sticker>

          {/* Painting cluster */}
          <Sticker>
            <div className="relative -rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/abstract-painting.png"
                alt={content.alts.painting}
                width={2279}
                height={1618}
                priority
                className="h-auto w-full max-w-md"
              />
              <Scribble className="text-halo absolute -bottom-3 left-2 -rotate-3 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.painting}
              </Scribble>
            </div>
          </Sticker>

          <Sticker>
            <div className="rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/watercolor-fish.jpg"
                alt={content.alts.watercolorFish}
                width={801}
                height={2051}
                className="h-auto w-full max-w-[140px]"
              />
            </div>
          </Sticker>

          <Sticker>
            <div className="-rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/watercolor-red-panda.jpg"
                alt={content.alts.watercolorRedPanda}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[180px]"
              />
            </div>
          </Sticker>

          {/* Bunad cluster */}
          <Sticker>
            <div className="relative rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/bunad-waterfront.jpg"
                alt={content.alts.bunadWaterfront}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[220px]"
              />
              <Scribble className="text-halo absolute -top-3 -right-2 rotate-6 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.bunad}
              </Scribble>
            </div>
          </Sticker>

          <Sticker>
            <div className="-rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/bunad-bus.jpg"
                alt={content.alts.bunadBus}
                width={1244}
                height={2208}
                className="h-auto w-full max-w-[180px]"
              />
            </div>
          </Sticker>

          {/* Latte art */}
          <Sticker>
            <div className="relative rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/latte-art.jpg"
                alt={content.alts.latteArt}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[220px]"
              />
              <Scribble className="text-halo absolute -bottom-4 right-1 rotate-3 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.latteArt}
              </Scribble>
            </div>
          </Sticker>

          <Sticker>
            <div className="-rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/latte-art-two.jpg"
                alt={content.alts.latteArtTwo}
                width={1242}
                height={2208}
                className="h-auto w-full max-w-[160px]"
              />
            </div>
          </Sticker>

          {/* Music video */}
          <Sticker>
            <div className="relative -rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <CollageVideo
                src="/about/playing-music.mp4"
                className="h-auto w-full max-w-[200px]"
              />
              <Scribble className="text-halo absolute -bottom-3 left-0 -rotate-3 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.music}
              </Scribble>
            </div>
          </Sticker>

          {/* Singing cluster */}
          <Sticker>
            <div className="relative rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/singing.jpg"
                alt={content.alts.singing}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[220px]"
              />
              <Scribble className="text-halo absolute -top-3 left-2 rotate-3 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.singing}
              </Scribble>
            </div>
          </Sticker>

          <Sticker>
            <div className="-rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/singing-at-idyll.jpg"
                alt={content.alts.singingAtIdyll}
                width={1170}
                height={1651}
                className="h-auto w-full max-w-[160px]"
              />
            </div>
          </Sticker>

          {/* Handcraft cluster */}
          <Sticker>
            <div className="relative -rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/handcraft.jpg"
                alt={content.alts.handcraft}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[200px]"
              />
              <Scribble className="text-halo absolute -bottom-3 right-2 -rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.craft}
              </Scribble>
            </div>
          </Sticker>

          <Sticker>
            <div className="relative rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/knitting.jpg"
                alt={content.alts.knitting}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[180px]"
              />
              <Scribble className="text-halo absolute -bottom-3 left-1/2 -translate-x-1/2 -rotate-3 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.knitting}
              </Scribble>
            </div>
          </Sticker>

          {/* Reading */}
          <Sticker>
            <div className="relative -rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/good-book.jpg"
                alt={content.alts.goodBook}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[200px]"
              />
              <Scribble className="text-halo absolute -top-4 right-2 -rotate-6 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.book}
              </Scribble>
            </div>
          </Sticker>

          {/* Life drawing */}
          <Sticker>
            <div className="rotate-1 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/sketching.jpg"
                alt={content.alts.sketching}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[200px]"
              />
            </div>
          </Sticker>

          {/* Snowboarding */}
          <Sticker>
            <div className="relative -rotate-2 border border-neutral/20 bg-canvas p-2 shadow-sm">
              <Image
                src="/about/snowboarding.jpg"
                alt={content.alts.snowboarding}
                width={3024}
                height={4032}
                className="h-auto w-full max-w-[220px]"
              />
              <Scribble className="text-halo absolute -bottom-3 left-2 rotate-2 whitespace-nowrap font-handwritten text-2xl text-highlight">
                {content.captions.snowboarding}
              </Scribble>
            </div>
          </Sticker>
        </div>
      </section>
    </main>
  );
}
