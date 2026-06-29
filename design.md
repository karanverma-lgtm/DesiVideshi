# Desi Videshi Chaat — Design Direction (for Google Stitch)

## Stitch-Ready Prompt (paste this as your starting prompt)

> Design a modern, premium website for "Desi Videshi Chaat," a fusion street-food catering brand serving weddings, corporate events, and private parties in Delhi NCR, India. The visual identity should feel vibrant and festive but premium — not a cheap stock-photo catering template. Use a warm spice palette (saffron/marigold orange, deep chili maroon, charcoal ink text) on a cream/ivory background, with a single cool teal/turquoise accent color representing the "videshi" (global/foreign) half of the brand. Pair a confident, slightly editorial serif display typeface for headlines with a clean modern sans-serif for body text. Layout should use generous whitespace, card-based grids for menu items and event types, an asymmetric image-led hero, and a sticky header with a prominent "Get a Quote" button and a floating WhatsApp icon. Buttons should be pill-shaped. Imagery should look like warm, high-contrast, overhead food photography and candid live-counter action shots — not posed stock photos. Mobile-first, single-column stacking, large tap targets.

---

## Brand Positioning
Premium fusion street-food catering — Indian chaat tradition, executed with genuine global twists, served live. The design should read as confident and a little theatrical (because the live-counter experience *is* theatrical), while still feeling trustworthy enough for a corporate events buyer to sign off on.

**Avoid:** generic restaurant-template feel, low-contrast stock photography, cluttered WordPress-widget sidebars (the current site's biggest visual problem), anything that reads "bakery" (leftover from the old template).

---

## Color Palette

| Role | Color | Hex (suggested) |
|---|---|---|
| Primary — Saffron/Marigold | Warm orange | `#E8871E` |
| Secondary — Chili Maroon | Deep red | `#A91D3A` |
| Accent — "Videshi" Teal | Cool teal | `#1B998B` |
| Background — Ivory | Warm off-white | `#FFF8EE` |
| Text — Ink | Near-black charcoal | `#1B1B1B` |
| Neutral — Stone | Light warm gray | `#EDE6DA` |

**Usage logic:** Saffron and maroon carry the "desi" half of the brand (CTAs, headings, tags). Teal is reserved specifically for "videshi"/fusion-labeled items and accents — it should feel like a deliberate signature, not a random accent color, so don't overuse it. Keep backgrounds ivory/cream rather than pure white — pure white will feel sterile against the food photography.

---

## Typography

- **Display/Headlines:** A confident serif or high-contrast display face — think Fraunces, Playfair Display, or Canela. Should feel editorial and a little indulgent, not corporate.
- **Body:** A clean, highly legible grotesque sans — Inter, Work Sans, or General Sans. Used for all paragraph copy, nav, and form labels.
- **Accent/Tags (optional):** A small caps or condensed sans for tags like "VEG," "SPICY," "FUSION" badges — keep these tiny and functional, not decorative.

**Hierarchy:** Large, confident headline sizes (don't undersell the food). Body copy stays compact and scannable — this audience (event planners, corporate buyers) skims for facts (guest count ranges, event types, contact info) more than they read long paragraphs.

---

## Imagery Style

- Overhead and close-up shots of food — high contrast, warm color grading, shallow depth of field on garnish/steam/texture.
- Live-action shots of chefs cooking at counters — this is the actual differentiator (live counters), so the photography should sell *motion and theatre*, not static plated food.
- Event photography: candid, not posed — guests actually eating/laughing near a counter, not stock-photo smiling-at-camera shots.
- Avoid: visibly dated 2016-era flash photography (the current site's biggest tell), watermarked stock imagery, mismatched aspect ratios.
- If real photography isn't available yet for all sections, it's better to use 2–3 strong hero images repeated thoughtfully than 10 mismatched low-quality ones.

---

## Layout & Grid

- **Grid:** 12-column desktop grid, single-column mobile stack. Generous gutters — avoid the dense, sidebar-heavy WordPress feel of the current site.
- **Hero:** Asymmetric — large image/video left or right, headline + CTA block on the other side, not centered-text-over-full-bleed-image (overused pattern).
- **Cards:** Rounded corners (12–16px radius), soft shadow on hover/lift for menu items and event-type cards. Consistent aspect ratios within each grid.
- **Section rhythm:** Alternate full-width image sections with contained-width text/grid sections to create visual pacing down the page.
- **Sticky header:** Compact, becomes more compact on scroll. "Get a Quote" button always visible.
- **Floating WhatsApp button:** Bottom-right, persistent, teal or saffron — this is a primary conversion channel for this audience, treat it as first-class UI, not an afterthought plugin badge.

---

## Components

- **Buttons:** Pill-shaped, primary in saffron with maroon hover state, secondary as outline/ghost.
- **Tags/Badges:** Small pill badges for Veg/Non-Veg (color-coded green/red dot per Indian convention), spice level (chili icon ×1–3), and "Fusion" (teal badge).
- **Forms:** Generously spaced, large input fields, clear labels above (not placeholder-only), single-column on mobile.
- **Testimonial cards:** Quote-mark or subtle jali/lattice-pattern motif as a background accent — a nod to Indian decorative pattern without going kitschy.
- **Accordion (FAQ):** Simple expand/collapse, maroon or saffron accent on the active state.
- **Image grid/gallery:** Masonry layout with filter pills (Counters / Events / Behind-the-Scenes) above.

---

## Motion & Microinteractions
- Subtle card lift + shadow increase on hover (menu/event cards).
- Smooth tab/filter transitions on the Menu page.
- Trust-strip stats can count up on scroll-into-view (years, events, cities) — small but effective for a catering brand.
- Keep motion minimal and fast — this is a conversion-focused lead-gen site, not a portfolio piece; nothing should feel like it's making the user wait.

---

## Tone of Voice (visual translation)
Confident, sensory, a little theatrical — mirrors the "live counter" experience. Avoid corporate catering-brochure language and avoid cutesy food-blog whimsy. Think: a premium event planner's website, not a roadside stall's Facebook page and not a generic banquet hall's PDF brochure.

---

## Mobile Considerations
- Single-column throughout, large tap targets (min 44px) for CTA buttons and WhatsApp icon.
- Sticky bottom bar option: "Call" + "WhatsApp" + "Get Quote" as a persistent 3-button mobile footer bar — high-intent users on this type of site are very often on mobile making a same-day decision.
- Menu/event filter tabs should be horizontally scrollable, not wrapped, on small screens.
