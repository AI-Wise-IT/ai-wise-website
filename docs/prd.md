# PRD, AI Wise website

Status: versie 9, live. De site staat sinds 11 september 2026 in productie op Vercel en
serveert https://aiwise.it.com en https://www.aiwise.it.com. Beide taalversies zijn
geschreven en door Simon goedgekeurd.
Datum: 12 september 2026
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

De onderzoeksfase waarin AI Wise zit krijgt **geen eigen sectie**. Contact benoemt hem in één
positieve zin (zie R-S4.1a). Voor de rest blijkt hij uit het
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
| Kleur, typografie, spacing, layout, radius, elevatie, motion, componenten, logo, weave, fotografie, iconografie | Claude Design-project `0a1bab69-70cf-421d-abe9-7124374b18af` |
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
  bouwen worden die in de praktijk vastgelegd. Het bevestigen van die tokens in het
  designsysteem staat nog open; zie hoofdstuk 15.
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
Engelstalig, wat een van de redenen is dat de site tweetalig is. Sinds 23 september 2026
spreekt de site hen niet meer apart aan (R-S4.1b); het contactformulier staat voor hen net
zo open als voor iedereen.

### 3.2a Samenwerkingspartners: ontwerpers en contentschrijvers

Ontwerpers en contentschrijvers met wie Simon samenwerkt. Tot 23 september 2026 werden ze
in Contact apart aangesproken; dat is weg (R-S4.1b).

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
| S4 | Contact | Beide doelgroepen uitnodigen, contactformulier | Formulier naar Formward (R-S4.3) |
| S5 | Footer | Zakelijke gegevens, tagline, privacylink | `Chrome.Footer` |
| S6 | WhatsApp-knop | Zwevend, altijd bereikbaar | Nieuw |

Vier inhoudelijke secties.

### 5.1 Contentvereisten per sectie

**S0, Header**

- R-S0.1: `Glyph` (30px) plus wordmark (15px hoog), links, precies zoals `Chrome.TopBar`
  het doet.
- R-S0.2: Taalwissel rechts, als `NL / EN`. Geen vlaggetjes. Een schermlezer spelt *NL* en
  *EN* als letters, dus elke link draagt na de zichtbare code de naam van de taal als
  visueel verborgen tekst, in die taal zelf: de toegankelijke namen zijn *NL, Nederlands* en
  *EN, English*, met `lang` op de link. De naam begint met de zichtbare tekst, zodat wie met
  spraak bedient nog steeds *klik NL* kan zeggen (WCAG 2.5.3, label in name). De namen zijn
  op elke pagina gelijk en staan als constante in `Header.astro`, niet per taal in `copy.ts`.
- R-S0.3: Geen navigatie. Vier secties hebben er geen nodig, en de kit-nav verwijst naar
  pagina's die hier niet bestaan. De `Book a scan`-knop uit de kit vervalt.
- R-S0.4: Sticky, hoogte 76px, met een hairline onderrand. Het designsysteem staat sticky
  uitsluitend toe voor de site-header, dus dit is de enige sticky component op de pagina.
- R-S0.5: **Transparant boven de herofoto.** Op de homepagina ligt de header bovenaan de
  pagina doorzichtig op de foto. Zodra de pagina scrolt, wordt hij binnen de eerste 76px
  scroll de gewone near-black header met zijn hairline. De hero loopt door achter de
  header, dus er staat geen zwarte strook boven de foto. De hairline houdt in beide
  toestanden zijn breedte en wisselt alleen van kleur, zodat er niets verspringt. Op de
  privacypagina is er geen foto en blijft de header altijd dicht.
- R-S0.6: De wissel is **CSS zonder JavaScript**: een scroll-driven animation op de
  scrollpositie van de pagina, achter `@supports (animation-timeline: scroll())`. De dichte
  header is de standaard. Een browser zonder ondersteuning, of een pagina die niet kan
  scrollen, toont dus altijd de dichte header en nooit een onleesbare doorzichtige. Onder
  `prefers-reduced-motion` is het een harde wissel bij de eerste pixel scroll in plaats
  van een overgang. De skip-link blijft bovenop alles liggen en werkt ongewijzigd.
- R-S0.7: Het glyph en het wordmark staan als inline SVG in de header in plaats van als
  `<img>`. Beide bestanden in `assets/logo/` hebben een near-black achtergrondvlak, dat op
  de near-black pagina onzichtbaar is maar boven de foto als donker blokje zichtbaar
  wordt. Dat vlak wordt bij de build weggelaten; de paden zelf zijn onveranderd en de
  bestanden in `public/assets/logo/` blijven verbatim kopieën. Header en footer gebruiken
  daarvoor dezelfde component, `LogoSvg.astro`.

**S1, Hero**

- R-S1.1: Eyebrow, `h1`, lead-paragraaf, één knop. Structuur volgt `Home.Hero`.
- R-S1.2: **De eyebrow draagt de tagline**, in het Engels op beide taalversies, met
  `lang="en"` op de Nederlandse pagina. De `h1` zegt in de taal van de pagina wat Simon
  doet. Dit wijkt af van `Home.jsx` in het designsysteem, waar de tagline de `h1` is: een
  Engelse kop vertelde een Nederlandse bezoeker niets over het werk. Vastgesteld (NL):
  *"Jij kent je onderneming. Ik ken de mogelijkheden."* Vastgesteld (EN): *"You know your
  business. I know what’s possible."* De Engelse pagina heeft geen `lang` op de eyebrow
  nodig. Tot 23 september 2026 stond hier *"Jij ziet het voor je. Ik bouw het."* Inge
  wees erop dat die kop lezers afschrikt die het nog niet voor zich zien. De nieuwe kop zet
  twee soorten kennis naast elkaar, zodat ook wie nog geen idee heeft zich aangesproken
  voelt.
- R-S1.2a: De kop breekt op de zinsgrens. Elke zin is een eigen regel in de markup, want
  een gebalanceerde regelafbreking splitst anders de eerste zin. De display-maat van 54px
  geldt vanaf 1200px; daaronder is het 45px, zodat de eerste zin ook tussen 1024 en 1200px
  op één regel past. Op mobiel mag de eerste zin zelf over twee regels lopen.
- R-S1.3: Lead-paragraaf: in gewone taal wat Simon maakt en voor wie. Vastgesteld (NL):
  *"Samen ontdekken we hoe AI jou verder helpt. Daarna bouw ik het: een website, een app of
  een tool die terugkerend werk overneemt."* Vastgesteld (EN): *"Together we work out where
  AI can make a difference for you. Then I build what’s needed: a website, an app or a tool
  that takes repetitive work off your plate."* AI staat daarmee in de hero, op Simons
  verzoek van 23 september 2026; de Engelse zin is herschreven omdat de eerste versie te
  letterlijk vertaald was. De lead zegt wat er gebeurt als de twee kanten uit de kop samenkomen:
  eerst samen uitzoeken, dan bouwen. Het bouwen staat daarmee weer in de hero, nu de kop het
  niet meer noemt. De opsomming is wat "het" kan zijn. De bijzin hoort
  bij de tool en niet bij de website, want een website neemt geen terugkerend werk over, en
  de eerdere formulering liet hem op alle drie slaan. AI staat niet meer in de hero; de
  visie werkt dat uit.
- R-S1.4: Eén knop, `signal`, die naar `#kansenscan` ankert: *Plan een gratis
  AI-Kansenscan* (Engels: *Book a free AI Opportunity Scan*). Onder 640px zakt de knop naar
  de bodymaat met 16px zijkant, zodat het Engelse label op 375px op één regel past. Zie
  R-V6 en S2b.
- R-S1.5: De hero staat op een foto: een steenarend die boven een groen bladerdak glijdt,
  met een donkere laag die de tekst leesbaar houdt. Zie R-V4 en R-V4a. De weave staat niet
  meer op de website.
- R-S1.6: Minstens de volle schermhoogte, met een hairline onderrand. Op liggende schermen
  staat de tekst links en verticaal gecentreerd onder de header; op staande schermen staat
  de tekst bovenaan en houdt de hero onder de knop een band vrij voor de arend.

**S2, Visie**

- R-S2.1: **De visie is algemeen.** Ze beschrijft de verschuiving: een website, app of tool
  laten bouwen is een stuk toegankelijker geworden, en daarmee haalbaar voor kleine
  ondernemers en organisaties die betekenisvol werk doen. Concrete situaties horen in de
  voorbeelden, niet in de visie.
- R-S2.2: **AI is de reden, niet het onderwerp.** De visie gaat over wat er nu mogelijk is.
  Ze neemt geen deel aan de discussie of AI er zou moeten zijn, en formuleert positief. Het
  doel is de lezer te inspireren over wat er nu kan. Er wordt geen aanbod gedaan; dat doet
  de scan-sectie erna (S2b), en daar mag AI wel het onderwerp zijn.
- R-S2.2a: Kopje *Wat er nu kan*, kop *Je idee is dichterbij dan je denkt*. De visie telt
  drie zinnen en eindigt bij *kleine ondernemers en organisaties die betekenisvol werk
  doen*. In het Engels: kopje *What’s possible now*, kop *Your idea is closer than you
  think*. De oude kop, *Wat je voor ogen hebt, is nu binnen bereik*, ging ervan uit dat de
  lezer al wist wat hij wilde. De reflectie *Welk idee zou jij alsnog tot leven willen
  brengen?* is weg: de scan-sectie erna nodigt al uit, en een vraag ertussen remde dat af.
  De zin die uitnodigde
  om eerder onhaalbare plannen opnieuw te bekijken is weg, op advies van Inge: hij herhaalde
  wat erboven al stond. Om dezelfde reden zegt de visie *een idee* en niet *een helder
  idee*: veel lezers hebben dat heldere idee nog niet.
