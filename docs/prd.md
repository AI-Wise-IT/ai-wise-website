# PRD, AI Wise website

Status: versie 5, gebouwd en klaar voor visuele review
Datum: 9 september 2026
Eigenaar: Simon van Meegdenburg
Vervangt: de tijdelijke coming-soon pagina op https://aiwise.it.com

---

## 1. Aanleiding en doel

AI Wise had een tijdelijke coming-soon pagina in een crème/bordeaux palet die het
designsysteem expliciet aanmerkt als **geen** visuele basislijn. Ondertussen is er een
volledig designsysteem gebouwd, inclusief een voorstel voor een websiterefresh, en start de
eerste warme outreach.

Deze website vervangt de placeholder door een minimale single pager die drie dingen doet:

1. Uitleggen waar AI Wise voor staat.
2. Laten zien wie de man achter AI Wise is.
3. Het zo makkelijk en uitnodigend mogelijk maken om contact op te nemen.

De site is een **geloofwaardige landingsplek** achter outreach, LinkedIn en visitekaartjes.
Hij hoeft niet te verkopen. Hij moet vertrouwen wekken en een gesprek uitlokken.

### 1.1 Wat de site expliciet níét doet

Er staat geen concreet aanbod op, geen prijzen, geen dienstenpakket, en voor nu ook geen
AI-Kansenscan of AI opportunity scan.

De onderzoeksfase waarin AI Wise zit wordt **niet als sectie benoemd**. Hij blijkt uit het
ontbreken van een aanbod en uit de aard van de visie. Dat is een bewuste keuze: een sectie
die uitlegt dat je nog aan het oriënteren bent, leest als voorbehoud. Het weglaten van een
aanbod, met een heldere visie ernaast, leest als richting.

### 1.2 Verhouding tot de UI-kit in het designsysteem

Het designsysteem bevat al een voorgestelde refresh in `ui_kits/website/`: vier schermen
(`Home`, `Scan`, `Practice`, `Contact`) met een gedeelde `Chrome`. Die kit gaat verder dan
deze PRD: hij heeft een scanpagina, een servicegrid, een waardenblok en een formulier.

**Deze PRD dikt die kit in tot één pagina.** De kit is de bron voor patronen, componenten
en visuele beslissingen. Hij is niet de bron voor de omvang. Waar de kit iets toont dat
hier buiten scope valt, wordt het weggelaten, niet omgebouwd.

---

## 2. Bronhiërarchie

| Domein | Bron van waarheid |
| --- | --- |
| Kleur, typografie, spacing, layout, radius, elevatie, motion, componenten, logo, weave, iconografie | Claude Design-project `0a1bab69-70cf-421d-abe9-7124374b18af` |
| Toon, schrijfregels, verboden woorden, offertaal, casing | Idem, hoofdstuk *Content fundamentals* in `readme.md` |
| Doelgroep en positionering | Idem, plus `strategy/customer-profile/outputs/customer-profile.md` in de AI Wise-map |
| Schrijfvoorkeuren per taal, Nederlandse voorkeurszinnen | `sales/outreach/content-record/working/personal-preference-profile.md` in de AI Wise-map |
| AI-vindbaarheid en crawlerbeleid | `projects/stavast/proposal-seo-ai-discoverability.md` en `projects/stavast/decisions/2026-08-05-crawler-and-canonical-policy.md` |
| Bedrijfsgegevens | `business-details/company-profile.json` in de AI Wise-map |

- R-B1: Het merkmateriaal in `brand/material/` van de AI Wise-map is voor deze site niet
  leidend. Het designsysteem vervangt het, inclusief `brand-tokens.json`,
  `visual-identity.md`, `shape-and-pattern-system.md` en `voice-and-messaging.md`.
- R-B2: Elke kleur, maat, schaalstap, radius en component is herleidbaar tot een bestand in
  `tokens/`, `components/` of `guidelines/` van het designproject.
- R-B3: Geen enkele visuele waarde wordt zelf verzonnen. Als het designsysteem er geen
  antwoord op geeft, wordt het een open punt in plaats van een aanname.
- R-B4: Het designsysteem markeert een deel van zijn beslissingen als **PROPOSED**:
  typeschaal, gewichten, regelafstand, spacing, grid, marges, radius. Door de site te
  bouwen worden die in de praktijk vastgelegd. Zie O-8.
- R-B5: De Nederlandse copy blijft ook toetsen aan `personal-preference-profile.md`. Het
  designsysteem is in het Engels geschreven en bevat de Nederlandse voorkeurszinnen niet.

### 2.1 Import

Het designsysteem is op 8 september 2026 geïmporteerd. Wat er is overgenomen, waar het
staat en welke afwijkingen zijn gemaakt, staat in
[`design-system-import.md`](design-system-import.md).

Het systeem bleek meer te dragen dan de bestandslijst suggereerde: `readme.md` bevat naast
de visuele fundamenten ook het hoofdstuk *Content fundamentals*, met de volledige
schrijfregels. Het eerdere open punt over toon en messaging is daarmee beantwoord.

---

## 3. Doelgroepen

Twee bezoekers. Geen van beide krijgt een eigen sectie; ze worden allebei aangesproken in
de contactsectie.

### 3.1 Primair: de oriënterende organisatie

Oprichters, directeuren en operations leads van kleine, missiegedreven organisaties (tot
circa 25 mensen) die betekenisvol werk doen, dicht op de uitvoering zitten, en zelf geen
technische capaciteit hebben. Ze zien AI aankomen, vermoeden dat er kansen liggen, maar
weten nog niet welke. Ze zoeken geen leverancier, ze zoeken een gesprek.

### 3.2 Secundair: de collega AI Native Developer

Vakgenoten die op dezelfde manier werken: bouwen met AI-agents, praktisch, met zorg voor
overdracht en craft. Voor uitwisseling en samenwerking, niet als klant. Vermoedelijk vaker
Engelstalig, wat een van de redenen is dat de site tweetalig is.

