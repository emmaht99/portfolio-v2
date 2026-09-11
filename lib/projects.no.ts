// Norwegian translations for the case-study content in lib/projects.ts.
// Only translatable fields are listed here; anything omitted falls back to
// the English value via lib/i18n/localize-projects.ts. Structural data
// (slugs, image src/size/section/group, links, icons) lives only in
// lib/projects.ts and is shared across locales.
//
// Subheadings inside `process` (short, unpunctuated lines — see
// ContentSection's isSubheading) are matched against `images[].afterHeading`
// and `interviewPanel.headingAnchor` by exact string equality, so those
// three must stay in sync within this file.

export interface ProjectImageTranslation {
  alt?: string;
  caption?: string;
  sideNote?: string;
  afterHeading?: string;
  annotations?: string[];
}

export interface ProjectTranslation {
  title?: string;
  titleNote?: string;
  description?: string;
  role?: string;
  context?: string;
  timeline?: string;
  tools?: string[];
  deliverables?: string[];
  challenge?: string;
  process?: string;
  processFindings?: string;
  outcome?: string;
  processTimeline?: { label: string; points: string[]; note?: string }[];
  interviewPanel?: {
    note?: string;
    headingAnchor?: string;
    groups: { title: string; points: string[] }[];
  };
  guidelines?: { title: string; description: string }[];
  coverImage?: ProjectImageTranslation;
  heroImage?: ProjectImageTranslation;
  images?: Record<string, ProjectImageTranslation>;
}

