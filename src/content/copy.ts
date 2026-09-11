/**
 * All user-facing copy, per language. Kept out of the components on purpose:
 * a text change should not be a code change.
 *
 * STATUS, Dutch: hero, vision, examples, about, contact, footer and meta text
 * reviewed with Simon and settled; the about text is his own.
 *
 * STATUS, English: the hero, vision, examples, about, contact and meta text are settled. The
 * other sections are still the first draft and are being written afresh one at
 * a time, as their own text rather than a translation. English is British English, consistently (the page is
 * en_GB); the first-draft sections do not follow that yet.
 *
 * Voice: the design system's readme.md, "Content fundamentals", plus Simon's
 * preferences in the AI Wise folder at
 * sales/outreach/content-record/working/personal-preference-profile.md.
 * No hype vocabulary, no experience claims, no time-saving or safety claims,
 * no emoji, no em-dashes, and no location: AI Wise is not tied to a place.
 *
 * The tagline stays English and untranslated in both languages.
 */

export type Lang = "nl" | "en";

export const LANGS: Lang[] = ["nl", "en"];

/** Confirmed company facts. Source: business-details/company-profile.json. */
export const COMPANY = {
  name: "AI Wise",
  owner: "Simon van Meegdenburg",
  city: "Amsterdam",
  email: "simon@aiwise.it.com",
  phoneDisplay: "+31 6 13926494",
  phoneIntl: "+31613926494",
  whatsapp: "31613926494",
  kvk: "93385498",
  vat: "NL005019332B52",
  site: "https://aiwise.it.com",
  tagline: "Automation in Service of Life",
  /**
   * Simon's LinkedIn profile. The contact section shows the route and the
   * structured data links to it while this is set; set it to null to hide both.
   */
  linkedin: "https://www.linkedin.com/in/simon-v-13833a131/" as string | null,
} as const;

export interface Copy {
  htmlLang: string;
  localeTag: string;
  meta: { title: string; description: string; ogAlt: string };
  nav: { skipToContent: string; home: string; language: string };
  hero: {
    eyebrow: string;
    /** Set when the eyebrow is in another language than the page, so screen
     *  readers pronounce it correctly. The Dutch page carries the English
     *  tagline here. */
    eyebrowLang?: string;
    /** One entry per line. The heading breaks where a sentence ends, which a
     *  balanced line wrap cannot be trusted to do on its own. */
    title: string[];
    lead: string;
    cta: string;
  };
  vision: {
    eyebrow: string;
    heading: string;
    /** General: the shift in what is possible, and who it is for. Concrete
     *  situations belong in the examples. */
    paragraphs: string[];
    /** The one Newsreader moment on the page: a question the reader leaves with. */
    reflection: string;
    /** Concrete possibilities, to give the reader something to react to. */
    examplesIntro: string;
    examples: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    /** The text as a bulleted list, one short line per point. */
    points: string[];
    portraitAlt: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    /** The invitation to anyone with something they want built. */
    paragraphs: string[];
    /** A short line that turns from clients to collaborators, followed by one
     *  paragraph per kind of collaborator. Optional per language. */
    collaborationIntro?: string;
    collaboration?: string[];
    /** Names on the contact buttons; on narrow screens they are the buttons'
     *  accessible names behind the icons. */
    emailLabel: string;
    linkedinLabel: string;
    whatsappLabel: string;
    whatsappPrefill: string;
    whatsappFloatLabel: string;
    note: string;
  };
  footer: {
    blurb: string;
    directTitle: string;
    legalTitle: string;
    kvkLabel: string;
    vatLabel: string;
    privacy: string;
  };
  privacy: {
    title: string;
    lead: string;
    updated: string;
    sections: { heading: string; paragraphs?: string[]; list?: string[] }[];
    backHome: string;
  };
}

