# Vsyte — Design System Documentation

Extracted from the vsyte.com landing page screenshot.

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Brand Name | **vsyte** |
| Logo Style | Lowercase wordmark, serif/mixed-weight lettering |
| Brand Tagline | *"Visual insight in seconds."* |
| Industry | VFX / Multimedia Studio (Medical & Technical) |

---

## 2. Color Palette

### Primary Colors

| Name | Usage | Approximate Value |
|---|---|---|
| **Hero Gradient Start** | Top-left of hero section | `#7B4FBF` — deep violet/purple |
| **Hero Gradient End** | Top-right of hero section | `#D96FCC` — warm magenta/pink |
| **Hero Gradient (full)** | Hero background | `linear-gradient(to right, #7B4FBF, #D96FCC)` |
| **Accent Orange** | Icon backgrounds, CTA buttons | `#E07B30` — warm burnt orange |
| **Brand Gold/Amber** | Logo accent color | `#C8993A` — muted golden amber |

### Neutral Colors

| Name | Usage | Approximate Value |
|---|---|---|
| **Off-White / Page Background** | Main content sections | `#FAFAFA` |
| **White** | Cards, nav background | `#FFFFFF` |
| **Dark Text** | Headings, body copy | `#1A1A1A` |
| **Muted Text** | Subheadings, descriptors | `#555555` |
| **Light Gray** | Dividers / section separators | `#E0E0E0` |

### Supporting Section Colors

| Name | Usage | Approximate Value |
|---|---|---|
| **Deep Purple Panel** | "Why Choose Us" overlay card | `#4A2E8A` — dark grape purple |
| **Charcoal Overlay** | "Why Choose Us" card background opacity | Semi-transparent dark |

---

## 3. Typography

### Font Families

| Role | Font Style | Notes |
|---|---|---|
| **Headings (Display)** | Bold, geometric sans-serif | Large weight contrast; tight tracking |
| **Body Copy** | Regular-weight sans-serif | Clean, legible, moderate line height |
| **Navigation** | Regular-weight sans-serif | Small caps feel, spaced lightly |
| **CTA / Button Labels** | Uppercase, light tracking | Small caps / all-caps treatment |

> *Specific font family not confirmed from screenshot — visually resembles a geometric sans such as **Manrope**, **DM Sans**, or **Neue Haas Grotesk**.*

### Type Scale

| Element | Approximate Size | Weight |
|---|---|---|
| Hero H1 | `~40–48px` | `700–800` (Bold/ExtraBold) |
| Section H2 | `~32–40px` | `700` (Bold) |
| Card Title | `~16–18px` | `600` (SemiBold) |
| Body / Description | `~14–15px` | `400` (Regular) |
| Navigation Links | `~14px` | `400–500` |
| CTA Button Text | `~11–12px` | `500–600`, uppercase |
| Brand Tag / Label | `~10px` | `500`, uppercase, wide tracking |

### Type Colors

| Context | Color |
|---|---|
| On hero (dark background) | `#FFFFFF` White |
| On white sections | `#1A1A1A` Dark |
| Body copy (secondary) | `#555555` Gray |
| On purple panel | `#FFFFFF` White |

---

## 4. Layout & Spacing

### Grid Structure

- **Max content width:** ~`1200px`, centered
- **Layout type:** Single-column sections stacked vertically
- **Internal grid:** 2-column (text + image) for feature sections; 3-column card grid for services

### Section Spacing

| Area | Approximate Padding |
|---|---|
| Hero section vertical padding | `80–100px` top/bottom |
| Content sections vertical padding | `80px` top/bottom |
| Card internal padding | `32–40px` |
| Between sections (divider) | `1px solid #E0E0E0` horizontal rule |

### Component Spacing

- **Card gap (3-column grid):** `~24px`
- **Text block max-width:** `~450px` (left-aligned feature sections)
- **Icon-to-title spacing:** `~16px`
- **Title-to-body spacing:** `~12px`
- **Body-to-CTA link spacing:** `~16px`

---

## 5. UI Components

### Navigation Bar