### 3.3 Terzijde: de warme lead die de site checkt

Iemand die net outreach van Simon heeft gekregen en kijkt of dit klopt. Voor deze bezoeker
is de site een geloofwaardigheidscheck. Consistentie met de toon van de mail weegt zwaarder
dan volledigheid.

---

## 4. Kernboodschap

> Automatisering hoort dienstbaar te zijn aan waardevol menselijk werk.

Daaromheen twee ondersteunende noties:

- **Praktisch.** AI wordt pas nuttig als het aan echt werk vastzit en zorgvuldig gebouwd is.
- **Selectief.** Niet alles hoeft geautomatiseerd. Het gaat om wat écht gebouwd moet worden,
  en wat mens moet blijven.

De tagline `Automation in Service of Life` staat in het Engels op elke pagina, in beide
taalversies, en wordt niet vertaald. Bevestigd door het designsysteem.

---

## 5. Paginastructuur

| # | Sectie | Doel | Kit-herkomst |
| --- | --- | --- | --- |
| S0 | Header | Merkherkenning, taalwissel | `Chrome.TopBar`, ingedikt |
| S1 | Hero | Wie is dit, waar staat het voor | `Home.Hero` |
| S2 | Visie | De stelling uitwerken in herkenbare taal | `Home`: "What I build" en "Who it is for", samengevoegd tot proza |
| S3 | Over Simon | De mens achter AI Wise, met portret | `Practice.jsx`, sterk ingedikt |
| S4 | Contact | Beide doelgroepen uitnodigen, twee contactroutes | `Contact.jsx` zonder formulier |
| S5 | Footer | Zakelijke gegevens, tagline, privacylink | `Chrome.Footer` |
| S6 | WhatsApp-knop | Zwevend, altijd bereikbaar | Nieuw |

Vier inhoudelijke secties.

### 5.1 Contentvereisten per sectie

**S0, Header**

- R-S0.1: `Glyph` (30px) plus wordmark (15px hoog), links, precies zoals `Chrome.TopBar`
  het doet.
- R-S0.2: Taalwissel rechts, als `NL / EN`. Geen vlaggetjes.
- R-S0.3: Geen navigatie. Vier secties hebben er geen nodig, en de kit-nav verwijst naar
  pagina's die hier niet bestaan. De `Book a scan`-knop uit de kit vervalt.
- R-S0.4: Sticky, hoogte 76px, met een hairline onderrand. Het designsysteem staat sticky
  uitsluitend toe voor de site-header, dus dit is de enige sticky component op de pagina.

**S1, Hero**

- R-S1.1: Eyebrow, `h1`, lead-paragraaf, één knop. Structuur volgt `Home.Hero`.
- R-S1.2: **De eyebrow draagt de tagline**, in het Engels op beide taalversies, met
  `lang="en"` op de Nederlandse pagina. De `h1` zegt in de taal van de pagina wat Simon
  doet. Dit wijkt af van `Home.jsx` in het designsysteem, waar de tagline de `h1` is: een
  Engelse kop vertelde een Nederlandse bezoeker niets over het werk. Vastgesteld (NL):
  *"Jij ziet het voor je. Ik bouw het."*
- R-S1.2a: De kop breekt op de zinsgrens. Elke zin is een eigen regel in de markup, want
  een gebalanceerde regelafbreking splitst anders de eerste zin. De display-maat van 54px
  geldt vanaf 1200px; daaronder is het 45px, zodat de eerste zin ook tussen 1024 en 1200px
  op één regel past. Op mobiel mag de eerste zin zelf over twee regels lopen.
- R-S1.3: Lead-paragraaf: in gewone taal wat Simon maakt en voor wie. Vastgesteld (NL):
  *"Met AI maak ik apps, websites en tools die terugkerend werk uit handen nemen. Het
  liefst voor organisaties die werk doen waar de wereld iets aan heeft."* Apps en websites
  zijn de vorm; het uit handen nemen van terugkerend werk is wat een tool doet.
- R-S1.4: Eén knop, `signal`, die naar `#contact` ankert. Zie R-V6.
- R-S1.5: De hero draagt de enige weave-plaatsing van de pagina. Zie R-V4.
- R-S1.6: Minimaal circa 620px hoog op desktop, verticaal gecentreerd, met een hairline
  onderrand.

**S2, Visie**

- R-S2.1: **De visie is algemeen.** Ze beschrijft de verschuiving: een website, app of tool
  laten bouwen is een stuk toegankelijker geworden, en daarmee haalbaar voor kleine
  praktijken en organisaties die betekenisvol werk doen. Concrete situaties horen in de
  voorbeelden, niet in de visie.
- R-S2.2: **AI is de reden, niet het onderwerp.** De visie gaat over wat er nu mogelijk is.
  Ze neemt geen deel aan de discussie of AI er zou moeten zijn, en formuleert positief. Het
  doel is de lezer te inspireren over wat er nu kan. Er wordt geen aanbod gedaan.
- R-S2.2a: Kopje *Wat er nu kan*, kop *Wat je voor ogen hebt, is nu binnen bereik*. De
  reflectie sluit de visie af als vraag waarmee de lezer de pagina verlaat: *Welk idee ligt
  er bij jou nog op de plank?*