const nl: Copy = {
  htmlLang: "nl",
  localeTag: "nl_NL",
  meta: {
    title: "AI Wise · Apps, websites, tools & agents laten bouwen met AI",
    description:
      "Heb je een idee voor een app, website, tool of agent waar de wereld iets aan heeft? Met AI is het nu binnen bereik en ik bouw het graag voor je.",
    ogAlt: "AI Wise, Automation in Service of Life",
  },
  nav: {
    skipToContent: "Naar de inhoud",
    home: "AI Wise, naar de bovenkant van de pagina",
    language: "Taal",
  },
  hero: {
    eyebrow: COMPANY.tagline,
    eyebrowLang: "en",
    title: ["Jij ziet het voor je.", "Ik bouw het."],
    lead: "Met AI maak ik apps, websites en tools die terugkerend werk uit handen nemen. Het liefst voor organisaties die werk doen waar de wereld iets aan heeft.",
    cta: "Neem contact op",
  },
  vision: {
    eyebrow: "Wat er nu kan",
    heading: "Wat je voor ogen hebt, is nu binnen bereik",
    paragraphs: [
      "Een website, een app of een tool laten bouwen is een stuk toegankelijker geworden. Met AI is de weg van een helder idee naar iets dat echt werkt veel korter. Wat vroeger een groot project was, is nu goed te overzien.",
      "Daarmee wordt het ook haalbaar voor kleine praktijken en organisaties die betekenisvol werk doen. Een goed idee kan klein beginnen en toch echt werken.",
    ],
    reflection: "Welk idee ligt er bij jou nog op de plank?",
    examplesIntro: "Misschien zie je zoiets voor je:",
    examples: [
      "Een vernieuwing van je website.",
      "Een webshop naast je praktijk.",
      "Een online lesomgeving naast je fysieke aanbod.",
      "Aanmeldingen die rechtstreeks in je administratie terechtkomen.",
      "Deelnemers die hun aanmeldingen of lidmaatschap kunnen beheren.",
      "Gespreksverslagen die automatisch verwerkt worden.",
      "Een agent die dat tijdrovende klusje overneemt.",
    ],
  },
  about: {
    eyebrow: "Over mij",
    heading: "Simon van Meegdenburg",
    points: [
      "Sinds 2018 bouw ik systemen met data, als BI-consultant en als data engineer.",
      "Naast mijn werk leerde ik websites en apps bouwen, en daar heb ik nog meer plezier in.",
      "Met AI werk ik een idee in ongeveer een dag uit tot een eerste prototype.",
      "Door te experimenteren leerde ik wat er nodig is om een werkend systeem te maken dat mensen dagelijks gebruiken.",
      "Als techneut bouw ik graag voor organisaties waarmee ik me verbonden voel.",
    ],
    portraitAlt: "Portret van Simon van Meegdenburg",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Ik hoor graag van je",
    paragraphs: [
      "Heb je een idee dat gebouwd wil worden, een website die aan vernieuwing toe is, of werk dat steeds weer terugkomt? Laat het me weten, ook als het nog niet helemaal uitgedacht is. AI Wise is jong en ik ontdek nog volop waar ik het meeste kan betekenen, dus ik ben benieuwd wat jij voor je ziet.",
    ],
    collaborationIntro: "Ik sta open voor samenwerking.",
    collaboration: [
      "Ben je zelf ontwikkelaar? AI ontwikkelt zich zo snel dat je samen verder komt dan alleen. Ik wissel graag werkwijzen uit, zodat we elkaar kunnen inspireren en verder helpen.",
      "Ben je ontwerper of contentschrijver? Vormgeving en teksten laat ik graag over aan mensen die daar hun vak van hebben gemaakt. Zo kan ik me richten op waar ik goed in ben: de functionaliteit bouwen.",
    ],
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    whatsappLabel: "WhatsApp",
    whatsappPrefill: "Hoi Simon, ik kwam op de site van AI Wise terecht en heb een vraag.",
    whatsappFloatLabel: "WhatsApp",
    note: "Een kort bericht is genoeg.",
  },
  footer: {
    blurb: "Apps, websites en tools, gebouwd met AI. Voor werk waar de wereld iets aan heeft.",
    directTitle: "Direct",
    legalTitle: "Zakelijk",
    kvkLabel: "KvK",
    vatLabel: "Btw-id",
    privacy: "Privacyverklaring",
  },
  privacy: {
    title: "Privacyverklaring",
    lead: "Deze website plaatst geen cookies en vraagt je nergens om gegevens. Hieronder staat wat er wel gebeurt: bij het bezoeken van de site, en zodra je contact opneemt.",
    updated: "Laatst bijgewerkt op 9 september 2026.",
    sections: [
      {
        heading: "Wat deze website doet",
        paragraphs: [
          "De site bestaat uit statische pagina's. Er staan geen formulieren op, geen advertentienetwerken en geen ingesloten inhoud van derden. Lettertypen en afbeeldingen worden vanaf deze site zelf geladen, niet vanaf een externe dienst.",
          "Er worden geen cookies geplaatst, voor geen enkel doel. De site slaat niets op in je browser.",
        ],
      },
      {
        heading: "Hosting en logbestanden",
        paragraphs: [
          "De website wordt gehost door Vercel Inc. Om de site te kunnen leveren en te beschermen tegen misbruik verwerkt Vercel technische gegevens zoals je IP-adres, het opgevraagde adres, tijdstip en browsertype. Dat gebeurt op grond van gerechtvaardigd belang. Ik gebruik deze logbestanden niet om bezoekers te herkennen of te volgen.",
        ],
      },
      {
        heading: "Bezoekersstatistiek",
        paragraphs: [
          "Ik gebruik Vercel Web Analytics om te zien hoeveel mensen de site bezoeken en welke pagina's ze bekijken. Dat gebeurt zonder cookies. In plaats van een bezoeker te markeren, berekent Vercel uit het binnenkomende verzoek een versleutelde waarde om herhaalbezoeken binnen een dag te kunnen tellen; die waarde vervalt na 24 uur en wordt niet bewaard.",
          "Wat ik zie is geaggregeerd: aantallen paginaweergaven, verwijzende websites, land, en soort apparaat of browser. Er wordt geen profiel opgebouwd, niets gekoppeld aan een persoon, en niets gevolgd over andere websites heen. Het script komt van deze site zelf, niet van een externe domein.",
          "Vercel verwerkt deze gegevens buiten de Europese Unie. Omdat er geen persoonsgegevens in zitten, is dat voor deze verwerking geen bezwaar. De grondslag is gerechtvaardigd belang: ik wil weten of de site gelezen wordt.",
        ],
      },
      {
        heading: "Contact per e-mail of WhatsApp",
        paragraphs: [
          "Als je mij mailt of via WhatsApp een bericht stuurt, verwerk ik de gegevens die je daarin zelf deelt: je naam, je contactgegevens en de inhoud van je bericht. Ik gebruik die uitsluitend om je vraag te beantwoorden en om een eventueel vervolg af te stemmen.",
          "Ik bewaar dat contact zolang het relevant is voor het gesprek en een opdracht die daaruit voortkomt, en voor de administratie zolang de wet dat vraagt. WhatsApp-berichten lopen via WhatsApp Ireland Limited, waarop hun eigen privacyvoorwaarden van toepassing zijn.",
        ],
      },
      {
        heading: "Jouw rechten",
        paragraphs: [
          "Je mag opvragen welke gegevens ik van je heb, ze laten corrigeren of laten verwijderen, en bezwaar maken tegen de verwerking. Een bericht naar het adres hieronder is genoeg. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
        ],
      },
      {
        heading: "Verwerkingsverantwoordelijke",
        list: [
          "AI Wise, eenmanszaak van Simon van Meegdenburg",
          "KvK 93385498",
          "simon@aiwise.it.com",
        ],
      },
    ],
    backHome: "Terug naar de startpagina",
  },
};

