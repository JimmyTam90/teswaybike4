# PrimeGearLab: Tesway e-bike affiliate landing page

Next.js 14 (App Router) + TypeScript + Tailwind. Page route: `app/tesway-bike/page.tsx` (no `basePath`; `/` redirects to `/tesway-bike`).

## Run
```
npm install
npm run typecheck
npm run build
npm run dev
```
## Env vars (all optional; see `.env.example`)
`NEXT_PUBLIC_ASSET_PREFIX`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_CLICK_ENDPOINT`. Unset = integration disabled.

## Data
All product facts live in `lib/products.ts` (single source of truth, observed on teswaybike.com, Oct 2026). Re-check prices/availability before launching ads.

## Notes
- Affiliate links use `?ref=pwcheysy`; status is PLAUSIBLE until confirmed with the merchant/affiliate manager.
- `public/tesway-bike/logo.png` is a simple generated wordmark; replace with your real logo at the same path.
- Legal routes exist at `/privacy` etc. and are re-exported under `/tesway-bike/...`.