- R-S2.3: **Geen servicegrid, wel een opsomming ter inspiratie.** De vier `Card`-tegels uit
  `Home` ("Workflow automation", "Dashboards and reporting", "Internal tools", "Data
  groundwork") worden niet overgenomen: tegels met dienstnamen lezen als een menu. In
  plaats daarvan een lijst van zeven korte, volledige voorbeelden onder de intro *Misschien
  zie je zoiets voor je:*, zonder iconen, kopjes of categorieën, en zonder afsluitende
  regel. Elk voorbeeld is kort maar compleet en draagt nog steeds de waarde. De lijst is
  door Simon zelf geschreven.
- R-S2.3c: **De lijst staat in één kader** dat iets afsteekt van de achtergrond: de
  standaardvariant van `Card` uit het designsysteem, dus `surface-card` met een 1px rand in
  `border-default`, 2px hoeken, 24px binnenruimte op mobiel en 32px vanaf 768px. Eén kader
  om de hele lijst, geen kader per voorbeeld.
- R-S2.3b: **Twee kolommen vanaf 1024px.** De visie staat links, de voorbeelden in hun
  kader rechts. Beide kolommen komen op 488px uit binnen
  de 1200px-container, wat neerkomt op 58 tekens: binnen de leesmaat van 68 die het
  designsysteem stelt. Op het breekpunt zelf is elke kolom 432px, ofwel 51 tekens, wat nog
  comfortabel leest. Onder 1024px stapelen ze, visie eerst. De voorbeeldenlijst is altijd één kolom;
  twee kolommen binnen een kolom zouden de lijst terugbrengen tot losse fragmenten.
- R-S2.3a: De voorbeelden zijn illustratie, geen aanbod. Ze noemen geen prijs, geen
  doorlooptijd, geen pakket, en er staat geen call to action bij. `llms.txt` zegt er
  expliciet bij dat het voorbeelden zijn en geen dienstencatalogus, zodat een model er geen
  aanbod van maakt.
- R-S2.4: De vier kernwaarden worden **niet** als genummerd blok opgevoerd zoals in de
  kit. Een eigen sectie over kernwaarden, met *passende technologie in plaats van zoveel
  mogelijk* als vertrekpunt, is een kandidaat voor een latere uitbreiding van de site.
- R-S2.5: Hier staat de enige reflectie op de pagina, in Newsreader. Het designsysteem
  staat er maximaal één per surface toe.
- R-S2.6: De visie is kort: rond de zeventig woorden, exclusief de reflectie.
- R-S2.7: Geen kwantitatieve claim over tijdsbesparing, veiligheid of privacy.

**S3, Over Simon**

- R-S3.1: Portret, 4:5 gecropt, 2px radius, ongefilterd en niet gegraded. Zo staat het in
  het designsysteem en zo staat het in `Practice.jsx`.
- R-S3.2: Eerste persoon enkelvoud. Nooit "wij", nooit als bureau. Het designsysteem is
  hier hard over: "I build internal tools", niet "AI Wise delivers solutions".
- R-S3.3: Benoemt de achtergrond in IT en data-engineering en de beweging naar het bouwen
  van praktische tools en systemen.
- R-S3.4: Mag persoonlijk en waardengedreven zijn, zonder spirituele of coaching-registers
  die het professionele kader ondermijnen.
- R-S3.5: Geen ervaringsclaims ("wat ik vaak zie", "uit ervaring") tenzij expliciet
  bevestigd.
- R-S3.6: Maximaal circa 150 woorden per taalversie.

**S4, Contact**

Deze sectie draagt ook het "voor wie", impliciet.

- R-S4.1: De uitnodigende tekst spreekt beide doelgroepen aan zonder ze als categorieën te
  benoemen. Geen kopjes "Voor organisaties" en "Voor developers". De formulering maakt
  duidelijk dat zowel een organisatie die zich oriënteert als een vakgenoot die wil
  uitwisselen hier welkom is.
- R-S4.2: Geen fit-criteria, geen uitsluitingen, geen "ik werk alleen met...". De rode
  lijnen uit het klantprofiel zijn intern materiaal.
- R-S4.3: Contactroutes als tekstlinks, even prominent: e-mail, LinkedIn en WhatsApp. De
  LinkedIn-route verschijnt pas zodra het profiel-URL bekend is; tot die tijd staat het veld
  op `null` en laten zowel de contactsectie als `llms.txt` de route weg. Zie O-3.
- R-S4.4: Eén regel die zegt dat een kort bericht volstaat en dat er geen verplichting aan
  vastzit. Het designsysteem schrijft "boundaries are stated, not implied"; die regel is de
  toepassing daarvan.
- R-S4.5: Geen contactformulier in deze ronde. De `components/forms/` groep wordt niet
  geïmporteerd.
- R-S4.6: Geen tweede blauwe knop. Zie R-V6.

**S5, Footer**

Structuur volgt `Chrome.Footer`, met de pagina-kolom vervangen door zakelijke gegevens.

- R-S5.1: Lockup zonder glyph, met daaronder één regel over wat AI Wise is en waar.
- R-S5.2: Kolom *Direct*: e-mailadres en telefoonnummer, beide als link. Het
  telefoonnummer staat in de kit-footer en blijft daar; in S4 zijn e-mail en WhatsApp de
  twee routes.
- R-S5.3: Kolom met KvK-nummer `93385498`, btw-identificatienummer `NL005019332B52`,
  vestigingsplaats en de link naar de privacyverklaring.
- R-S5.4: Een rule, daaronder `Automation in Service of Life · Simon van Meegdenburg`.
- R-S5.5: Vestigingsadres, zie O-2.

**S6, WhatsApp-knop**

- R-S6.1: Zwevend rechtsonder, zichtbaar op alle schermformaten.
- R-S6.2: Linkt naar `https://wa.me/31613926494`, met een voorgevulde openingszin per
  taalversie.
- R-S6.3: Toegankelijke naam, bereikbaar via toetsenbord, zichtbare focus-outline.
- R-S6.4: **Geen gevulde blauwe knop**, want dat zou een tweede `signal` op de pagina zijn.
  Uitvoering als `outline`: near-black vlak, 1px hairline, 2px radius, warm light tekst,
  icoon op 18px. Geen WhatsApp-groen.
- R-S6.5: Geen widget of script van derden. Die laden externe code en breken de identiteit.
- R-S6.6: Overlapt op mobiel geen tekst of links.

---

## 6. Meertaligheid

Het designsysteem levert één set componenten voor beide talen. Zo werkt de documentenkit
ook: één template per type, niet per taal.

- R-L1: Nederlands staat op de root `/`, Engels op `/en`.
- R-L2: De taalwissel houdt de gebruiker op dezelfde pagina in de andere taal.
- R-L3: Beide versies zijn inhoudelijk gelijkwaardig. Geen afgeknepen Engelse versie.
- R-L4: De tagline blijft in beide versies Engels en onvertaald.
- R-L5: `hreflang` voor `nl`, `en` en `x-default`, waarbij `x-default` naar NL wijst. De
  codes in de `head` en in de sitemap zijn identiek.
- R-L6: `lang`-attribuut correct per pagina, en op de Engelse tagline binnen een
  Nederlandse pagina.
- R-L7: Geen automatische omleiding op browsertaal, en geen opslag van de taalkeuze. Dat
  laatste zou JavaScript en een regel in de privacyverklaring kosten voor weinig winst.
- R-L8: Copy wordt per taal apart geschreven, niet vertaald.
- R-L9: Nederlandse en Engelse aanbodtermen worden nooit gemengd binnen één taalversie.
  Omdat de scan hier niet voorkomt, is dit vooral een waarschuwing voor toekomstige
  uitbreiding.
- R-L10: Het designsysteem merkt Nederlandse typografische regels aan als open. In de
  praktijk zetten beide talen identiek. Als Nederlandse copy een andere maat of afbreking
  nodig heeft, is dat een bevinding voor het designsysteem, niet iets dat hier lokaal
  wordt opgelost.

---

## 7. Visuele vereisten

Deze paragraaf legt vast hóé het designsysteem hier wordt toegepast. De waarden zelf staan
in `tokens/` en `guidelines/`.

- R-V1: Alle waarden via de tokens: `colors`, `typography`, `spacing`, `layout`, `motion`,
  `semantic`, `fonts` en `base`, gebundeld via `styles.css`. Geen hardgecodeerde
  hex-waarden of pixelmaten buiten de tokens om.
- R-V2: **Near-black surface.** De hele site staat op `#0B0D0C`. Het designsysteem heeft
  een volwaardige lichte surface, maar wijst die expliciet toe aan documenten: geen enkele
  pagina in de site-set staat op warm light. De `moss-deep` en `blue-deep` varianten zijn
  hier dus niet van toepassing.
- R-V3: **Vier kleuren, en dat is het.** Geen vijfde kleur, geen gradient, geen tint of
  opacity-fade op merkgrafiek, geen accent als groot achtergrondvlak.
- R-V4: **Eén weave op de pagina.** De kit gebruikt `held-right` (master O9) op de
  homepagina, op 82% van de breedte, langs de rechterrand van de hero. Dat wordt hier
  overgenomen. Nooit een tweede plaatsing, nooit `background-size: cover`, nooit
  uitrekken: schaal de master zodat zijn korte zijde de korte zijde van het vlak raakt, dan
  croppen. De tekstkolom blijft er ruim vandaan; de weave gaat nooit achter tekst en wordt
  nooit in opacity teruggebracht.
- R-V4a: Onder 1024px is er geen ruimte voor tekst en cord naast elkaar. De cord verhuist
  dan naar een eigen band van 280px onder de herotekst, waar hij nog steeds langs de korte
  zijde van zijn vlak loopt op dezelfde 5,2% strandbreedte. Eén master, één plaatsing, geen
  herhaling. De alternatieve oplossing, de weave op mobiel verbergen, is verworpen: dan
  verdwijnt het enige merkgrafische element op het formaat waar de meeste bezoekers komen.
- R-V5: **Geen schaduwen, glows, gradients of blur.** Elevatie is een stap op de neutrale
  ramp plus een 1px hairline. Radius is 2px voor knoppen, kaarten en beeldcrops, 0 voor
  banden en rules.
- R-V6: **Eén `signal`-knop op de hele pagina.** Blauw betekent "dit is wat je moet doen".
  Dat is hier de hero-CTA naar `#contact`. De contactsectie gebruikt tekstlinks, en de
  zwevende WhatsApp-knop krijgt de `outline`-behandeling uit R-S6.4. Op een single pager is
  de hele pagina één view, dus de regel geldt over de volle lengte.
- R-V7: Typografie: Source Sans 3 dominant, gewichten 400 en 600, geen 700 en geen light.
  Newsreader uitsluitend voor de reflectie, maximaal één keer op de pagina.
- R-V8: Sentence case voor koppen en knoppen. Uppercase alleen voor eyebrows, badges en
  het wordmark. Geen Title Case.
- R-V9: Body 17px op 1.6, maximaal 68ch. Leads 19px op 52ch. Content 1200px, artikelkolom
  760px, paginamarges 24 / 48 / 80px, sectiegaten 96 tot 128px.
- R-V10: Logo en glyph uitsluitend uit `assets/logo/`. Het wordmark wordt nooit opnieuw als
  levende tekst gezet; de SVG's zijn outlines zonder fontafhankelijkheid.
- R-V11: Portret is het enige fotografische beeld. Geen generieke AI-beeldtaal.
- R-V12: **Geen emoji en geen em-streepjes.** Nergens, in geen van beide talen, niet in
  koppen, niet in bodytekst, niet in de privacyverklaring. Waar een zin naar een em-streepje
  grijpt, doen een komma, een dubbele punt, een punt of haakjes het werk. En-streepjes
  blijven, uitsluitend voor getalsbereiken. Geen Unicode-tekens als icoon; alleen echte
  typografische tekens, `·` als scheider en aanhalingstekens.
  De regel is op 8 september 2026 toegevoegd aan het designsysteem, in `readme.md` onder
  *Content fundamentals* en in de harde constraints van `SKILL.md`, en op 9 september
  aangescherpt: hij geldt voor alles wat een lezer buiten AI Wise ziet. De handleidingen van
  het designsysteem zelf zijn interne documentatie en mogen ze houden. Deze PRD houdt zich
  er ook aan, en de geïmporteerde tokenbestanden zijn de enige uitzondering in deze repo,
  omdat ze verbatim moeten blijven.
- R-V13: Motion volgt `motion.css`: 80/140/200/320/520ms, geen spring, geen bounce, geen
  scale-up. De weave animeert nooit. Alles valt terug naar 0ms onder
  `prefers-reduced-motion`.
- R-V14: Focus is een 2px signal-blue outline op 2px offset en wordt nooit verwijderd.
- R-V15: Waar het designsysteem en deze PRD elkaar tegenspreken, wint het designsysteem en
  wordt de PRD bijgewerkt.

---

## 8. Technische vereisten

### 8.1 Stack

- R-T1: **Astro 7**, statische output. Ingebouwde i18n-routering en geen client-side
  JavaScript behalve het analytics-script.
- R-T1a: Alle afhankelijkheden staan op de meest recente stabiele versie, met één bewuste
  uitzondering: **TypeScript 6, niet 7**. `@astrojs/check` accepteert `^5 || ^6`, dus TS 7
  zou de typecontrole breken. Zodra `@astrojs/check` TS 7 ondersteunt, kan dat mee omhoog.
- R-T2: Geen serveradapter. Zonder formulier is er geen serverfunctie nodig, dus Vercel
  serveert alleen statische bestanden.
- R-T3: TypeScript in strict mode. `astro check` hoort schoon te draaien.
- R-T3a: **Content-Security-Policy via Astro**, niet via een header in `vercel.json`.
  `security.csp` is stabiel sinds Astro 6 en berekent hashes voor de inline stylesheet en
  het analytics-script, zodat `'unsafe-inline'` niet nodig is. Twee gevolgen die vastliggen:
  er staan **geen inline `style`-attributen** in de opgeleverde HTML, want CSP-hashes dekken
  stylesheets en geen style-attributen; en de `<Analytics />` component staat aan het einde
  van de `body`, niet in de `head`, omdat het `<vercel-analytics>` element de head vroegtijdig
  sluit en de CSP-meta dan in de body belandt, waar hij genegeerd wordt. `frame-ancestors`
  staat niet in de meta, want dat wordt daar genegeerd; `vercel.json` dekt dat met
  `X-Frame-Options`.
- R-T4: De componenten in het designsysteem zijn JSX die van een globale
  `window.AIWiseDesignSystem_0a1bab` uitgaat, een prototypepatroon. Ze zijn niet
  geïmporteerd. `base.css` draagt de weave, de container, de eyebrow, de display- en
  lead-stijlen en de reflectieve stijl al als gewone CSS, en de Astro-componenten gebruiken
  die klassen. Alleen `Button` had eigen styling en is vertaald naar CSS met dezelfde
  maten, varianten en `color-mix`-waarden, waarbij `:hover` en `:active` doen wat React
  state in de JSX doet.
- R-T5: Geen CSS-framework met een eigen ontwerpmening. `styles.css` uit het designsysteem
  is de basis, `site.css` is wat deze site toevoegt.
- R-T6: Geen JavaScript nodig om de inhoud te lezen. Taalwissel en WhatsApp-knop zijn
  gewone links.

### 8.2 Designsysteem-import

- R-T7: Import in `src/styles/tokens/` en `public/assets/`, met bronvermelding en
  importdatum in [`design-system-import.md`](design-system-import.md).
- R-T8: Geïmporteerde bestanden worden niet lokaal aangepast. Zes van de acht tokenbestanden
  zijn byte-voor-byte kopieën. De twee die wél zijn gewijzigd, `base.css` en `fonts.css`,
  zeggen dat bovenaan het bestand.
- R-T9: Alleen importeren wat de site nodig heeft. `components/forms/`,
  `ui_kits/documents/`, `slides/`, `Practice.jsx`, `Scan.jsx` en de ongebruikte componenten
  blijven buiten de repo.
- R-T10: Binaire bestanden komen niet door de sync-API. De TTF's, PNG's en het portret zijn
  van de lokale schijf gekopieerd; het designsysteem vermeldt dat het ze daarvandaan heeft
  overgenomen.
- R-T11: Fonts zelf gehost, gesubset op Latin en geconverteerd naar woff2. Source Sans 3
  blijft variabel op 23 KB. Newsreader wordt gepind op de enige instantie die het systeem
  gebruikt, opsz 18 en wght 400, op 19 KB in plaats van 125 KB. De conversie is
  reproduceerbaar beschreven.
- R-T12: **Lucide niet via CDN.** Het designsysteem laadt Lucide van `unpkg.com`, een
  prototypekeuze die een externe partij aan de privacyverklaring zou toevoegen. Deze site
  gebruikt twee iconen, dus de paden staan inline in `Icon.astro`, met bronvermelding. Dat
  is precies wat het designsysteem zelf voorschrijft ("icons are inline SVG at render
  time"). Stroke 1.5px, `currentColor`, outline only.

### 8.3 Repository

- R-T13: `https://github.com/AI-Wise-IT/ai-wise-website`, lokaal in
  `C:\Users\simon\Documents\Programming\Projects\ai-wise-website`.
- R-T14: De GitHub Pages-workflow en `CNAME` zijn verwijderd bij de overstap naar Vercel.
- R-T15: De oude placeholder is vervangen, niet bewaard als pagina. De git-historie
  bewaart hem.
- R-T16: Alle copy staat in `src/content/copy.ts`, getypeerd zodat beide talen in de pas
  blijven. Een tekstwijziging is geen codewijziging.

### 8.4 Hosting en domein

- R-T17: Hosting op Vercel, Pro-account aanwezig. `vercel.json` legt het framework, de
  cachekoppen voor fonts en gebundelde assets en de securitykoppen vast. De
  Content-Security-Policy zit niet in `vercel.json` maar wordt door Astro gegenereerd, zie
  R-T3a; twee policies naast elkaar zouden elkaar doorsnijden.
- R-T17a: Web Analytics moet in het Vercel-dashboard worden aangezet. Tot dat gebeurt geeft
  `/_vercel/insights/script.js` een 404 en logt de pagina één regel in de console. Lokaal is
  die 404 er altijd, want dat pad bestaat alleen op Vercel.
- R-T18: Productiedomein `aiwise.it.com`, één canonieke variant, geen trailing slash.
- R-T19: DNS wordt omgezet van GitHub Pages naar Vercel, pas nadat de site op een
  Vercel-preview-URL is goedgekeurd.
- R-T20: Preview-deployments per branch, productie alleen vanaf `main`.

---

## 9. Toegankelijkheid, performance en vindbaarheid

### 9.1 Toegankelijkheid

- R-A1: WCAG 2.1 AA. `guidelines/colour-contrast.html` is de referentie. Op near-black is
  het palet al in orde: warm light 16,79:1, moss 5,29:1, signal blue 5,11:1.
- R-A2: Zichtbare focus op elk interactief element, volgens R-V14.
- R-A3: Volledig met het toetsenbord te bedienen, inclusief taalwissel en WhatsApp-knop.
  Een skip-link staat vooraan de pagina.
- R-A4: Semantische koppenstructuur, één `h1`, elke sectie met een eigen gelabelde kop.
- R-A5: Alt-tekst op het portret. De weave is decoratief en krijgt `aria-hidden`.
- R-A6: `prefers-reduced-motion` wordt gerespecteerd.

### 9.2 Performance

- R-P1: Lighthouse ten minste 95 voor Performance, Accessibility, Best Practices en SEO, op
  mobiel. Nog te meten, zie O-5.
- R-P2: Largest Contentful Paint onder 2,0 seconden op 4G.
- R-P3: Het portret wordt bij de build 4:5 gecropt en in avif, webp en jpg geleverd op vier
  breedtes. Op de weergavemaat van 320px is dat circa 10 KB.
- R-P4: Geen externe scripts, trackers of embeds van derden. Zie R-T12.
- R-P5: De stylesheet wordt inline in de pagina gezet, zodat er geen render-blokkerende
  request overblijft.

### 9.3 Vindbaarheid, voor zoekmachines en voor AI

AI Wise verkoopt AI-vindbaarheid aan klanten. De eigen site moet daar een voorbeeld van
zijn. De aanpak volgt het materiaal dat voor Stavast is uitgewerkt.

Het uitgangspunt uit dat materiaal: vindbaar zijn in AI-ondersteund zoeken is een andere
keuze dan je content beschikbaar stellen voor modeltraining. Die twee worden hier apart
behandeld.

**Basis**

- R-S.1: Titel en meta-description per taalversie, handgeschreven.
- R-S.2: Open Graph en Twitter card, met `card-1700.png` als deelafbeelding.
- R-S.3: Favicon uit `glyph-square.svg` en `glyph-square-32.png`, zoals het designsysteem
  voorschrijft. De oude `favicon.svg` is vervangen.
- R-S.4: Eén canonieke host en één schrijfwijze per URL: geen trailing slash, afgedwongen
  in zowel `astro.config.mjs` als `vercel.json`. Canonical tags, sitemap, interne links en
  gestructureerde data gebruiken allemaal diezelfde vorm.
- R-S.5: `sitemap.xml` met `hreflang`-alternates per pagina, zodat een crawler die de ene
  taalversie vindt ook de andere vindt.

**Machineleesbaarheid**

- R-S.6: Alle inhoud staat in de geleverde HTML. Niets essentieels vereist JavaScript. Dit
  is de belangrijkste eis: een crawler die alleen een lege app-shell krijgt, ziet niets.
- R-S.7: JSON-LD met `ProfessionalService`, `Person` en `WebSite`, onderling gekoppeld via
  `@id`. Uitsluitend bevestigde feiten uit `company-profile.json`: naam, eigenaar, KvK,
  btw-id, vestigingsplaats, e-mail, telefoon, talen. Niets afgeleid of ingevuld.
- R-S.8: Semantische koppenstructuur en correcte `lang`-attributen.

**AI-oriëntatie**

- R-S.9: Een `llms.txt` volgens de conventie: wie AI Wise is, voor wie, wat het wel en niet
  doet, de bevestigde feiten, de pagina's en de contactroutes. Het bestand benoemt
  expliciet wat er níét is, zodat een model geen dienstencatalogus of prijzen verzint die
  er niet staan.
- R-S.10: De copy zelf is de belangrijkste AI-vindbaarheidsmaatregel. Concrete, herkenbare
  werksituaties zijn beter samen te vatten en te citeren dan abstracte capaciteitenlijstjes.
  Dit valt samen met de voice-regels; er is geen aparte "AI-geoptimaliseerde" tekstlaag.

**Crawlerbeleid**

- R-S.11: `robots.txt` benoemt de vier categorieën uit het Stavast-besluit en waarom ze wel
  of niet zijn toegestaan.
- R-S.12: Gewone zoekcrawlers, AI-zoekcrawlers en door de gebruiker aangeroepen fetchers
  zijn toegestaan. Dit is een publieke site die bedoeld is om gevonden, begrepen en
  geciteerd te worden.
- R-S.13: Modeltrainingcrawlers zijn **niet** toegestaan: GPTBot, ClaudeBot, CCBot,
  Google-Extended, Applebot-Extended, meta-externalagent en Bytespider staan op disallow.
  Dat is een bewuste keuze, los van AI-zoekvindbaarheid: die twee hangen niet samen, en de
  site blijft volledig vindbaar en citeerbaar in AI-ondersteund zoeken. `llms.txt` benoemt
  het onderscheid, zodat de keuze leesbaar is voor wie het bestand ophaalt.
- R-S.14: Er wordt geen enkele belofte gedaan over posities in zoekresultaten of over hoe
  AI-systemen AI Wise noemen. Dat is dezelfde afbakening die AI Wise klanten geeft.

---

## 10. Privacy en juridisch

- R-J1: Geen cookies, dus geen cookiebanner.
- R-J2: Bezoekersstatistiek via Vercel Web Analytics. Cookieloos: in plaats van een
  bezoeker te markeren wordt uit het binnenkomende verzoek een hash afgeleid die na 24 uur
  vervalt en niet wordt bewaard. Wat zichtbaar is, is geaggregeerd: paginaweergaven,
  verwijzende sites, land, apparaattype. Geen profielen, geen tracking over sites heen. Het
  script wordt vanaf het eigen domein geserveerd, dus er komt geen derde partij bij.
  Vercel verwerkt deze gegevens buiten de EU; omdat er geen persoonsgegevens in zitten is
  dat voor deze verwerking geen bezwaar. De privacyverklaring beschrijft dit in beide talen.
- R-J3: Privacyverklaring op `/privacy` en `/en/privacy`, met een link in de footer. Zonder
  formulier is de inhoud kort: de site verwerkt zelf geen persoonsgegevens, de
  hostingprovider verwerkt technische logbestanden, en contact via e-mail of WhatsApp
  verloopt buiten de site om, met vermelding van wat er met die berichten gebeurt.
- R-J4: Informatieplicht (art. 3:15d BW): bedrijfsnaam, KvK-nummer,
  btw-identificatienummer, contactgegevens en vestigingsadres eenvoudig vindbaar. Het adres
  is een open punt, zie O-2.
- R-J5: Geen claims over veiligheid, privacy of resultaten zonder onderbouwing.
- R-J6: De privacyverklaring beschrijft alleen wat er werkelijk gebeurt. Als er iets aan de
  verwerking verandert, wordt de tekst in dezelfde commit aangepast.

---

## 11. Contentproces

- R-C1: De copy is een concept en wordt door Simon goedgekeurd voordat de site live gaat.
  De PRD legt eisen vast, geen zinnen.
- R-C2: Copy wordt getoetst aan *Content fundamentals* in het designsysteem, en de
  Nederlandse copy daarnaast aan `personal-preference-profile.md`.
- R-C3: Verboden woorden, uit het designsysteem: "AI revolution", "game-changer", "10x",
  "effortless", "transform", "unlock", "seamless", "leverage". Geen "niet X, maar Y" waar
  een positieve formulering sterker is. Geen ervaringsclaims zonder bevestiging. Geen
  schaarstedruk. Geen toonbenoeming ("rustig", "calm"). Geen emoji. Geen em-streepjes, zie
  R-V12.
- R-C4: Elke claim heeft bewijs of een zichtbare kwalificatie. Nooit uitspraken over
  tijdsbesparing, veiligheid of privacy-uitkomsten.
- R-C5: Alle copy staat in `src/content/copy.ts`.
- R-C6: **Geen locatie.** AI Wise werkt op afstand en is niet aan een plaats gebonden. Geen
  stad of land in koppen, lopende tekst, meta-beschrijvingen, structured data of
  `llms.txt`. De enige uitzondering is de wettelijke bedrijfsidentificatie in de footer;
  hoe die eruitziet is een geparkeerde vraag.
- R-C7: Wat Simon vertelt is richting, geen tekst om over te nemen. Teksten die hij zelf
  volledig uitschrijft, worden overgenomen met alleen spelling- en consistentiecorrecties,
  en die worden benoemd.

---

## 12. Succescriteria

1. Een bezoeker kan binnen tien seconden zeggen wat AI Wise doet en voor wie.
2. Beide doelgroepen voelen zich aangesproken zonder als categorie benoemd te zijn.
3. Er staat nergens een aanbod, prijs of scan, en de onderzoeksfase hoeft nergens uitgelegd
   te worden.
4. NL en EN zijn inhoudelijk gelijkwaardig.
5. Alle contactroutes werken aantoonbaar op desktop en mobiel.
6. De Lighthouse-drempels uit R-P1 worden gehaald.
7. Elke visuele waarde is herleidbaar tot het designsysteem. De afwijkingen die deze PRD
   maakt (geen servicegrid, geen waardenblok, geen formulier, Lucide zonder CDN) staan hier
   expliciet.
8. Simon heeft de copy in beide talen goedgekeurd.
9. De opgeleverde pagina's laden zonder enige CSP-schending in de browserconsole.

Wat de site *oplevert* is in deze fase niet meetbaar en wordt niet als doelstelling
opgevoerd. Het aantal contactverzoeken is de enige interessante indicator, en die telt
Simon in zijn inbox.

---

## 13. Wat er gebouwd is

Alles wat niet op een open punt wachtte, staat er.

| Onderdeel | Status |
| --- | --- |
| Astro 7, statische build, TypeScript 6 strict | Klaar, `astro check` schoon |
| Designsysteem-import: acht tokenbestanden, logo, weave-masters, favicons | Klaar |
| Fonts gesubset en geconverteerd, samen 42 KB | Klaar |
| S0 header met taalwissel | Klaar |
| S1 hero met de enige weave-plaatsing en de enige signal-knop | Klaar |
| S2 visie met de reflectie in Newsreader en zes voorbeelden ter inspiratie | Klaar, copy is concept |
| S3 over Simon, portret 4:5 gecropt bij de build | Klaar, copy is concept |
| S4 contact met e-mail en WhatsApp | Klaar; LinkedIn is voorbereid en wacht op de URL (O-3) |
| S5 footer met KvK, btw-id, vestigingsplaats en privacylink | Klaar |
| S6 zwevende WhatsApp-knop, outline | Klaar |
| Privacyverklaring in NL en EN, inclusief de analytics-paragraaf | Klaar |
| i18n-routering, hreflang, canonical, sitemap | Klaar |
| JSON-LD, Open Graph, favicons | Klaar |
| `robots.txt` met modeltraining op disallow, en `llms.txt` | Klaar |
| Vercel Web Analytics, cookieloos, eigen domein | Klaar in code; aanzetten in het dashboard bij de deploy |
| Content-Security-Policy met hashes, geen `unsafe-inline` | Klaar, geverifieerd in de browser |
| `vercel.json` met cache- en securitykoppen | Klaar, nog niet gedeployed |
| Em-dash-regel in het designsysteem, afgebakend tot publieke teksten | Klaar in `readme.md` en `SKILL.md` |

Wat nog moet gebeuren staat in O-1 tot en met O-5, plus de deploy zelf.

---

## 14. Open punten

| # | Punt | Nodig van | Impact |
| --- | --- | --- | --- |
| O-1 | **LinkedIn-profiel-URL.** De route is gebouwd en staat uit zolang `COMPANY.linkedin` `null` is, zodat de site niet naar een profiel wijst dat nog het oude verhaal vertelt. Zodra het profiel is bijgewerkt: één regel in `copy.ts` en de route verschijnt in de contactsectie en in `llms.txt`. | Simon: URL | Gemiste route voor de secundaire doelgroep |
| O-2 | **Copy reviewen.** Beide talen, vier secties plus de privacyverklaring. De voorbeelden in de visie zijn nieuw en het meest gebaat bij een blik: zijn dit de dingen die je wilt oproepen? | Simon: lezen | De site kan niet live |
| O-3 | **Visuele beoordeling.** Je wilde eerst zelf kijken. Screenshots lukten in deze omgeving niet betrouwbaar, dus dit is nog nergens visueel gecontroleerd behalve op gemeten waarden. | Simon: bekijken | Onbekende visuele fouten |
| O-4 | **Web Analytics aanzetten in het Vercel-dashboard.** De code staat er; zonder de knop in het dashboard geeft het script een 404 en komt er geen data binnen. | Simon: bij de deploy | Geen zicht op bezoek |
| O-5 | **Lighthouse nog niet gemeten.** R-P1 is nog niet aangetoond. Meten kan zodra er een Vercel-preview staat. | Deploy | Onbewezen prestatie-eis |

Gesloten sinds versie 4:

- Concreetheid in de visie: er staan nu zes voorbeelden in, ter inspiratie. Zie R-S2.3.
- Vestigingsadres: alleen "Amsterdam" plus het KvK-nummer, zoals voorgesteld.
- Webstatistiek: Vercel Web Analytics, cookieloos. Zie R-J2.
- Modeltraining: niet toegestaan. Zie R-S.13.
- Em-dashes in het designsysteem: de regel is afgebakend tot publieke teksten, de
  handleidingen zijn expliciet uitgezonderd, en er hoeft dus geen sweep door de guides.
  Alleen de voorbeeldcopy in `ui_kits/` en `slides/` is nog een keer nalopen waard, en dat
  staat als zodanig genoteerd onder "Still open" in het designsysteem.
- PROPOSED-tokens: het designsysteem krijgt een update op het moment dat de site live gaat.
- Iconenrichting: geen open punt voor deze site. Er staan twee iconen op de pagina en
  `Icon.astro` vervangen raakt verder niets. De keuze blijft open in het designsysteem.

---

## 15. Wat er nog moet gebeuren

| Stap | Inhoud | Afhankelijk van |
| --- | --- | --- |
| 1 | Site lokaal bekijken en de copy in beide talen reviewen | Simon, O-2 en O-3 |
| 2 | Repo koppelen aan Vercel, preview-deploy | Simon: Vercel-toegang |
| 3 | Web Analytics aanzetten in het dashboard, O-4 sluiten | Stap 2 |
| 4 | Lighthouse meten op de preview, O-5 sluiten | Stap 2 |
| 5 | LinkedIn-URL toevoegen zodra het profiel is bijgewerkt, O-1 sluiten | Simon |
| 6 | DNS omzetten van GitHub Pages naar Vercel | Goedkeuring Simon |
| 7 | Designsysteem bijwerken bij livegang: PROPOSED-tokens bevestigen, repo-verwijzing in `github.md` corrigeren, voorbeeldcopy in `ui_kits/` en `slides/` nalopen op em-dashes | Bij livegang |

---

## 16. Wijzigingen ten opzichte van versie 4

- **Astro 5 naar Astro 7.3.2**, met alle afhankelijkheden op de nieuwste stabiele versie.
  Eén uitzondering: TypeScript blijft op 6, omdat `@astrojs/check` nog geen 7 accepteert.
  Twee breaking changes geraakt: `redirectToDefaultLocale` mag sinds Astro 6 alleen nog bij
  `prefixDefaultLocale: true` en is verwijderd, en de strengere compiler in Astro 7 vroeg om
  een correct gesloten `<script>` in plaats van een self-closing tag.
- **Content-Security-Policy nu via Astro**, met hashes in plaats van `unsafe-inline`. Dat
  bracht twee echte fouten aan het licht die in versie 4 onopgemerkt waren gebleven, beide
  beschreven in R-T3a: de CSP-meta belandde buiten de `head` en werd genegeerd, en de inline
  `style`-attributen werden geblokkeerd. Beide opgelost en in de browser geverifieerd.
- Zes voorbeelden toegevoegd aan de visie, ter inspiratie. R-S2.3 en R-S2.3a.
- Vercel Web Analytics toegevoegd, met een eigen paragraaf in de privacyverklaring. R-J2.
- Modeltrainingcrawlers uitgesloten in `robots.txt`. R-S.13.
- LinkedIn-route gebouwd maar uitgeschakeld tot de URL bekend is. R-S4.3.
- De em-dash-regel is afgebakend tot publieke teksten; de handleidingen van het
  designsysteem zijn uitgezonderd. R-V12.
- Het oude open punt over iconenrichting is geschrapt voor deze site.