const en: Copy = {
  htmlLang: "en",
  localeTag: "en_GB",
  meta: {
    title: "AI Wise · Apps, websites, tools & agents built with AI",
    description:
      "Have an idea for an app, website, tool or agent that makes a difference? With AI it’s now within reach, and I’d be glad to build it for you.",
    ogAlt: "AI Wise, Automation in Service of Life",
  },
  nav: {
    skipToContent: "Skip to content",
    home: "AI Wise, back to the top of the page",
    language: "Language",
  },
  hero: {
    eyebrow: COMPANY.tagline,
    title: ["You picture it.", "I’ll build it."],
    lead: "I use AI to build apps, websites and tools that take repetitive work off your plate. Ideally for organisations doing work that matters.",
    cta: "Get in touch",
  },
  vision: {
    eyebrow: "What’s possible now",
    heading: "Your idea is closer than you think",
    paragraphs: [
      "Having a website, app or tool built has become far more attainable. AI shortens the path from a clear idea to a working system, and what used to be a major project is now manageable.",
      "That opens the door for small practices and organisations doing meaningful work. A good idea can start small and still make a real difference.",
    ],
    reflection: "What’s the idea you keep coming back to?",
    examplesIntro: "You may be picturing something like this:",
    examples: [
      "A modernised website.",
      "A webshop alongside your practice.",
      "An online teaching space to complement your in-person classes.",
      "Sign-ups landing straight in your records.",
      "Participants who manage their own bookings or memberships.",
      "Meeting notes processed automatically.",
      "An agent that takes over your most tedious task.",
    ],
  },
  about: {
    eyebrow: "About me",
    heading: "Simon van Meegdenburg",
    points: [
      "I’ve been building data systems since 2018, first as a BI consultant and later as a data engineer.",
      "In my spare time I learned to build websites and apps, and realised I enjoy that even more.",
      "With AI, I can turn an idea into a first prototype in about a day.",
      "Experimenting taught me what it takes to build a system ready for everyday use.",
      "I’m happiest building for organisations I feel connected to.",
    ],
    portraitAlt: "Portrait of Simon van Meegdenburg",
  },
  contact: {
    eyebrow: "Contact",
    heading: "I’d love to hear from you",
    paragraphs: [
      "Is there an idea you’d like to see built, a website that’s overdue for an update, or work that keeps coming back? Tell me about it, even if it isn’t fully thought through yet. AI Wise is young and I’m still discovering where I can be most useful, so I’m curious what you’re picturing.",
    ],
    collaborationIntro: "I’m open to working together.",
    collaboration: [
      "Are you a developer too? AI moves so fast that we’ll get further together than on our own. I like comparing notes on how we work, so we can inspire one another and keep moving forward.",
      "Are you a designer or content writer? I’m happy to leave design and writing to people who have made it their craft. That lets me focus on what I do best: building the functionality.",
    ],
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    whatsappLabel: "WhatsApp",
    whatsappPrefill: "Hi Simon, I found the AI Wise website and have a question.",
    whatsappFloatLabel: "WhatsApp",
    note: "A short message will do.",
  },
  footer: {
    blurb: "AI, data and automation for small organizations doing work that matters.",
    directTitle: "Direct",
    legalTitle: "Company",
    kvkLabel: "Chamber of Commerce",
    vatLabel: "VAT",
    privacy: "Privacy statement",
  },
  privacy: {
    title: "Privacy statement",
    lead: "This website sets no cookies and asks you for nothing. Below is what does happen: when you visit, and once you get in touch.",
    updated: "Last updated 9 September 2026.",
    sections: [
      {
        heading: "What this website does",
        paragraphs: [
          "The site is a set of static pages. There are no forms, no ad networks and no embedded third-party content. Fonts and images are served from this site rather than from an external service.",
          "No cookies are set, for any purpose. The site stores nothing in your browser.",
        ],
      },
      {
        heading: "Hosting and log files",
        paragraphs: [
          "The site is hosted by Vercel Inc. To deliver the site and protect it from abuse, Vercel processes technical data such as your IP address, the address requested, the time and your browser type, on the basis of legitimate interest. I do not use those logs to recognise or follow visitors.",
        ],
      },
      {
        heading: "Visitor statistics",
        paragraphs: [
          "I use Vercel Web Analytics to see how many people visit the site and which pages they read. It works without cookies. Rather than marking a visitor, Vercel derives a hashed value from the incoming request so that repeat visits within a day can be counted; that value expires after 24 hours and is not retained.",
          "What I see is aggregated: page view counts, referring sites, country, and device or browser type. No profile is built, nothing is tied to a person, and nothing is followed across other websites. The script is served from this site itself, not from an external domain.",
          "Vercel processes this data outside the European Union. Since it contains no personal data, that is not an obstacle for this processing. The basis is legitimate interest: I want to know whether the site is being read.",
        ],
      },
      {
        heading: "Contact by email or WhatsApp",
        paragraphs: [
          "If you email me or send a WhatsApp message, I process what you share in it: your name, your contact details and the content of your message. I use that only to answer your question and to agree on any next step.",
          "I keep that correspondence for as long as it is relevant to the conversation and to any work that follows from it, and for as long as the law requires for my records. WhatsApp messages run through WhatsApp Ireland Limited, whose own privacy terms apply.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask what data I hold about you, have it corrected or deleted, and object to the processing. A message to the address below is enough. You can also lodge a complaint with the Dutch Data Protection Authority.",
        ],
      },
      {
        heading: "Controller",
        list: [
          "AI Wise, sole proprietorship of Simon van Meegdenburg",
          "Chamber of Commerce 93385498",
          "simon@aiwise.it.com",
        ],
      },
    ],
    backHome: "Back to the home page",
  },
};

export const COPY: Record<Lang, Copy> = { nl, en };

/**
 * Paths per language. Dutch sits on the root, English under /en.
 * No trailing slashes, matching astro.config.mjs and vercel.json, so every page
 * has exactly one spelling.
 */
export function path(lang: Lang, page: "home" | "privacy"): string {
  const base = lang === "nl" ? "" : "/en";
  if (page === "home") return base || "/";
  return `${base}/privacy`;
}
