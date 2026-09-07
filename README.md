# Easy Xtream Football — microsite

Promotional landing page for the **Easy Xtream Football** Android TV / mobile app.
Built with Next.js (App Router) + Tailwind CSS, with all copy stored as
Markdown per language, ready to deploy on Vercel.

App repo: https://github.com/nezor11/easy-xtream-football

## Tech
- **Next.js 14** (App Router, static-generated `/es` and `/en`).
- **Tailwind CSS** with the app's brand palette (`brand.*` in `tailwind.config.ts`).
- **Markdown content** parsed with `gray-matter` — one file per language.

## Editing the texts
All copy lives in `content/<locale>/home.md` (YAML frontmatter + a short body).
Edit those files — no code changes needed.

## Adding a language
1. Add the code to `locales` in `lib/i18n.ts` (and a label in `localeNames`).
2. Copy `content/es/home.md` to `content/<new-locale>/home.md` and translate it.

The app ships in 8 languages (es, en, ca, eu, gl, pt, fr, it); the site starts
with **es** and **en** and is structured to grow to the rest.

## TODO before launch
- Add real app screenshots to `public/` and a screenshots section (optional).
- Add the Google Play URL to `lib/links.ts` once the app is published.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000  (-> /es)
npm run build    # static production build
```

## Deploy (Vercel)
Live at https://easy-xtream-football-web.vercel.app — every push to `main` redeploys.
If the domain changes, set `NEXT_PUBLIC_SITE_URL` (used for canonical/OG URLs) or
update `siteUrl` in `lib/links.ts`.
