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

## Dev-Log Entry (2025-05-20) afternoon

What was done:

🐞 Tracked down a stubborn CSS bug: a missing } in the 768px media query was breaking the responsive layout.

🔧 Added the closing brace, restored full-width banner overflow, and re-centered all content on smaller screens.

✨ Tweaked container padding and breakpoints so no more horizontal scrolling or squeezed sections on mobile.

Why it matters:

Users on phones and tablets will now see edge-to-edge banners and properly centered content without accidentally swiping side to side.

Sets a solid CSS foundation for future tweaks and keeps our design consistent across all devices.

## 🔁 2025-05-21 – Navigation Fix, New Page & Layout Harmonisation

🆕 Products Page Added

On index.html > section Product
Wrapped each card in an <a> to make the entire card clickable, with target="\_self"

🖼️ Gallery Overhaul

Converted gallery.html into a true mosaic layout: responsive grid of images with captions

Updated CSS so the gallery stacks on mobile (single-column) and expands on desktop

🌐 Navbar Enhancements

Refactored header/navigation CSS: added subtle box-shadow, hover underline animation, and improved spacing

Fixed mobile “burger” menu so it only appears under 768 px and desktop links return above that breakpoint

Centered and even-spaced menu items on desktop for better visual balance

🎨 CSS Corrections & Cleanup

Consolidated common styles (buttons, typography, containers)

Adjusted .hero-banner and .hero-video-footer to reliably overflow full viewport width on all breakpoints

Tuned product-grid padding/gaps so cards never “crush” against the viewport edges on narrow screens

Why It Matters:
Ensures a polished, consistent look across all pages; fixes critical navigation and layout bugs; makes product and gallery sections fully interactive and responsive.


## 🔁 2025-07-03 – Gallery Refactor, Video Integration & Lightbox Testing

**What was done:**

🎥 Video Gallery Overhaul  
- Embedded a YouTube iframe in `gallery.html`, with forced HD playback via `?vq=hd1080`.  
- Ensured responsive behavior using a `.iframe-container` class with `aspect-ratio: 16/9`.  
- Added fallback styling in CSS for visibility and consistency.

📷 Image & Video Unification  
- Updated the gallery section to mix images and `<video>` blocks inside a `.gallery-grid`.  
- Extracted custom `poster` images from each video for a clean preview layout.  
- Used `<figure>` + `<figcaption>` for both images and videos to keep captions consistent.

💡 GLightbox Integration (later reverted)  
- Briefly integrated GLightbox to allow fullscreen popup playback of videos and images.  
- Removed it after testing due to display issues and reverted to inline playback with clean `poster` thumbnails.

🧼 CSS Refactor for Media Grid  
- Adjusted `object-fit`, `aspect-ratio`, and `max-height` for videos (horizontal and vertical).  
- Added a media query override to fix vertical video overflow on small screens.  
- Harmonised image/video card styles inside `.gallery-grid` with responsive captions.

🧪 Debug & Testing  
- Fixed broken hero banner background image: issue was a missing image file and a silent CSS fallback.  
- Confirmed all pages load without layout shifts, including mobile.

**Why it matters:**

- Visual parity between images and videos strengthens brand presentation.  
- Clean separation of concerns: layout vs. media logic vs. interactivity.  
- Sets the foundation for future gallery filters, lightbox reintroduction, or CDN streaming.

---

## 🛠️ 2025-07-04 – Finalizing Gallery FR + Global SEO + Responsive Product Layout
Work completed:
🌐 Multilingual structure
🔧 Full creation of French HTML pages:

index-fr.html, products-fr.html, clients-fr.html, gallery-fr.html, contact-fr.html

Manual translation of all content:

Natural French tone (not automated)

Rewriting of title, meta description, alt, and figcaption tags

Consistent use of <html lang="fr"> + charset declarations

Bi-directional language switcher implemented across all pages

📷 Gallery refactor (EN & FR)
Split into two sections: photos and videos

Uniform square thumbnails (aspect-ratio 1:1)

Clear captions + 🎥 icon for video items

Native display on click via GLightbox

Responsive behavior fully tested

🎨 CSS & visual layout
Gallery block refactored:

Clean grid layout, hover effects, consistent visual rhythm

Added SVG wave separators between content sections

Product page layout improved:

Balanced image/text blocks

Better vertical spacing

Enhanced readability and mobile flow

🧾 SEO & meta tags
Global integration of SEO tags (EN & FR):

meta description

og:title, og:type, og:image, og:description

twitter:card, twitter:image

Canonical <link>

All external/internal links tested and verified

Social preview rendering confirmed

🧪 Testing
GLightbox: tested for video playback, closing, keyboard nav, responsiveness

Language switcher: functional on all pages

Layout verified from 320px to 1200px

Poster images, aspect-ratios, and fallback behavior validated

Results:
🔹 Fully bilingual site (EN/FR) with seamless navigation

🔹 Refined, immersive gallery experience

🔹 Technical SEO structure ready for indexing

🔹 CSS now more structured, readable, and scalable

🔹 Ready for deployment (GitHub Pages or Vercel)
