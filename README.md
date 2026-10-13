# PrimeGearLab: TESWAY C5 AWD landing page (Spoke)

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind 3. Hub–Spoke proxy mode.

## Architecture
- The Spoke serves from its own root. The page lives at `app/tesway-bike/page.tsx`; `/` redirects to `/tesway-bike`.
- **No `basePath`.** The Hub exposes `/tesway-bike`, and the route folder already carries that segment, so a basePath would create `/tesway-bike/tesway-bike`.
- `assetPrefix` = `NEXT_PUBLIC_ASSET_PREFIX` or `https://teswaybike1.vercel.app` (the Spoke). Needed so `/_next/static/*` loads from the Spoke when the page is served through the Hub.
- `app/page.tsx` redirects `/` to `/tesway-bike`.
- Canonical, OG and sitemap use `NEXT_PUBLIC_SITE_URL` (Hub public URL).

## Hub project `vercel.json` (in the primegearlab.com project, not here)
Replace `teswaybike1.vercel.app` with the verified Spoke origin:

```json
{
  "rewrites": [
    { "source": "/tesway-bike", "destination": "https://teswaybike1.vercel.app/tesway-bike" },
    { "source": "/tesway-bike/:path*", "destination": "https://teswaybike1.vercel.app/tesway-bike/:path*" }
  ]
}
```
Do NOT add a `/_next/:path*` rewrite on the Hub: it would hijack the Hub's own assets. CSS/JS come straight from the Spoke through `assetPrefix`.

## Unstyled page checklist
View-source on the Hub page and search for `.css`. A `href` starting with `/_next/` means the deployed build has no `assetPrefix` (old build). It must start with `https://teswaybike1.vercel.app/_next/static/`. Then open that CSS URL directly; it must return 200 (no Vercel Deployment Protection on the Spoke).

## Environment variables
See `.env.example`. Tracking scripts load only when their IDs are set.

## Scripts
`npm run dev` · `npm run typecheck` · `npm run build`

## Known open items
- The Hub 404 is fixed in the Hub project (rewrites), not in this Spoke. See the Hub section above.
- `/tesway-bike/logo.png` was not supplied; the header uses a text wordmark. Add `public/tesway-bike/logo.png` if desired.
- No cookie-consent banner is implemented.
