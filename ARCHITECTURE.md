# JEBREWSALEM Website — Architecture

## Overview

Static HTML/CSS/JS site. No build tools, no framework, no npm dependencies.
Hosted on GitHub Pages via custom domain `jebrewsalem.cz`.

---

## File Structure

```
/
├── index.html                  # Main single-page site (all sections)
├── obchodni-podminky.html      # Standalone legal page (Czech Terms & Conditions)
├── ochrana-osobnich-udaju.html # Standalone GDPR / privacy policy page (Czech)
├── beer.html                   # Legacy / standalone beer page
├── contacts.html               # Legacy / standalone contacts page
├── merchandise.html            # Legacy / standalone merch page
├── tap-rental.html             # Legacy / standalone tap rental page
├── CNAME                       # GitHub Pages custom domain config
├── README.md
│
├── css/
│   ├── style.css               # Main stylesheet (all site styles + design tokens)
│   └── legal.css               # Styles for the legal page only
│
├── js/
│   ├── translations.js         # i18n object { en: {...}, cs: {...} }
│   ├── gallery-data.js         # Gallery photo metadata array
│   └── main.js                 # All site JS (single IIFE, init on DOMContentLoaded)
│
└── assets/
    └── gallery/                # Gallery photos (photo-1.jpg … photo-10.jpg, photo-3 removed)
```

---

## Design Tokens (CSS Variables in `style.css`)

| Variable | Value | Purpose |
|---|---|---|
| `--color-dark` | `#2B1A12` | Primary text / backgrounds |
| `--color-gold` | `#F2B705` | Accent / brand |
| `--color-sand` | `#9ccde3` | Section backgrounds |
| `--color-bg` | `#F7F3EA` | Page background |
| `--color-warm-gray` | `#B8A88F` | Subtle text / secondary |
| `--font-heading` | Bebas Neue | All headings |
| `--font-body` | Inter | Body text |

---

## Pages

### `index.html` — Main Page
Single-page layout with scroll-based navigation. Sections in order:
1. `#hero` — Hero / landing
2. `#beer` — Current beer (Brevnov Ale – 2024, APA, 5% / 22 IBU + Untappd link)
3. `#merch` — Merchandise (t-shirt card with Order Now → pre-fills orders form)
4. `#orders` — Order & Event Request form (T-shirt / 30 L keg / Beer + tap equipment)
5. `#gallery` — Photo gallery (dynamically rendered from `gallery-data.js`)
6. `#contacts` — Contact info + social links

### `obchodni-podminky.html` — Legal Page
- Standalone page, Czech language
- URL: `/obchodni-podminky`
- Does NOT use `main.js` or `translations.js` (no JS dependencies)
- Uses `css/style.css` + `css/legal.css`
- Contains: company info (Jebrewsalem s.r.o., IČO 22215794, sídlo Na okraji 439/44 Praha), 14 sections of approved T&C
- `[DOPLNIT DATUM]` placeholder left in place until effective date is confirmed
- Linked from footer of `index.html` and `ochrana-osobnich-udaju.html` via `.footer-legal-link`

### `ochrana-osobnich-udaju.html` — GDPR / Privacy Policy Page
- Standalone page, Czech language
- URL: `/ochrana-osobnich-udaju`
- Does NOT use `main.js` or `translations.js` (no JS dependencies)
- Uses `css/style.css` + `css/legal.css`
- Contains: approved Czech GDPR / privacy policy text, 10 sections
- `[DOPLNIT DATUM]` placeholder left in place until effective date is confirmed
- Linked from footer of `index.html` and `obchodni-podminky.html` via `.footer-legal-link`
- Also linked from the order/request form consent checkbox via `.form-gdpr-link`

---

## JavaScript Architecture (`main.js`)

Single IIFE pattern, `init()` called on `DOMContentLoaded`.

| Function | Purpose |
|---|---|
| `translatePage()` | Resolves `data-i18n` keys from `translations` object, sets `textContent` |
| `switchLanguage(lang)` | Saves lang to `localStorage`, calls `translatePage()` |
| `loadGA4()` | Dynamically injects GA4 script tag; initialises `window.gtag`; idempotent |
| `showCookieBanner()` | Creates and appends the consent banner DOM node; wires Accept/Reject buttons |
| `initCookieConsent()` | Reads `CONSENT_KEY` from localStorage; loads GA4 or shows banner accordingly |
| `checkFadeIn()` | Scroll-triggered opacity animation for `.fade-in` elements |
| `renderGallery()` | Generates `.gallery-item` elements from `galleryData` array |
| `openLightbox(index)` | Opens full-screen image viewer |
| `initOrderForm()` | Radio type switching, Order Now wiring, form submit → WhatsApp |
| `validateOrderForm(form)` | Required fields, email regex, positive int, DD.MM.YYYY date |

### Order Form → WhatsApp
`initOrderForm()` intercepts submit, builds a multi-line plain-text message from all
visible form fields, and opens `https://wa.me/420775431677?text=<encoded>` in a new tab.
No backend required.

---

## i18n System

- `translations.js` exports `const translations = { en: {...}, cs: {...} }`
- Elements use `data-i18n="key.path"` attribute
- `translatePage()` resolves dot-path and sets `element.textContent`
- Language persisted in `localStorage` key `lang`
- Legal page is Czech-only, not translated
- Cookie consent banner text is in `translations.*.consent.*` (EN + CS)

---

## Cookie Consent System

GA4 is **never** loaded on initial page load. Consent is managed entirely client-side.

| localStorage key | Possible values | Meaning |
|---|---|---|
| `lang` | `en` / `cs` | Language preference (functional, no consent needed) |
| `jebrewsalem_cookie_consent` | `accepted_analytics` / `rejected_analytics` | User's analytics consent choice |

**Flow on page load (`initCookieConsent`):**
1. Read `jebrewsalem_cookie_consent` from localStorage.
2. If `accepted_analytics` → call `loadGA4()` immediately (silently, no banner).
3. If `rejected_analytics` → do nothing (GA4 never loads).
4. If absent → call `showCookieBanner()` to render the consent UI.

**`loadGA4()`** is idempotent (checks `typeof window.gtag`). It:
- Sets `window.dataLayer` and `window.gtag`.
- Calls `gtag('config', GA4_ID)` to queue the config hit.
- Appends `<script async src="gtag/js?id=...">` to `<head>`.

**`trackEvent()`** calls `gtag('event', ...)` only if `typeof gtag === 'function'`, so it
is a safe no-op when analytics was rejected or not yet initialised.

**Banner** is a `<div id="cookieConsentBanner" role="dialog">` appended to `<body>`.
Styled via `.cookie-banner__*` classes in `css/style.css` (fixed bottom bar).
Text comes from `translations[currentLang].consent.*` (EN/CS bilingual).

---

## CSS Conventions

- Single stylesheet `style.css` for all shared styles
- `legal.css` for legal-page-specific styles (imported only by `obchodni-podminky.html`)
- Strict design tokens — do not add new colors or border-radius values
- Max `border-radius: 4px`; no gradients; no soft UI
- `.fade-in` + `.visible` pattern for scroll animations (legal page does not use this)
