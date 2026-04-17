# SellerVector Website

Official website for **SellerVector** — a smart automation platform for Amazon sellers, operated by **Glooya** (Sole Proprietorship of Amit Thakur, GSTIN 09CRQPT7294E1ZV).

Built with **Next.js 14 (App Router)**, **React 18**, and **Tailwind CSS**. Ready to deploy to **Vercel**.

---

## What's included

- **Landing page** (`/`) — hero, features, how-it-works, who-it's-for, about, CTA, contact
- **Login page** (`/login`) — placeholder sign-in UI
- **Privacy Policy** (`/privacy`) — full policy written for Amazon SP-API approval
- **Terms of Service** (`/terms`) — complete ToS with India governing law
- Fully **responsive** (mobile, tablet, desktop)
- SEO metadata, Open Graph, Twitter cards
- Clean **white / blue / black** SaaS design theme
- Geist-inspired typography (Plus Jakarta Sans + JetBrains Mono)

---

## Project structure

```
sellervector-website/
├── app/
│   ├── layout.js            → Root layout + fonts + metadata
│   ├── globals.css          → Tailwind + custom styles
│   ├── page.js              → Landing page (/)
│   ├── login/page.js        → Login page (/login)
│   ├── privacy/page.js      → Privacy Policy (/privacy)
│   └── terms/page.js        → Terms of Service (/terms)
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx             → Hero + animated dashboard mockup
│   ├── Features.jsx
│   ├── HowItWorks.jsx
│   ├── WhoItsFor.jsx
│   ├── About.jsx
│   ├── CTA.jsx
│   └── Contact.jsx
├── public/                  → Static assets (add your favicon, og-image here)
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── .gitignore
```

---

## Local development

You need **Node.js 18.17+** installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Other commands

```bash
npm run build    # Build for production
npm run start    # Run the production build locally
npm run lint     # Run Next.js linter
```

---

## Deploy to Vercel (recommended)

### Option A — Git-based deployment (best for long-term maintenance)

1. Push this project to a GitHub / GitLab / Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and sign in.
3. Import the repository.
4. Vercel will auto-detect Next.js — click **Deploy**.
5. Once live, add your custom domain **glooya.com** in **Project Settings → Domains**.

### Option B — CLI deployment

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# From the project folder
vercel

# Follow the prompts. For production:
vercel --prod
```

### Add your custom domain

1. In Vercel Dashboard → your project → **Settings → Domains**
2. Add `glooya.com` and `www.glooya.com`
3. Follow the DNS instructions shown by Vercel (A record / CNAME)
4. Vercel will automatically issue an SSL certificate

---

## Deploy to other platforms

This project is a standard Next.js 14 App Router application. It also runs on:

- **Netlify** — connect your Git repo, it will auto-detect Next.js
- **Cloudflare Pages** — use the "Next.js" preset
- **AWS Amplify / Render / Railway** — connect Git repo, choose Node.js

---

## Customization

### Update business details

Business details (company name, GSTIN, address) appear in:
- `components/Footer.jsx`
- `components/Contact.jsx`
- `components/About.jsx`
- `app/privacy/page.js`
- `app/terms/page.js`

Search-and-replace these strings to update them globally:
- `Glooya`
- `09CRQPT7294E1ZV`
- `Building No. V, Bhowapur, Hasanpur`

### Change the theme color

Edit `tailwind.config.js` — the `brand` color palette uses Tailwind's blue scale. Change the hex values or swap in a different color entirely. All components reference `brand-50` through `brand-900`.

### Fonts

Fonts are loaded in `app/layout.js` using `next/font/google`. Replace `Plus_Jakarta_Sans` or `JetBrains_Mono` with any Google Font to change the typography.

### Add a favicon

Place a `favicon.ico` (plus optional `icon.png`, `apple-icon.png`) in the `app/` directory — Next.js will automatically pick it up.

### Add an Open Graph image

Place an `opengraph-image.png` (1200×630) in the `app/` directory for social media link previews. Same for Twitter with `twitter-image.png`.

---

## For the Amazon SP-API review team

The following compliance points are addressed throughout the website:

- **Transparent ownership** — SellerVector is explicitly stated as a product of Glooya, with full business registration disclosure (GSTIN, address, proprietor name) in the footer, Privacy Policy, Terms of Service, and Contact sections.
- **Amazon LWA OAuth** — The website repeatedly clarifies that Amazon account connections use Amazon's official Login with Amazon flow, and that Amazon passwords are never requested or stored.
- **Data Protection Policy compliance** — The Privacy Policy covers encryption (TLS 1.2+, AES-256), access controls, secret management, retention and deletion timelines, and breach notification — all in alignment with Amazon's DPP.
- **No data resale** — An explicit section in the Privacy Policy states that user data and Amazon-derived data are never sold, rented, or shared with third parties outside the subprocessors listed.
- **Dedicated privacy contact** — `privacy@glooya.com` is published across the site.
- **Clear product explanation** — Features, How It Works, and Who It's For sections explain the service in plain language for non-technical reviewers.

---

## Before launching publicly

1. Set up the following email addresses (aliases to one inbox are fine):
   - `hello@glooya.com`
   - `support@glooya.com`
   - `privacy@glooya.com`
   - `partners@glooya.com`
   - `legal@glooya.com`
2. Point `glooya.com` DNS at Vercel (or your chosen host).
3. Verify HTTPS works correctly — Vercel does this automatically.
4. Test the site on mobile, tablet, and desktop.
5. Submit to the Amazon SP-API developer application portal.

---

## License

© 2026 Glooya. All rights reserved. This website code is provided for use with the SellerVector brand operated by Glooya.

SellerVector is an independent software tool. Amazon, Amazon Advertising, and related marks are the property of Amazon.com, Inc. or its affiliates.

---

## Contact

Questions about this codebase: **hello@glooya.com**
