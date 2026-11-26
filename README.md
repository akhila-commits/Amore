# Amore Website — Documentation & Operator Guide

> **Amore** — Kalutara's boutique destination for Revello Speciality Chocolates, Amore Cafe, Sama Dream Cakes, ice cream corner, and private celebrations.

---

## 1. Quick Overview

- **Live Single-Page App:** `index.html`
- **Location:** 250, Main Street, Kalutara South, Sri Lanka
- **WhatsApp Direct Line:** `+94 77 700 2044` (`077 700 2044`)
- **Brand Tokens Document:** `BRAND_TOKENS.md`
- **Asset Inventory:** `ASSET_MANIFEST.md`

---

## 2. Brand Architecture & Palettes

All brand assets adhere strictly to `/Brand_PDF_Amore.pdf`:

- **Master Brand:** **Amore** (*"Celebrating Life's Little Moments"*)
  - Primary Logo: `public/brand/logo-primary.svg` (Circular black & gold crest with magnolia blossom)
  - Light Logo: `public/brand/logo-light.svg` (High-contrast gold & white on dark backgrounds)
  - Color Tokens: Deep Obsidian (`#0D0B0A`), Luxury Gold (`#D4AF37`), Light Champagne Gold (`#F3E5AB`), Pure Cream (`#FAF8F5`).

- **Sub-Brand 1: Revello Speciality**
  - Focus: Handcrafted chocolates, single-origin truffles, rich molten chocolate drinks, and luxury gift boxes.
  - Logo: `public/brand/logo-revello.svg` (Deep cocoa `#321610` with gold baseline swoosh).

- **Sub-Brand 2: Sama Dream Cakes by Amore**
  - Focus: Bespoke cakes for Weddings, Birthdays, Anniversaries, Graduations, and Baby Showers.
  - Logo: `public/brand/logo-sama-cakes.svg` (Royal gold crown, soft pink `#FDF2F4`, and floral insignia).

---

## 3. How to Update Content

### 3.1 Editing the Cafe Menu & Prices
Open `src/data/menu.ts` (or the menu section in `index.html`):
- To add or modify an item, update the title, description, or `price` field.
- Items currently display `"Price upon order"` as requested, leaving prices easily customizable without design breaks.

### 3.2 Updating Phone, Address, or Opening Hours
Open `src/data/site.ts` (or the contact block in `index.html`):
- Change `phone`, `whatsappNumber`, `address`, or `openingHours`.
- All WhatsApp deep links use international format `94777002044`.

### 3.3 Adding New Photos
1. Place your new photos in the appropriate subfolder (`/Cakes`, `/Interior photos`, `/Exterior photos`, etc.).
2. You can also place optimized images directly in `public/images/`.
3. Update `src/data/gallery.ts` to add new cards or gallery previews.

---

## 4. Inquiry & Booking Workflow

1. **Custom Cake Inquiries (`#cakes`):**
   - Collects Customer Name, Phone, Occasion (Birthday, Wedding, Anniversary, etc.), Date Needed, Flavor Preferences, Servings, and Inscription.
   - On submit, automatically validates all fields and opens a formatted WhatsApp chat with the Amore Cake Studio.
   - Shows an instant on-screen success modal with a fallback link.

2. **Private Party Area Inquiries (`#party`):**
   - Collects Event Type, Date, Time, Number of Guests, Cake add-on checkbox, and Theme requests.
   - Clearly notifies the user that the request is an inquiry awaiting calendar confirmation.
   - Opens prefilled WhatsApp message to the events coordinator.

3. **Floating WhatsApp Button:**
   - Always accessible in the bottom right corner of every screen with a pulsing ripple.

---

## 5. Deployment Guide

### Option A: Direct Static Deployment (Instant & Zero Maintenance)
The website is completely self-contained in `index.html` with vector assets in `public/brand/`.
1. Upload this repository to **GitHub**.
2. Connect to **Vercel** or **Netlify**:
   - Framework preset: `Other` / `Static HTML`
   - Output directory: `.` (root)
3. Hit **Deploy**. The site goes live in seconds.

### Option B: Custom Domain Connection
1. In Vercel Project Settings → **Domains**, enter your domain name (e.g. `amorekalutara.com`).
2. Add the DNS records at your registrar (GoDaddy, Namecheap, Cloudflare):
   - `A` Record: `@` → `76.76.21.21`
   - `CNAME` Record: `www` → `cname.vercel-dns.com`
3. Vercel automatically issues an SSL certificate for HTTPS.

---

## 6. SEO & Google Business Profile Setup

- **Schema.org Structured Data:** Embedded in `index.html` (`CafeOrCoffeeShop` schema with address, phone, opening hours, and catalog types).
- **Google Search Console:** Submit `sitemap.xml` once the custom domain is live.
- **Google Business Profile:** Claim the listing for **Amore** at `250, Main Street, Kalutara South`, linking to `https://amorekalutara.com`.
