/**
 * All user-facing copy, per language. Kept out of the components on purpose:
 * a text change should not be a code change.
 *
 * STATUS, Dutch: hero, vision, examples, about, contact, footer, meta and nav
 * text reviewed with Simon and settled; the about text is his own.
 *
 * STATUS, English: the hero, vision, examples, about, contact, footer, meta and nav text are settled. The
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
  nav: {
    skipToContent: string;
    /** Accessible name of the logo link, which always goes to the home page. */
    home: string;
    language: string;
    /** Visually hidden hint after every link that opens in a new tab. */
    newTab: string;
  };
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
     *  paragraph per kind of collaborator. Both languages use them; the section
     *  renders without them when they are left out. */
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
    ogAlt:
      "Logo van AI Wise met de contactgegevens van Simon van Meegdenburg en de tagline Automation in Service of Life",
  },
  nav: {
    skipToContent: "Direct naar de inhoud",
    home: "AI Wise, startpagina",
    language: "Taal",
    newTab: "(opent in een nieuw tabblad)",
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
    whatsappFloatLabel: "Stuur een bericht via WhatsApp",
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
    updated: "Laatst bijgewerkt op 11 september 2026.",
    sections: [
      {
        heading: "Wat deze website doet",
        paragraphs: [
          "De site bestaat uit statische pagina's. Er staan geen formulieren op, geen advertentienetwerken en geen ingesloten inhoud van derden. Lettertypen, afbeeldingen en scripts worden vanaf deze site zelf geladen, niet vanaf een externe dienst.",
          "Er worden geen cookies geplaatst, voor geen enkel doel. De site slaat geen gegevens over jou op in je browser.",
          "Klik je door naar LinkedIn of WhatsApp, dan gelden vanaf dat moment de privacyvoorwaarden van dat bedrijf.",
        ],
      },
      {
        heading: "Hosting en logbestanden",
        paragraphs: [
          "De website wordt gehost door Vercel Inc., dat daarbij als mijn verwerker optreedt. Om de site te kunnen leveren en te beschermen tegen misbruik verwerkt Vercel technische gegevens zoals je IP-adres, het opgevraagde adres, tijdstip en browsertype. Dat gebeurt op grond van gerechtvaardigd belang: een site die werkt en beveiligd is. Ik gebruik deze logbestanden niet om bezoekers te herkennen of te volgen, en Vercel bewaart ze volgens eigen opgave niet langer dan nodig.",
          "Vercel verwerkt gegevens vooral in de Verenigde Staten, en mogelijk ook elders buiten de Europese Economische Ruimte. Voor die doorgifte gebruikt Vercel de standaardcontractbepalingen van de Europese Commissie.",
        ],
      },
      {
        heading: "Bezoekersstatistiek",
        paragraphs: [
          "Ik gebruik Vercel Web Analytics om te zien hoeveel mensen de site bezoeken en welke pagina's ze bekijken. Dat gebeurt zonder cookies. In plaats van een bezoeker te markeren, berekent Vercel uit het binnenkomende verzoek, waar ook je IP-adres bij hoort, een hash: een afgeleide code waarmee herhaalbezoeken binnen een dag geteld kunnen worden. Die code wordt na 24 uur verwijderd.",
          "Per paginaweergave legt Vercel vast: het tijdstip, de pagina, de verwijzende website, een globale locatie afgeleid van je IP-adres, en het soort apparaat, besturingssysteem en browser. Wat ik zie is geaggregeerd. Er wordt geen profiel opgebouwd, niets gekoppeld aan een persoon, en niets gevolgd over andere websites heen. Het script komt van deze site zelf, niet van een extern domein.",
          "Ik kan deze gegevens niet tot jou herleiden, maar omdat de code is afgeleid van je verzoek, behandel ik ze voor de zekerheid als persoonsgegevens. De grondslag is gerechtvaardigd belang: ik wil weten of de site gelezen wordt. Vercel verwerkt ook deze gegevens buiten de Europese Economische Ruimte, met dezelfde waarborgen als bij de hosting. Vercel bewaart de statistieken 12 maanden.",
        ],
      },
      {
        heading: "Contact per e-mail of WhatsApp",
        paragraphs: [
          "Als je mij mailt of via WhatsApp een bericht stuurt, verwerk ik de gegevens die je daarin zelf deelt: je naam, je contactgegevens en de inhoud van je bericht. Ik gebruik die uitsluitend om je vraag te beantwoorden en om een eventueel vervolg af te stemmen. De grondslag is gerechtvaardigd belang, of het voorbereiden en uitvoeren van een opdracht als je daarom vraagt.",
          "Leidt het contact niet tot een opdracht, dan bewaar ik je berichten uiterlijk een jaar na ons laatste contact. Komt er wel een opdracht uit voort, dan bewaar ik ze zolang ze daarvoor nodig zijn. Wat tot de administratie hoort, zoals facturen, bewaar ik zeven jaar, omdat de fiscale bewaarplicht dat vraagt.",
          "Mijn e-mail loopt via Google Workspace, waarbij Google als mijn verwerker optreedt. Google kan gegevens ook buiten de Europese Economische Ruimte verwerken en beroept zich daarvoor op het EU-US Data Privacy Framework en op standaardcontractbepalingen. WhatsApp-berichten lopen via WhatsApp Ireland Limited, waarop hun eigen privacyvoorwaarden van toepassing zijn.",
        ],
      },
      {
        heading: "Jouw rechten",
        paragraphs: [
          "Binnen de grenzen van de AVG mag je opvragen welke gegevens ik van je heb, ze laten corrigeren of verwijderen, de verwerking laten beperken, bezwaar maken tegen de verwerking, en gegevens die je mij zelf hebt gegeven in een gangbaar bestandsformaat ontvangen. Een bericht naar het adres hieronder is genoeg. De statistieken kan ik niet aan jou koppelen, dus daarin kan ik niets voor je opzoeken. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
          "Je bent niet verplicht mij gegevens te geven; wat je in een bericht deelt, bepaal je zelf. Er is geen geautomatiseerde besluitvorming en geen profilering.",
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
    ogAlt:
      "AI Wise logo with Simon van Meegdenburg’s contact details and the tagline Automation in Service of Life",
  },
  nav: {
    skipToContent: "Skip to content",
    home: "AI Wise, home page",
    language: "Language",
    newTab: "(opens in a new tab)",
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
    whatsappFloatLabel: "Message me on WhatsApp",
    note: "A short message will do.",
  },
  footer: {
    blurb: "Apps, websites and tools, built with AI. For work that matters.",
    directTitle: "Contact",
    legalTitle: "Business details",
    kvkLabel: "Chamber of Commerce",
    vatLabel: "VAT no.",
    privacy: "Privacy statement",
  },
  privacy: {
    title: "Privacy statement",
    lead: "This website sets no cookies and asks you for nothing. Below is what does happen: when you visit, and once you get in touch.",
    updated: "Last updated 11 September 2026.",
    sections: [
      {
        heading: "What this website does",
        paragraphs: [
          "The site is a set of static pages. There are no forms, no ad networks and no embedded third-party content. Fonts, images and scripts are served from this site rather than from an external service.",
          "No cookies are set, for any purpose. The site stores no data about you in your browser.",
          "If you follow a link to LinkedIn or WhatsApp, that company’s own privacy terms apply from then on.",
        ],
      },
      {
        heading: "Hosting and log files",
        paragraphs: [
          "The site is hosted by Vercel Inc., acting as my processor. To deliver the site and protect it from abuse, Vercel processes technical data such as your IP address, the address requested, the time and your browser type, on the basis of legitimate interest: a site that works and stays secure. I do not use those logs to recognise or follow visitors, and Vercel states that it keeps them no longer than necessary.",
          "Vercel processes data mainly in the United States, and possibly elsewhere outside the European Economic Area. For those transfers Vercel uses the European Commission’s Standard Contractual Clauses.",
        ],
      },
      {
        heading: "Visitor statistics",
        paragraphs: [
          "I use Vercel Web Analytics to see how many people visit the site and which pages they read. It works without cookies. Rather than marking a visitor, Vercel derives a hash, a one-way code, from the incoming request, which includes your IP address, so that repeat visits within a day can be counted. That code is discarded after 24 hours.",
          "For each page view, Vercel records the time, the page, the referring site, an approximate location derived from your IP address, and your type of device, operating system and browser. What I see is aggregated. No profile is built, nothing is tied to a person, and nothing is followed across other websites. The script is served from this site itself, not from an external domain.",
          "I cannot trace this data back to you, but because the code is derived from your request, I treat it as personal data to be safe. The basis is legitimate interest: I want to know whether the site is being read. Vercel processes this data outside the European Economic Area too, with the same safeguards as for hosting. Vercel keeps the statistics for 12 months.",
        ],
      },
      {
        heading: "Contact by email or WhatsApp",
        paragraphs: [
          "If you email me or send a WhatsApp message, I process what you share in it: your name, your contact details and the content of your message. I use that only to answer your question and to agree on any next step. The basis is legitimate interest, or preparing and carrying out work you ask me to do.",
          "If our contact does not lead to any work, I keep your messages for no longer than one year after our last contact. If it does, I keep them for as long as the work needs them. Records such as invoices I keep for seven years, as Dutch tax law requires.",
          "My email runs through Google Workspace, with Google acting as my processor. Google may process data outside the European Economic Area and relies on the EU-US Data Privacy Framework and Standard Contractual Clauses to do so. WhatsApp messages run through WhatsApp Ireland Limited, whose own privacy terms apply.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Within the limits of the GDPR, you can ask what data I hold about you, have it corrected or deleted, restrict its processing, object to the processing, and receive data you gave me in a common file format. A message to the address below is enough. I cannot link the visitor statistics to you, so I cannot look anything up there. You can also lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).",
          "You are not required to give me any data; what you share in a message is up to you. There is no automated decision-making and no profiling.",
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
