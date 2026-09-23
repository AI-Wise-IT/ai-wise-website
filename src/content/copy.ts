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
    /** Concrete possibilities, to give the reader something to react to. */
    examplesIntro: string;
    examples: string[];
  };
  /** The free AI opportunity scan: what it is and what it gives, in plain
   *  prose. No numbered steps and no price beyond "free", so it does not read
   *  as the start of a sales track. The button opens WhatsApp. */
  scan: {
    eyebrow: string;
    heading: string;
    /** May carry <strong> around the name of the deliverable (Kansenschets,
     *  Opportunity Brief), which is set in bold wherever it appears. Rendered as
     *  HTML, so only trusted copy from this file goes here. The same holds for
     *  facts. */
    paragraphs: string[];
    /** The offer card beside the text: the offer at a glance, with the button.
     *  Facts, not steps. offerName is the brand's exact offer term. */
    offerName: string;
    factsTitle: string;
    facts: string[];
    cta: string;
    whatsappPrefill: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    /** The text as a bulleted list, one short line per point. */
    points: string[];
    portraitAlt: string;
  };
  contact: {
    heading: string;
    /** A short invitation for anything that is not the scan. */
    paragraphs: string[];
    /** The floating WhatsApp button's message and accessible name. */
    whatsappPrefill: string;
    whatsappFloatLabel: string;
    /** The contact form (Contact.astro). */
    form: {
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      messageLabel: string;
      optional: string;
      /** The message placeholder, built from what the visitor fills in: start,
       *  then one of the endings. {email} and {phone} are replaced by the
       *  values. A message left empty is sent as that sentence. */
      placeholder: { start: string; none: string; email: string; phone: string; both: string };
      /** Accessible name and tooltip of the pencil in the message field, which
       *  turns the example sentence into the message itself. */
      useExample: string;
      submit: string;
      sending: string;
      successHeading: string;
      successText: string;
      error: string;
      /** Subject of the notification email Simon receives. */
      subject: string;
      /** The thank-you page a visitor without JavaScript lands on. */
      thanksPath: string;
    };
  };
  /** The thank-you page after the contact form, for visitors without
   *  JavaScript (pages/bedankt.astro, pages/en/thanks.astro). */
  thanks: {
    title: string;
    heading: string;
    text: string;
    backHome: string;
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
      "Jij kent je onderneming, ik de mogelijkheden met AI. Boek nu de gratis AI-Kansenscan en ontdek wat een app, website, tool of agent voor jou kan doen.",
    ogAlt:
      "Logo van AI Wise met de tagline Automation in Service of Life, op een donkere foto van beboste heuvels",
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
    title: ["Jij kent je onderneming.", "Ik ken de mogelijkheden."],
    lead: "Samen ontdekken we hoe AI jou verder helpt. Daarna bouw ik het: een website, een app of een tool die terugkerend werk overneemt.",
    cta: "Plan de gratis AI-Kansenscan",
  },
  vision: {
    eyebrow: "Wat er nu kan",
    heading: "Je idee is dichterbij dan je denkt",
    paragraphs: [
      "Een website, een app of een tool laten bouwen is een stuk toegankelijker geworden. Met AI is de weg van een idee naar iets dat echt werkt veel korter. Wat vroeger een groot project was, is nu goed te overzien.",
      "Daarmee wordt het ook haalbaar voor kleine ondernemers en organisaties die betekenisvol werk doen.",
    ],
    examplesIntro: "Hier kun je aan denken:",
    examples: [
      "Een doorzoekbaar archief van je WhatsApp-gesprekken, inclusief spraakberichten.",
      "Een vernieuwing van je website.",
      "Alles wat een klant je stuurde, via mail of WhatsApp, in één overzicht.",
      "Een webshop of online lesomgeving naast je fysieke aanbod.",
      "Deelnemers die hun aanmeldingen of lidmaatschap kunnen beheren.",
      "Gespreksverslagen die automatisch verwerkt worden.",
      "Een agent die dat tijdrovende klusje overneemt.",
    ],
  },
  scan: {
    eyebrow: "Zo kan ik bijdragen",
    heading: "Begin met de AI-Kansenscan",
    paragraphs: [
      "In één uur kijken we samen naar de kansen voor jouw onderneming, of je nu nog niets met AI hebt gedaan, er al mee hebt geëxperimenteerd, of een idee hebt dat je wilt onderzoeken.",
      "Je ontvangt na afloop geheel vrijblijvend de <strong>Kansenschets</strong> met een logische eerstvolgende stap waarmee je zelf aan de slag kunt.",
    ],
    offerName: "AI-Kansenscan",
    factsTitle: "Gratis",
    facts: ["1 uur in gesprek", "Ontvang de <strong>Kansenschets</strong>", "Geheel vrijblijvend"],
    cta: "Nu plannen",
    whatsappPrefill: "Hoi Simon, ik wil graag de gratis AI-Kansenscan plannen.",
  },
  about: {
    eyebrow: "Over mij",
    heading: "Simon van Meegdenburg",
    points: [
      "Al acht jaar bouw ik systemen met data, als BI-consultant en als data engineer.",
      "Ik bouw websites en apps, van ontwerp tot een werkend product.",
      "Ik weet wat er nodig is om een volwaardig systeem te maken dat mensen dagelijks gebruiken.",
      "Als techneut bouw ik graag voor organisaties met een maatschappelijk belang.",
      "Met AI werk ik een idee in ongeveer een dag uit tot een eerste prototype.",
    ],
    portraitAlt: "Portret van Simon van Meegdenburg",
  },
  contact: {
    heading: "Ik hoor graag van je",
    paragraphs: [
      "Heb je een vraag, een idee of werk dat steeds weer terugkomt? Stuur me een bericht, ook als het nog niet helemaal uitgedacht is.",
    ],
    whatsappPrefill: "Hoi Simon, ik kwam op de site van AI Wise terecht en heb een vraag.",
    whatsappFloatLabel: "Stuur een bericht via WhatsApp",
    form: {
      nameLabel: "Naam",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      messageLabel: "Bericht",
      optional: "optioneel",
      placeholder: {
        start: "Hoi Simon, ik kom graag met je in contact.",
        none: " Mail of bel me op …",
        email: " Mail me op {email}.",
        phone: " Bel me op {phone}.",
        both: " Bel me op {phone} of mail me op {email}.",
      },
      useExample: "Gebruik deze tekst als begin",
      submit: "Verstuur bericht",
      sending: "Bezig met versturen…",
      successHeading: "Bedankt voor je bericht",
      successText: "Ik neem zo snel mogelijk contact met je op.",
      error: "Het versturen is niet gelukt. Probeer het nog eens, of mail me op simon@aiwise.it.com.",
      subject: "Nieuw bericht via aiwise.it.com",
      thanksPath: "/bedankt",
    },
  },
  thanks: {
    title: "Bedankt · AI Wise",
    heading: "Bedankt voor je bericht",
    text: "Ik neem zo snel mogelijk contact met je op.",
    backHome: "Terug naar de startpagina",
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
    lead: "Deze website plaatst geen cookies en vraagt alleen om gegevens als je zelf het contactformulier invult. Hieronder staat wat er gebeurt: bij het bezoeken van de site, en zodra je contact opneemt.",
    updated: "Laatst bijgewerkt op 23 september 2026.",
    sections: [
      {
        heading: "Wat deze website doet",
        paragraphs: [
          "De site bestaat uit statische pagina's. Er staan geen advertentienetwerken op en geen ingesloten inhoud van derden. Lettertypen, afbeeldingen en scripts worden vanaf deze site zelf geladen, niet vanaf een externe dienst. Het enige dat de site naar een andere partij stuurt, is een ingevuld contactformulier; zie hieronder.",
          "Er worden geen cookies geplaatst, voor geen enkel doel. De site slaat geen gegevens over jou op in je browser.",
          "Klik je door naar WhatsApp, dan gelden vanaf dat moment de privacyvoorwaarden van dat bedrijf.",
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
        heading: "Contactformulier",
        paragraphs: [
          "Vul je het contactformulier in, dan verwerk ik wat je daarin invult: je naam, je e-mailadres, en als je die invult je telefoonnummer en je bericht. Laat je het berichtveld leeg, dan wordt de zin meegestuurd die als voorbeeld in dat veld staat, met de contactgegevens die je invulde. Ik gebruik deze gegevens alleen om contact met je op te nemen en een eventueel vervolg af te stemmen. De grondslag is gerechtvaardigd belang, of het voorbereiden van een opdracht als je daarom vraagt.",
          "Het formulier wordt verwerkt door Formward, een dienst van EGF Fastighetsservice AB (Zweden), dat daarbij als mijn verwerker optreedt en je bericht naar mijn mailbox doorstuurt. Formward host de gegevens in Zweden (Hostup AB) en verstuurt de e-mail via Mailjet in Frankrijk. De gegevens blijven daarmee binnen de Europese Unie. Formward bewaart een inzending 30 dagen en verwijdert haar daarna automatisch. Het bericht in mijn mailbox bewaar ik volgens de termijnen bij contact per e-mail, hieronder.",
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
      "You know your business, I know what’s possible with AI. Book the free AI Opportunity Scan and find out what an app, website, tool or agent can do for you.",
    ogAlt:
      "AI Wise logo with the tagline Automation in Service of Life, over a dark photograph of wooded hills",
  },
  nav: {
    skipToContent: "Skip to content",
    home: "AI Wise, home page",
    language: "Language",
    newTab: "(opens in a new tab)",
  },
  hero: {
    eyebrow: COMPANY.tagline,
    title: ["You know your business.", "I know what’s possible."],
    lead: "Together we work out where AI can make a difference for you. Then I build what’s needed: a website, an app or a tool that takes repetitive work off your plate.",
    cta: "Book the free AI Opportunity Scan",
  },
  vision: {
    eyebrow: "What’s possible now",
    heading: "Your idea is closer than you think",
    paragraphs: [
      "Having a website, app or tool built has become far more attainable. AI shortens the path from an idea to a working system, and what used to be a major project is now manageable.",
      "That opens the door for small businesses and organisations doing meaningful work.",
    ],
    examplesIntro: "Some ideas to think about:",
    examples: [
      "A searchable archive of your WhatsApp chats, voice messages included.",
      "A modernised website.",
      "Everything a client sent you, by email or WhatsApp, in one overview.",
      "A webshop or online teaching space alongside your in-person offering.",
      "Participants who manage their own bookings or memberships.",
      "Meeting notes processed automatically.",
      "An agent that takes over your most tedious task.",
    ],
  },
  scan: {
    eyebrow: "How I can help",
    heading: "Start with the AI Opportunity Scan",
    paragraphs: [
      "In one hour, we explore the opportunities for your business, whether you haven’t touched AI yet, have already been experimenting with it or have an idea you’d like to build on.",
      "Afterwards you receive the <strong>Opportunity Brief</strong>, describing a sensible next step you can take yourself. No strings attached.",
    ],
    offerName: "AI Opportunity Scan",
    factsTitle: "Free",
    facts: ["A one-hour conversation", "Receive the <strong>Opportunity Brief</strong>", "No strings attached"],
    cta: "Book now",
    whatsappPrefill: "Hi Simon, I’d like to book the free AI Opportunity Scan.",
  },
  about: {
    eyebrow: "About me",
    heading: "Simon van Meegdenburg",
    points: [
      "I’ve been building data systems for eight years, first as a BI consultant and later as a data engineer.",
      "I build websites and apps, from design to a working product.",
      "I know what it takes to build a system ready for everyday use.",
      "I’m happiest building for organisations that serve the public good.",
      "With AI, I can turn an idea into a first prototype in about a day.",
    ],
    portraitAlt: "Portrait of Simon van Meegdenburg",
  },
  contact: {
    heading: "I’d love to hear from you",
    paragraphs: [
      "Do you have a question, an idea, or work that keeps coming back? Send me a message, even if it isn’t fully thought through yet.",
    ],
    whatsappPrefill: "Hi Simon, I found the AI Wise website and have a question.",
    whatsappFloatLabel: "Message me on WhatsApp",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message",
      optional: "optional",
      placeholder: {
        start: "Hi Simon, I’d like to get in touch.",
        none: " Email or call me at …",
        email: " Email me at {email}.",
        phone: " Call me on {phone}.",
        both: " Call me on {phone} or email me at {email}.",
      },
      useExample: "Use this text as a starting point",
      submit: "Send message",
      sending: "Sending…",
      successHeading: "Thanks for your message",
      successText: "I’ll get back to you as soon as I can.",
      error: "Sending didn’t work. Try again, or email me at simon@aiwise.it.com.",
      subject: "New message via aiwise.it.com",
      thanksPath: "/en/thanks",
    },
  },
  thanks: {
    title: "Thanks · AI Wise",
    heading: "Thanks for your message",
    text: "I’ll get back to you as soon as I can.",
    backHome: "Back to the home page",
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
    lead: "This website sets no cookies and only asks for your details if you fill in the contact form yourself. Below is what happens: when you visit, and once you get in touch.",
    updated: "Last updated 23 September 2026.",
    sections: [
      {
        heading: "What this website does",
        paragraphs: [
          "The site is a set of static pages. There are no ad networks and no embedded third-party content. Fonts, images and scripts are served from this site rather than from an external service. The only thing the site sends to another party is a completed contact form; see below.",
          "No cookies are set, for any purpose. The site stores no data about you in your browser.",
          "If you follow a link to WhatsApp, that company’s own privacy terms apply from then on.",
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
        heading: "Contact form",
        paragraphs: [
          "If you fill in the contact form, I process what you enter: your name, your email address, and if you fill them in your phone number and your message. If you leave the message empty, the example sentence shown in that field is sent instead, with the contact details you entered. I use this only to get in touch with you and to agree on any next step. The basis is legitimate interest, or preparing work you ask me to do.",
          "The form is handled by Formward, a service of EGF Fastighetsservice AB (Sweden), acting as my processor, which forwards your message to my inbox. Formward hosts the data in Sweden (Hostup AB) and sends the email through Mailjet in France, so the data stays within the European Union. Formward keeps a submission for 30 days and then deletes it automatically. The message in my inbox I keep for the periods given for contact by email, below.",
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
