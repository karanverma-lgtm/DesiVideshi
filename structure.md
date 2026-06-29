# Desi Videshi Chaat — Site Structure (Reimagined)

## Why the rebuild
The current site is a stock WordPress catering/bakery template that never got finished — lorem-ipsum post titles, ₹0.00 placeholder prices on every dish, "Welcome to the bakery" copy, broken social links, a 2016 photo dump. The one real idea buried in it (an old image alt-tag literally says "MEXICAN BHAJI") is the actual brand hook: **Indian chaat, reimagined with global fusion twists** — which is what "Desi Videshi" already promises and the current site never delivers on.

**Repositioning:** Premium fusion street-food **catering brand** for weddings, corporate events, and private parties (Delhi NCR). Not a storefront, not a dine-in restaurant — a lead-generation site that gets enquiries into a quote/WhatsApp pipeline. Dropping the WooCommerce shell entirely.

---

## Sitemap

```
/                       Home
/about                  About / Our Story
/menu                   Menu & Counters
/events                 Events & Catering
/gallery                Gallery
/testimonials           Testimonials
/contact                Contact / Get a Quote
```

No blog, no product pages, no cart, no checkout. Optional future addition: `/blog` for SEO content (event-catering-in-Delhi style posts) — not in v1.

---

## Global Elements

**Header (sticky)**
- Logo (left)
- Nav: Home / About / Menu / Events / Gallery / Testimonials / Contact
- Phone number (click-to-call, desktop only)
- "Get a Quote" button (primary CTA, always visible)
- WhatsApp icon (floating, persistent across all pages — this audience books via WhatsApp far more than forms)

**Footer**
- Short brand blurb (1–2 lines)
- Quick links (sitemap repeat)
- Contact block: phone, email, WhatsApp
- Service area note (e.g. "Catering across Delhi NCR")
- Social icons (only include ones that are actually live — current site links to nothing)
- Copyright

---

## Page-by-Page Breakdown

### 1. Home (`/`)
| # | Section | Purpose / Content | CTA |
|---|---|---|---|
| 1 | Hero | Full-bleed image or short video loop of a chaat counter in action. Headline + tagline. | "Get a Quote" / "View Menu" |
| 2 | Trust strip | 3 stat markers (years active, events catered, cities served) | — |
| 3 | About teaser | 2–3 line story hook + photo | "Our Story →" |
| 4 | Signature counters | 4 cards: Chaat Counters / Fusion Bites / Live Counters / Beverages | Links to `/menu` sections |
| 5 | Featured dishes | 6-item grid, dish name + 1-line description + veg/spice tag — **no fake prices** | "See Full Menu" |
| 6 | How it works | 4-step process strip: Enquire → Customize → Tasting → Event Day | — |
| 7 | Events showcase | 3 cards: Weddings / Corporate / Private Parties, each with photo + 1 line | "Explore Events" |
| 8 | Testimonials | 3-slide carousel | "Read More Stories →" |
| 9 | Gallery strip | 6–8 image masonry teaser | "View Gallery" |
| 10 | Closing CTA banner | "Planning an event?" + phone + quote button | "Get a Quote" |

### 2. About (`/about`)
1. Banner/hero (smaller than home)
2. Our Story — real narrative, not corporate filler
3. What Makes Us Different — 4 pillars (Authenticity / Fusion Innovation / Presentation / Service)
4. Meet the Team — founder + head chef cards (replace the random unrelated staff photo from the old site)
5. Hygiene & Standards — FSSAI license, food safety practices (trust signal, especially for corporate clients)
6. CTA strip

### 3. Menu & Counters (`/menu`)
1. Intro line — sets up the "desi meets videshi" concept
2. Filterable tabs: **Chaat Counters / Fusion Bites / Live Counters / Beverages & Mocktails**
3. Each dish card: name, 1-line description, veg/non-veg icon, spice level (1–3 chili), image
4. "Build Your Own Counter" customization note
5. CTA: "Request Full Menu PDF" (lead-capture gate — collect email/phone for the download)

### 4. Events & Catering (`/events`)
1. Intro
2. Event-type cards: Weddings / Corporate / Private Parties / Festivals — each expands with photos + description
3. Process timeline (mirrors Home's "how it works" but more detailed)
4. Package tiers — **no fixed rupee pricing**, use "Starting from ₹X/plate" ranges or "Custom Quote" only
5. FAQ accordion (minimum guest count, advance notice required, outstation events, customization limits)
6. CTA: quote form embedded inline at bottom

### 5. Gallery (`/gallery`)
1. Filterable masonry grid: Counters / Events / Behind-the-Scenes
2. Optional: embedded short video reel (Instagram Reels style)

### 6. Testimonials (`/testimonials`)
1. Grid of testimonials — client name, event type, 2–3 line quote
2. Optional video testimonial embed
3. CTA: "Get a Quote"

### 7. Contact / Get a Quote (`/contact`)
1. Quote request form: Name, Phone, Email, Event Type, Event Date, Guest Count, Location, Message
2. Contact info block: phone, WhatsApp, email
3. Map embed (service area or office location)
4. Response-time note ("We typically respond within 4 hours")
5. Social links

---

## Primary User Flows
1. **Convert:** Home → Menu or Events → Contact/Quote form → WhatsApp/call follow-up
2. **Trust-build:** Home → About → Testimonials → Contact
3. **Browse-first:** Home → Gallery → Menu → Contact

## Build Notes
- Replace every ₹0.00 placeholder — catering sites should never show per-item retail prices; use quote ranges or "custom quote" only.
- Kill the WooCommerce cart/product infrastructure — this isn't e-commerce.
- WhatsApp click-to-chat should be the dominant CTA channel, not just the contact form (standard for this customer segment in India).
- Replace 2016-era stock-feeling photography across the board — this is the single biggest credibility gap in the current site.
