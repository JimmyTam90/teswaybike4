import { SITE } from "@/lib/site";

const links = [
  { href: "/tesway-bike/privacy", label: "Privacy Policy" },
  { href: "/tesway-bike/terms", label: "Terms of Use" },
  { href: "/tesway-bike/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/tesway-bike/contact", label: "Contact" },
];
export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-ink pb-28 pt-10 md:pb-10">
      <div className="mx-auto max-w-6xl space-y-4 px-4 text-sm text-slate-300">
        <p className="font-display text-xl font-bold text-mist">{SITE.name}</p>
        <p>{SITE.disclosure}</p>
        <p>
          PrimeGearLab is an independent publisher and affiliate. It is not the manufacturer, seller or an authorized dealer of Tesway.
          Prices, specifications and availability come from the merchant and may change; confirm details on the merchant&apos;s site before buying.
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (<a key={l.href} href={l.href} className="inline-flex min-h-[44px] items-center underline hover:text-eco">{l.label}</a>))}
        </nav>
        <p>Contact: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <p>&copy; 2026 PrimeGearLab. All rights reserved. Managed &amp; Operated in partnership with authorized media agency partners.</p>
        <p>Designed with Google Ads and Meta Ads policy considerations.</p>
      </div>
    </footer>
  );
}