- **Style:** Minimal, white background, top-aligned
- **Logo:** Left-aligned wordmark
- **Nav links:** Right-aligned, pipe (`|`) separators between items
- **Links:** Home, Services, About, Contact
- **No CTA button** in nav

### Hero Section

- **Background:** Full-width gradient (`purple → magenta`)
- **Layout:** Left-aligned text block, no image (text-only hero)
- **Elements:**
  - Small uppercase label: `VSYTE`
  - Large H1 heading
  - Body paragraph (~3 lines)
  - Two CTA buttons side by side

### CTA Buttons (Hero)

| Button | Style |
|---|---|
| "LEARN MORE" | Outlined, white border, white text, transparent background |
| "CONTACT" | Outlined, warm tone (slightly filled or same outlined style) |
- **Border radius:** `~20–24px` (pill-style)
- **Padding:** `~10px 20px`
- **Font:** Uppercase, small, tracked

### Feature Section (2-column)

- **Layout:** Text left (~45%), image right (~50%)
- **Alignment:** Vertically centered
- **Image:** Rounded corners (`~12px`), full bleed photo
- **Heading:** Multi-line large bold text
- **Body:** 3–4 line paragraph in muted gray

### Service Cards (3-column)

- **Background:** `#FFFFFF` White
- **Border:** `1px solid #E8E8E8` subtle border
- **Border radius:** `~16px`
- **Shadow:** Subtle box shadow (`0 2px 12px rgba(0,0,0,0.06)`)
- **Icon container:** Orange circle (`#E07B30`), `~56px` diameter
- **Icon:** White SVG icon centered in circle
- **Title:** Bold, centered, `~16px`
- **Description:** Light gray, centered, `~13–14px`
- **CTA Link:** `"LEARN MORE →"` — small caps, dark, underline on hover

### "Why Choose Us" Section

- **Layout:** Full-width image (office interior) right-aligned, overlapping purple card left
- **Overlay card:**
  - Background: Deep purple (`#4A2E8A`) with slight transparency
  - Border radius: `~16px`
  - Padding: `~32px`
  - Text: White
  - CTA: Pill button, outlined white
- **Image:** Large, edge-to-edge on right half, industrial/architectural photo

---

## 6. Iconography

- **Style:** Simple, outlined/filled white SVG icons
- **Container:** Filled circle, orange (`#E07B30`), ~`56px`
- **Icons used:**
  - Box/package icon → Product Animation
  - Video camera icon → Video Production
  - Monitor/screen icon → Web Platforms

---

## 7. Imagery

| Section | Image Type | Style |
|---|---|---|
| Feature Section | 3D molecular render | Colorful, scientific, blue/pink/yellow protein structure |
| Why Choose Us | Architectural interior photo | Industrial loft, neutral tones, natural light |

- **Image corners:** Rounded (`~12px`)
- **No image filters** applied visibly
- **Images bleed to edges** within their containers

---

## 8. Motion & Interaction (Inferred)

*Not directly visible in static screenshot — inferred from design patterns:*

- Button hover: Likely background fill transition on outlined buttons
- Card hover: Likely slight shadow elevation or subtle scale (`transform: scale(1.02)`)
- "LEARN MORE →" links: Likely arrow shifts right on hover
- Nav links: Likely underline or color fade on hover

---

## 9. Dividers & Structural Elements

- **Section dividers:** Single `1px` horizontal rule in light gray (`#E0E0E0`)
- **No visible decorative shapes** or abstract backgrounds in content sections
- **Hero rounded bottom edge:** The hero section appears to have slightly rounded bottom corners, or the gradient fades cleanly into white

---

## 10. Overall Design Personality

| Dimension | Characteristic |
|---|---|
| **Tone** | Professional, clean, trust-inspiring |
| **Aesthetic** | Modern corporate with visual flair |
| **Palette Mood** | Vibrant (hero) + Clinical white (content) |
| **Layout Approach** | Structured, grid-based, generous whitespace |
| **Target Audience** | Healthcare companies, technical B2B clients |
| **Standout Element** | Rich purple-to-magenta hero gradient; orange accent icons |