export const projectTranslations: Record<string, ProjectTranslation> = {
  skytsengel: {
    titleNote: "hva skjer når man sentrerer mennesket og ikke løsningen?",

    description:
      "En redesign av Dansk Stalking Centers Skytsengel-app, som forvandler den fra et sikkerhetsverktøy til et bredere støtteøkosystem for mennesker utsatt for stalking.",

    role: "UX-forsker og designer — team på fem, med fokus på intervjuer, analyse og prototyping.",

    context: "Masterkursprosjekt med Dansk Stalking Center.",

    timeline: "Tredje semester på masteren, parallelt med tre andre kursprosjekter.",

    tools: ["Figma", "Brukerintervjuer", "Brainwriting", "Kvalitativ analyse", "UX-research"],

    deliverables: [
      "Intervjuguide",
      "Forskningsanalyse",
      "UX-konsept",
      "Interaktiv Figma-prototype",
    ],

    challenge:
      "Skytsengel var opprinnelig designet for å hjelpe mennesker utsatt for stalking med å raskt varsle nettverket sitt i nødsituasjoner, og dokumentere hendelser for politiet. Gjennom research oppdaget vi en viktig begrensning: mange som er utsatt for stalking har ikke noe eksisterende nettverk å støtte seg på — en gruppe appens daværende design ikke tok høyde for.\n\nProblemstillingen vår ble: Hvordan kan Skytsengel sørge for at stalking-utsatte uten nettverk føler seg trygge og ivaretatt, samtidig som appen fortsatt tilbyr veiledning og informasjon?",

    process:
      "Vi jobbet iterativt, og beveget oss frem og tilbake mellom prosess-stegene. De første intervjuene endret problemstillingen vår, noe som sendte oss tilbake til å definere og empatisere på nytt. På grunn av temaets sensitive natur holdt vi hvert intervju fleksibelt i struktur, og tilpasset hver samtale til deltakerens komfortnivå.\n\nEn posterpresentasjon underveis presset oss til å spisse en opprinnelig bred problemstilling til sin endelige, mer spesifikke form. Vi visualiserte det spissede konseptet som en klikkbar Figma-prototype, og presenterte den for Dansk Stalking Center, foreleserne våre og medstudenter.",

    processFindings:
      "På tvers av intervjuene dukket tre konflikter stadig opp: isolasjon var en nesten universell erfaring blant stalking-utsatte, de fleste manglet reell kunnskap om hva stalking faktisk er og hvordan man bør respondere på det, og Skytsengels alarmbaserte tilnærming risikerte å gi en falsk trygghetsfølelse. Disse tre funnene ble grunnlaget for det redesignede konseptet.",

    outcome:
      "Det endelige konseptet flyttet Skytsengel fra primært å være et nødverktøy til et støtteøkosystem med fokus på tre områder: emosjonell støtte, kunnskap om stalking, og trygg tilknytning til et fellesskap.\n\nVed siden av en redesignet appidentitet introduserte konseptet daglig støttende innhold og mindfulness-øvelser, et innebygd bibliotek med opplæringsinnhold om stalking, modererte støttegrupper, én-til-én-chat med en rådgiver, og en forbedret kalenderbasert logg for å dokumentere hendelser.\n\nPrototypen ble presentert for Dansk Stalking Center, som responderte positivt og fremhevet at en slik løsning kunne være verdifull for å støtte mennesker utsatt for stalking. Vi fikk også kritiske tilbakemeldinger på personvern og datahåndtering, som måtte løses før konseptet kunne bevege seg forbi prototypestadiet.\n\nProsjektet lærte meg viktigheten av presisjon og varsomhet når man designer for sensitive situasjoner. Med mer tid ville jeg fortsatt med å teste prototypen med brukere og videreutvikle funksjonaliteten til sluttproduktet.",

    processTimeline: [
      {
        label: "Empatisere",
        points: [
          "Appkritikk og skrivebordsresearch",
          "Innledende møte med Dansk Stalking Center",
          "Tidlig funn: stalking er systematisk, ikke en enkelthendelse",
        ],
      },
      {
        label: "Definere",
        points: [
          "Å ramme inn problemet fra brukerens perspektiv",
          "Første utkast til problemstilling",
          "Iterering mellom å definere og intervjue",
        ],
      },
      {
        label: "Intervju & idémyldring",
        points: [
          "Intervjuer med politi, en psykolog og to informanter",
          "Koding og kategorisering av intervjudata",
          "Brainwriting-økt for å generere løsningsidéer",
        ],
      },
      {
        label: "Prototype & test",
        points: [
          "Posterpresentasjon, deretter en dreining mot et skarpere problem",
          "Klikkbar Figma-prototype",
          "Presentasjon for Dansk Stalking Center",
        ],
      },
    ],

    interviewPanel: {
      note: "vi snakket med mennesker i ulike roller, for å sikre at den endelige løsningen var til hjelp både for de som er utsatt for stalking og fagpersonene som støtter dem",
      groups: [
        {
          title: "Egen erfaring",
          points: [
            "Mister tillit til andre, inkludert politiet",
            "Isolerer seg selv av frykt",
          ],
        },
        {
          title: "Politiet",
          points: [
            "Hvilke data politiet trenger til rettssaker",
            "Bruk appen i det daglige — men ring 112 i en nødsituasjon",
            "Alarmfunksjoner kan gi en falsk trygghetsfølelse",
          ],
        },
        {
          title: "Psykolog",
          points: [
            "Så mange føler seg virkelig alene med det",
            "Hvem har ansvaret for veiledningen som gis i appen?",
          ],
        },
      ],
    },

    coverImage: {
      alt: "Mockup av det redesignede Skytsengel-appgrensesnittet",
    },
    heroImage: {
      alt: "Mockup av det redesignede Skytsengel-appgrensesnittet",
      annotations: ["egendesignet, redesignet logo", "hjemskjerm"],
    },

    images: {
      "/projects/skytsengel/prototype-home.png": {
        alt: "Hjemskjermen til den ferdige Skytsengel-prototypen, med en daglig støttende melding og mindfulness-innhold",
      },
      "/projects/skytsengel/prototype-knowledge.png": {
        alt: "«Kunnskap om stalking»-seksjonen i den ferdige Skytsengel-prototypen",
      },
      "/projects/skytsengel/prototype-groups.png": {
        alt: "Skjermbilde av modererte støttegrupper i den ferdige Skytsengel-prototypen",
      },
      "/projects/skytsengel/prototype-log.png": {
        alt: "Skjermbilde av den kalenderbaserte hendelsesloggen i den ferdige Skytsengel-prototypen",
      },
    },
  },

  "caritas-faellesskab": {
    description:
      "En masteroppgave som utforsker hvordan digital teknologi kan støtte Caritas Danmarks seniorfellesskap, omsatt til seks designretningslinjer og en klikkbar prototype for en fellesskapsplattform.",

    role: "UX- og produktdesigner. Masteroppgave med én medstudent, med likt bidrag gjennom hele prosjektet.",

    context: "Masteroppgave med ekstern samarbeidspartner Caritas Danmark.",

    timeline: "Våren 2025, IT-Universitetet i København.",

    tools: [
      "Designetnografi",
      "Semistrukturerte intervjuer",
      "Samskapingsverksted",
      "Figma",
      "Grounded theory-koding",
    ],

    deliverables: [
      "Interessentanalyse",
      "Seks designretningslinjer",
      "Samskapingsverksted",
      "Klikkbar Figma-prototype",
    ],

    challenge:
      "Caritas Danmarks seniorfellesskap møtes fysisk: på turer, i håndarbeid, over en kopp kaffe. Men informasjonen om dem er spredt utover Facebook, munn-til-munn og papirflygeblad, og påmeldingsdetaljer havner ofte begravd i kommentartråder. Det var de nye og mindre tilknyttede medlemmene som gikk glipp av mest.\n\nUtfordringen var å designe en digital plattform som kunne ==rette opp denne fragmenteringen uten å be medlemmene bytte ut det fysiske fellesskapet med et digitalt==. Problemstillingen vår: hvordan kan vi tilpasse digital teknologi til å støtte seniorfellesskap, samtidig som vi anerkjenner at hvert fellesskap er unikt?",

    process:
      "Feltarbeid\n\nOver to måneder ble vi med som deltakere på de ukentlige turene til Caritas Ramblers og verkstedene til Caritas Krea. Vi kalte møtene våre samtaler heller enn intervjuer, holdt på deltakernes egne premisser, i deres eget miljø, i deres eget tempo.\n\nIntervjuer\n\nVi kombinerte feltarbeidet med semistrukturerte intervjuer med sju personer, på tvers av Caritas-ansatte, frivillige og deltakere, og kodet deretter materialet med grounded theory for å finne mønstre på tvers av begge.\n\nSamskapingsverksted\n\nFeltarbeidet ga oss seks hypoteser om hva som får fellesskapet til å fungere. Vi testet dem i et 90-minutters verksted med fire medlemmer og en Caritas-koordinator, med bildekort, en verditidslinje og scenariokort for å komme forbi høflighetspraten og inn til hva fellesskapet faktisk betydde for folk.\n\nDa et Krea-medlem valgte et bilde av et delt verkstedbord, satte hen det rett og slett i ord: «Man har ikke alltid en plass i hverdagen sin ... å komme til et annet sted og være sammen, det tror jeg er veldig viktig for den kreative prosessen.»",

    processFindings:
      "Tre mønstre skilte seg ut. Informasjon hadde ingen enkelt kilde til sannhet, men var spredt tynt utover Facebook, munn-til-munn og papirflygeblad. Medlemmene verdsatte friheten til å komme og gå som de ville, og valgte Caritas nettopp på grunn av denne fleksibiliteten: som en av dem uttrykte det, «man kan komme og gå som man vil». Og til tross for at Facebook ble mye brukt, unngikk flere det aktivt, og opplevde det som mer overveldende enn nyttig. Sammen formet disse mønstrene de seks retningslinjene under mer enn noe enkelt funksjonsønske kunne.",

    outcome:
      "Feltarbeidet og verkstedet konvergerte i seks skreddersydde designretningslinjer for en samlet Caritas-plattform: ikke en spesifikasjon for en app, men et sett med prinsipper for å holde det eksisterende fellesskapet i sentrum av enhver digital løsning.\n\nFor å vise hvordan retningslinjene kunne komme sammen i praksis, designet vi Caritas Fællesskab, en klikkbar Figma-prototype bygget direkte på disse seks prinsippene. Den ble presentert for Caritas Danmark og medlemmer fra begge fellesskapene, som responderte positivt; Caritas utforsker nå muligheten for å ta konseptet videre.\n\nEn viktig lærdom var betydningen av å designe med fellesskap fremfor bare for dem. Prosjektet styrket min forståelse av deltakende design, etisk research, og det å bygge teknologi som respekterer relasjoner som allerede fungerer.",

    processTimeline: [
      {
        label: "Feltarbeid",
        points: [
          "To måneder tilstede hos Caritas Ramblers og Caritas Krea",
          "Autoetnografi: deltok som medlem, ikke observatør",
          "Samtaler på deltakernes egne premisser",
        ],
      },
      {
        label: "Intervjuer",
        points: [
          "Semistrukturerte samtaler med 7 fellesskapsmedlemmer",
          "Kodet med grounded theory for å avdekke felles mønstre",
        ],
      },
      {
        label: "Samskapingsverksted",
        points: [
          "Bildekort, en verditidslinje og scenariokort",
          "4 deltakere og en Caritas-koordinator, testet 6 hypoteser",
        ],
      },
      {
        label: "Retningslinjer",
        points: [
          "Funn omsatt til seks skreddersydde designretningslinjer",
          "Presentert tilbake til Caritas Danmark og fellesskapets medlemmer",
        ],
      },
    ],

    interviewPanel: {
      headingAnchor: "Intervjuer",
      note: "rollene glir stadig over i hverandre: deltakere blir frivillige, og frivillige forblir deltakere",
      groups: [
        {
          title: "Caritas-ansatte",
          points: [
            "Planlegger og koordinerer hvert fellesskap",
            "Drives av mening og det å skape rom for andre",
          ],
        },
        {
          title: "Frivillige",
          points: [
            "Leder turene og de kreative verkstedene",
            "Bidrar uten å forvente noe tilbake",
          ],
        },
        {
          title: "Deltakere",
          points: [
            "Deltar for fellesskap, ikke forpliktelse",
            "Setter pris på friheten til å komme og gå som de vil",
          ],
        },
      ],
    },

    guidelines: [
      {
        title: "Én offisiell plattform",
        description:
          "Samle Facebook, munn-til-munn og papirflygeblad i én samlet, pålitelig kilde.",
      },
      {
        title: "Støtt, ikke erstatt",
        description:
          "La plattformen forbli et koordineringslag for det fysiske fellesskapet, ikke enda en feed å prestere på.",
      },
      {
        title: "Minimer barrierer",
        description:
          "Rask påmelding med bare navn, e-post og telefon. Ingen offentlig profil kreves.",
      },
      {
        title: "Personalisering",
        description:
          "La medlemmene velge hvilke aktiviteter og varsler som faktisk når dem.",
      },
      {
        title: "Riktig tid, riktig informasjon",
        description:
          "Tidsriktige varsler før en aktivitet; åpent rom for forslag og bilder etterpå.",
      },
      {
        title: "Egne rom",
        description:
          "Egne, tydelig merkede områder for påmeldinger, forslag og bildedeling.",
      },
    ],

    coverImage: {
      alt: "Innloggingsskjerm for konseptet Caritas Fællesskab-plattformen",
    },
    heroImage: {
      alt: "Innloggingsskjerm for konseptet Caritas Fællesskab-plattformen",
      annotations: [
        "laget en app etter prosjektslutt, for å vise Caritas hvordan de kunne implementere retningslinjene vi skapte",
      ],
    },

    images: {
      "/projects/caritas-faellesskab/krea-workshop.jpg": {
        alt: "Medlemmer av Caritas Krea pynter pepperkaker sammen ved et felles bord",
        caption:
          "En Caritas Krea-samling, ett av de to fellesskapene vi studerte gjennom feltarbeid",
        afterHeading: "Feltarbeid",
        sideNote:
          "å lære målgruppens behov å kjenne ved å tre inn i miljøet deres er nøkkelen til å skape noe nyttig",
      },
      "/projects/caritas-faellesskab/workshop-timeline.jpg": {
        alt: "Papirtidslinje fra samskapingsverkstedet, med verdier på lapper langs den og piler som viser før, under og etter en aktivitet",
        caption:
          "Deltakerne strakk verdiene sine ut over en tidslinje for før, under og etter en aktivitet",
        afterHeading: "Samskapingsverksted",
        annotations: [
          "alle interessenter som legger hodene i bløt sammen og deler perspektivene sine",
        ],
      },
      "/projects/caritas-faellesskab/workshop-values.jpg": {
        alt: "Collage av fellesskapsbilder med håndskrevne verdier på lapper, arrangert som en blink",
        caption: "Bildekort-collagen, med fellesskapets kjerneverdier plassert i midten",
      },
      "/projects/caritas-faellesskab/workshop-scenarios.jpg": {
        alt: "Scenariokort fra samskapingsverkstedet, hvert med en realistisk situasjon og et oppfølgingsspørsmål",
        caption:
          "Scenariokort brukt for å avdekke uuttalte normer, som hvem man bør spørre før man deler et bilde",
      },
    },
  },

  "deichman-wrapped": {
    description:
      "Deichman Wrapped er et selvinitiert produktkonsept som utforsker hvordan folkebibliotek kan skape mer engasjerende digitale opplevelser. Inspirert av Spotify Wrapped, forvandler prosjektet biblioteksaktivitet til en lekende og personlig årsoppsummering.",

    role: "Produktdesigner og KI-assistert prototyping",

    context: "Selvinitiert prosjekt for et folkebibliotek",

    timeline: "Høsten 2025",

    tools: ["Figma", "Figma Make", "Replit", "Claude Code", "KI-assistert prototyping"],

    deliverables: [
      "Merkevareanalyse",
      "UX-konsept",
      "Interaksjonsdesign",
      "Høyoppløst prototype",
      "Publisert webprototype",
    ],

    challenge:
      "Hvordan kan jeg få folk til å ville bruke biblioteket, og gjøre bibliotek relevante og engasjerende for den digitale generasjonen?\n\nInspirert av suksessen til Spotify Wrapped, utforsket prosjektet hvordan personlig datafortelling kunne skape nysgjerrighet, refleksjon og en emosjonell tilknytning til en offentlig institusjon.",

    process:
      "Research og strategi\n\nJeg analyserte eksisterende årsoppsummeringer og utforsket hvorfor disse formatene skaper engasjement. Jeg gjennomgikk også Deichmans visuelle identitet og formål for å sikre at konseptet føltes som en naturlig forlengelse av den eksisterende merkevaren.\n\nIdémyldring\n\nJeg utforsket hvilke datapunkter som kunne skape meningsfulle øyeblikk for brukerne, og beveget meg forbi enkel bruksstatistikk mot mer personlige og lekne refleksjoner.\n\nDesign\n\nJeg laget lavoppløste skisser for å etablere informasjonshierarki, interaksjonsflyt og en tydelig struktur for datafortelling.\n\nPrototyping\n\nJeg videreutviklet konseptet til en høyoppløst, interaktiv prototype ved hjelp av Figma Make, og fortsatte eksperimenteringen i Replit, hvor jeg laget og publiserte en fungerende demo. KI-verktøy ble brukt som design- og utviklingspartnere gjennom hele prosessen.",

    outcome:
      "Resultatet ble et komplett produktkonsept og en publisert prototype som utforsker hvordan bibliotek kan bruke personalisering og datafortelling for å øke engasjementet.\n\nProsjektet styrket min forståelse av å designe for engasjement, å bevare merkevareautentisitet samtidig som man skaper noe nytt, og å bruke KI som en samarbeidspartner i design- og utviklingsprosessen.",

    coverImage: {
      alt: "Deichman Wrapped-forside med teksten «Ditt år i bøker» over en varm gradientbakgrunn",
    },
    heroImage: {
      alt: "Tre telefonskjermer fra Deichman Wrapped som viser favorittsjangre, en takkemelding og en lesestatistikk",
    },

    images: {
      "/projects/deichman-wrapped/brand-posters.png": {
        alt: "Eksisterende kampanjeplakater fra Deichman, hver adressert til en annen leser",
        caption: "Deichmans eksisterende «Kjære …»-kampanjeplakater",
        afterHeading: "Research og strategi",
      },
      "/projects/deichman-wrapped/brand-icons.png": {
        alt: "Deichmans ikonsystem for wayfinding, brukt på tvers av bibliotekene deres",
        caption: "Deichmans ikonsystem for wayfinding",
        afterHeading: "Research og strategi",
      },
      "/projects/deichman-wrapped/research.png": {
        alt: "Research-tavle som sammenligner årsoppsummeringsformater og idémyldrer rundt Deichman Wrapped",
        caption:
          "Kartla lignende årsoppsummeringsformater og idémyldret rundt hva en biblioteksversjon kunne vise",
        annotations: [
          "idémyldringen",
          "kjent merkevarebygging",
          "statistikk-inspo",
          "laget mange lavoppløste prototyper før jeg fant ut hva som funket",
        ],
      },
    },
  },

  "tmndef-wine-label": {
    title: "TMNDEF-vinetikett",

    description:
      "En skreddersydd vinetikett laget til utgivelsesfesten for artist Kamilla Wigestrands debutsingel, «Tekst meg når du er full». Prosjektet oversatte sangens visuelle identitet til en fysisk produktopplevelse.",

    role: "Visuell designer og illustratør. Jeg utviklet illustrasjonsstilen, designet vinetiketten, laget mockuper og produserte det ferdige fysiske produktet.",

    context:
      "Et selvinitiert gaveprosjekt laget til utgivelsesfesten for artist Kamilla Wigestrands single. Målet var å skape en personlig fysisk gjenstand som var knyttet til sangens og utgivelsesfestens identitet.",

    timeline: "Laget i 2024 til utgivelsen av Kamilla Wigestrands debutsingel.",

    deliverables: [
      "Skreddersydd strekillustrasjon",
      "Design av vinetikett",
      "Produktmockuper",
      "Fysisk, trykt vinflaske",
    ],

    challenge:
      "Utfordringen var å transformere et eksisterende coverbilde til et nytt visuelt uttrykk som kunne fungere som et fysisk produkt, samtidig som tilknytningen til det originale kunstverket og sangens identitet ble bevart.",

    process:
      "Illustrasjon\n\nJeg tegnet av elementer fra det originale coverbildet og transformerte det til en skreddersydd strekillustrasjonsstil i Adobe Illustrator.\n\nDesign\n\nIllustrasjonen ble videreutviklet til et vinetikett-design i Canva, med fokus på å skape en helhetlig visuell identitet tilpasset det fysiske produktet.\n\nPresentasjon\n\nJeg laget produktmockuper i Photoshop og produserte den ferdige fysiske vinflasken ved å trykke og påføre etiketten.",

    outcome:
      "Den ferdige vinflasken ble laget som en personlig gjenstand til utgivelsesfesten, og ble delt av både artisten og baren som var vertskap, på sosiale medier.\n\nProsjektet styrket min forståelse av å omsette digitalt design til fysiske opplevelser, og å tilpasse visuelle identiteter på tvers av ulike formater.",

    coverImage: {
      alt: "Den ferdige vinflasken med sin skreddersydde etikett, holdt frem på utgivelsesfesten",
    },

    images: {
      "/projects/tmndef-wine-label/original-cover.jpg": {
        alt: "Det originale covermotivet for «Tekst meg når du er full»",
        caption: "Det originale singelcoveret — utgangspunktet for illustrasjonen",
      },
      "/projects/tmndef-wine-label/illustration-outline.png": {
        alt: "Skreddersydd strekillustrasjon tegnet av fra det originale coverbildet",
        caption: "Den avtegnede strekillustrasjonen",
        afterHeading: "Illustrasjon",
      },
      "/projects/tmndef-wine-label/illustration-outline-inverted.jpg": {
        alt: "Strekillustrasjonen gjengitt i hvitt på svart bakgrunn",
        afterHeading: "Illustrasjon",
      },
      "/projects/tmndef-wine-label/bottle-in-hand.png": {
        alt: "Den ferdige vinflasken med sin skreddersydde etikett, holdt frem på utgivelsesfesten",
      },
      "/projects/tmndef-wine-label/label-final.png": {
        alt: "Det ferdige vinetikett-designet, sett rett forfra",
        caption: "Det ferdige etikettdesignet",
      },
      "/projects/tmndef-wine-label/release-party-repost.jpg": {
        alt: "Instagram-story reposted fra utgivelsesfestens lokale, som viser vinflasken",
        caption: "Repostet av lokalet som var vertskap for utgivelsesfesten",
      },
    },
  },
};
