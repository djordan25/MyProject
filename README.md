# Apologetics Trainer

A web app for learning Christian apologetics: lessons stepped through a screen at a time, objection drills, quizzes and games, on a guided path, with progress saved on the device. Installable as a PWA and works offline.

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
npm test          # validates content (ids, quiz answers, citations and quotations, key lines, maps, charts, games)
npm run build     # outputs dist/
npm run preview   # serve the production build
```

## Adding content

Lessons live in `src/content/topics/*.ts` (Foundations), `src/content/islam/*.ts` and `src/content/islam/sects/*.ts`, one file per topic (see `src/content/types.ts`). To add a topic, create a file, register it in `src/content/index.ts`, and place it in a track section in `src/content/tracks.ts`. Each topic has:

- `lesson`: sections with a `keyLine`, paragraphs, an optional numbered argument, and scripture references
- `objections`: objection, model response, key points, and nested `followUps`
- `quiz`: multiple-choice questions with explanations
- `furtherReading`

A new topic also needs an emblem in `src/content/emblems/` (a test fails without one). Optional extras, each checked by a test against the lesson's own text:

| File | What it adds | Rule the test enforces |
|---|---|---|
| `src/content/games.ts` | "Sound or weak?" claims and timeline events | valid topic, unique ids, one event per year |
| `src/content/argumentTraps.ts` | near-miss options for "Build the argument" | three per step of a real argument, none equal to a real step |
| `src/content/maps.ts` | places on the lesson's map | every place is named in the lesson |
| `src/content/charts.ts` | comparison charts | every row quotes the lesson word for word |

**Accuracy.** Every lesson was written from academic sources and then source-checked by an independent pass; every lesson has since had a second pass. Wikipedia, blogs and apologetics or polemic sites were used only as leads, never as sources. A `keyLine` is a one-sentence summary of its own section; each written one was checked against the section by an independent pass, so that it makes no claim the section does not make and keeps the section’s hedges.

## Lessons

- **Step-through view (default):** a lesson is read one section per screen, with a progress bar and Back/Next. Each section opens with its key line in large type. "Read it all on one page" switches to a single page, and the choice is remembered.
- **Quick checks:** after a section, one question from that lesson's quiz (matched to the section by shared wording, `src/lib/lessonSteps.ts`), or a missing-step question where the section has a numbered argument. Not scored for points.
- **Recap:** the last screen shows the emblem, checks right, points earned, the key lines as a list, and buttons to the objections and the quiz. Reaching it marks the lesson read.
- **Quotation cards:** a scripture quotation that ends its sentence is set apart as a card, coloured by source (Bible, Quran, hadith).
- **Argument diagrams:** a numbered argument is drawn as premises on a rail running into the conclusion.
- **Maps:** "Places in this lesson" pins the places a lesson names on coastlines from Natural Earth (public domain; regenerate `src/content/mapLand.ts` from the `world-atlas` npm package if the region needs widening). Coordinates were checked against OpenStreetMap and, for ancient sites, the Pleiades gazetteer.
- **Timelines and charts:** a lesson's dated events are shown on a scaled time axis, and comparison charts sit with the section that discusses them. `/timeline` shows every dated event on one axis.
- **Emblems:** each lesson has its own drawn picture (plain SVG shapes, no faces or figures), shown on the path, the lesson header and in the games.

## Practice features

- **Home:** shows one thing to do with one button. If reviews are due it is a short warm-up (with a link to skip to the lesson); otherwise it is the next step on the path. Standing (streak, daily goal, level) is one line at the top, and the other tracks fold away.
- **Today's practice** (`/today`): up to three due reviews, one new objection and two quiz questions, ending on a summary with how many of the last 7 days you practised.
- **Sparring mode (default):** each objection plays out as a conversation. You reply, see a strong answer, then they come back with their next line, following one path through the `followUps` tree. Switch to **Cards** on the Practice page or a topic's Objections tab; the choice is remembered.
- **First-run focus:** a first visit shows only one question: who you are preparing to talk with (a sceptical friend, a Muslim friend or coworker, your own doubts, or everything). The answer orders the tracks, the next step and Today's practice. Change it from the foot of the home page.
- **Listen mode:** on Practice, choose Listen to hear each objection, pause to answer in your head, then hear a strong answer and the key points, hands-free. Single cards have a Listen button too. Uses the device's built-in voices; citations in brackets are skipped. Some phones pause speech when the screen locks.
- **Share a card:** after the answer is shown, Share card makes a 1080×1350 image of the objection, answer, key points and references, and opens the share sheet (or downloads it on desktop).
- **Memory verses:** tap Memorise on any Bible passage's popup, or pick from starter sets on the Memory verses page (Practice → Memory verses, `/verses`). Recall a verse with the full text, with only first letters, or from memory; a typed attempt is checked word by word. Verses use the same confidence ratings and review schedule as objections, and one due verse joins Today's practice. The starter list is in `src/lib/verses.ts`; a test checks each one is in the bundled Berean text.
- **Conversations:** a private journal of real conversations (Progress → Conversations, `/journal`): who, when, what came up, notes and a next step. Tag the objections that came up by typing roughly what was said; tagged objections you have practised become due for review, and Practise these opens just those. Entries are saved on the device and included in the progress backup.
- **Weak spots:** a Practice filter for objections last rated Again or Shaky.
- **Readiness and seals:** each topic shows a readiness ring (lesson, best quiz score, and objection confidence, equally weighted). A topic earns its shield seal when the lesson is read, the quiz is 80% or better and every objection is Solid; a track's seal turns gold when all its topics are sealed.
- **Phone-first:** a bottom tab bar on small screens, larger tap targets, and a distraction-free Today's practice with navigation hidden. Ratings and quiz answers give a short vibration on phones that support it (not iOS), skipped under reduced motion.
- **Follow-up replies:** many objections include "If they reply…" with the likely next response and how to answer it (`followUps` in the content files).
- **Key-point self-check:** if you wrote an answer, you tick which key points it covered and get a score, which suggests a confidence rating.
- **Confidence ratings and spaced repetition:** rate each objection Again (today), Shaky (tomorrow), Solid (1, 3, 7, 14, then 30 days as the run grows) or Could teach it (jumps to 14+ days). Each button shows when the objection will come back.
- **They just said…:** the Search page opens in this mode. Type roughly what someone said and the closest objection or follow-up reply appears with its answer, key points and references, plus other likely matches. Matching is offline and word-based (`src/lib/quickAnswer.ts`); switch to Everything for a plain search.
- **Search:** finds lessons, objections and references (try a hadith number).
- **Summary tab:** each topic has a printable one-page review of its main points and objections.
- **Glossary:** Islamic terms in plain English (`src/content/glossary.ts`).
- **Progress backup:** download or restore progress from the Progress page.

## The guided path, points and games

- **Guided path:** each track is a path, drawn at the top of its page as a winding trail of emblem stops and challenge gates with a "You are here" marker. Topics open in order, and a topic is cleared when its lesson is read, every objection has been tried and its quiz is 80% or better. Scoring 90% on the quiz clears it without the lesson (test-out). Topics already begun are never locked, and Search and "They just said…" are always open. Someone who chose "my own questions and doubts" can open the hardest questions at once. The rules are in `src/lib/path.ts`.
- **Section challenges:** each section ends with a challenge of ten mixed objections and comebacks in random order (`/boss/:trackId/:section`). Two misses are allowed. Passing it opens the next section.
- **Points and levels:** points are paid for a lesson read, each objection practised (the same whatever the self-rating, a little more for a review done once it is due), right answers in quizzes and games, and a challenge passed. Ten levels run from Inquirer to Sage; each track also shows a rank. The values are in `XP` and `LEVELS` in `src/lib/progress.ts`.
- **Daily goal and streak:** 30 points a day meets the goal. Days practised in a row make a streak; one freeze covers a single missed day, and a new one is earned for every seventh day of a run.
- **Fading seals:** a sealed topic whose reviews run more than a week late shows a faded seal until they are done.
- **Games** (the Play tab): **Volley** plays a topic's follow-up chains as a timed back-and-forth with a combo for answers in a row (the clock can be turned off). **Sound or weak?** asks whether to use an argument as it stands, call it overstated, or leave it alone. **Timeline** asks for sources and events in order, then shows how far apart they are. **Build the argument** removes one step of a lesson's numbered argument; the wrong options are written near misses (the real step overstated, reversed or cut loose), each shown with the reason it fails. **Where was it?** marks one place on a lesson's map to be named from four. Games draw first on topics that are open on the path. The claims and dates are in `src/content/games.ts` and the near misses in `src/content/argumentTraps.ts`; each points to the lesson that settles it.

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

**GitHub Pages:** the workflow in `.github/workflows/deploy.yml` builds and deploys on push to `master` (or `main`). Enable it under *Settings → Pages → Source: GitHub Actions*. (Pages on a private repo needs a paid GitHub plan.)

**Cloudflare Pages / Netlify:** build command `npm run build`, output directory `dist`.

## Design: Reading Room

The look is the *Reading Room* design system: EditorialUI's quiet surfaces, hairlines and Inter Tight, plus one signature colour, the rubric (vermilion), used only for the objection being answered, round labels, verse numbers and the wax seal. Everything in `src/styles.css` resolves through EditorialUI's `--ed-*` tokens or the app's own `--at-*` tokens defined at its top; never inline a colour. Topics and tracks are list rows (`TopicRow`, `TrackRow`), citations are set in mono, each lesson has a drawn emblem (`src/content/emblems/`, coloured only through five `e-*` classes), and track and section icons are lucide line icons mapped from the content glyphs in `src/lib/icons.ts`. Light and dark both follow EditorialUI's `data-theme`; "auto" resolves the device setting in `src/lib/theme.ts`.

EditorialUI's barrel imports its optional table libraries, so `@tanstack/react-table` and `@tanstack/react-virtual` are installed even though the app does not use them; they are tree-shaken out of the build.

EditorialUI's `EdIcon` looks icon names up in the whole lucide set, which would add about 800 KB. `vite.config.ts` swaps it for `src/lib/EdIconShim.tsx` (same API and styles) that resolves names from `src/lib/iconRegistry.ts`. **Add an icon to the registry before using its name**; a test checks every topic and track icon is there.

## Icons

`public/icon.svg` (the wax seal) is the source. Regenerate PNGs with `npm i -D playwright && npm run icons`.