- R-S2.3: **Geen servicegrid, wel een opsomming ter inspiratie.** De vier `Card`-tegels uit
  `Home` ("Workflow automation", "Dashboards and reporting", "Internal tools", "Data
  groundwork") worden niet overgenomen: tegels met dienstnamen lezen als een menu. In
  plaats daarvan een lijst van zeven korte, volledige voorbeelden onder de intro *Hier kun
  je aan denken:* (Engels: *Some ideas to think about:*), zonder
  iconen, kopjes of categorieën, en zonder afsluitende regel. Beide talen hebben dezelfde
  opbouw: intro, zeven voorbeelden, geen notitie eronder. Elk voorbeeld is kort maar
  compleet en draagt nog steeds de waarde. De lijst is door Simon zelf geschreven, in beide
  talen. Sinds 23 september 2026:
  1. *Een doorzoekbaar archief van je WhatsApp-gesprekken, inclusief spraakberichten.*
     Gebaseerd op Simons eigen WhatsApp-archief.
  2. *Een vernieuwing van je website.*
  3. *Alles wat een klant je stuurde, via mail of WhatsApp, in één overzicht.* Data-integratie,
     uitgelegd aan een alledaagse situatie.
  4. *Een webshop of online lesomgeving naast je fysieke aanbod.* (eerder twee punten)
  5. *Deelnemers die hun aanmeldingen of lidmaatschap kunnen beheren.*
  6. *Gespreksverslagen die automatisch verwerkt worden.*
  7. *Een agent die dat tijdrovende klusje overneemt.*

  De volgorde is Simons keuze: de voorbeelden die de meeste mensen aanspreken staan
  bovenaan. *Aanmeldingen die rechtstreeks in je administratie terechtkomen* is weggehaald,
  zodat het er zeven blijven. In het Engels, in dezelfde volgorde: *A searchable archive of
  your WhatsApp chats, voice messages included.*, *A modernised website.*, *Everything a
  client sent you, by email or WhatsApp, in one overview.*, *A webshop or online teaching
  space alongside your in-person offering.*, *Participants who manage their own bookings or
  memberships.*, *Meeting notes processed automatically.*, *An agent that takes over your
  most tedious task.*
- R-S2.3c: **De lijst staat in één kader** dat iets afsteekt van de achtergrond: de
  standaardvariant van `Card` uit het designsysteem, dus `surface-card` met een 1px rand in
  `border-default`, 2px hoeken, 24px binnenruimte op mobiel en 32px vanaf 768px. Eén kader
  om de hele lijst, geen kader per voorbeeld.
- R-S2.3b: **Twee kolommen vanaf 1024px.** Het label *Wat er nu kan* staat boven beide
  kolommen. Daaronder staan links de voorbeelden in hun kader en rechts de visie, inclusief
  de kop, zodat de lezer eerst iets concreets ziet om zich in te herkennen (op advies van
  Inge). De kop begint daardoor op dezelfde hoogte als het kader. Gestapeld is de volgorde
  kop, kader, tekst, zodat het kader niet zonder kop bovenaan staat; de introzin *Hier kun
  je aan denken:* is dan verborgen, omdat de kop de lijst al inleidt. Naast de visie heeft
  de introzin wel een functie en staat hij er. Beide kolommen komen
  op 488px uit binnen
  de 1200px-container, wat neerkomt op 58 tekens: binnen de leesmaat van 68 die het
  designsysteem stelt. Op het breekpunt zelf is elke kolom 432px, ofwel 51 tekens, wat nog
  comfortabel leest. Onder 1024px stapelen ze: kop, voorbeelden, tekst. De voorbeeldenlijst is altijd één kolom;
  twee kolommen binnen een kolom zouden de lijst terugbrengen tot losse fragmenten.
- R-S2.3a: De voorbeelden zijn illustratie, geen aanbod. Ze noemen geen prijs, geen
  doorlooptijd, geen pakket, en er staat geen call to action bij. `llms.txt` zegt er
  expliciet bij dat het voorbeelden zijn en geen dienstencatalogus, zodat een model er geen
  aanbod van maakt.
- R-S2.4: De vier kernwaarden worden **niet** als genummerd blok opgevoerd zoals in de
  kit. Een eigen sectie over kernwaarden, met *passende technologie in plaats van zoveel
  mogelijk* als vertrekpunt, is een kandidaat voor een latere uitbreiding van de site.
- R-S2.5: Er staat geen reflectie meer op de pagina, en dus geen Newsreader. Het
  designsysteem staat er maximaal één per surface toe; nul mag ook. Het lettertype wordt
  alleen gedownload als een pagina het gebruikt.
- R-S2.6: De visie is kort: rond de vijftig woorden.
- R-S2.7: Geen kwantitatieve claim over tijdsbesparing, veiligheid of privacy.

**S2b, AI-Kansenscan**

- R-S2b.1: **Een gratis aanbod, geen verkooptraject.** De sectie beschrijft de gratis
  AI-Kansenscan in lopende tekst, zonder genummerde stappen en zonder prijs behalve
  *gratis*. Wat er na de scan kan komen, noemt de sectie niet. Simon koos
  daarvoor op 23 september 2026: wie het aanbod ziet, mag niet het gevoel krijgen dat het
  een salesgesprek is. Gratis zijn het gesprek van een uur en de kansenschets daarna. Of
  het uitzoeken en het plan daarna betaald zijn, laat de site open.
- R-S2b.2: Kopje *Zo kan ik bijdragen*, kop *Begin met een AI-Kansenscan*. Twee
  alinea's, door Simon geschreven: *In één uur kijken we samen naar de kansen voor jouw
  onderneming*, met de drie ingangen erin (nog niets met AI gedaan, al geëxperimenteerd,
  een idee om te onderzoeken), en de **Kansenschets** die de lezer na afloop vrijblijvend
  ontvangt, met een eerstvolgende stap waarmee hij zelf aan de slag kan. In het Engels: kopje *How I can help*,
  kop *Start with an AI Opportunity Scan*; *gratis* staat niet in de kop, omdat het al
  op de hero-knop en groot in de aanbodkaart staat; de kansenschets heet daar *opportunity
  brief*.
- R-S2b.2a: **De sectie valt op door een aanbodkaart op warm light.** De sectie zelf staat
  op de gewone paginagrond. De plek van de kaart volgt het 12-koloms grid van het
  designsysteem (24px gutter), op verzoek van Simon: de kaart heeft 6 van de 12 kolommen
  tot zijn beschikking en staat daarin gecentreerd op 4 kolommen op een breed scherm, en
  gecentreerd op 8 kolommen op een smal scherm. Concreet: onder 640px de volle breedte,
  vanaf 640px kolom 3 tot en met 10 onder de tekst, vanaf 1024px kolom 8 tot en met 11
  naast kop en tekst (1 tot en met 6), met de bovenkant van de kaart op de hoogte van de
  kop. Onder 640px rekt de kaart niet over het hele scherm: hij staat gecentreerd op
  hoogstens 360px, ongeveer de breedte van de kaart op een breed scherm. De kaart staat op warm
  light, het vlak dat het designsysteem voor aanbiedingen en briefs bestemt. Ze krijgt
  `data-aiw-surface="light"`, zodat alle tokens erin naar de lichte set wisselen. Vlak in de
  paginakleur van de lichte set (`ink-0`, warm light), zonder rand, met de 2px hoeken en
  binnenruimte van `Card`. Een eerdere versie zette de hele sectie op een band een stap
  hoger op de donkere ramp; Simon vond die niet onderscheidend genoeg, en de band begon
  direct onder de inhoud van de visie. Een mosgroen vlak viel af: warm light op mos haalt
  geen 4,5:1 en de blauwe knop valt weg tegen het groen.
- R-S2b.2b: **Inhoud van de kaart:** de naam van het aanbod als eyebrow (*AI-Kansenscan*,
  Engels *AI Opportunity Scan*), dan *Gratis* groot, op de h2-maat, dan drie feiten als
  opsomming, geen stappen: *1 uur in gesprek*, *Ontvang de **Kansenschets***, *Geheel
  vrijblijvend*. In het Engels *Free*, *A one-hour conversation*, *Receive the **Opportunity
  Brief***, *No strings attached*. De knop staat onderaan in de kaart, over de volle breedte.
  Onder 640px zakt hij naar de bodymaat met 16px zijkant.
- R-S2b.2c: **Spelling van het aanbod.** Scan en document zijn producten met een eigen
  naam, met hoofdletters: *AI-Kansenscan* en *de Kansenschets*, in het Engels *AI
  Opportunity Scan* en *the Opportunity Brief*. De naam van het document staat op de site
  bovendien vet, overal waar hij genoemd wordt. Simon koos daarvoor op 23 september 2026;
  het designsysteem is op dezelfde dag bijgewerkt (readme, *Offer language, exactly*, en
  `sources/brand-record/voice-and-messaging.md`). In `copy.ts` staat de naam tussen `<strong>`, en de
  alinea's en feiten van de scan worden daarom als HTML weergegeven.
- R-S2b.3: Eén knop, `signal` met het WhatsApp-icoon, die WhatsApp opent met
  een vooringevuld bericht: *Hoi Simon, ik wil graag een gratis AI-Kansenscan plannen.*
  (Engels: *Hi Simon, I’d like to book a free AI Opportunity Scan.*). Label *Nu plannen*
  (Engels: *Book now*): de naam van de scan staat al in de kop en bovenaan de kaart, en een
  kort label past op elke breedte op één regel in een kaart van 4 kolommen. Gevuld, op verzoek van Simon:
  de hero-knop en deze knop vragen allebei om dezelfde actie (R-V6). De knop opent een nieuw
  tabblad en zegt dat.
- R-S2b.4: De sectie heeft `id="kansenscan"`; de hero-knop ankert hierheen.

**S3, Over Simon**

- R-S3.1: **Portret, 2px radius, ongefilterd en niet gegraded**, uit
  `assets/profile-picture-professional.jpg` (3000x2001, liggend). Het designsysteem en
  `Practice.jsx` croppen het portret 4:5. De site wijkt daar op smalle schermen van af, op
  verzoek van Simon: het portret stond uit verhouding, en op een telefoon hoort het liggend.
  Het designsysteem is daarvoor niet aangepast.
  - Onder 768px, waar de sectie stapelt, staat het portret boven de lijst als liggende
    3:2-uitsnede over de volle contentbreedte, het gezicht horizontaal in het midden en de
    ogen rond het bovenste derde. Op 375x812 is dat 327x218px.
  - Vanaf 768px staat de 4:5-uitsnede naast de lijst, in een kolom van 200px, dus 200x250px.
    Daarmee ligt de hoogte van het portret dicht bij die van de korte tekst ernaast.
    Gemeten op de gebouwde Nederlandse pagina: op 1440x900 portret 250px en lijst 254px, op
    1024x768 portret 250px en lijst 254px. Op 768x1024 is de tekstkolom smaller en is de
    lijst 363px hoog; het portret blijft 250px. Op de Engelse pagina is de lijst op 1440x900
    282px hoog.
  - Beide uitsneden zijn eenmalig met sharp uit het origineel gesneden en staan als
    JPEG-master (kwaliteit 90) in `src/assets/about/`: `portrait-3x2.jpg` (links 398, boven
    0, 2100x1400, verkleind naar 1440x960, 143 KB) en `portrait-4x5.jpg` (links 808, boven
    0, 1280x1600, verkleind naar 880x1100, 161 KB). Het origineel gaat niet naar de browser.
- R-S3.2: Eerste persoon enkelvoud. Nooit "wij", nooit als bureau. Het designsysteem is
  hier hard over: "I build internal tools", niet "AI Wise delivers solutions".
- R-S3.3: Benoemt de achtergrond in IT en data-engineering en de beweging naar het bouwen
  van praktische tools en systemen.
- R-S3.4: Mag persoonlijk en waardengedreven zijn, zonder spirituele of coaching-registers
  die het professionele kader ondermijnen.
- R-S3.5: Geen ervaringsclaims ("wat ik vaak zie", "uit ervaring") tenzij expliciet
  bevestigd.
- R-S3.6: Maximaal circa 150 woorden per taalversie. De Nederlandse versie telt 67 woorden,
  de Engelse 68.
- R-S3.7: **Op de Nederlandse pagina is de tekst een opsomming van vijf korte punten**, door
  Simon zelf geschreven en zonder correcties overgenomen (R-C7). Kopje *Over mij*, kop
  *Simon van Meegdenburg*. De vijf punten:
  1. *Al acht jaar bouw ik systemen met data, als BI-consultant en als data engineer.*
  2. *Ik bouw websites en apps, van ontwerp tot een werkend product.*
  3. *Ik weet wat er nodig is om een volwaardig systeem te maken dat mensen dagelijks
     gebruiken.*
  4. *Als techneut bouw ik graag voor organisaties met een maatschappelijk belang.* Tot 23
     september 2026: *…waarmee ik me verbonden voel*; Inge wees erop dat lezers niet weten
     waarmee Simon zich verbonden voelt.
  5. *Met AI werk ik een idee in ongeveer een dag uit tot een eerste prototype.*

  Op 23 september 2026 herschreven na feedback van Inge, Simons coach, en door Simon
  goedgekeurd. Punt 2 zegt nu actief wat Simon bouwt, *van ontwerp tot een werkend
  product*, zodat ook blijkt dat hij een complete website maakt; in punt 3 werd *werkend*
  daarom *volwaardig*, om het woord niet twee keer te hebben. Het prototype staat als
  laatste, als afsluiter vlak voor Contact. Inge vond dat punt eerder een stap uit een
  werkwijze; die sectie is er niet gekomen, dus het bleef in Over mij. Een jaartal zegt lezers weinig, dus punt 1 noemt het aantal
  jaren; dat getal moet jaarlijks mee. *Nog meer plezier* deed het data-werk uit punt 1
  tekort, en *door te experimenteren* klonk voorzichtiger dan bedoeld.

  Het vierde punt begon eerst met *Al experimenterend*. In Source Sans 3 lijken de kleine l
  en de hoofdletter I op elkaar, dus *Al* las als *AI*. Simon heeft de nieuwe zin
  goedgekeurd; hij staat ook zo in de goedgekeurde tekst in de AI Wise-map
  (`sales/outreach/content-record/output/website-home-over-mij.md`).
  De lijst is opgemaakt als de voorbeeldenlijst in de visie:
  markers in moss, 16px tussen de punten, via de gedeelde klasse `.bullet-list` in
  `site.css`.
- R-S3.8: **Op de Engelse pagina is de tekst ook een opsomming van vijf punten**, als eigen
  tekst en geen vertaling, in Brits Engels, door Simon goedgekeurd. Kopje *About me*, kop
  *Simon van Meegdenburg*. De vijf punten:
  1. *I’ve been building data systems for eight years, first as a BI consultant and later as
     a data engineer.*
  2. *I build websites and apps, from design to a working product.*
  3. *I know what it takes to build a system ready for everyday use.*
  4. *I’m happiest building for organisations that serve the public good.*
  5. *With AI, I can turn an idea into a first prototype in about a day.*

  Beide talen gebruiken dezelfde structuur: `points` in `copy.ts`, weergegeven als
  `.bullet-list`. Het veld voor proza (`paragraphs`) is uit de sectie verwijderd.

**S4, Contact**

Deze sectie draagt ook het "voor wie", zonder kopjes per doelgroep.

- R-S4.1: Kop *Ik hoor graag van je*. Eén korte alinea nodigt uit voor alles wat niet de
  scan is: *Heb je een vraag, een idee of werk dat steeds weer terugkomt? Stuur me een
  bericht, ook als het nog niet helemaal uitgedacht is.* Het aanbod zelf staat in S2b.
- R-S4.1a: **Geen onderzoeksfase meer in de tekst.** De zin *AI Wise is jong en ik ontdek nog
  volop waar ik het meeste kan betekenen* is op 23 september 2026 weggehaald, op advies van
  Inge: hij haalde Simon onderuit. De drempelloze uitnodiging die hij droeg, doet nu de
  AI-Kansenscan.
- R-S4.1b: **Geen partnertekst.** Tot 23 september 2026 volgden na de uitnodiging een
  overgangszin (*Ik sta open voor samenwerking*, later *partnerschappen*) en twee alinea's
  voor ontwikkelaars en voor ontwerpers en contentschrijvers. Simon heeft ze weggehaald,
  zodat de contactsectie alleen de uitnodiging en het formulier bevat. Het veld in
  `copy.ts` en de weergave zijn mee verdwenen.
- R-S4.1c: **De enige gecentreerde sectie, als afsluiting van de pagina.** Kop, uitnodiging
  en formulier staan in één kolom op het 12-koloms grid: de volle breedte onder 640px en
  kolom 3 tot en met 10 (8 kolommen) vanaf 640px. Kop, uitnodiging en bedankmelding zijn
  gecentreerd; de velden en hun tekst blijven links uitgelijnd. De verzendknop loopt over de
  volle breedte van het formulier, omlijnd en met ook het label in signal blue (5,11:1).
  Een koord op de naad met Over mij scheidt de sectie van de rest (R-V4c): de gewone
  sectieruimte erboven, 64px eronder; de onderste helft van de lus mag daar voorbij
  reiken, want hij ligt aan de rechterrand, naast de kop. Eerder was
  dat een hairline zoals boven de footer. Een kader om het formulier viel af, omdat het
  naast de aanbodkaart een tweede kaart zou zijn. **De sectie heeft geen label (eyebrow)**: alle andere labels
  staan op de linkerkantlijn, en één gecentreerd label zou de uitzondering zijn. De kop
  draagt de sectie alleen. Simon koos hiervoor op 23 september 2026, nadat de partnertekst
  was weggehaald en de sectie kort genoeg was om te centreren.
- R-S4.2: Geen fit-criteria, geen uitsluitingen, geen "ik werk alleen met...". De rode
  lijnen uit het klantprofiel zijn intern materiaal.
- R-S4.3: **Een contactformulier in plaats van contactknoppen**, sinds 23 september 2026 op
  verzoek van Simon. De knoppen voor e-mail, LinkedIn en WhatsApp zijn weg: WhatsApp staat
  al op de scan-knop en in de zwevende knop, en het formulier komt rechtstreeks in Simons
  mailbox. LinkedIn blijft als `sameAs` in de gestructureerde data en in `llms.txt`.
  - Velden: *Naam* en *E-mail* (verplicht), *Telefoon (optioneel)* naast *E-mail* vanaf
    1024px (daaronder zou het veld te smal zijn voor zijn placeholder), en *Bericht (optioneel)*. Een eerdere versie liet e-mail of telefoon kiezen, met
    een hint eronder; Simon koos voor e-mail verplicht en telefoon optioneel.
  - Opmaak als `Input` en `Textarea` uit het designsysteem (`components/forms`), vertaald
    naar CSS in `site.css`: veld op `surface-inset` met een 1px rand, 10 bij 12px
    binnenruimte, 2px hoeken, rand in signal blue bij focus en in clay bij een ongeldig
    veld na een poging.
  - **Geen zichtbare labels, wel iconen in het veld**, op verzoek van Simon. Naam, e-mail en
    telefoon hebben een icoon uit Tabler (`user`, `mail`, `phone`) 12px van de linkerrand,
    in de muted tekstkleur en signal blue bij focus, met hun naam als placeholder:
    *Naam*, *E-mail*, *Telefoon (optioneel)*. De labels staan visueel verborgen in de
    markup, zodat elk veld zijn toegankelijke naam houdt. Dit is sinds 23 september 2026 de
    standaard in het designsysteem voor herkenbare velden (`Field.prompt.md`, met de props
    `icon` op `Input` en `hideLabel` op `Field`). Langere formulieren en open vragen houden
    daar een zichtbaar label. Het berichtveld heeft
    geen icoon: de voorbeeldzin is zijn placeholder. Rechtsonder in het berichtveld staat
    een pen (Tabler `pencil`, 32px vlak, 12px van de onderkant en 20px van rechts, zodat de
    sleepgreep in de hoek vrij blijft). Een klik zet de voorbeeldzin als tekst in het veld,
    met de cursor aan het eind, als beginpunt om aan te passen. De pen is er alleen zolang
    het veld leeg is, en alleen met JavaScript. Toegankelijke naam en tooltip: *Gebruik
    deze tekst als begin* (Engels *Use this text as a starting point*).
  - De verzendknop *Verstuur bericht* (Engels *Send message*) is omlijnd
    (`.btn--outline-signal`): de gevulde knop is voor de ene actie van de pagina (R-V6).
- R-S4.3a: **Verwerking door Formward**, `https://forms.formward.eu/f/237b4807-6292-4fff-9a13-ed0ddd7be363`.
  Formward is een Zweedse formulierdienst waarvan de hele keten in de EU blijft: hosting en
  database bij Hostup in Zweden, e-mail via Mailjet in Frankrijk. Gekozen op 23 september
  2026 na een vergelijking van EU-aanbieders, omdat alleen Formward zowel een eigen
  bedankpagina als verzenden op de achtergrond ondersteunt; FormPost (Duitsland) viel af
  omdat de bezoeker daar na verzenden op een pagina van FormPost belandt. Het formulier is
  gewone HTML met één adres als bestemming, dus overstappen kost één regel.
  - Verborgen velden: `_subject` (*Nieuw bericht via aiwise.it.com*), `_redirect` (de
    bedankpagina in de taal van de pagina), `_replyto` (door het script gevuld met het
    e-mailadres van de bezoeker, zodat Simon direct kan antwoorden) en `_gotcha`, het
    lokveld van Formward, buiten beeld gezet en uit de tabvolgorde en de
    toegankelijkheidsboom.
  - In Formward staan Cloudflare Turnstile en de AI-verrijking uit: beide zouden er een
    partij bij halen.
- R-S4.3b: **Het berichtveld schrijft zijn eigen voorbeeld.** De placeholder is *Hoi Simon,
  ik kom graag met je in contact. Mail of bel me op …* en vult zich met wat de bezoeker
  invult: *Mail me op anna@bedrijf.nl.*, *Bel me op 06 12345678.* of *Bel me op 06 12345678
  of mail me op anna@bedrijf.nl.* Blijft het veld leeg, dan wordt precies die zin
  meegestuurd. Zo is een kort bericht genoeg zonder dat het er hoeft te staan; de oude
  afsluiter *Een kort bericht is genoeg.* is weg. In het Engels *Hi Simon, I’d like to get
  in touch.* met *Email or call me at …*, *Email me at …*, *Call me on …* en *Call me on …
  or email me at …*.
- R-S4.3c: **Werkt ook zonder JavaScript.** Zonder script is het een gewoon formulier, en
  Formward stuurt de bezoeker na verzenden door naar
  `/bedankt` of `/en/thanks`. Die pagina's hebben noindex, geen canonical of alternates, en
  staan niet in de sitemap. Met script gaat het verzenden op de achtergrond (`Accept: application/json`), en verschijnt *Bedankt voor je
  bericht* op de plek van het formulier, met de focus erop. Lukt het niet, dan zegt een
  statusregel dat, met Simons e-mailadres als uitweg.
- R-S4.4: Er is geen afsluiter onder het formulier meer; de lage drempel zit in het
  voorbeeld in het berichtveld (R-S4.3b).
- R-S4.5: De formuliercomponenten van het designsysteem worden niet geïmporteerd; hun maten
  en kleuren staan als CSS in `site.css` (R-S4.3).
- R-S4.6: Geen tweede actie in gevuld blauw. Zie R-V6.
- R-S4.7: **Op de Engelse pagina heeft Contact dezelfde opbouw**, in Brits Engels, zonder
  label, met de kop *I’d love to hear from you*.
  - Alinea: *Do you have a question, an idea, or work that keeps coming back? Send me a
    message, even if it isn’t fully thought through yet.*
  - Formulier: *Name*, *Email*, *Phone (optional)*, *Message (optional)*, *Send message*; bedankt:
    *Thanks for your message* / *I’ll get back to you as soon as I can.*
  - Het WhatsApp-bericht van de zwevende knop blijft *Hi Simon, I found the AI Wise website
    and have a question.*

**S5, Footer**

Structuur volgt `Chrome.Footer`, met de pagina-kolom vervangen door zakelijke gegevens.

- R-S5.1: **Het volledige logo met de tagline als tekst.** Opgebouwd zoals `lockup-en.svg`
  het doet: links het glyph, rechts het wordmark met de tagline eronder. Glyph en wordmark
  zijn de inline SVG's uit `assets/logo/` (via `LogoSvg.astro`, zonder achtergrondvlak); de
  lockup-afbeelding zelf staat er niet meer, want daarin was de tagline op 44px hoogte
  nauwelijks leesbaar.
  - Het wordmark is bijgesneden tot de letters en 32px hoog (`space-8`), dus 32px
    kapitaalhoogte en 196px breed. Voorheen was dat 14px.
  - De tagline *Automation in Service of Life* is echte tekst met `lang="en"`, 17px
    (`text-base`), Source Sans 3 regular, in moss (`text-accent-ground`). Gemeten contrast
    op near-black: 5,29:1, dus AA voor normale tekst. De uitzondering uit R-A1b geldt hier
    niet. Hij is 203px breed, ongeveer zo breed als het wordmark, zoals in de lockup. De
    lockup zet de tagline in Newsreader italic; de site levert geen Newsreader italic en
    houdt Newsreader voor de ene reflectie (R-V7), dus hier is het Source Sans 3.
  - Tussenruimtes volgen de verhoudingen van de lockup, afgerond op spacing-stappen: 24px
    (`space-6`) van glyph naar wordmark, 20px (`space-5`) van wordmark naar tagline.
  - Het glyph loopt van de bovenkant van het wordmark tot de basislijn van de tagline:
    32 + 20px plus één kapitaalhoogte van de tagline, samen 63px hoog en 36px breed.
    `text-box: trim-both cap alphabetic` maakt de regel van de tagline precies zo hoog.
    Een browser zonder `text-box` laat het glyph ongeveer 2px boven de basislijn eindigen.
  - Toegankelijke naam: het glyph is `role="img"` met `aria-label="AI Wise"`, het wordmark
    is `aria-hidden`. De naam wordt dus één keer voorgelezen en de tagline één keer, als
    tekst.
  - Op 375px is het blok 263px breed en past het ruim in de kolom van 327px.
  - Daaronder één regel: *Apps, websites en tools, gebouwd met AI. Voor werk waar de wereld
    iets aan heeft.* In het Engels: *Apps, websites and tools, built with AI. For work that
    matters.*
- R-S5.2: Kolom *Direct* (Engels *Contact*): e-mailadres en telefoonnummer, beide als link,
  in dezelfde linkstijl als de privacylink uit R-S5.3, zodat elke link in de footer als link
  leest. Het telefoonnummer staat in de kit-footer en blijft daar; in S4 zijn e-mail en
  WhatsApp de twee routes.
- R-S5.3: Kolom *Zakelijk* (Engels *Business details*) met KvK-nummer `93385498` (Engels
  *Chamber of Commerce*), btw-identificatienummer `NL005019332B52` (Engels *VAT no.*) en de
  link naar de privacyverklaring; op dit moment zonder vestigingsplaats (R-S5.5). Die link staat in de
  linkkleur, signal blue (5,11:1 op near-black), zodat hij tussen de gewone gegevens als link
  herkenbaar is. Bij hover wordt hij warm light met een onderstreping; de focusring komt uit
  `base.css`. Alle footerlinks delen die stijl via één klasse, `.site-footer__link`.
- R-S5.4: Een rule, daaronder de copyrightregel `© 2026 AI Wise`, 12px in `text-muted`.
  Het jaar is het jaar van de build (`new Date().getFullYear()`), en de regel is in beide
  talen gelijk, dus hij staat niet in `copy.ts`. De tagline staat hier niet meer, want die
  staat al onder het logo.
- R-S5.5: **Een vestigingsplaats is niet verplicht en wel toegestaan.** Simon heeft
  vastgesteld dat het noemen van Amsterdam in een footer mag, waar het de lezer helpt. Het is
  geen eis: AI Wise werkt op afstand en is niet aan een plaats gebonden (R-C6). De footer van
  de site draagt op dit moment geen plaats. Voor de informatieplicht (R-J4) staan handelsnaam,
  KvK-nummer, btw-identificatienummer en contactgegevens in de footer, en dat is voldoende.
  Een vestigingsadres blijft achterwege.

**S6, WhatsApp-knop**

- R-S6.1: Zwevend rechtsonder, op alle schermformaten. In rust zichtbaar; wanneer hij
  verborgen wordt staat in R-S6.7.
- R-S6.2: Linkt naar `https://wa.me/31613926494`, met een voorgevulde openingszin per
  taalversie.
- R-S6.3: De knop heeft alleen een icoon, dus de visueel verborgen tekst is alles wat een
  schermlezer hoort: *Stuur een bericht via WhatsApp (opent in een nieuw tabblad)*, in het
  Engels *Message me on WhatsApp (opens in a new tab)*. Bereikbaar via toetsenbord,
  zichtbare focus-outline.
- R-S6.4: **Geen gevulde blauwe knop**, want de vulling is voor de ene actie van de pagina,
  een kansenscan plannen (R-V6).
  Uitvoering als blauw omlijnde knop (`.btn--outline-signal`, zie R-V6): alleen het icoon,
  geen tekst. Hetzelfde WhatsApp-icoon uit Tabler als in de scan-knop, op 24px, in signal
  blue. **Rond**, 56 bij 56px (`space-12` plus `space-2`), de gebruikelijke maat voor een
  zwevende actieknop en goed te raken, met 1px rand in signal blue en een vlak in
  `surface-card`, omdat hij over tekst en de herofoto zweeft. De focus-outline volgt de
  cirkel. Rond is Simons keuze en een bewuste uitzondering op de 2px radius voor knoppen
  (R-V5). Geen WhatsApp-groen.
- R-S6.5: Geen widget of script van derden. Die laden externe code en breken de identiteit.
  Het kleine eigen script uit R-S6.7 wordt door Astro gebundeld, staat inline en valt onder
  de CSP-hashes uit R-T3a.
- R-S6.6: Overlapt op mobiel geen tekst of links.
- R-S6.7: **Verborgen tijdens scrollen, bij de scan-knop en vanaf het contactformulier.** Zolang de pagina
  scrolt, vervaagt de knop in 200ms (`duration-base`); zodra er 600ms niet gescrold is, komt
  hij in 320ms (`duration-slow`) terug, beide met `ease-standard`.
  - Hij blijft verborgen zodra het contactformulier (`.contact-form`) in beeld komt, en
    zolang de pagina voorbij de bovenkant ervan gescrold is, tot en met de footer; anders
    ligt hij over de velden. Tot 23 september 2026 waren dat de contactknoppen, en gold wat
    hieronder over knoppen staat voor die knoppen. De regel is: de
    bovenkant van de knoppen ligt boven de onderrand van het venster. Wie terugscrolt tot
    boven de knoppen, krijgt de zwevende knop terug.
  - Zo staat hij er nog terwijl de kop en de tekst van de contactsectie in beeld zijn, en
    verdwijnt hij pas als de eigen WhatsApp-knop van die sectie zichtbaar wordt. Eerder
    verdween hij al zodra de bovenmarge van `#contact` in beeld kwam, nog voor het woord
    *Contact* te zien was.
  - Hij is ook verborgen zolang de knop van de scan-sectie (`.scan__actions`) in beeld is,
    want die opent ook WhatsApp. Voorbij die knop komt hij terug.
  - Een IntersectionObserver op `.contact-form` en `.scan__actions` meldt het moment dat de knoppen in of
    uit beeld gaan, ook bij scrollen door Tab. De positie zelf wordt bij elke evaluatie
    gemeten, zodra de pagina stilstaat. Een sprong in één keer van boven de knoppen naar
    eronder (End-toets, herstelde scrollpositie na herladen) laat de knoppen nooit snijden
    en zou de observer alleen missen.
  - Gecontroleerd op de gebouwde Nederlandse pagina, op 1440x900 en 375x812: zichtbaar
    bovenaan, zichtbaar met de kop van Contact in beeld en de knoppen net onder de vouw,
    verborgen zodra de knoppen 20px in beeld zijn, verborgen bij de footer, na een sprong
    naar onderen en na herladen onderaan, en weer zichtbaar na terugscrollen.
  - Alleen de homepagina's hebben het formulier; de andere pagina's kennen alleen het
    verbergen tijdens scrollen. Het script zet alleen een klasse (`.wa-float--hidden`), geen
    inline stijlen.
- R-S6.8: Verborgen betekent: dekking 0, niet klikbaar (`pointer-events: none`) en na de
  fade `visibility: hidden`, zodat de knop uit de tabvolgorde en de toegankelijkheidsboom
  is. Bij het tonen gaat `visibility` direct aan en volgt de fade. Een knop met
  toetsenbordfocus (`:focus-visible`) wordt nooit verborgen, en scrollen dat binnen 250ms
  na een Tab-toets gebeurt telt niet als scrollen, zodat een toetsenbordgebruiker de knop
  kan bereiken. Zonder JavaScript blijft de knop gewoon zichtbaar. Bij
  `prefers-reduced-motion: reduce` zijn de motion-tokens 0ms en wisselt de knop zonder
  fade.

**S7, 404-pagina**

- R-S7.1: `src/pages/404.astro`, gebouwd als `dist/404.html`. De URL zegt niets betrouwbaars
  over de taal, dus de pagina is in beide talen tegelijk: eerst Nederlands, dan Engels, elk
  met een eigen kop, een zin en een link. Het Engelse blok heeft `lang="en"`; het document
  zelf is Nederlands, dus skip-link, footer en zwevende knop zijn Nederlands.
  - NL: kop *Deze pagina bestaat niet*, tekst *Misschien is de link verouderd of zit er een
    typfout in het adres.*, link *Naar de startpagina* naar `/`.
  - EN: kop *This page doesn’t exist*, tekst *The link may be out of date, or there may be a
    typo in the address.*, link *Go to the home page* naar `/en`.
- R-S7.2: De Nederlandse kop is de `h1`, de Engelse een `h2` (R-A4), maar beide staan op de
  maat van de `h1`, omdat geen van de twee talen de mindere is. Een hairline scheidt de
  blokken. De teksten staan in de pagina zelf en niet in `copy.ts`, omdat ze vast en
  tweetalig zijn.
- R-S7.3: `<title>` *Pagina niet gevonden · AI Wise*, `<meta name="robots"
  content="noindex">`, geen canonical, geen `og:url` en geen hreflang-alternates. `Base.astro`
  kent daarvoor `page: "404"`.
- R-S7.4: De taalwissel in de header wijst op de 404-pagina naar de twee startpagina's en
  markeert geen van beide als huidige taal. Header, footer en zwevende knop werken zoals op
  de andere pagina's.
- R-S7.5: De pagina staat niet in de sitemap. `@astrojs/sitemap` laat 404- en 500-pagina's
  zelf weg, dus er is geen filter nodig; gecontroleerd in de build.

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
- R-L9a: **De Engelse versie is consequent Brits Engels**, passend bij `en_GB`:
  *organisations*, *recognise*, *modernised*. De hero, de visie met de voorbeelden, over mij,
  contact, de footer, de kleine interfaceteksten, de titel en meta-description en de
  privacyverklaring zijn zo geschreven. Er staat geen Engelse sectie meer in concept: Simon
  heeft de volledige Engelse tekst, inclusief de privacyverklaring, goedgekeurd (O-2).
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
  hex-waarden, en geen pixelmaten buiten de tokens om **behalve de hieronder genoemde
  lijst**. Kleur, radius en duur kennen geen enkele uitzondering; maat kent deze, en alleen
  deze. De kop van `site.css` draagt dezelfde lijst, zodat wie het bestand opent hem daar
  ook vindt. Een regel met ongenoemde uitzonderingen is geen regel, dus een nieuwe waarde
  komt hier eerst bij te staan of hij komt er niet.
  - Knoppadding 6/12px, 10/18px en 14/26px, rechtstreeks uit `Button.jsx`, dat ze in
    pixels zet. Afronden op de 4px-schaal zou de knop veranderen, dus de vertaling houdt
    ze (R-T4).
  - Het lockup in de header: glyph 30px, wordmark 15px en 14px ertussen, zoals
    `Chrome.TopBar` het tekent (R-S0.1), plus `--site-header-height` van 76px (R-S0.4).
  - Optische halve stappen, waar de 4px-schaal geen stap heeft die goed leest: 3px onder
    een taallink, 14px onder een kopje en onder een footerkolomtitel, 18px boven de
    copyrightregel, 22px onder de hero-eyebrow, 44px boven de footer-baseline en 56px
    footerpadding.
  - 10 bij 12px binnenruimte in de velden van het contactformulier, uit `Input.jsx` van
    het designsysteem (R-S4.3), en het lokveld 10000px buiten beeld.
  - De art direction van de hero: de 520px in de hoogte van het staande kader en de
    verloopstops op 56, 110, 170 en 240px. Die volgen de foto en geen schaal (R-V4a en
    R-V4b).
  - 200px voor de portretkolom vanaf 768px, zo gekozen dat de hoogte van het portret dicht
    bij die van de lijst ernaast ligt (R-S3.1).
  - Leesmaten in `ch`, die de typeschaal niet dekt: 26ch voor een sectiekop, 34ch voor de
    footerregel onder het logo, en 46ch voor de hero-lead, de benoemde uitzondering uit
    R-V9a.
  - De scrollafstanden van de reveals: 40px voordat een blok begint te verschijnen, 300px om
    het af te maken, en 60px later voor een blok dat naast een ander staat. Die maten meten
    scrollen en geen layout, dus de spacingschaal zegt er niets over (R-V13c).
  - De 2px die het pijltje in de hero-knop meeleunt bij hover (R-V13f).
  - Breekpunten op 640, 768, 1024 en 1200px, waarbij de max-width-vormen 0,02px lager
    staan zodat ze de min-width-vormen niet overlappen. De layout-tokens kennen geen
    breekpunten.
  - De 1px-uitsnede van `.visually-hidden`, het gebruikelijke idioom.
  - 360px als grootste breedte van de aanbodkaart onder 640px (R-S2b.2a), en de tegelmaten
    van het koord op de naad met Contact: 150, 200 en 260px, met 2px overlap (R-V4c).
- R-V2: **Near-black surface.** De hele site staat op `#0B0D0C`. Het designsysteem heeft
  een volwaardige lichte surface, maar wijst die expliciet toe aan documenten: geen enkele
  pagina in de site-set staat op warm light. De `moss-deep` en `blue-deep` varianten zijn
  hier dus niet van toepassing.
- R-V3: **Vier kleuren, en dat is het.** Geen vijfde kleur, geen gradient, geen tint of
  opacity-fade op merkgrafiek, geen accent als groot achtergrondvlak. Het groen van de
  herofoto is beeld, geen paletkleur, en de leesbaarheidslaag is near-black (R-V4b).
- R-V4: **Een foto in de hero, geen weave.** De hero staat op een fotorealistische,
  gegenereerde natuurfoto: een steenarend die met gespreide vleugels boven een dicht groen
  bladerdak glijdt, met mistige dalen en een lichtgrijze lucht. De arend staat voor
  overzicht: zien hoe een geheel in elkaar grijpt. De richting komt uit het designsysteem
  (*Photography* in `readme.md`). De foto is decoratief (`alt=""`), full-bleed, en loopt
  door achter de header. De weave staat niet meer op de website; hij blijft in het
  designsysteem een middel voor documenten en decks.
- R-V4a: **Art direction per schermvorm.** Liggende schermen
  (`min-aspect-ratio: 1/1`) krijgen de 16:9-uitsnede met de arend in het rechterderde;
  staande schermen de 4:5-uitsnede met de arend in de onderste helft. `object-fit: cover`,
  met `object-position: 72% 60%` liggend en `70% 0%` staand. Op staande schermen wordt de
  4:5-uitsnede iets hoger getekend dan de hero en bovenaan verankerd, zodat de arend in de
  vrije band onder de knop valt in plaats van achter de tekst. Gecontroleerd op 1440x900,
  1100x800, 768x1024 en 375x812, en daarnaast op 1920x1080, 900x700, 812x375, 1024x1366,
  390x844 en 375x667: de arend staat overal volledig in beeld.
- R-V4b: **Leesbaarheidslaag.** De lucht is licht en de tekst is warm light, dus er ligt
  een laag near-black tussen, zoals het designsysteem onder *Text over images* toestaat.
  Alleen near-black in stappen van dekking, geen nieuwe kleur, en niet zwaarder dan de
  contrasteis vraagt. Liggend: donker naar links achter de tekstkolom (86% aan de rand,
  74% op 40% van de breedte, weg op 78%) plus een band langs de bovenrand voor de header
  (80% bovenaan, weg op 240px). Onder 1024px breed loopt het donkere deel verder door.
  Staand: vanaf de bovenrand over het hele tekstblok (84% naar 78%) en daarna in 192px
  uitlopend; de laag hangt aan het tekstblok en volgt dus de teksthoogte op elke breedte.
  Metingen staan in R-A1a.
- R-V4c: **Eén koord als stil accent op de naad tussen visie en kansenscan.** Het koord staat
  live, maar **het koordsysteem als geheel blijft experimenteel**. Dat is Simons positie: de
  ring is niet opgelost, en één werkend horizontaal koord bewijst niet dat het systeem
  structureel werkt. Wat hieronder staat beschrijft dus wat er staat, niet een vastgestelde
  visuele taal.
  - Het koord loopt op smalle schermen hoog links en laag rechts over de volle breedte.
    Vanaf 1024px is het horizontaal gespiegeld: laag achter het voorbeeldenkader links en
    hoog rechts, onder de visietekst. Op 23 september 2026 visueel gecontroleerd op 1440px
    en 375px, nadat de kolommen van plaats wisselden en de reflectie verdween.
    `cord-o3-horizontal.svg`, afgeleid van O3. Het is een kwartslag gedraaid en 2,2 keer
    verlengd langs het koord, met ronde strengen van ongeveer 12px op 1440px.
  - Het staat in `Cord.astro`, als achtergrondafbeelding onder de inhoud, zonder eigen
    ruimte of marge.
  - Leesbaarheid komt uit de plaatsing: het koord ligt in de ruimte tussen de secties, onder
    de onderrand van de voorbeeldenkaart en in de marges. De gespiegelde plaatsing is met
    de nieuwe Nederlandse slotvraag visueel gecontroleerd op 1440 en 1024px. De eerdere
    contrastmeting van de voorbeeldregel op de ongewijzigde kaart was 15,19:1.
  - Een halo in de paginakleur achter de tekst is geprobeerd en afgevallen, omdat Chromium
    die donkerder tekent dan de pagina.
  - Het uitrekken wijkt bewust af van R-V3, R-V4 en R-V5 en van de aanwijzing bij de masters
    om de koorden niet uit te rekken. Het koord is hier lijnwerk in de marge, geen merkgrafiek
    op ware verhouding; dat is de enige plek waar de site die vrijheid neemt.
  - Een ring naast de contacttekst is geprobeerd en in deze vorm afgewezen: Simon had niet een
    hele ring in de lege ruimte voor ogen, maar 50 à 60 procent ervan, aflopend over de
    paginarand. Misschien een andere keer opnieuw te proberen.
  - **Experiment sinds 23 september 2026: een koord op de naad tussen Over mij en
    Contact**, in plaats van een hairline. Het koord komt rechts de pagina in, maakt een
    bocht en gaat er weer uit, gecentreerd op de bovenrand van de contactsectie. Het is
    opgebouwd uit twee hoektegels van het designsysteem (`assets/weave/corners/`),
    bottom-right A boven right-top B, zonder hun near-black achtergrondvlak. Op de naad komt
    de registratie overeen, dus elke streng houdt één kleur; de twee sets kruisen de andere
    kant op, zoals het designsysteem voor een run vraagt. De tegels overlappen 2px, zodat op
    de naad geen haarlijn van de pagina doorschemert. Tegelmaat 150px onder 768px, 200px
    vanaf 768px en 260px vanaf 1200px, zodat de bocht, twee derde tegel diep, vrij blijft
    van de tekst erboven en eronder. Onder de inhoud, `aria-hidden`, en de sectie knipt
    horizontaal af, zodat de pagina niet breder wordt.
  - Eerdere stappen in dit experiment, dezelfde dag: het koord stond eerst naast het
    midden van het formulier, en eerst met twee A-tegels, waardoor de kleuren op de naad
    wisselden; Simon wilde dat een doorlopend koord één kleur houdt. De vorm is
    gespiegeld, omdat beide sets dezelfde vorm hebben; tegels van verschillende maat
    sluiten niet aan.
  - **Het koord tussen visie en kansenscan is op alle breedtes gespiegeld**, laag links en
    hoog rechts, zoals eerst alleen in de tweekoloms opmaak. Op smallere schermen liep het
    hoge linkereinde anders door de laatste regels van de visietekst.
- R-V5: **Geen schaduwen, glows, gradients of blur.** Elevatie is een stap op de neutrale
  ramp plus een 1px hairline. Radius is 2px voor knoppen, kaarten en beeldcrops, 0 voor
  banden en rules. De enige uitzondering is de leesbaarheidslaag over de herofoto uit
  R-V4b: een verloop van near-black naar transparant, uitsluitend om tekst leesbaar te
  houden, nooit op merkgrafiek. Voor de radius is er ook één uitzondering: de zwevende
  WhatsApp-knop is rond, op verzoek van Simon (R-S6.4).
- R-V6: **Eén actie in `signal` op de hele pagina.** Blauw betekent "dit is wat je moet
  doen", en dat is hier één ding: een gratis kansenscan plannen. Twee knoppen dragen die
  actie gevuld: de hero-CTA, die naar `#kansenscan` ankert, en de knop in de scan-sectie,
  die WhatsApp opent (R-S2b.3). Tot 23 september 2026 was de hero-CTA de enige gevulde
  knop; Simon koos ervoor de scan-knop ook te vullen, omdat het dezelfde actie is. Een
  gevulde knop voor iets anders blijft uitgesloten. De regel gaat over het gevulde vlak: omlijnde
  knoppen hoeven niet grijs te zijn en mogen signal blue gebruiken voor rand en icoon. Dat
  is de variant `.btn--outline-signal` in `site.css`, een aanvulling van de site op de
  `Button` uit het designsysteem, gebruikt voor de verzendknop van het formulier (R-S4.3) en de
  zwevende WhatsApp-knop (R-S6.4). De naam blijft warm light. Hover en indrukken verschuiven
  het blauw zoals bij de `signal`-knop (90% met warm light, 86% met near-black, via
  `color-mix` in oklab) en zetten het vlak een stap op de neutrale ramp, zonder nieuwe
  kleuren. Gemeten contrast van de rand: 5,11:1 op de pagina en 4,63:1 op het vlak van de
  zwevende knop in rust, 5,31:1 bij hover (4,94:1 op de zwevende knop) en 3,71:1 bij
  indrukken, alles boven de 3:1 voor interface-onderdelen.
- R-V7: Typografie: Source Sans 3 dominant, gewichten 400 en 600, geen 700 en geen light.
  Newsreader uitsluitend voor een reflectie, maximaal één keer op de pagina. Op dit moment
  staat er geen (R-S2.5).
- R-V8: Sentence case voor koppen en knoppen. Uppercase alleen voor eyebrows, badges en
  het wordmark. Geen Title Case.
- R-V9: Body 17px op 1.6, maximaal 68ch. Leads 19px op 52ch. Content 1200px, artikelkolom
  760px, paginamarges 24 / 48 / 80px, sectiegaten 96 tot 128px.
- R-V9a: **Eén benoemde uitzondering op de leesmaat van 52ch: de hero-lead staat op 46ch.**
  Hij is de enige lead op de site die over een foto staat. De leesbaarheidslaag loopt naar
  rechts uit (R-V4b), dus een langere regel komt in een lichter deel ervan terecht. Gemeten
  op de gebouwde Nederlandse pagina, tekst tegen de lichtste pixel eronder: op 46ch haalt de
  lead 5,93:1 op 1440x900 en 5,80:1 op 1100x800, op 52ch lopen dezelfde drie regels ongeveer
  48px verder naar rechts en zakt hij naar 5,09:1 en 4,66:1. Allebei nog boven de 4,5:1 die
  R-A1 eist, maar 4,66:1 houdt vrijwel niets over, dus de smallere maat blijft. Staande
  layouts maken het niet uit: hun laag heeft geen zijwaartse uitloop, en onder 640px is de
  kolom smaller dan beide maten. De waarden in R-A1a zijn met de lead op 46ch gemeten. Alle
  andere leads, op de privacypagina's en de 404-pagina, volgen gewoon
  `--aiw-measure-narrow`.
- R-V10: Logo en glyph uitsluitend uit `assets/logo/`. Het wordmark wordt nooit opnieuw als
  levende tekst gezet; de SVG's zijn outlines zonder fontafhankelijkheid. De tagline is geen
  onderdeel van het wordmark: in de footer staat hij als tekst onder het logo (R-S5.1).
- R-V11: Twee foto's op de pagina: de herofoto (R-V4) en het portret (R-S3.1). De herofoto
  is gegenereerd, maar volgt de richting uit het designsysteem: natuur en veel groen in
  plaats van technologie en blauw. Geen generieke AI-beeldtaal, zoals het designsysteem die
  uitsluit. Het palet verandert er niet door; signal blue blijft de interfacekleur.
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
- R-V13: Motion volgt `motion.css`: 80/140/200/320/520ms, plus `--aiw-duration-ambient`
  van 32s en `--aiw-stagger` van 90ms, die op 12 september 2026 aan het designsysteem zijn
  toegevoegd voor het werk hieronder. Geen spring, geen bounce. Alles valt terug naar 0ms
  onder `prefers-reduced-motion`. Daarmee blijft de eis uit R-V1 overeind dat duur geen
  enkele uitzondering kent: er staat geen losse tijdwaarde in `site.css`. De overgang van de
  header van doorzichtig naar dicht is gekoppeld aan de scrollpositie, niet aan tijd, en
  wordt onder `prefers-reduced-motion` een harde wissel. Zie R-S0.6.
- R-V13a: **Alle beweging staat in één blok** onderaan `site.css`, onder `---- motion ----`,
  zodat ze als geheel te lezen, bij te stellen of te verwijderen is. Drie regels gelden voor
  alles wat daar staat:
  - Niets is dragend. Elk effect is een toevoeging op de pagina zoals die zonder dat effect al
    werkt. Het scroll-gestuurde deel staat achter `@supports (animation-timeline: view())`;
    een browser zonder ondersteuning ziet de eindtoestand, en nooit een blok dat onzichtbaar
    blijft wachten op een animatie die niet komt.
  - Niets beweegt voor wie om minder vraagt. Elke regel staat binnen
    `prefers-reduced-motion: no-preference`. De duurtokens vallen onder `reduce` al naar 0ms,
    wat de tijdgebonden animaties op zichzelf afdekt, maar een scroll-gestuurde animatie heeft
    geen duur om op nul te zetten, dus die mediaquery doet dat werk.
  - Alleen `transform` en `opacity`, zodat de compositor het werk doet. Geen enkele regel in
    dat blok kan de layout verschuiven.
- R-V13b: **De herofoto drijft.** Over `--aiw-duration-ambient` schaalt de foto van 1 naar
  1,06 en houdt daar op. Eén richting, één keer, `linear`: een constante drift is degene die
  niemand opmerkt, waar een vertraagde aankomt en dan zichtbaar stopt. Geen heen-en-weerlus,
  want die blijft de aandacht wegtrekken tijdens het lezen en laat een telefoon compositen
  zolang het tabblad openstaat. Het schaalpunt ligt op de arend in beide uitsnedes: `70% 70%`
  staand en `72% 60%` liggend, zodat de art direction uit R-V4a overeind blijft. Met de
  bovenrand als schaalpunt zakte de arend 45px over het scherm; gemeten op 390x844.
- R-V13c: **Blokken komen op bij binnenrollen.** Eyebrow, kop, tekstblok, de voorbeeldenkaart
  en het portret gaan van doorzichtig naar vol en van `--aiw-space-4` omhoog naar hun plaats,
  gestuurd door `animation-timeline: view()` en dus door de scrollpositie in plaats van door
  een klok. Het bereik staat in pixels en niet in procenten: een percentage van de entry-fase
  is een deel van de eigen hoogte van het element, waardoor de contacttekst vele malen trager
  zou arriveren dan het label erboven. Een blok dat naast een ander staat begint 60px later,
  zodat een paar na elkaar arriveert; gestapelde blokken hebben die verschuiving niet nodig,
  want hun onderlinge afstand op de pagina is de stagger. De blokken overlappen elkaar nooit:
  de visie houdt zijn kop binnen `.section__body`, dus alleen een kop die direct kind van de
  container is wordt apart genomen.
- R-V13d: **De herotekst schuift omhoog bij het openen**, regel voor regel, `--aiw-stagger`
  uit elkaar. Alleen `transform` en nadrukkelijk geen `opacity`: de kop is kandidaat voor de
  Largest Contentful Paint, en hem van niets naar vol laten komen zou dat moment met de volle
  duur van die fade opschuiven. Schuiven kost de meting niets, omdat de tekst in het eerste
  frame op volle sterkte staat en alleen zijn positie nog zakt.
- R-V13e: **Het koord drijft mee tegen de scroll in**, `--aiw-space-6` naar beide kanten over
  één schermhoogte. De drift zit op de nulhoge markering `.cord--band` en niet op
  `.cord__art`, waarvan de transform de lift draagt en op drie breekpunten verschilt. Die
  markering draagt daarom zelf de `z-index`: een transform maakt er een stacking context van,
  en een negatieve z-index binnen zo'n context komt niet verder terug dan die context zelf,
  waardoor het koord over de voorbeeldenkaart schoof in plaats van eronder. Het designsysteem
  staat deze beweging sinds 12 september 2026 toe, binnen de grens van drift en parallax. Zie
  O-8.
- R-V13f: **Het pijltje in de hero-knop leunt 2px mee** in de richting waarin het wijst, bij
  hover, en alleen het icoon beweegt, zodat het label niet onder de muis wegloopt. Het heeft
  geen eigen reduced-motion-query nodig: de duur is een token en die is onder `reduce` 0ms.
- R-V13g: **De minifier-val uit R-S0.6 geldt voor elke timeline.** `animation-timeline` moet
  in een eigen regel staan, met een specificiteit waar de minifier niet omheen kan herordenen,
  anders vouwt hij de declaratie in de `animation`-shorthand en gooit Chromium hem weg. Dat
  wordt op de gebouwde HTML gecontroleerd en niet op de bron, want in dev draait de minifier
  niet.
- R-V14: Focus is een 2px signal-blue outline op 2px offset en wordt nooit verwijderd.
- R-V15: Waar het designsysteem en deze PRD elkaar tegenspreken, wint het designsysteem en
  wordt de PRD bijgewerkt.

---

## 8. Technische vereisten

### 8.1 Stack

- R-T1: **Astro 7**, statische output, met de ingebouwde i18n-routering. Geen framework in
  de browser en geen scripts van derden. Er draait één klein eigen script, door Astro
  gebundeld en inline gezet: het verbergen van de zwevende WhatsApp-knop (R-S6.5 en
  R-S6.7). Daarnaast staat het analytics-script van Vercel op de pagina, vanaf het eigen
  domein (R-J2). Zonder JavaScript blijft de hele pagina leesbaar en bruikbaar (R-T6).
- R-T1a: Alle afhankelijkheden staan op de meest recente stabiele versie, met één bewuste
  uitzondering: **TypeScript 6, niet 7**. `@astrojs/check` accepteert `^5 || ^6`, dus TS 7
  zou de typecontrole breken. Zodra `@astrojs/check` TS 7 ondersteunt, kan dat mee omhoog.
- R-T2: Geen serveradapter. Het contactformulier gaat naar Formward (R-S4.3a), dus er is
  geen eigen serverfunctie nodig en Vercel serveert alleen statische bestanden. De CSP
  staat `https://forms.formward.eu` toe in `connect-src` en `form-action`, en verder
  niets van buiten.
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
  die klassen, behalve de weave-klassen: die staan nog in `base.css` maar de site gebruikt
  ze niet meer. `Button` en `Card` hadden eigen styling en zijn vertaald naar CSS met
  dezelfde maten, varianten en `color-mix`-waarden, waarbij `:hover` en `:active` doen wat
  React state in de JSX doet. Van `Card` gebruikt de site alleen de standaardvariant, als
  het ene kader om de voorbeelden in de visie (R-S2.3c).
- R-T5: Geen CSS-framework met een eigen ontwerpmening. `styles.css` uit het designsysteem
  is de basis, `site.css` is wat deze site toevoegt.
- R-T6: Geen JavaScript nodig om de inhoud te lezen. Taalwissel en WhatsApp-knop zijn
  gewone links.

### 8.2 Designsysteem-import

- R-T7: Import in `src/styles/tokens/` en `public/assets/`, met bronvermelding en
  importdatum in [`design-system-import.md`](design-system-import.md).
- R-T8: Geïmporteerde bestanden worden niet lokaal aangepast. Zes van de acht tokenbestanden
  zijn byte-voor-byte kopieën. De twee die wél zijn gewijzigd, `base.css` en `fonts.css`,
  zeggen dat bovenaan het bestand. `motion.css` is op 12 september 2026 uitgebreid met
  `--aiw-duration-ambient` en `--aiw-stagger`. Die uitbreiding is eerst in het designsysteem
  gedaan en daarna hierheen gehaald, zodat het bestand een byte-voor-byte kopie blijft. Zie
  R-V13.
- R-T9: Alleen importeren wat de site nodig heeft. `components/forms/`,
  `ui_kits/documents/`, `slides/`, `Practice.jsx`, `Scan.jsx` en de ongebruikte componenten
  blijven buiten de repo.
- R-T10: Binaire bestanden komen niet door de sync-API. De TTF's, PNG's en het portret zijn
  van de lokale schijf gekopieerd; het designsysteem vermeldt dat het ze daarvandaan heeft
  overgenomen.
- R-T10a: De herofoto's komen uit Simons selectie (`input/selected-eagle-images/` in de AI
  Wise-map, de opgeschaalde versies: liggend 2560x1440, staand 1440x1800). Ze staan als
  JPEG-master van hoge kwaliteit in `src/assets/hero/` (672 KB en 456 KB), niet in
  `public/`, zodat Astro er bij de build AVIF, WebP en JPEG op meerdere breedtes van maakt.
  De originele PNG's blijven buiten de repo.
