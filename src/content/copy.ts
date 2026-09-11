/**
 * All user-facing copy, per language. Kept out of the components on purpose:
 * a text change should not be a code change.
 *
 * STATUS, Dutch: hero, vision and examples reviewed with Simon and settled.
 * About, contact, footer and meta text are still the first draft and get
 * rewritten section by section. English is the first draft throughout and is
 * written afresh once the Dutch is settled, as its own text rather than a
 * translation.
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
   * Simon's LinkedIn profile. Null until the profile itself has been updated for
   * AI Wise; the contact section and llms.txt leave the route out while it is
   * null, so nothing points at a page that does not say the right thing yet.
   */
  linkedin: null as string | null,
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
    examplesNote?: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    portraitAlt: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    emailLabel: string;
    linkedinLabel: string;
    linkedinValue: string;
    whatsappLabel: string;
    whatsappValue: string;
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
    title: "AI Wise · AI, data en automatisering voor kleine organisaties",
    description:
      "AI Wise is de praktijk van Simon van Meegdenburg. Ik bouw praktische tools, workflow-automatisering en rapportage voor kleine organisaties met betekenisvol werk.",
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
      "Gespreksverslagen die zichzelf uitschrijven.",
      "Een tool voor dat ene klusje dat te veel tijd kost.",
    ],
  },
  about: {
    eyebrow: "Over mij",
    heading: "Simon van Meegdenburg",
    paragraphs: [
      "Mijn achtergrond ligt in IT en data-engineering. Waar ik naartoe beweeg is het bouwen zelf: werkende tools, kleine systemen, dingen die je maandagochtend kunt gebruiken.",
      "AI Wise is mijn eenmanszaak. Ik werk het liefst met kleine organisaties die werk doen waar iemand echt iets aan heeft, en die dicht genoeg op de uitvoering zitten om te weten waar het schuurt.",
      "Wat dit vak voor mij de moeite waard maakt is de zorgvuldigheid. De context begrijpen, de scope klein houden, testen, opschrijven wat er gebouwd is, en het netjes overdragen. AI maakt het bouwen snel. De zorgvuldigheid moet je er zelf in houden.",
    ],
    portraitAlt: "Portret van Simon van Meegdenburg",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Ik hoor graag van je",
    paragraphs: [
      "Denk je na over wat AI voor jouw organisatie zou kunnen betekenen, en weet je nog niet waar je zou beginnen? Daar ga ik graag een keer over in gesprek. AI Wise is jong en ik ben op dit moment vooral aan het uitzoeken waar de kansen in de praktijk liggen, dus zo'n gesprek levert mij net zo veel op als jou.",
      "Bouw je zelf met AI en wil je een keer sparren over hoe je het aanpakt? Ook daar ben ik voor in.",
    ],
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    linkedinValue: "Simon van Meegdenburg",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Stuur een bericht",
    whatsappPrefill: "Hoi Simon, ik kwam op de site van AI Wise terecht en heb een vraag.",
    whatsappFloatLabel: "WhatsApp",
    note: "Een kort bericht is genoeg. Er zit geen verplichting aan vast.",
  },
  footer: {
    blurb: "AI, data en automatisering voor kleine organisaties met betekenisvol werk.",
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
    title: "AI Wise · AI, data and automation for small organizations",
    description:
      "AI Wise is the practice of Simon van Meegdenburg. I build practical internal tools, workflow automation and reporting for small organizations doing work that matters.",
    ogAlt: "AI Wise, Automation in Service of Life",
  },
  nav: {
    skipToContent: "Skip to content",
    home: "AI Wise, back to the top of the page",
    language: "Language",
  },
  hero: {
    eyebrow: "AI, data and automation",
    title: ["Automation in service of life"],
    lead: "With AI Wise I build tools that lighten recurring work and make space for the work that truly matters.",
    cta: "Get in touch",
  },
  vision: {
    eyebrow: "What I stand for",
    heading: "Automation should serve work that matters",
    paragraphs: [
      "In a lot of organizations a real part of the week goes to work nobody designed that way. Form entries typed by hand into a second system. A monthly report rebuilt from three exports every time. Notes from a conversation written out again in the evening.",
      "Some of that a machine can carry. Not all of it, and not all of it should. The attention someone gives a participant, a client or a colleague is exactly the work worth protecting.",
      "What I look for is the line between the two: what can be taken off the pile, so more of the week is left for what people do. Then I build it, with enough documentation and handover that you can keep going without me.",
    ],
    reflection: "You can see AI arriving. What you cannot see yet is where it would actually help here.",
    examplesIntro: "A few things that are possible, to give a sense of what this can be about:",
    examples: [
      "A sign-up form that turns itself into a record, a confirmation email and a line in the planning.",
      "A monthly report that assembles itself from the systems the numbers already live in.",
      "Meeting notes that come out of a recording, in your own shape and your own words.",
      "A view of what the work is producing, instead of piecing that together again every quarter.",
      "Registrations, participants and messages arriving in one place rather than four.",
      "A small internal tool that takes over exactly one step of your process, and nothing else.",
    ],
    examplesNote: "Which of these would be worth it depends on how the work runs now. That is where the conversation starts.",
  },
  about: {
    eyebrow: "About me",
    heading: "Simon van Meegdenburg",
    paragraphs: [
      "My background is in IT and data engineering. What I have moved toward is the building itself: working tools, small systems, things you can use on Monday morning.",
      "AI Wise is my one-person practice. I like working with small organizations doing work that matters to someone, close enough to the day-to-day to know where it chafes.",
      "What makes this craft worth it to me is the care. Understanding the context, keeping scope small, testing, writing down what got built, handing it over properly. AI makes building fast. Keeping it careful is still on you.",
    ],
    portraitAlt: "Portrait of Simon van Meegdenburg",
  },
  contact: {
    eyebrow: "Contact",
    heading: "I would like to hear from you",
    paragraphs: [
      "Wondering what AI could mean for your organization, without knowing where you would start? I would be glad to talk it through. AI Wise is young and I am mostly working out where the opportunities actually lie in practice, so a conversation like that is worth as much to me as it is to you.",
      "Building with AI yourself and want to compare notes on how you approach it? Equally welcome.",
    ],
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    linkedinValue: "Simon van Meegdenburg",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Send a message",
    whatsappPrefill: "Hi Simon, I came across the AI Wise site and have a question.",
    whatsappFloatLabel: "WhatsApp",
    note: "A short message is enough. Nothing follows from it that you do not ask for.",
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
