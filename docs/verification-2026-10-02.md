# Targeted technical update — 2 October 2026

Prepared on a separate branch. Do not merge or promote to production without the owner's approval.

## Changes

- Shared accessible navigation and bidirectional language switching across all pages, including the root URL and both confirmation pages.
- French gallery links and missing lightbox stylesheet repaired; existing GLightbox 3.3.1 and its Plyr 3.6.12 player served locally with their licences. Videos and the YouTube embed load on demand.
- Formspree endpoint and POST handling preserved. Company, destination country and product are optional; only name, email and message remain required. Localised sending/error/success states, retry after failure and a 20-second request timeout.
- Confirmed postcode PA34 4TF throughout; contact routing and a qualified response-time statement in both languages. The no-email-orders rule remains.
- Responsive WebP derivatives of existing photographs and logo; original media retained. No replacement photography, new framework or build dependency.
- More legible text/button colours, keyboard focus, mobile menus, skip links, one main heading per page, corrected French gallery footer and narrow-screen product characteristics.
- Canonicals and reciprocal English/French alternates; robots.txt and a ten-page sitemap. Confirmation pages excluded from indexing. Correct case for social image URLs.
- General creel-fishing claim limited to langoustines; unqualified daily shipment claim removed from homepage teasers.

## Verification performed locally

Chromium browser, all 12 HTML pages at 1366, 390 and 320 pixels: no horizontal overflow or clipped page elements detected; all page images decoded; one h1 and one main landmark per page; no page JavaScript errors. Desktop and mobile screenshots inspected for home, products, gallery and contact.

All language selectors exercised, including `/`, products and both confirmation pages. Mobile menu opening with Enter and closing with Escape checked across every page. All local HTML image, script, link and poster targets, all internal fragment targets, CSS background image paths and sitemap XML checked.

In both languages, form tests intercepted every Formspree request: empty fields and malformed email blocked by browser validation; simulated HTTP 422 kept the message and allowed retry; simulated HTTP 200 opened the correct confirmation page. **No email was sent; actual delivery and inbox receipt are not verified.**

English and French gallery image dialogs opened and closed with Escape. Local MP4 playback confirmed with advancing video time. No MP4 or YouTube embed request was made during initial page checks. YouTube iframe creation after an explicit click was verified; playback itself was not.

Google Fonts, Maps and YouTube returned `ERR_EMPTY_RESPONSE` in this local browser environment. They require a hosted-preview recheck. This is not evidence of a production outage. Local screenshots use the font fallback. No Lighthouse/Core Web Vitals score or full accessibility compliance claim is made.

## Business content pending a separate confirmed pass

Numerical grade equivalences and tubes/loose presentation; razor-clam species, harvest area, classification and restrictions; razor/lobster packing details; bespoke packaging; the English summer-catch claim; exact shipping scope and exceptions. Confirmed packing weights and seasonal qualifications supplied by the owner are recorded in the working discussion and can be incorporated with this pass. Do not infer numerical grades from competitors.

The old `.co.uk` domain is a separate access/provider dependency. Prefer page-matched permanent redirects, preserve the domain and its email service, and obtain specific approval before any legacy hosting or DNS change.


## Confirmed product content update — 2 October, evening

Owner supplied Stephen’s packing details and confirmed langoustine sizes are pieces/kg. EN/FR products now use the same five-row grade table: XXL 2–4 / 5 kg tubed; XL 5–9 / 5 kg tubed; L 10–14 / 5 kg tubed; M (MD) 15–24 / 4 kg loose; S (SM) 25–35 / 4 kg loose. Langoustine weights are net. Ice packs and boat-code traceability are described.

Razor clams: Ensis siliqua, hand-dived, 22 kg boxes with gel packs; general spring fishing break and availability qualification, without fixed closure dates or Class A claim. Lobsters: variable box weights around 5–6 kg, packing list, mixed grades possible, sizes including 2 kg and over, availability confirmed on enquiry. Unconfirmed lobster fishing-method wording was omitted pending confirmation.

Client pages now match in EN/FR and outline the owner-confirmed langoustine route to France (usual Monday–Thursday departures, expected next-morning Boulogne arrival, then clients’ carriers). No carrier name, internal volumes, customer prices or guaranteed delivery promise. Removed bespoke packaging and unsubstantiated environmental assertions. Home/product/client metadata aligned with the languages and updated content.

Static checks: grade row counts and mappings, packing figures, local links and whitespace validation passed. Existing mobile tests documented above predate this new table; do not treat them as a visual mobile test of the evening content update.

Hosted-preview checks earlier today confirmed EN/FR contact text, language switching and Google Maps rendering. The YouTube player loaded but playback could not be confirmed in the test browser. Real Formspree delivery remains untested; no valid form submission was sent.

Remaining business confirmation: razor harvest areas/classification and whether the spring closure dates are fixed or indicative. These claims are not needed to review the current general copy. Production still requires explicit owner approval.
