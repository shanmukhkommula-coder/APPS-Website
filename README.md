# APPSARCH IT Solutions — Website

A 4-page static website (Home, Services, About Us, Contact) for **APPSARCH IT Solutions Pvt. Ltd.**, built with plain HTML, CSS and JavaScript — no build step, no framework, deploy it anywhere.

Theme: dark green + orange, as requested.

## Files

```
appsarch-website/
├── index.html          Home page
├── services.html        Services page (Oracle Cloud, EBS, Power BI, Fusion Tools)
├── about.html            About Us page
├── contact.html          Contact page (form + map)
├── css/style.css         All styling — colors are CSS variables at the top
├── js/script.js          Site config, header/footer, menu, form, animations
├── assets/images/logo.svg     Your logo (placeholder — replace this)
└── assets/images/favicon.svg  Browser tab icon (placeholder — replace this)
```

## How to change your logo (any time)

Everything about your logo lives in **one place**: `js/script.js`, in the `SITE_CONFIG` object near the top of the file.

```js
const SITE_CONFIG = {
  ...
  logo: "assets/images/logo.svg",
  ...
};
```

To swap the logo, do **one** of these:

1. **Easiest:** replace the file `assets/images/logo.svg` with your own logo file, keeping the exact same file name (`logo.svg`). Every page updates automatically — nothing else to edit.
2. **Different file name/format:** save your new logo anywhere in `assets/images/` (PNG, JPG or SVG all work), then update the `logo:` line above to point to it, e.g. `logo: "assets/images/my-new-logo.png"`.

The logo is used automatically in both the header and the footer on every page — you only ever edit it in this one file. Recommended size: roughly 160×50px (or similar 3:1 ratio), transparent background if PNG.

Do the same for the favicon (browser tab icon) by replacing `assets/images/favicon.svg`.

## How to change colors

Open `css/style.css` and edit the CSS variables at the very top of the file (under `:root`):

```css
--color-green-950: #08211a;   /* darkest green — header/footer background */
--color-green-500: #2b8a5c;   /* accent green */
--color-orange-600: #e2661d;  /* primary orange — buttons, links, highlights */
```

Changing these values re-themes the entire site (buttons, header, footer, icons, links) since every component references these variables.

## How to change text, contact info & navigation

- **Company name, tagline, phone, email, address, social links, and the main menu** are all set once in `js/script.js` → `SITE_CONFIG`. Edit them there and every page updates.
- **Page content** (headlines, service descriptions, testimonials, team bios, FAQs) is written directly inside each `.html` file — open the page in any text editor and edit the text between the tags. Everything marked as a placeholder (team names, testimonials, stats) is clearly written in plain, easy-to-find English text.

## Contact form

The form on `contact.html` is front-end only (this is a static site with no server), so right now it just shows a "Thanks!" message without actually sending anything anywhere. To receive real submissions by email, the simplest options are:

- **Formspree** (free tier available): sign up at formspree.io, then change the `<form id="contact-form">` tag to `<form id="contact-form" action="https://formspree.io/f/yourFormId" method="POST">` and remove the `e.preventDefault()` line in `initContactForm()` inside `js/script.js`.
- **Netlify Forms**: if you deploy on Netlify, just add `netlify` and `data-netlify="true"` attributes to the `<form>` tag — Netlify handles the rest automatically.

## How to deploy

This is a plain static site, so any of the following work — just upload the whole `appsarch-website` folder:

- **Netlify / Vercel**: drag-and-drop the folder onto their dashboard, or connect a Git repo.
- **GitHub Pages**: push the folder to a repo and enable Pages in repo settings.
- **Shared hosting / cPanel**: upload the folder's contents into `public_html` (or your domain's web root) via FTP/File Manager.
- **Any web server**: it's just static files — nginx, Apache, S3 + CloudFront, etc. all work with zero configuration.

No build step, no `npm install`, no server-side code required.

## Placeholder content to replace before going live

- Phone number, email and office address (currently placeholders) — in `js/script.js` (`SITE_CONFIG`) and also directly in `contact.html`.
- Google Maps embed on the Contact page (currently points to a generic "Hitech City" search) — replace with your real address in `SITE_CONFIG.mapEmbedUrl` and in `contact.html`.
- Team names/photos on `about.html` and client testimonials on `index.html`.
- Social media links in `SITE_CONFIG.social`.
- "10+ years", "50+ projects" style stats — update with your real numbers.
