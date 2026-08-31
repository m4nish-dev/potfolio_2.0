# Manish Portfolio_KR

An editorial magazine–styled portfolio website for Manish Kumar.
Built with **React.js**, **JavaScript**, and **external CSS** — no Tailwind, no Bootstrap, no UI kits.

---

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

---

## Project structure

```
manish-portfolio-kr/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── images/            ← Drop your images here
│       ├── hero.jpg
│       ├── nsut.jpg
│       ├── homely.jpg
│       └── urlshortify.jpg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── ProjectArticle.jsx
    │   ├── Skills.jsx
    │   ├── Achievements.jsx
    │   ├── Certifications.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── data/
    │   └── portfolioData.js   ← All editable content lives here
    └── styles/
        ├── global.css         ← Design tokens & base
        ├── navbar.css
        ├── hero.css
        ├── about.css
        ├── experience.css
        ├── projects.css
        ├── skills.css
        ├── achievements.css
        ├── certifications.css
        ├── contact.css
        ├── footer.css
        └── responsive.css     ← Tablet & mobile breakpoints
```

---

## Editing content

All content — projects, skills, experience, contact info, social links —
lives in **one file**:

```
src/data/portfolioData.js
```

Search for `YOUR_` in that file to find every placeholder link you should replace:

- `YOUR_GITHUB_URL` — your GitHub profile URL
- `YOUR_LINKEDIN_URL` — your LinkedIn profile URL
- `YOUR_HOMELY_LIVE_URL` / `YOUR_HOMELY_GITHUB_URL`
- `YOUR_URLSHORTIFY_LIVE_URL` / `YOUR_URLSHORTIFY_GITHUB_URL`

---

## Images

Drop your images in `public/images/` using these filenames:

- `hero.jpg` — main hero portrait / workspace image
- `nsut.jpg` — NSUT campus image
- `homely.jpg` — Homely project screenshot
- `urlshortify.jpg` — URLShortify project screenshot

If any image is missing, the site gracefully falls back to a designed
placeholder (no broken image icons).

---

## Design system

The design uses CSS variables defined in `src/styles/global.css`:

- **Colors** — monochrome palette (paper, bone, gray, ink, black)
- **Typography** — Playfair Display (serif display) + Inter (sans body) + JetBrains Mono (data)
- **Layout** — CSS Grid with a magazine-style asymmetric structure
- **Motion** — subtle entrance reveal + hover transitions; respects `prefers-reduced-motion`

To change the whole aesthetic, edit the `:root` block in `global.css`.

---

## Tech

- React 18
- Vite 5
- React Icons (for GitHub / LinkedIn / arrow icons only)
- Pure external CSS — no utility framework

## License

Personal portfolio. All content © Manish Kumar.
