# World Stage, Weird Facts

A World Cup-flavoured work away day quiz with zero football knowledge required.

The mockup is a static website with:

- animated country flag reveal
- Top 5 and Underdogs country tabs
- multiple-choice quiz cards
- answer reveal explanations
- alternative away day quiz format ideas

## Setup

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open the local Vite URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

Vercel can deploy this repo as a Vite static site. The production output is
`dist`.

## Edit Quiz Content

Country data and questions live in `src/main.js`.

The FIFA ranking hook is labelled as April 2026 in the mockup. Update the
country list once the final ranking source is confirmed.
