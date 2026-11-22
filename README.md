# Apologetics Trainer

A web app for learning Christian apologetics: short lessons, objection drills, and quizzes, with progress saved on the device. Installable as a PWA and works offline.

> “Always be prepared to give a defense… But respond with gentleness and respect.” — 1 Peter 3:15

## Stack

- **Vite + React + TypeScript** — static site, no server, no database.
- **EditorialUI v0.8.0** (`github:djordan25/EditorialUi#v0.8.0`) — components (`Ed*`) and design tokens (`--ed-*`). Inter Tight and JetBrains Mono are bundled with `@fontsource` so the app works offline.
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

## Practice features

- **Today's practice:** the home page leads with a short daily session — up to three due reviews, one new objection, two quiz questions — ending on a summary with how many of the last 7 days you practised.
- **Sparring mode (default):** each objection plays out as a conversation. You reply, see a strong answer, then they come back with their next line, following one path through the `followUps` tree. Switch to **Cards** on the Practice page or a topic's Objections tab; the choice is remembered.
- **First-run focus:** the home page asks who you are preparing to talk with (a sceptical friend, a Muslim friend or coworker, your own doubts, or everything) and orders tracks, the suggested topic and Today's practice to match. Change it from the home page.
- **Listen mode:** on Practice, choose Listen to hear each objection, pause to answer in your head, then hear a strong answer and the key points, hands-free. Single cards have a Listen button too. Uses the device's built-in voices; citations in brackets are skipped. Some phones pause speech when the screen locks.
- **Share a card:** after the answer is shown, Share card makes a 1080×1350 image of the objection, answer, key points and references, and opens the share sheet (or downloads it on desktop).
- **Memory verses:** tap Memorise on any Bible passage's popup, or pick from starter sets on the Memory verses page (Practice → Memory verses, `/verses`). Recall a verse with the full text, with only first letters, or from memory; a typed attempt is checked word by word. Verses use the same confidence ratings and review schedule as objections, and one due verse joins Today's practice. The starter list is in `src/lib/verses.ts`; a test checks each one is in the bundled Berean text.
- **Weak spots:** a Practice filter for objections last rated Again or Shaky.
- **Readiness and seals:** each topic shows a readiness ring (lesson, best quiz score, and objection confidence, equally weighted). A topic earns its shield seal when the lesson is read, the quiz is 80% or better and every objection is Solid; a track's seal turns gold when all its topics are sealed.
- **Phone-first:** a bottom tab bar on small screens, larger tap targets, and a distraction-free Today's practice with navigation hidden. Ratings and quiz answers give a short vibration on phones that support it (not iOS), skipped under reduced motion.
- **Follow-up replies:** many objections include "If they reply…" with the likely next response and how to answer it (`followUps` in the content files).
- **Key-point self-check:** if you wrote an answer, you tick which key points it covered and get a score, which suggests a confidence rating.
- **Confidence ratings and spaced repetition:** rate each objection Again (today), Shaky (tomorrow), Solid (1, 3, 7, 14, then 30 days as the run grows) or Could teach it (jumps to 14+ days). Each button shows when the objection will come back.
- **Search:** finds lessons, objections and references (try a hadith number).
- **Summary tab:** each topic has a printable one-page review of its main points and objections.
- **Glossary:** Islamic terms in plain English (`src/content/glossary.ts`).
- **Progress backup:** download or restore progress from the Progress page.

## Citation popups

Tapping a Bible, Quran or hadith citation shows the passage text in a popup, with a link to the source site. The texts are bundled in `src/content/data/passages.json` so they work offline:

- Bible: Berean Standard Bible (public domain since 2023). Lesson quotations use the same translation.
- Quran: Sahih International
- Hadith: sunnah.com English text and numbering. Sahih al-Bukhari and Sahih Muslim are the main sources; Sunan Abi Dawud, Jami at-Tirmidhi, Sunan Ibn Majah and Musnad Ahmad can also be cited, and their popups show each hadith's grade.

Some Islam lessons also refer to classical commentaries, the early biography of Muhammad and manuscript scholarship. The app holds no text for those, so they have no popups; they are listed under Further reading.

After adding or changing citations, regenerate it (needs Python 3):

```sh
scripts/fetch-sources.sh            # once: downloads the source texts into .sources/
python3 scripts/build-passages.py
```

`npm test` fails if any citation is missing its passage text, cites a verse or hadith that doesn't exist, or if a quotation followed by a citation doesn't match the wording of the cited passage.

## Deploy

**GitHub Pages:** the workflow in `.github/workflows/deploy.yml` builds and deploys on push to `main`. Enable it under *Settings → Pages → Source: GitHub Actions*. (Pages on a private repo needs a paid GitHub plan.)

**Cloudflare Pages / Netlify:** build command `npm run build`, output directory `dist`.

## Design: Reading Room

The look is the *Reading Room* design system: EditorialUI's quiet surfaces, hairlines and Inter Tight, plus one signature colour, the rubric (vermilion), used only for the objection being answered, round labels, verse numbers and the wax seal. Everything in `src/styles.css` resolves through EditorialUI's `--ed-*` tokens or the app's own `--at-*` tokens defined at its top; never inline a colour. Topics and tracks are list rows (`TopicRow`, `TrackRow`), citations are set in mono, and topic icons are lucide line icons mapped from the content glyphs in `src/lib/icons.ts`. Light and dark both follow EditorialUI's `data-theme`; "auto" resolves the device setting in `src/lib/theme.ts`.

EditorialUI's barrel imports its optional table libraries, so `@tanstack/react-table` and `@tanstack/react-virtual` are installed even though the app does not use them; they are tree-shaken out of the build.

EditorialUI's `EdIcon` looks icon names up in the whole lucide set, which would add about 800 KB. `vite.config.ts` swaps it for `src/lib/EdIconShim.tsx` (same API and styles) that resolves names from `src/lib/iconRegistry.ts`. **Add an icon to the registry before using its name**; a test checks every topic and track icon is there.

## Icons

`public/icon.svg` (the wax seal) is the source. Regenerate PNGs with `npm i -D playwright && npm run icons`.
