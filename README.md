# Apologetics Trainer

A web app for learning Christian apologetics: short lessons, objection drills, and quizzes, with progress saved on the device. Installable as a PWA and works offline.

> “Always being prepared to make a defense… yet do it with gentleness and respect.” — 1 Peter 3:15

## Stack

- **Vite + React + TypeScript** — static site, no server, no database.
- **vite-plugin-pwa** — manifest + service worker (installable, offline).
- **HashRouter + relative base** — deploys to any static host with zero config.
- **localStorage** for progress.
- Hosting: free on GitHub Pages, Cloudflare Pages, or Netlify.

## Develop

```sh
npm install
npm run dev       # http://localhost:5173
npm test          # validates content (unique ids, valid quiz answers)
npm run build     # outputs dist/
npm run preview   # serve the production build
```

## Adding content

All training content lives in `src/content/topics/*.ts`, one file per topic (see `src/content/types.ts`). To add a topic, create a file and register it in `src/content/index.ts`. Each topic has:

- `lesson` — sections with paragraphs, optional numbered argument, and scripture references
- `objections` — objection, model response, key points
- `quiz` — multiple-choice questions with explanations

## Citation popups

Tapping a Bible, Quran or hadith citation shows the passage text in a popup, with a link to the source site. The texts are bundled in `src/content/data/passages.json` so they work offline:

- Bible: World English Bible (public domain)
- Quran: Sahih International
- Hadith: sunnah.com English text and numbering (Sahih al-Bukhari, Sahih Muslim)

After adding or changing citations, regenerate it (needs Python 3):

```sh
scripts/fetch-sources.sh            # once: downloads the source texts into .sources/
python3 scripts/build-passages.py
```

`npm test` fails if any citation is missing its passage text, or cites a verse or hadith that doesn't exist.

## Deploy

**GitHub Pages:** the workflow in `.github/workflows/deploy.yml` builds and deploys on push to `main`. Enable it under *Settings → Pages → Source: GitHub Actions*. (Pages on a private repo needs a paid GitHub plan.)

**Cloudflare Pages / Netlify:** build command `npm run build`, output directory `dist`.

## Icons

`public/icon.svg` is the source. Regenerate PNGs with `npm i -D playwright && npm run icons`.
