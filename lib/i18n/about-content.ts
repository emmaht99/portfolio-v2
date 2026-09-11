import type { Locale } from "./config";

export type AboutContent = {
  metaTitle: string;
  heading: string;
  intro1: string;
  intro2: string;
  stickerHint: string;
  captions: {
    icedLatte: string;
    painting: string;
    bunad: string;
    latteArt: string;
    music: string;
    singing: string;
    craft: string;
    knitting: string;
    book: string;
    snowboarding: string;
  };
  alts: {
    painting: string;
    watercolorFish: string;
    watercolorRedPanda: string;
    bunadWaterfront: string;
    bunadBus: string;
    latteArt: string;
    latteArtTwo: string;
    singing: string;
    singingAtIdyll: string;
    handcraft: string;
    knitting: string;
    goodBook: string;
    sketching: string;
    snowboarding: string;
  };
};

const en: AboutContent = {
  metaTitle: "About",
  heading: "Beyond the canvas",
  intro1:
    "I believe curiosity, empathy, and exploration are essential parts of creating meaningful experiences.",
  intro2:
    "When I'm not designing, you'll find me making or drinking coffee, caught up in conversation, or diving into a new hobby, usually related to creating something! I believe that the best insights come from staying curious and engaging with the world around me. This collage is a small window into the moments and perspectives that fuel my creativity.",
  stickerHint: "play around with my digi-stickers",
  captions: {
    icedLatte: "make an iced latte with me",
    painting: "painting",
    bunad: "bunad",
    latteArt: "making latteart",
    music: "playing muuuusic",
    singing: "singing",
    craft: "getting crafty",
    knitting: "knitting",
    book: "a good book",
    snowboarding: "snowboarding",
  },
  alts: {
    painting: "An abstract acrylic painting in warm pinks, blues, and purples",
    watercolorFish: "Watercolor painting of four colorful fish",
    watercolorRedPanda: "Watercolor painting of a red panda",
    bunadWaterfront:
      "Standing by the waterfront in traditional Norwegian bunad, with a Norwegian flag",
    bunadBus: "Candid photo on a bus, wearing traditional Norwegian bunad",
    latteArt: "A latte with swan-shaped latte art",
    latteArtTwo:
      "Holding a latte with rosette latte art up against a grassy, flowering field",
    singing: "Singing on keyboard and guitar with a band at an outdoor evening show",
    singingAtIdyll: "Singing on stage in a pink dress with a festival backdrop",
    handcraft: "Shaping a clay sculpture by hand at a pottery studio",
    knitting:
      "A half-finished mohair knitting project resting on a sketchbook with knitting notes",
    goodBook: "Reading a novel with sunlight casting a rainbow across the pages",
    sketching: "Sketching a classical statue from life at an art museum",
    snowboarding:
      "Selfie on a snowboard on a mountain, with snowy peaks in the background",
  },
};

const no: AboutContent = {
  metaTitle: "Om meg",
  heading: "Utenfor lerretet",
  intro1:
    "Jeg tror nysgjerrighet, empati og utforskertrang er essensielle deler av å skape meningsfulle opplevelser.",
  intro2:
    "Når jeg ikke designer, finner du meg med en kaffekopp i hånden – enten jeg lager den eller drikker den – midt i en god samtale, eller fordypet i en ny hobby – som regel en som handler om å skape noe! Jeg tror de beste innsiktene kommer av å holde seg nysgjerrig og engasjert i verden rundt seg. Dette collaget er et lite vindu inn i øyeblikkene og perspektivene som driver kreativiteten min.",
  stickerHint: "lek deg med digi-klistremerkene mine",
  captions: {
    icedLatte: "bli med og lag en iced latte",
    painting: "maler",
    bunad: "bunad",
    latteArt: "lager latte art",
    music: "spiller muuusikk",
    singing: "synger",
    craft: "blir kreativ",
    knitting: "strikker",
    book: "en god bok",
    snowboarding: "kjører snowboard",
  },
  alts: {
    painting: "Et abstrakt akrylmaleri i varme rosa, blå og lilla toner",
    watercolorFish: "Akvarellmaleri av fire fargerike fisker",
    watercolorRedPanda: "Akvarellmaleri av en rødpanda",
    bunadWaterfront: "Står ved vannkanten i bunad, med et norsk flagg",
    bunadBus: "Uformelt bilde på en buss, iført bunad",
    latteArt: "En latte med latte art formet som en svane",
    latteArtTwo:
      "Holder en latte med rosettformet latte art foran et grønt, blomstrende jorde",
    singing: "Synger på keyboard og gitar med et band på en utendørs kveldskonsert",
    singingAtIdyll: "Synger på scenen i en rosa kjole med en festivalbakgrunn",
    handcraft: "Former en leireskulptur for hånd på et keramikkverksted",
    knitting:
      "Et halvferdig strikkeprosjekt i mohair som ligger på en skissebok med strikkenotater",
    goodBook: "Leser en roman mens sollyset kaster en regnbue over sidene",
    sketching: "Tegner en klassisk statue fra livet på et kunstmuseum",
    snowboarding: "Selfie på snowboard på et fjell, med snødekte topper i bakgrunnen",
  },
};

const content: Record<Locale, AboutContent> = { en, no };

export function getAboutContent(locale: Locale): AboutContent {
  return content[locale];
}