- R-T11: Fonts zelf gehost, gesubset op Latin en geconverteerd naar woff2. Source Sans 3
  blijft variabel op 23 KB. Newsreader wordt gepind op de enige instantie die het systeem
  gebruikt, opsz 18 en wght 400, op 19 KB in plaats van 125 KB. De conversie is
  reproduceerbaar beschreven.
- R-T12: **Iconen niet via CDN.** Het designsysteem laadt Lucide van `unpkg.com`, een
  prototypekeuze die een externe partij aan de privacyverklaring zou toevoegen. Deze site
  gebruikt zes iconen, dus de paden staan inline in `Icon.astro`, met bronvermelding. Dat
  is precies wat het designsysteem zelf voorschrijft ("icons are inline SVG at render
  time"). Stroke 1.5px, `currentColor`, outline only.
  - `arrow-right` komt uit Lucide (ISC), in de hero-knop.
  - `brand-whatsapp` komt uit Tabler Icons 3.46.0 (MIT), omdat Lucide geen WhatsApp-logo
    heeft; de scan-knop en de zwevende knop gebruiken het. `user`, `mail`, `phone` en
    `pencil` uit dezelfde set staan in de velden van het contactformulier (R-S4.3). `brand-linkedin` is
    op 23 september 2026 met de contactknoppen verdwenen.

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
- R-T17a: Web Analytics staat aan in het Vercel-dashboard, aangezet door Simon bij de
  livegang. `/_vercel/insights/script.js` wordt in productie vanaf het eigen domein
  geserveerd; gecontroleerd na de deploy. Lokaal geeft dat pad altijd een 404, want het
  bestaat alleen op Vercel.
- R-T18: Productiedomein `aiwise.it.com`, één canonieke variant, geen trailing slash.
  `www.aiwise.it.com` wordt ook geserveerd. Vercel heeft voor beide namen certificaten
  uitgegeven.
- R-T19: De DNS is omgezet van GitHub Pages naar Vercel: de A-records voor `@` en `www`
  wijzen op `76.76.21.21`. GitHub Pages staat uit, en het `CNAME`-bestand en de
  Pages-workflow staan niet meer op `main` (R-T14).
- R-T20: Preview-deployments per branch, productie alleen vanaf `main`.

---

## 9. Toegankelijkheid, performance en vindbaarheid

### 9.1 Toegankelijkheid

- R-A1: WCAG 2.1 AA. `guidelines/colour-contrast.html` is de referentie. Op near-black is
  het palet al in orde: warm light 16,79:1, moss 5,29:1, signal blue 5,11:1. De norm is en
  blijft AA: 4,5:1 voor alle tekst op de site, met de 3:1 die AA toestaat voor grote tekst
  en voor interface-onderdelen. Op het contrast is precies één uitzondering vastgelegd, R-A1b.
- R-A1a: **Contrast boven de herofoto.** Gemeten in Chrome op de gebouwde pagina: een
  screenshot met alle tekst verborgen, zodat alleen foto en laag overblijven, en daarin de
  pixels onder elke tekstregel. Per element de waarde tegen de lichtste en de donkerste
  pixel eronder, Nederlandse pagina, header in de doorzichtige toestand, eyebrow op 15px:

  | Element (eis) | 1440x900 | 1100x800 | 768x1024 | 375x812 |
  | --- | --- | --- | --- | --- |
  | Kop, warm light (3:1) | 8,73 tot 14,14 | 10,80 tot 14,32 | 10,97 tot 11,46 | 10,97 tot 11,62 |
  | Lead, `text-secondary` (4,5:1) | 5,75 tot 8,31 | 5,74 tot 8,37 | 5,62 tot 5,97 | 5,53 tot 6,96 |
  | Eyebrow met de tagline, moss (3:1, R-A1b) | 3,56 tot 4,30 | 3,70 tot 4,25 | 3,55 tot 3,66 | 3,50 tot 3,66 |
  | Knoplabel, near-black op signal blue (3:1) | 5,11 | 5,11 | 5,11 | 5,11 |
  | Knopvlak tegen de foto (3:1) | 4,22 tot 4,91 | 4,19 tot 4,94 | 3,14 tot 3,90 | 3,40 tot 4,65 |
  | Taalwissel, actief, warm light (4,5:1) | 9,72 tot 10,30 | 9,75 tot 10,32 | 11,47 tot 11,63 | 11,47 tot 11,75 |
  | Taalwissel, andere taal, `text-secondary` (4,5:1) | 5,14 tot 5,44 | 5,13 tot 5,45 | 6,06 tot 6,21 | 6,06 tot 6,21 |
  | Wordmark, warm light (3:1) | 15,79 tot 15,93 | 15,80 tot 16,06 | 11,63 tot 11,95 | 11,59 tot 11,80 |
  | Glyph, moss-streng (3:1) | 4,98 tot 5,06 | 4,98 tot 5,06 | 3,70 tot 3,77 | 3,65 tot 3,76 |

  Alles haalt AA, en de eyebrow haalt de 3:1 van zijn uitzondering. In moss haalt de
  eyebrow boven de foto geen 4,5:1: dat zou een laag van rond 92% near-black achter de
  eyebrow vragen, en dan is de linkerhelft van de foto vrijwel zwart.
- R-A1b: **Uitzondering: de tagline in de hero.** De eyebrow boven de herofoto, met de
  tagline "Automation in Service of Life", hoeft geen 4,5:1 te halen maar minimaal 3:1. De
  reden: het is een herhaalde merkregel, die ook onder het logo in de footer staat, en geen
  inhoud die een bezoeker nodig heeft om de pagina te begrijpen. Om de leesbaarheid te
  helpen staat hij in de hero op 15px (`--aiw-text-sm`) in plaats van de 13px uit
  `base.css`, via `.hero__eyebrow` in `site.css`. Kleur, gewicht, uppercase en spatiëring
  blijven gelijk. Hij past op elke gecontroleerde breedte op één regel, ook op 375px (de
  tekst is 256px breed), dus de 15px geldt zonder breakpoint. Gemeten minimum: 3,50:1 op
  375x812, zie R-A1a. De uitzondering geldt alleen voor deze eyebrow; de andere eyebrows
  staan op near-black, waar moss 5,29:1 haalt. Vastgesteld door Simon op 11 september 2026.
- R-A2: Zichtbare focus op elk interactief element, volgens R-V14.
- R-A3: Volledig met het toetsenbord te bedienen, inclusief taalwissel en WhatsApp-knop.
  Een skip-link staat vooraan de pagina: *Direct naar de inhoud*, in het Engels *Skip to
  content*.
- R-A4: Semantische koppenstructuur, één `h1`, elke sectie met een eigen gelabelde kop.
- R-A5: Alt-tekst op het portret. De herofoto is decoratief en krijgt `alt=""`; de
  leesbaarheidslaag en de inline logo-SVG's in de header krijgen `aria-hidden`, en de link
  om het logo draagt de toegankelijke naam *AI Wise, startpagina* (Engels *AI Wise, home
  page*). Die link gaat altijd naar de startpagina, ook op de privacypagina's; de oude naam
  *naar de bovenkant van de pagina* klopte daar niet. In de footer, waar het logo geen link
  is, draagt het glyph de naam "AI Wise" (`role="img"`) en is het wordmark `aria-hidden`
  (R-S5.1).
- R-A6: `prefers-reduced-motion` wordt gerespecteerd.
- R-A7: Elke link met `target="_blank"` draagt de visueel verborgen hint *(opent in een
  nieuw tabblad)*, in het Engels *(opens in a new tab)*, uit `nav.newTab` in `copy.ts`, via
  de klasse `.visually-hidden`. Dat zijn nu de scan-knop en de zwevende WhatsApp-knop
  (R-S2b.3 en R-S6.3).

### 9.2 Performance

- R-P1: Lighthouse ten minste 95 voor Performance, Accessibility, Best Practices en SEO, op
  mobiel. Gehaald en gemeten op 12 september 2026 op de live site, met Lighthouse 12 in
  headless Chrome, in beide talen en zowel mobiel als desktop. Performance 99 (nl) en 98 (en)
  op mobiel en 100 op desktop; Accessibility, Best Practices en SEO overal 100. Geen enkele
  controle zakte. Mobiel: LCP 1,8 s (nl) en 1,7 s (en), CLS 0, Total Blocking Time 90 ms (nl)
  en 150 ms (en).
- R-P2: Largest Contentful Paint onder 2,0 seconden op 4G.
- R-P3: Het portret is een `<picture>` gebouwd met `getImage()`, net als de herofoto, met
  art direction op 768px (R-S3.1). Per uitsnede AVIF, WebP en JPEG: liggend op 480, 720, 960
  en 1440px, staand op 200, 400 en 600px. Het laadt lazy. Op een telefoon van 375px met een
  2x-scherm is dat de liggende AVIF van 720px, 18 KB; naast de lijst op een 2x-scherm de
  staande AVIF van 400px, 19 KB.
- R-P3a: De herofoto is het grootste element in beeld en dus de LCP-kandidaat. Hij laadt
  eager met `fetchpriority="high"`, nooit lazy. Een `<picture>` gebouwd met `getImage()`
  levert per uitsnede AVIF, WebP en JPEG op vijf breedtes (liggend 960 tot 2560, staand
  480 tot 1440). `sizes` rekent met de crop van `object-fit: cover`, zodat de browser geen
  te kleine variant kiest. In AVIF is liggend 1920px 107 KB en staand 1440px 101 KB.
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

- R-S.1: Titel en meta-description per taalversie, handgeschreven. Vastgesteld in beide
  talen:
  - Titel (NL): *AI Wise · Apps, websites, tools & agents laten bouwen met AI*.
  - Titel (EN): *AI Wise · Apps, websites, tools & agents built with AI*.
  - In de HTML staat de `&` als `&amp;`, in `<title>` en in `og:title`; gecontroleerd in de
    build.
  - Description (NL): *Jij kent je onderneming, ik de mogelijkheden met AI. Boek nu de
    gratis AI-Kansenscan en ontdek wat een app, website, tool of agent voor jou kan doen.*
    (149 tekens).
  - Description (EN): *You know your business, I know what’s possible with AI. Book the free
    AI Opportunity Scan and find out what an app, website, tool or agent can do for you.*
    (154 tekens).
  - Tot 23 september 2026 begonnen beide met een vraag die ervan uitging dat de lezer al
    een idee had (*Heb je een idee voor…*), en zeiden ze alleen dat Simon het bouwt. De
    nieuwe tekst volgt de hero en noemt de scan, het enige aanbod op de pagina.
  - Per taal staat dezelfde tekst in `og:description` en als `description` van de
    organisatie in de JSON-LD. De organisatie krijgt die description van de startpagina op
    elke pagina, ook op de privacypagina's, die zelf hun eigen lead als meta-description
    hebben.
  - De oude positionering (*AI, data en automatisering*, *workflow-automatisering*,
    *rapportage*) staat nergens meer, in geen van beide talen.
    `llms.txt` en de JSON-LD volgen de nieuwe positionering, zie R-S.7 en R-S.9.
- R-S.2: Open Graph en Twitter card (`summary_large_image`), met `/assets/og/share.jpg` als
  deelafbeelding en `og:image:width` 1200, `og:image:height` 630 en `og:image:type`
  `image/jpeg` erbij, op elke pagina, ook de 404-pagina.
  - Het plaatje is de herofoto, uit het midden bijgesneden tot 1200x630, onder één
    gelijkmatige near-black laag van 86%, met de lockup (glyph, wordmark en tagline) 582px
    breed in het midden. De laag houdt de tagline in moss op minimaal 4,5:1 tegen de foto
    erachter (gemeten 4,6:1 tegen de lichtste 5%). Door die breedte houdt het vierkant van
    630x630 uit het midden, dat chat-apps als kleine thumbnail tonen, het hele logo, met
    24px marge.
  - JPEG, mozjpeg kwaliteit 84, 36 KB, ruim onder de 300 KB waarboven WhatsApp een
    voorbeeld kan overslaan. Opnieuw maken met `node docs/share-image/generate.mjs`, zie
    `docs/design-system-import.md`.
  - `card-1700.png` blijft als designsysteem-asset in `public/assets/logo/png/`, maar is geen
    deelafbeelding meer.
  - De alt-tekst (`meta.ogAlt`) beschrijft wat erop staat. NL: *Logo van AI Wise met de
    tagline Automation in Service of Life, op een donkere foto van beboste heuvels*. EN: *AI
    Wise logo with the tagline Automation in Service of Life, over a dark photograph of
    wooded hills*.
- R-S.3: Favicon uit `glyph-square-transparent.svg` en `glyph-square-transparent-32.png`:
  de glyph van het designsysteem zonder het bijna-zwarte achtergrondvlak, zodat de
  tabbalk er in zijn eigen kleur doorheen komt. De sage en het signaalblauw houden het
  op licht én op donker. De `apple-touch-icon` blijft `glyph-square-512.png` mét vlak,
  want iOS vult transparantie op het beginscherm met een eigen kleur in. De oude
  `favicon.svg` is vervangen.
- R-S.4: Eén canonieke host en één schrijfwijze per URL: geen trailing slash, afgedwongen
  in zowel `astro.config.mjs` als `vercel.json`. Canonical tags, sitemap, interne links en
  gestructureerde data gebruiken allemaal diezelfde vorm.
- R-S.5: `sitemap.xml` met `hreflang`-alternates per pagina, zodat een crawler die de ene
  taalversie vindt ook de andere vindt.

**Machineleesbaarheid**

- R-S.6: Alle inhoud staat in de geleverde HTML. Niets essentieels vereist JavaScript. Dit
  is de belangrijkste eis: een crawler die alleen een lege app-shell krijgt, ziet niets.
- R-S.7: JSON-LD met `Organization`, `Person` en `WebSite`, onderling gekoppeld via `@id`.
  - `Organization` en niet `ProfessionalService`: dat is een subtype van `LocalBusiness`,
    bedoeld voor een zaak met een fysieke vestiging, en AI Wise heeft geen vaste locatie.
  - De tagline staat als `slogan`, niet als `alternateName`.
  - `description` is altijd de description van de startpagina in de taal van de pagina
    (R-S.1), ook op de privacypagina's.
  - `knowsAbout`: *app development*, *website development*, *AI agents*, *workflow
    automation*, *generative AI* en *data engineering*.
  - `jobTitle` van de persoon: *AI-native developer*.
  - Verder uitsluitend bevestigde feiten uit `company-profile.json`: naam, eigenaar, KvK,
    btw-id, e-mail, telefoon, talen. Geen adres of vestigingsplaats (R-C6). Niets afgeleid
    of ingevuld.
- R-S.8: Semantische koppenstructuur en correcte `lang`-attributen.

**AI-oriëntatie**

- R-S.9: Een `llms.txt` volgens de conventie: wie AI Wise is, voor wie, wat het wel en niet
  doet, de bevestigde feiten, de pagina's en de contactroutes. Het bestand benoemt
  expliciet wat er níét is, zodat een model geen dienstencatalogus of prijzen verzint die
  er niet staan.
- R-S.9a: `llms.txt` volgt de vastgestelde Engelse tekst in `copy.ts`, als feitelijk
  oriëntatiebestand in Brits Engels, in de derde persoon over Simon, zonder em-streepjes en
  zonder hype. De samenvatting noemt apps, websites, tools en agents, gebouwd met AI, voor
  organisaties die werk doen dat ertoe doet, met de tagline. *What has changed* volgt de
  visie; *Examples* bevat precies de zeven Engelse voorbeelden, alleen waar nodig naar de
  derde persoon gezet; *About Simon* volgt de vijf punten van Over mij; *Contact* volgt de
  contactsectie: de uitnodiging en het contactformulier via Formward. De blokken met feiten,
  pagina's, wat er niet op de site staat en crawlen blijven.
- R-S.10: De copy zelf is de belangrijkste AI-vindbaarheidsmaatregel. Concrete, herkenbare
  werksituaties zijn beter samen te vatten en te citeren dan abstracte capaciteitenlijstjes.
  Dit valt samen met de voice-regels; er is geen aparte "AI-geoptimaliseerde" tekstlaag.

**Crawlerbeleid**

- R-S.11: `robots.txt` benoemt de vier categorieën uit het Stavast-besluit en waarom ze wel
  of niet zijn toegestaan. Het is een publiek bestand, dus het commentaar staat op zichzelf
  en verwijst niet naar het besluit of een ander klantproject. Het overzicht van categorie 4
  noemt alle zeven crawlers die op disallow staan (R-S.13).
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
- R-J2: Bezoekersstatistiek via Vercel Web Analytics. Cookieloos, en niets in de browser
  opgeslagen: `@vercel/analytics` 2.0.1 en het script van Vercel gebruiken geen cookies,
  `localStorage` of `sessionStorage`. Alleen een expliciete aanroep `va('enableCookie')`
  zou dat veranderen, en die doet de site niet. In plaats van een bezoeker te markeren wordt
  uit het binnenkomende verzoek een hash afgeleid die na 24 uur wordt verwijderd. Per
  paginaweergave slaat Vercel tijdstip, pagina, verwijzer, globale locatie en apparaat-,
  besturingssysteem- en browsertype op; wat zichtbaar is, is geaggregeerd. Geen profielen,
  geen tracking over sites heen. Script en intake draaien op het eigen domein
  (`/_vercel/insights`), dus er komt geen extern domein bij. Omdat de hash is afgeleid van
  een verzoek met een IP-adres, behandelt de privacyverklaring dit voorzichtigheidshalve als
  persoonsgegevens, met gerechtvaardigd belang als grondslag. Vercel verwerkt buiten de
  EER, met standaardcontractbepalingen in de verwerkersovereenkomst als waarborg. De
  verklaring noemt voor Vercel alleen die standaardcontractbepalingen, omdat die in de
  verwerkersovereenkomst zijn nagegaan; het EU-US Data Privacy Framework staat alleen nog
  bij Google. Vercel bewaart de statistieken 12 maanden, de termijn die de limietenpagina van
  Vercel noemt voor het Pro-abonnement waarop de site draait.
- R-J3: Privacyverklaring op `/privacy` en `/en/privacy`, met een link in de footer. De
  inhoud dekt wat artikel 13 AVG vraagt: de verwerkingsverantwoordelijke, doel en grondslag
  per verwerking, de ontvangers (Vercel voor hosting en statistiek, Formward voor het
  contactformulier met Hostup en Mailjet in de EU, Google Workspace voor e-mail, WhatsApp), doorgifte buiten de EER
  met de waarborg, bewaartermijnen (statistiek 12 maanden, contact dat niet tot een opdracht
  leidt uiterlijk een jaar na het laatste contact, contact dat wel tot een opdracht leidt
  zolang de opdracht dat nodig heeft, administratie zeven jaar), alle rechten, de klacht bij
  de Autoriteit Persoonsgegevens, dat niemand gegevens hoeft te geven, en dat er geen
  geautomatiseerde besluitvorming of profilering is. Eén zin zegt dat na doorklikken naar
  WhatsApp hun eigen voorwaarden gelden. Een eigen paragraaf beschrijft het
  contactformulier, sinds 23 september 2026: welke velden, dat een leeg bericht als de
  voorbeeldzin wordt meegestuurd, Formward als verwerker (EGF Fastighetsservice AB, Zweden)
  met de keten in de EU, en dat Formward een inzending na 30 dagen automatisch verwijdert
  (de standaard van het gratis account); de mail zelf volgt de termijnen voor e-mail. Simon
  heeft de verwerkersovereenkomst van Formward op 23 september 2026 geaccepteerd in het
  dashboard. De bewaarzin voor contact dat wel tot
  een opdracht leidt is door Simon bevestigd: *Komt er wel een opdracht uit voort, dan bewaar
  ik ze zolang ze daarvoor nodig zijn.* en *If it does, I keep them for as long as the work
  needs them.*
- R-J4: Informatieplicht (art. 3:15d BW): handelsnaam, KvK-nummer,
  btw-identificatienummer en contactgegevens eenvoudig vindbaar, in de footer (R-S5.3). Een
  vestigingsplaats is daarvoor niet nodig; noemen mag, en de site doet het op dit moment niet
  (R-S5.5).
- R-J5: Geen claims over veiligheid, privacy of resultaten zonder onderbouwing.
- R-J6: De privacyverklaring beschrijft alleen wat er werkelijk gebeurt. Als er iets aan de
  verwerking verandert, wordt de tekst in dezelfde commit aangepast.

---

## 11. Contentproces

- R-C1: De copy wordt door Simon goedgekeurd voordat ze live gaat. Voor de teksten die nu op
  de site staan is dat gebeurd, in beide talen (O-2). De PRD legt eisen vast, geen zinnen.
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
- R-C6: **Geen locatie vereist, een plaats noemen mag.** AI Wise werkt op afstand en is niet
  aan een plaats gebonden, dus nergens is een stad of land verplicht: niet in koppen, lopende
  tekst, meta-beschrijvingen, structured data of `llms.txt`. Simon heeft vastgesteld dat het
  noemen van Amsterdam in een footer is toegestaan waar het helpt. De site draagt op dit
  moment geen plaats, ook niet in de wettelijke bedrijfsidentificatie in de footer; zie
  R-S5.5. De site presenteert zich niet als een zaak met een fysieke vestiging, en de
  structured data blijft daarom zonder adres (R-S.7).
- R-C7: Wat Simon vertelt is richting, geen tekst om over te nemen. Teksten die hij zelf
  volledig uitschrijft, worden overgenomen met alleen spelling- en consistentiecorrecties,
  en die worden benoemd.

---

## 12. Succescriteria

1. Een bezoeker kan binnen tien seconden zeggen wat AI Wise doet en voor wie.
2. Beide doelgroepen voelen zich aangesproken zonder als categorie benoemd te zijn.
3. Er staat nergens een aanbod, prijs of scan. De onderzoeksfase is alleen in Contact
   benoemd, in één positieve zin.
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

Alles staat er, en het staat live.

| Onderdeel | Status |
| --- | --- |
| Astro 7, statische build, TypeScript 6 strict | Klaar, `astro check` schoon |
| Designsysteem-import: acht tokenbestanden, logo, weave-masters, favicons | Klaar; de weave-masters staan er alleen nog omdat `base.css` ernaar verwijst |
| Fonts gesubset en geconverteerd, samen 42 KB | Klaar |
| S0 header met taalwissel, doorzichtig boven de herofoto en dicht na scrollen, zonder JavaScript | Klaar |
| S1 hero op de arendfoto, art direction per schermvorm, leesbaarheidslaag en de enige signal-knop | Klaar; tekst in beide talen vastgesteld; de tagline in de eyebrow is de contrastuitzondering uit R-A1b |
| S2 visie met zeven voorbeelden ter inspiratie, voorbeelden eerst | Klaar; tekst in beide talen vastgesteld |
| S2b gratis AI-Kansenscan met WhatsApp-knop | Klaar; tekst in beide talen vastgesteld |
| S3 over mij, opsomming in vijf punten naast het portret: liggend 3:2 onder 768px, staand 4:5 vanaf 768px | Klaar; tekst in beide talen vastgesteld, de Nederlandse door Simon zelf geschreven |
| S4 contact: uitnodiging en contactformulier via Formward | Gebouwd; wacht op de stappen in hoofdstuk 15 |
| S5 footer met het volledige logo, de tagline als leesbare tekst, KvK, btw-id, blauwe privacylink en copyrightregel | Klaar; tekst in beide talen vastgesteld |
| S6 zwevende WhatsApp-knop, rond en omlijnd, verborgen bij de scan-knop en vanaf het contactformulier | Klaar |
| Privacyverklaring in NL en EN, inclusief de analytics-paragraaf | Klaar |
| 404-pagina in beide talen, noindex, zonder canonical en buiten de sitemap | Klaar |
| i18n-routering, hreflang, canonical, sitemap | Klaar |
| JSON-LD, Open Graph, favicons | Klaar |
| `robots.txt` met modeltraining op disallow, en `llms.txt` | Klaar |
| Vercel Web Analytics, cookieloos, eigen domein | Klaar; aangezet in het dashboard, script wordt in productie geserveerd |
| Content-Security-Policy met hashes, geen `unsafe-inline` | Klaar, geverifieerd in de browser en op de live site |
| `vercel.json` met cache- en securitykoppen | Klaar, gedeployed; de securitykoppen zijn op de live site gecontroleerd |
| Em-dash-regel in het designsysteem, afgebakend tot publieke teksten | Klaar in `readme.md` en `SKILL.md` |
| Beweging: hero-drift, herotekst, blokken die opkomen, koorddrift en het pijltje, alles in CSS en zonder extra JavaScript | Klaar; gemeten op de gebouwde site, zie R-V13a tot en met R-V13g |
| Deploy op Vercel vanaf `main`, `aiwise.it.com` en `www.aiwise.it.com` | Live sinds 11 september 2026 |

Wat na de livegang is gecontroleerd: `/`, `/en`, `/privacy` en `/en/privacy` geven alle vier
een 200, een onbekend pad geeft de eigen 404-pagina met noindex, en `robots.txt`, `llms.txt`,
de sitemap en `/assets/og/share.jpg` worden geserveerd. De securitykoppen uit `vercel.json`
staan er, de CSP-metatag staat in de HTML, en `/_vercel/insights/script.js` komt van het
eigen domein.

Wat nog moet gebeuren staat in hoofdstuk 15.

---

## 14. Open punten

Er staan geen open punten meer.

Gesloten sinds versie 4:

- O-1, LinkedIn-profiel-URL: staat erin, als route in Contact, in `llms.txt` en als `sameAs`
  in de gestructureerde data. Zie R-S4.3.
- O-2, copy reviewen: gesloten. Simon heeft de Nederlandse en de Engelse copy goedgekeurd,
  inclusief de Engelse privacyverklaring. Zie R-C1 en R-L9a.
- O-3, visuele beoordeling: gesloten. Simon heeft de site zelf bekeken en vindt hem klaar om
  te delen.
- O-4, Web Analytics aanzetten: gesloten. Simon heeft het in het Vercel-dashboard aangezet en
  het script wordt in productie geserveerd. Zie R-T17a en R-J2.
- O-5, Lighthouse meten: gesloten op 12 september 2026. Gemeten op de live site, in beide
  talen en op mobiel en desktop. Alle vier de categorieen halen de drempel van 95 uit R-P1,
  met 98 als laagste score. Zie R-P1.
- O-6, eyebrow boven de herofoto: moss blijft, de laag blijft. De norm blijft 4,5:1 en de
  tagline in de hero-eyebrow is een vastgelegde uitzondering met minimaal 3:1, op 15px.
  Zie R-A1b.
- O-7, deelplaatje met de adelaarsfoto: opgelost, al voor livegang. `share.jpg` vervangt
  `card-1700.png` als deelafbeelding. Zie R-S.2.
- O-8, mag het koord bewegen: gesloten op 12 september 2026. De regel "the weave never
  animates" in het designsysteem was niet van Simon. Zijn beslissing: een weave mag bewegen om
  diepte in de website te maken. De Motion-sectie van het designsysteem draagt die beslissing
  nu, met de grens eromheen: drift en parallax tegen de scroll in, en nooit een koord dat
  zichzelf tekent, pulseert of om aandacht vraagt. Op documenten en slides, die niet scrollen,
  verandert er niets. Zie R-V13e.

- Concreetheid in de visie: er staan nu zeven voorbeelden in, ter inspiratie. Zie R-S2.3.
- Vestigingsadres: een plaats is niet verplicht en noemen mag; de footer draagt er nu geen,
  alleen handelsnaam, KvK-nummer, btw-id en contactgegevens. Zie R-S5.5 en R-C6.
- Webstatistiek: Vercel Web Analytics, cookieloos. Zie R-J2.
- Modeltraining: niet toegestaan. Zie R-S.13.
- Em-dashes in het designsysteem: de regel is afgebakend tot publieke teksten, de
  handleidingen zijn expliciet uitgezonderd, en er hoeft dus geen sweep door de guides. De
  voorbeeldcopy in `ui_kits/` en `slides/` is op 12 september 2026 nagelopen, in het
  designsysteem zelf en niet in deze repo.
- Designsysteem bijgewerkt op 11 september 2026: de readme en `SKILL.md` zijn herschreven naar
  de nieuwe positionering, `github.md` wijst naar de AI-Wise-IT-repository, de knopvariant
  `outline-signal` en de iconenrichting (Lucide plus Tabler, inline) staan in de
  componentprompts en de bronnen, de README van de website-UI-kit verwijst naar de live site,
  en de transparante logovarianten en het deelplaatje zijn als asset toegevoegd. Simon heeft op 11 september 2026 ook de
  PROPOSED-tokens goedgekeurd: typeschaal, spacing, grid en radius staan daar nu als
  vastgesteld. De voorbeeldcopy in `ui_kits/` en `slides/` is op 12 september nagelopen op
  em-dashes.
- Iconenrichting: geen open punt voor deze site. Er staan vier iconen op de pagina, uit
  twee sets (R-T12), en `Icon.astro` vervangen raakt verder niets. De keuze blijft open in
  het designsysteem.

---

## 15. Wat er nog moet gebeuren

Het contactformulier staat live sinds 23 september 2026. In Formward zijn de allowed
origins ingesteld, staat Turnstile uit en is de verwerkersovereenkomst geaccepteerd. Wat nog
moet: één echte inzending op de live site, met en zonder JavaScript, en controleren dat de
mail aankomt met het goede antwoordadres.

---

## 16. Wijzigingen

### Versie 9 ten opzichte van versie 8

- **Eerste ronde feedback van Inge verwerkt**, in beide talen en in `llms.txt`. De visie is
  ingekort tot drie zinnen, zegt *een idee* in plaats van *een helder idee*, en noemt *kleine
  ondernemers* in plaats van *kleine praktijken*. De voorbeelden staan onder *Hier kun je aan
  denken:*, zonder *misschien* en zonder dat het als aanbod leest (R-S2.3a). In Over mij noemt punt 1 acht jaar in plaats van 2018, zegt
  punt 2 zonder vergelijking dat Simon ervaring heeft met websites en apps, en begint punt 4
  met *Ik weet*. `llms.txt` houdt 2018, omdat een jaartal daar niet veroudert. R-S2.1,
  R-S2.2a, R-S2.3, R-S3.6, R-S3.7 en R-S3.8.
- **Nieuwe hero**, als eerste stap van een nieuwe opbouw van de pagina: *Jij kent je
  onderneming. Ik ken de mogelijkheden.*, met een lead die samen uitzoeken en bouwen noemt.
  In het Engels *You know your business. I know what’s possible.* R-S1.2 en R-S1.3.
- **Voorbeeldenlijst herzien, zeven punten.** Webshop en online lesomgeving zijn samengevoegd,
  de aanmeldingen in de administratie zijn weg, en er zijn twee bij: een doorzoekbaar
  WhatsApp-archief met spraakberichten, en alles wat een klant stuurde via mail of WhatsApp
  in één overzicht. R-S2.3 en `llms.txt`.
- **Contactformulier in plaats van contactknoppen.** Het formulier gaat via Formward, een
  formulierdienst met de hele keten in de EU, naar Simons mailbox. Het berichtveld schrijft
  zijn eigen voorbeeld uit de ingevulde gegevens, en een leeg bericht wordt als die zin
  verstuurd. Zonder JavaScript werkt het als gewoon formulier met bedankpagina's op
  `/bedankt` en `/en/thanks`. De knoppen voor e-mail, LinkedIn en WhatsApp, *Een kort
  bericht is genoeg.* en de iconen `mail` en `linkedin` zijn weg. De contacttekst is
  ingekort tot één uitnodiging: de zin over *AI Wise is jong* en de alinea's over
  samenwerking met ontwikkelaars, ontwerpers en contentschrijvers zijn weg. De privacyverklaring beschrijft het formulier,
  de CSP laat Formward toe, en de zwevende knop verdwijnt vanaf het formulier. De sectie
  staat nu gecentreerd in een smalle kolom, zonder label. De knop in de aanbodkaart heet
  *Nu plannen* (*Book now*), en de kaart staat gecentreerd op 4 van de rechter 6 kolommen.
  Rechts naast het formulier komt, als experiment, een koord uit twee hoektegels de pagina
  in en weer uit (R-V4c). Over mij punt 5 zegt nu *organisaties met een maatschappelijk
  belang*. S4, R-S2b.2a, R-S2b.3, R-S3.7, R-V4c, R-T2,
  R-T12, R-J3, R-S6.7, R-A7 en hoofdstuk 15.
- **Nieuwe sectie: de gratis AI-Kansenscan**, tussen visie en Over mij, met een knop die
  WhatsApp opent met een vooringevuld bericht. De hero-knop heet nu *Plan een gratis
  AI-Kansenscan* en ankert daarheen. De scan-knop is gevuld, zoals de hero-knop: beide
  vragen om dezelfde actie. De zwevende WhatsApp-knop verdwijnt zolang de scan-knop in beeld
  is. De tekst noemt drie ingangen: nog niets met AI gedaan, al geëxperimenteerd, of een
  idee. Naast de tekst staat een aanbodkaart op warm light met de naam van het aanbod,
  *Gratis*, drie feiten en de knop. De spelling volgt het designsysteem: *AI-Kansenscan* en
  *kansenschets*. S2b, R-S1.4, R-S6.7 en R-V6.
- **Visie: voorbeelden eerst, nieuwe kop, geen reflectie meer.** De voorbeelden staan links;
  gestapeld staat de kop boven het kader en vervalt de introzin erin. De kop is *Je idee is dichterbij dan je denkt*, gelijk aan het
  Engels, en de slotvraag in Newsreader is weg. Het koord hangt nu tussen visie en
  kansenscan en is op de nieuwe opbouw gecontroleerd. R-S2.2a, R-S2.3b, R-S2.5, R-V4c en
  R-V7.
- **De pagina beweegt.** Vijf effecten, alle in CSS en zonder een regel extra JavaScript: de
  herofoto die langzaam indrijft, de herotekst die regel voor regel omhoogschuift, blokken die
  opkomen bij binnenrollen, het koord dat meedrijft tegen de scroll in, en het pijltje in de
  hero-knop. Alles achter `prefers-reduced-motion: no-preference`, het scroll-gestuurde deel
  bovendien achter `@supports`, en alleen `transform` en `opacity`. R-V13 tot en met R-V13g,
  en hoofdstuk 13.
- **Twee motion-tokens bij in het designsysteem**: `--aiw-duration-ambient` (32s) en
  `--aiw-stagger` (90ms), beide op 12 september 2026 toegevoegd en daarna hierheen
  geïmporteerd. Daarmee staat er geen losse tijdwaarde in `site.css` en blijft de eis uit
  R-V1 gelden dat duur geen uitzondering kent. R-V13 en R-T8.
- **Twee maten bij in de uitzonderingslijst van R-V1**: de scrollafstanden van de reveals en
  de 2px van het pijltje. Beide meten geen layout, dus de spacingschaal dekt ze niet. R-V1,
  R-V13c en R-V13f.
- **O-8 geopend en dezelfde dag gesloten: het koord mag bewegen.** Het designsysteem verbood
  animatie van de weave, en het koord is daarvan afgeleid, dus de drift stond live zonder regel
  die hem dekte. Simon heeft op 12 september 2026 beslist dat die regel niet van hem was: een
  weave mag bewegen om diepte in de website te maken. De Motion-sectie van het designsysteem is
  bijgeschreven met de beslissing, de grens eromheen (drift en parallax, nooit een koord dat
  zichzelf tekent of pulseert), de scroll-gestuurde animatie als techniek, en de ambient drift
  over een herofoto. Hoofdstuk 14 en R-V13e.
- **De hero-lead is herschreven**, in twee stappen. De oude zin liet "die terugkerend werk uit
  handen nemen" op apps, websites en tools samen slaan, terwijl een website dat niet doet. De
  lead noemt nu wat er gebouwd kan worden en laat de bijzin bij de tool landen. AI staat niet
  meer in de hero. De tweede zin noemt het gevolg in plaats van de doelgroep. R-S1.3.

### Versie 8 ten opzichte van versie 7

- **De site is live.** Op 11 september 2026 gedeployed op Vercel vanaf `main`, onder team AI
  Wise en project `ai-wise-website`, met `aiwise.it.com` en `www.aiwise.it.com` als
  domeinnamen en certificaten voor allebei. GitHub Pages staat uit, het `CNAME`-bestand en de
  Pages-workflow zijn weg, en de A-records voor `@` en `www` wijzen op `76.76.21.21`. Na de
  deploy gecontroleerd: de vier pagina's geven 200, een onbekend pad geeft de eigen
  404-pagina met noindex, `robots.txt`, `llms.txt`, de sitemap en het deelplaatje worden
  geserveerd, de securitykoppen en de CSP-metatag staan er, en het analytics-script komt van
  het eigen domein. R-T14, R-T17a, R-T18, R-T19 en hoofdstuk 13.
- **O-2, O-3 en O-4 gesloten.** Simon heeft de copy in beide talen goedgekeurd, inclusief de
  Engelse privacyverklaring; hij heeft de site zelf beoordeeld en vindt hem klaar om te delen;
  en Web Analytics staat aan in het Vercel-dashboard. R-C1, R-L9a en R-T17a.
- **O-5 gesloten.** Lighthouse is op 12 september 2026 op de live site gemeten, in beide talen
  en op mobiel en desktop. Alle vier de categorieen halen de drempel uit R-P1, met 98 als
  laagste score. R-P1.
- **De locatieregel is geen verbod meer.** Een vestigingsplaats is niet vereist, het noemen
  van Amsterdam in een footer is toegestaan waar het helpt, en de site draagt er op dit moment
  geen. De copy is niet gewijzigd. R-S5.3, R-S5.5, R-J4 en R-C6.
- **Het koord is als experiment vastgelegd.** R-V4c beschrijft het koord dat live staat, met
  Simons positie erbij: het koordsysteem als geheel is nog experimenteel, omdat de ring niet
  is opgelost en omdat één werkend horizontaal koord niet bewijst dat het systeem structureel
  werkt. R-V4c.
- **Het designsysteem is op 11 september 2026 bijgewerkt**: readme en `SKILL.md` herschreven
  naar de nieuwe positionering, `github.md` gecorrigeerd naar de AI-Wise-IT-repository, de
  variant `outline-signal` en de iconenrichting vastgelegd, de README van de website-UI-kit
  naar de live site, en transparante logovarianten plus het deelplaatje als asset. Op 12 september zijn daar de
  PROPOSED-tokens bij bevestigd en is de em-dash-sweep door `ui_kits/` en `slides/` afgerond.
  Hoofdstuk 14 en 15.
- **Hoofdstuk 15 ingedikt** tot wat er werkelijk overblijft: alleen Lighthouse meten. De
  verwijzing naar een niet-bestaand O-8 in R-B4 is vervangen door een verwijzing naar dat
  hoofdstuk.

### Versie 7 ten opzichte van versie 6

- **Nederlandse titel, meta-description en footerregel herschreven** naar de nieuwe
  positionering: apps, websites en tools, gebouwd met AI. R-S.1 en R-S5.1.
- **Footer met het volledige logo.** Glyph plus wordmark, opgebouwd als `lockup-en.svg`, met
  het wordmark op 32px kapitaalhoogte in plaats van 14px, en de tagline als tekst van 17px in
  moss (5,29:1). De lockup-afbeelding is weg; header en footer delen `LogoSvg.astro`.
  R-S0.7, R-S5.1, R-V10 en R-A5.
- **Copyrightregel** `© 2026 AI Wise` onder de rule, in beide talen, in plaats van de
  tagline met Simons naam. R-S5.4.
- **Zwevende WhatsApp-knop rond en 56px**, en langer zichtbaar: hij verdwijnt pas zodra de
  contactknoppen in beeld komen en blijft weg tot en met de footer, in plaats van al bij de
  bovenmarge van de contactsectie. R-S6.4, R-S6.7 en R-V5.
- **Vierde punt van Over mij**: *Door te experimenteren* in plaats van *Al experimenterend*,
  omdat *Al* in Source Sans 3 als *AI* las. Nu 76 woorden. R-S3.6 en R-S3.7.
- **Privacypagina schoof op 375px 58px opzij**, door het ene woord
  *Verwerkingsverantwoordelijke* in de kop. De koppen in de privacytekst mogen een woord nu
  breken als het niet op een regel past (`overflow-wrap: anywhere`). De andere koppen lopen
  in beide talen precies zoals eerst; `hyphens: auto` is bewust weggelaten, omdat dat ook
  woorden afbreekt die gewoon naar de volgende regel hadden gekund.
- **Engelse hero vastgesteld**, als eerste Engelse sectie: de tagline in de eyebrow zoals op
  de Nederlandse pagina, de kop *You picture it. I’ll build it.* in twee regels, en een
  nieuwe lead. Het Engels is consequent Brits. R-S1.2, R-S1.3 en R-L9a.
- **Engelse visie, voorbeelden, titel en meta-description vastgesteld, en *agents* erbij in
  beide talen**: nieuwe Engelse visie met zeven voorbeelden, de afsluitende notitie onder de
  voorbeelden weg (veld `examplesNote`, de weergave en de CSS), twee Nederlandse voorbeelden
  herschreven, en titel en description noemen nu ook agents. R-S2.2a, R-S2.3, R-L9a en R-S.1.
- **Engelse Over mij en meta-description vastgesteld**: vijf punten als opsomming, zoals op
  de Nederlandse pagina, in plaats van drie alinea's; het veld `paragraphs` en de weergave
  daarvan zijn weg, en de description zegt *that makes a difference*. R-S3.6, R-S3.8, R-L9a
  en R-S.1.
- **Engelse contacttekst vastgesteld**, met dezelfde opbouw als de Nederlandse: één alinea,
  de overgangszin *I’m open to working together.* met twee alinea's voor samenwerking, een
  nieuw WhatsApp-bericht en de afsluiter *A short message will do.* R-S4.7, R-L9a en O-2.
- **Engelse footer vastgesteld en de privacylink blauw**: nieuwe regel onder het logo, de
  kolommen *Contact* en *Business details*, en *VAT no.*; de privacylink staat in signal
  blue (5,11:1) zodat hij als link herkenbaar is. E-mail en telefoon houden de gewone
  footerkleur. R-S5.1 tot en met R-S5.3 en O-2.
- **Privacyverklaring in beide talen nagelopen op juistheid en volledigheid**: de
  statistiek wordt niet meer als vrij van persoonsgegevens gepresenteerd, doorgifte naar de
  VS noemt standaardcontractbepalingen en het DPF, Google Workspace staat erbij als
  e-mailverwerker, en grondslagen, bewaartermijnen, alle rechten, de geen-verplichting en
  geen geautomatiseerde besluitvorming zijn toegevoegd, met een zin over doorklikken naar
  LinkedIn en WhatsApp. *Een extern domein* gecorrigeerd. R-J2 en R-J3.
- **Kleine interfaceteksten vastgesteld**: skip-link *Direct naar de inhoud*, de logolink
  heet *AI Wise, startpagina*, de taallinks lezen *Nederlands* en *English* voor, de zwevende
  knop *Stuur een bericht via WhatsApp*, en elke link naar een nieuw tabblad zegt dat. R-S0.2,
  R-S4.3, R-S6.3, R-A3, R-A5 en R-A7.
- **404-pagina toegevoegd**, in beide talen op één pagina, met noindex en zonder canonical of
  hreflang; `Base.astro` kent daarvoor `page: "404"` en de taalwissel wijst dan naar de twee
  startpagina's. R-S7.1 tot en met R-S7.5.
- **Onzichtbare metadata bijgewerkt**: de JSON-LD beschrijft AI Wise als `Organization` met
  de tagline als `slogan`, altijd met de description van de startpagina, nieuwe `knowsAbout`
  en `jobTitle` *AI-native developer*; `llms.txt` herschreven op de vastgestelde Engelse
  tekst; een alt-tekst die zegt wat er op het deelplaatje staat; `robots.txt` zonder
  verwijzing naar een klantproject en met alle zeven trainingscrawlers in het overzicht.
  R-S.1, R-S.2, R-S.7, R-S.9a, R-S.11 en O-7.
- **Footerlinks blauw en bewaartermijnen concreet**: e-mail en telefoon in de footer delen de
  linkstijl van de privacylink; bij Vercel noemt de privacyverklaring alleen nog de
  standaardcontractbepalingen; de statistiek wordt 12 maanden bewaard, en contact dat niet tot
  een opdracht leidt uiterlijk een jaar na het laatste contact. R-S5.2, R-S5.3, R-J2 en R-J3.
- **Nieuw deelplaatje, en de bewaarzin bevestigd**: `share.jpg` (1200x630, 36 KB) vervangt
  `card-1700.png` als `og:image`, nu met breedte, hoogte en type: de herofoto onder een
  gelijkmatige near-black laag van 86% met de lockup in het midden, gemaakt met
  `docs/share-image/generate.mjs`, en een nieuwe alt-tekst in beide talen. Simon heeft de zin
  over bewaren zolang een opdracht dat nodig heeft bevestigd. R-S.2, R-J3 en O-7.
- **Amsterdam uit de footer**: AI Wise werkt op afstand, dus de kolom met zakelijke gegevens
  noemt geen vestigingsplaats meer. Handelsnaam, KvK-nummer, btw-id en contactgegevens
  blijven; het veld `city` is uit `COMPANY` in `copy.ts` verwijderd. R-S5.3, R-S5.5, R-J4 en
  R-C6.
- **Verouderde eisen rechtgezet.** R-T12 telt nu vier iconen uit twee sets in plaats van
  twee; R-T1 zegt wat er werkelijk draait, namelijk geen framework en geen scripts van
  derden, met één klein gebundeld script voor de zwevende knop naast het analytics-script
  van Vercel; R-T4 noemt naast `Button` ook de vertaalde `Card`; en het Engels staat
  nergens meer als concept genoteerd, want alleen de privacyverklaring wacht nog op
  review. `design-system-import.md` zegt nu welke twee afwijkingen bij een herimport terug
  moeten en welke afwijkingen van de site zelf zijn, en telt `Card` niet langer bij wat is
  weggelaten. R-T1, R-T4, R-T12, R-L9a, R-S.1 en O-3.
- **De tokenregel klopt weer met het bestand.** R-V1 en de kop van `site.css` zeiden allebei
  dat er geen pixelmaten buiten de tokens om bestaan, terwijl het bestand er een stuk of
  twintig heeft. Beide dragen nu dezelfde volledige lijst met herkomst: de knoppaddings uit
  `Button.jsx`, het lockup uit `Chrome.TopBar`, de optische halve stappen, het touch target
  van 48px, de art direction van de hero, de portretkolom, de leesmaten in `ch`, de
  breekpunten en het visually-hidden-idioom. Geen enkele weergegeven waarde is veranderd,
  ook de 46ch van de hero-lead niet. Die stond nergens als keuze genoteerd, maar meten wees
  uit dat het er een is: de hero-lead is de enige die over een foto staat, en op de 52ch uit
  de token lopen de regels zo ver naar rechts dat het contrast op 1440x900 van 5,93 naar
  5,09 zakt en op 1100x800 van 5,80 naar 4,66, vlak boven de 4,5 die R-A1 eist. De 46ch
  blijft dus staan en is nu een benoemde uitzondering, R-V9a, in plaats van een stille
  afwijking. R-V1, R-V9, R-V9a en R-A1a.

### Versie 6 ten opzichte van versie 5

- **Herofoto in plaats van de weave.** De hero staat op een gegenereerde natuurfoto van een
  steenarend boven een groen bladerdak, met art direction per schermvorm en een
  leesbaarheidslaag van near-black. De weave is van de website verdwenen:
  `Weave.astro` en de weave-CSS in `site.css` zijn weg. De weave-masters in
  `public/assets/weave/masters/` blijven staan, omdat het verbatim geïmporteerde `base.css`
  ernaar verwijst. R-S1.5, R-S1.6, R-V4, R-V4a, R-V4b, R-V11, R-T10a, R-P3a.
- **Doorzichtige header boven de foto**, dicht na de eerste 76px scroll, in CSS met een
  veilige terugval naar de dichte header. Glyph en wordmark staan daarvoor inline, zonder
  hun achtergrondvlak. R-S0.5 tot en met R-S0.7.
- De regel "geen gradients" kent nu één uitzondering: de leesbaarheidslaag. R-V5.
- Contrast boven de foto gemeten en vastgelegd. R-A1a.
- **Contrastuitzondering voor de tagline in de hero.** De norm blijft 4,5:1; de eyebrow met
  de tagline boven de foto moet minimaal 3:1 halen, omdat hij een herhaalde merkregel is.
  Hij staat daar nu op 15px in plaats van 13px en haalt 3,50 tot 4,30:1. O-6 is gesloten.
  R-A1, R-A1a en R-A1b.
- **Nieuwe Over mij-sectie.** De Nederlandse tekst is een opsomming van vijf punten, door
  Simon geschreven, 75 woorden. De lijst deelt de opmaak van de voorbeeldenlijst in de visie
  via `.bullet-list`; de visie ziet er ongewijzigd uit. Het portret staat op smalle schermen
  liggend (3:2) en vanaf 768px staand (4:5) in een kolom van 200px, zodat het niet meer
  boven de korte tekst uittorent. Het oude `src/assets/portrait.jpg` is vervangen door twee
  uitsneden in `src/assets/about/`. De afwijking van de 4:5 uit het designsysteem is Simons
  keuze; het designsysteem is niet aangepast. R-S3.1, R-S3.6, R-S3.7 en R-P3.
- **Zwevende WhatsApp-knop en blauw omlijnde knoppen.** De zwevende knop toont alleen nog
  het WhatsApp-icoon in een vierkant van 48px, vervaagt tijdens het scrollen en blijft weg
  zolang de contactsectie in beeld is. De contactknoppen en de zwevende knop hebben een rand
  en icoon in signal blue; de hero-knop blijft de enige gevulde blauwe knop. Het
  Lucide-icoon `message-circle` is uit `Icon.astro` verwijderd, omdat niets het nog
  gebruikt. R-S4.3, R-S6.1 tot en met R-S6.8 en R-V6.

### Versie 5 ten opzichte van versie 4

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
- LinkedIn-route gebouwd, en inmiddels ingeschakeld met Simons profiel. R-S4.3.
- Contact herschreven met Simon: de onderzoeksfase in één positieve zin, en samenwerking met
  ontwikkelaars en met ontwerpers en contentschrijvers apart. R-S4.1 tot en met R-S4.4a.
- De em-dash-regel is afgebakend tot publieke teksten; de handleidingen van het
  designsysteem zijn uitgezonderd. R-V12.
- Het oude open punt over iconenrichting is geschrapt voor deze site.
