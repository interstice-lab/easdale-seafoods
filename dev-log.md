# DevLog – Easdale Seafoods Website Redesign

**Author**: Benny / Interstice Lab
**Client**: Easdale Seafoods Ltd (small family-run business)
**Date**: May 2025
**Stack**: HTML · CSS · Vanilla JS · Git · GitHub (upcoming)

---

## Project Context

The original site was very basic, visually outdated, and non-responsive.
The goal: rebuild everything from scratch while respecting the client’s identity — a small, local, honest seafood company.

---

## Thought Process & Chronological Milestones

### 1. **Initial layout and progressive logic**

- Manually recreated the base HTML (`index.html`) without any framework or boilerplate.
- Tested HTML structure and began applying a simple `style.css`.
- Extracted core colors directly from the logo (blue, shrimp-red, soft cream).

### 2. **Scaffold and layout foundation**

- Set up the `header` with logo + brand name.
- Added a responsive navigation bar with burger menu.
- Defined the core sections: `About`, `Products`, `Gallery`, `Contact`.

### 3. **Visual identity and styling**

- Structured the CSS file using `:root` variables for all color themes.
- Created reusable layout blocks (`.content-block`, `.product-grid`, `.gallery-grid`).
- Added a `.container` wrapper to limit max width on large screens.

### 4. **Responsive Design Refinement**

- Applied media queries (`768px`, `480px`) to adjust typography, margins, logo sizing, layout.
- Verified responsiveness with screenshots on various screen sizes.

### 5. **Smooth UX Enhancements**

- Added a scroll-into-view animation using `IntersectionObserver`.
- Used subtle hover transitions on image blocks (e.g. `scale(1.03)` on gallery cards).

### 6. **Gallery as a separate page**

- Moved the full gallery to its own `gallery.html`.
- Home page now displays a clickable image preview + CTA button.
- The gallery page uses a clean `grid` layout with `figure + figcaption` pattern.

### 7. **Video integration**

- Embedded a product video (XXL live langoustines) on the `Products` page.
- Planned integration of a drone video of Easdale Island (likely on an upcoming `About` page).

---

## Next Steps

- Build a dedicated `contact.html` with a working contact form.
- Add "before vs after" screenshots in the `README.md`.
- Organise Git commits by logical feature block (layout, navigation, gallery, etc.).
- Deploy to GitHub Pages for public viewing.

---

## Personal Notes

- This project documents a real learning curve in HTML/CSS and site structure.
- The goal is not only to showcase a redesign but also to prove my ability to think, build, and iterate.
- This `devlog.md` is a mirror of the process, not just a list of technical tasks.

## 🔁 2025-05-19 – CSS Refactor + Media Folder Cleanup

**What was done:**

- ♻️ Full reorganization of `style.css`:

  - Grouped by logical sections (color palette, layout, nav, gallery, products…)
  - Cleaned up redundant rules
  - Better media query hierarchy (1024px, 768px, 480px)

- 📂 Media tidy-up:
  - Moved all `.mp4` files from `/Images` to a new `/Videos` folder
  - Updated all paths in `index.html` accordingly
  - Removed unused `image.png`

**Why it matters:**

- Improves CSS readability and maintainability
- Prepares the project for long-term scalability?
- Keeps media assets well organized for future usage (e.g. image vs. video handling)

## 2025-05-19 – Contact Page & Footer Overhaul

**What was done:**

- Created `contact.html` with hero banner and overlay to introduce the form visually.
- Implemented a two‑column grid: introductory text + styled form container.
- Updated `style.css` with responsive CSS for `.contact-hero`, `.contact-page .contact-grid`, and form styling.
- Refactored the footer into a three‑column layout (`.footer-grid`) matching brand colors and added a separate credits line (`.footer-credits`).
- Removed legacy `.contact-hero` CSS rules now superseded by `.hero-video-footer` and new hero styling.

**Why it matters:**

- Enhances user engagement by giving the contact form context and visual appeal.
- Ensures consistency across pages (header, footer).
- Lays groundwork for future form handling and accessibility improvements.

## 🔁 2025-05-19 – Contact Page & Footer Overhaul

**What was done:**

- 📄 Added `contact.html` page with hero banner and overlay for visual context
- 🧩 Implemented a responsive two-column grid combining intro text and a styled form container
- 🖌️ Updated `style.css` with new rules for `.contact-hero`, `.contact-page .contact-grid`, and form styling
- 🪢 Refactored footer into a three-column layout (`.footer-grid`) matching brand colors and added a separate credits line (`.footer-credits`)
- ♼ Removed legacy CSS rules superseded by the new contact and footer styling

**Why it matters:**

- Enhances user engagement by giving the contact form context and visual appeal
- Ensures consistent header, form, and footer design across the site
- Lays groundwork for future enhancements like form handling and accessibility

## 🔁 2025-05-20 – Navigation Fix, New Page & Layout Harmonisation

**What was done:**

🍔 Navigation bar refactor

Increased vertical padding to give the navbar more height

Burger icon centered on the main axis and pinned to the right

Fixed the visibility issue of the desktop navigation bar above 768px

📱 Mobile-first branding improvements

Separated logo and site title into a standalone header block above the navbar on small screens

Adjusted logo size and text alignment for better visual hierarchy on <768px and <480px

🧭 New page: locals.html

Introduced a dedicated section for local customers

Added copy highlighting trust, family-run values, and 30+ year partnerships

Featured two real businesses: Tigh an Truish Inn and Oyster Bar Ellenabeich

🖼️ Gallery & layout adjustments

Changed homepage gallery preview back to a two-column “text + image” format

Ensured on mobile that the image stacks below the text for better reading flow

Improved overall spacing, padding, and visual rhythm of sections

🎨 CSS cleanup & reorganisation

Grouped header/nav styles into a dedicated section

Simplified media queries and removed outdated rules

Unified layout logic for .content-block, .product-card, and responsive stacking

**Why it matters:**

Creates a cohesive experience across all pages and screen sizes

Fixes critical navigation issues that could confuse or block user flow
