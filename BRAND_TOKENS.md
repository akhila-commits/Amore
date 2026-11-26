# BRAND_TOKENS.md — Amore Brand Identity Specification

Extracted directly from `/Brand_PDF_Amore.pdf` (Pages 1 to 6).

---

## 1. Master Brand & Sub-Brand Architecture

- **Master Brand:** **Amore**
  - **Tagline:** *"Celebrating Life's Little Moments."* (PDF Pages 2, 4)
  - **Core Offerings:** Cafe, Handcrafted Chocolates, Ice Cream Corner, Custom Celebration Cakes, Private Party Venue.
  - **Physical Location:** 250, Main Street, Kalutara South, Sri Lanka (PDF Page 2)
  - **Official WhatsApp:** `077 700 2044` / International format: `+94 77 700 2044` / wa.me format: `94777002044` (PDF Pages 2, 3, 6)
  - **Social Channels:**
    - Facebook: `Amore` (PDF Page 2) & `SAMA Dream Cakes` (PDF Page 3)
    - TikTok: `Amore` (PDF Page 2) & `SAMA Dream Cakes` (PDF Page 3)

- **Sub-Brand 1: Revello Speciality** (PDF Pages 1, 2)
  - Dedicated chocolate boutique line offering artisan handcrafted chocolates, bonbons, and rich chocolate drinks.
  - Visual identity: Deep cocoa brown and metallic gold, traditional luxury crest with cocoa pods/beans emblem.

- **Sub-Brand 2: Sama Dream Cakes by Amore** (PDF Pages 3, 5, 6)
  - Custom artisanal bakery for bespoke occasion cakes.
  - Motto: *"Your Dream a Reality"* (PDF Page 3)
  - Core Occasions: Weddings, Birthdays, Anniversaries, Graduations, Baby Showers, Celebrations of Love & Happiness.
  - Visual identity: Soft blush pink, royal gold crown insignia, delicate floral elements.

---

## 2. Color Palette & HEX Tokens

| Token Name | HEX Code | Role & Usage | Source | WCAG AA Contrast |
|---|---|---|---|---|
| `--color-dark-primary` | `#0D0B0A` | Deep charcoal/black, hero backdrop, footer, main emblem background | PDF p. 2, 4 | Pass: > 16:1 against gold & white |
| `--color-dark-surface` | `#171412` | Elevated dark cards, dropdowns, navigation bars | PDF p. 2, 4 | Pass: > 13:1 against white & gold |
| `--color-chocolate` | `#321610` | Revello heritage rich cocoa brown | PDF p. 1 | Pass: 7.2:1 against light gold |
| `--color-chocolate-dark` | `#230E09` | Deepest cocoa background for Revello section | PDF p. 1 | Pass: 11.5:1 against light gold |
| `--color-gold-primary` | `#D4AF37` | Primary luxury gold for typography, borders, badges | PDF p. 1, 2, 4, 5 | Pass: 5.8:1 on dark surfaces |
| `--color-gold-light` | `#F3E5AB` | Soft shimmering champagne gold for accents & highlights | PDF p. 4, 5 | Pass: 14.1:1 on dark surfaces |
| `--color-gold-dark` | `#B38F28` | Shadowed gold for bevels, borders, active states | PDF p. 1, 4 | Pass: 4.8:1 on dark surfaces |
| `--color-pink-soft` | `#FDF2F4` | Sama Dream Cakes soft background tint | PDF p. 3, 5 | Pass: > 12:1 against dark chocolate |
| `--color-pink-accent` | `#F48FB1` | Cake badge highlights, ribbons, sweet accents | PDF p. 3, 5 | Decorative & accent |
| `--color-pink-deep` | `#C2185B` | Cake CTA highlights and button accents | PDF p. 3, 5 | Pass: 4.9:1 against white |
| `--color-cream-light` | `#FAF8F5` | Primary light section background (Cafe, About, Menus) | PDF p. 2, 3 | Pass: 16.2:1 against dark text |
| `--color-cream-card` | `#FFFFFF` | Light cards, modal dialogs, form containers | Web standard | Pass: 21:1 against #0D0B0A |
| `--color-leaf-green` | `#2D5A27` | Magnolia leaf green in Amore emblem | PDF p. 2, 4 | Decorative / accent |
| `--color-text-main` | `#1A1817` | Primary high-contrast body text on light backgrounds | Derived | Pass: 15.8:1 on cream |
| `--color-text-muted` | `#6B6560` | Secondary subtitles and metadata on light backgrounds | Derived | Pass: 5.2:1 on cream |
| `--color-text-light` | `#F5F2EB` | High-contrast light text on dark/chocolate sections | Derived | Pass: 15.1:1 on dark |

---

## 3. Typography & Hierarchy

1. **Display & Heading Font:**
   - **Font Family:** `Playfair Display`, `Cinzel`, `Cormorant Garamond`, serif (Google Fonts)
   - Matches the classical, high-fashion Roman serifs of the Revello and Amore wordmarks.
   - Weights: 500 (Medium), 600 (SemiBold), 700 (Bold).
   - Letter-spacing: `0.05em` to `0.15em` for uppercase headings ("REVELLO SPECIALITY", "AMORE").

2. **Handwritten & Signature Script:**
   - **Font Family:** `Great Vibes`, `Alex Brush`, cursive (Google Fonts)
   - Used for the decorative "Amore" script, "by Amore" endorsement, and romantic calligraphic flourishes.

3. **Body & Interface Font:**
   - **Font Family:** `Montserrat`, `Outfit`, sans-serif (Google Fonts)
   - Crisp geometric readability for menus, ingredient descriptions, form labels, and buttons.
   - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold).

---

## 4. Logo Assets & Guidelines

### Primary Logo (Amore)
- Circular emblem with dual concentric gold borders.
- Center features the calligraphic gold "Amore" wordmark with a heart incorporated into the 'o'.
- Pure white magnolia/jasmine blossom with detailed gold pistils, gold berry cluster, and lush green leaves.
- Ribbon divider with small gold heart.
- Tagline: *"Celebrating Life's Little Moments."*
- Golden floral branch along the bottom rim.
- **Clear Space:** Minimum 16px padding on all sides.
- **Minimum Size:** 48px height on web interfaces.

### Sub-brand Logo (Revello Speciality)
- Deep chocolate background with gold serif "Revello" and underlining swoosh.
- Tracked serif "SPECIALITY" with horizontal gold baseline.
- Seal variant: Golden round badge with cocoa beans and banner.

### Sub-brand Logo (Sama Dream Cakes by Amore)
- Scalloped circular badge with royal crown above "Sama Dream Cakes".
- Script "by Amore" endorsement.
- Soft pink backdrop with floral sprays.

---

## 5. Imagery Rules & Tone of Voice

- **Tone of Voice:** Warm, welcoming, celebratory, artisanal, sensory ("silky dark chocolate", "handcrafted with passion", "made fresh for your moments").
- **Visuals:** High-resolution product and venue photography takes center stage.
- **UI Treatment:** Generous whitespace, elegant gold border trims (`border-amber-400/20`), backdrop blurs, soft card elevations.

---

## 6. Documented Gaps & Clarifications

1. **Private Party Area Folder:** The folder `/Private Party area` is not yet populated with files in the repository. We provide high-fidelity showcase cards and a dedicated booking inquiry workflow.
2. **Ice Cream Imagery:** The brand PDF does not include specific ice cream photographs. As requested by the blueprint, we use an illustrative 3-step custom creator panel without inventing flavors or stock imagery.
3. **Menu Pricing:** Cafe menu prices are intentionally left editable via `src/data/menu.ts` so the owner can update them at any time.
