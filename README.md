# minilab-support-site

A minimal static website for **MiniLab – Experiments for Everyday Life**, providing the App Store support page and privacy policy.

Built with **Vite + React + TypeScript**.

- No analytics
- No cookies
- No external tracking scripts
- No backend
- No data collection

## Pages

- `/` — Home (hero + links to Support and Privacy)
- `/support` — Support page (contact email + FAQ)
- `/privacy` — Privacy Policy

## Requirements

- Node.js 18+ (Node 20+ recommended)
- npm (or pnpm / yarn / bun if you prefer)

## Local development

```bash
npm install
npm run dev
```

Vite will start a local dev server, typically at <http://localhost:5173>.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs the static site to `dist/`.
`npm run preview` serves the built site locally for a final smoke test.

## Deploying to Vercel

This project is already configured for Vercel via `vercel.json`, which rewrites all paths to `/` so client-side routing (`/support`, `/privacy`) works on deep links and page refreshes.

### Option A — Deploy via the Vercel dashboard (recommended)

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel auto-detects Vite. Confirm the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Vercel will build and host the site at a `*.vercel.app` URL. Add a custom domain later from the project's **Settings → Domains** if desired.

### Option B — Deploy via the Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

When prompted:

- **Set up and deploy:** Yes
- **Link to existing project:** No (first time)
- **Project name:** `minilab-support-site` (or your choice)
- **Directory:** `.`
- **Override settings:** No (Vite is auto-detected)

## Configuration

- **Support email:** `app.minilab@gmail.com`
- **Privacy effective date:** May 12, 2026

Both values live in `src/pages/Support.tsx` and `src/pages/Privacy.tsx` as constants near the top of each file.

## Project structure

```
minilab-support-site/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    ├── components/
    │   ├── Layout.tsx
    │   └── Footer.tsx
    └── pages/
        ├── Home.tsx
        ├── Support.tsx
        └── Privacy.tsx
```

## License

© 2026 Xuechun Sun. All rights reserved.
