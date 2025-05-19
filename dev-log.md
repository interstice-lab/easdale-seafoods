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

* Manually recreated the base HTML (`index.html`) without any framework or boilerplate.
* Tested HTML structure and began applying a simple `style.css`.
* Extracted core colors directly from the logo (blue, shrimp-red, soft cream).

### 2. **Scaffold and layout foundation**

* Set up the `header` with logo + brand name.
* Added a responsive navigation bar with burger menu.
* Defined the core sections: `About`, `Products`, `Gallery`, `Contact`.

### 3. **Visual identity and styling**

* Structured the CSS file using `:root` variables for all color themes.
* Created reusable layout blocks (`.content-block`, `.product-grid`, `.gallery-grid`).
* Added a `.container` wrapper to limit max width on large screens.

### 4. **Responsive Design Refinement**

* Applied media queries (`768px`, `480px`) to adjust typography, margins, logo sizing, layout.
* Verified responsiveness with screenshots on various screen sizes.

### 5. **Smooth UX Enhancements**

* Added a scroll-into-view animation using `IntersectionObserver`.
* Used subtle hover transitions on image blocks (e.g. `scale(1.03)` on gallery cards).

### 6. **Gallery as a separate page**

* Moved the full gallery to its own `gallery.html`.
* Home page now displays a clickable image preview + CTA button.
* The gallery page uses a clean `grid` layout with `figure + figcaption` pattern.

### 7. **Video integration**

* Embedded a product video (XXL live langoustines) on the `Products` page.
* Planned integration of a drone video of Easdale Island (likely on an upcoming `About` page).

---

## Next Steps

* Build a dedicated `contact.html` with a working contact form.
* Add "before vs after" screenshots in the `README.md`.
* Organise Git commits by logical feature block (layout, navigation, gallery, etc.).
* Deploy to GitHub Pages for public viewing.

---

## Personal Notes

* This project documents a real learning curve in HTML/CSS and site structure.
* The goal is not only to showcase a redesign but also to prove my ability to think, build, and iterate.
* This `devlog.md` is a mirror of the process, not just a list of technical tasks.

## 🔁 2025-05-20 – CSS Refactor + Media Folder Cleanup

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

