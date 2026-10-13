import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import ProductCard, { ctaClass } from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import CtaLink from "@/components/CtaLink";
import { c5Gallery, heroProduct, otherProducts, products } from "@/lib/products";
import { DISCLOSURE_TEXT, SITE_URL } from "@/lib/site";

const title = "TESWAY C5 AWD Cargo E-Bike Review Guide + Dual-Motor Alternatives | PrimeGearLab";
const description =
  "Independent guide to the TESWAY C5 AWD cargo e-bike (3600W peak dual motors, up to 450 lbs payload) and the X5, X7 and X9 Ultra. Specs and prices from the merchant, checked Oct 2026.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "PrimeGearLab",
    type: "website",
    locale: "en_US",
    images: [{ url: heroProduct.image.url, alt: heroProduct.image.alt }],
  },
  twitter: { card: "summary_large_image", title, description, images: [heroProduct.image.url] },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How far can the C5 AWD go on a charge?",
    a: "Tesway lists up to 200 miles with pedal assist (180 miles pure electric) under optimal conditions. Rider weight, cargo, terrain, speed and assist level all reduce real-world range.",
  },
  {
    q: "How much weight can it carry?",
    a: "The merchant lists a maximum payload of 450 lbs for the C5 AWD. The X5, X7 and X9 Ultra are listed at 400 lbs.",
  },
  {
    q: "What does shipping cost and how long does it take?",
    a: "Tesway advertises free shipping with delivery in 3–7 business days within the US, and says it does not ship to PO Boxes or APO addresses. Check the merchant's shipping policy before ordering.",
  },
  {
    q: "What warranty is offered?",
    a: "Tesway advertises a 2-year warranty covering motor, battery and frame. Read the merchant's warranty page for the exact terms, since we do not administer warranties.",
  },
  {
    q: "Who sells the bike?",
    a: "Tesway sells and ships the bike from teswaybike.com. PrimeGearLab is an independent affiliate publisher and does not handle orders, returns or support.",
  },
  {
    q: "Are the prices final?",
    a: "No. Prices and promotions were checked on Oct 11, 2026 and can change at any time. The price at checkout on the merchant site is what applies.",
  },
];

const compareRows: { label: string; key: keyof typeof heroProduct.specs }[] = [
  { label: "Motor", key: "motor" },
  { label: "Battery", key: "battery" },
  { label: "Range", key: "range" },
  { label: "Top speed", key: "topSpeed" },
  { label: "Brakes", key: "brakes" },
  { label: "Tires", key: "tires" },
  { label: "Weight", key: "weight" },
  { label: "Max payload", key: "payload" },
];

const sectionTitle = "text-2xl font-extrabold text-ink sm:text-3xl";

export default function Page() {
  const c5 = heroProduct;

  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* HERO: text first, then image, then CTA (mobile order = DOM order) */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-8 md:py-12 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Cargo E-Bike · Independent Guide</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              TESWAY C5 AWD Cargo E-Bike: dual-motor power for family rides and heavy hauling
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              A longtail, dual-motor cargo e-bike rated for up to 450 lbs, with a 52V 60Ah battery and up to 200
              miles of pedal-assist range. Built for commuters, delivery riders and anyone replacing short car trips.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                ["3600W", "peak power"],
                ["450 lbs", "max payload"],
                ["200 mi", "max range*"],
                ["38 mph", "top speed"],
              ].map(([big, small]) => (
                <li key={small} className="rounded-xl bg-card px-4 py-3">
                  <span className="block text-xl font-extrabold text-brand">{big}</span>
                  <span className="text-slate-300">{small}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              *Under optimal conditions, per the merchant. Real-world range varies.
            </p>
          </div>

          <div className="min-w-0">
            <ProductImage image={c5.image} priority />
            <div className="mx-auto mt-4 w-full max-w-md">
              <p className="mb-3 text-center text-lg font-bold text-ink">
                {c5.priceLabel}{" "}
                <span className="text-sm font-normal text-slate-400 line-through">
                  ${c5.regularPrice.toLocaleString("en-US")}
                </span>{" "}
                <span className="text-xs font-normal text-slate-400">at time of review</span>
              </p>
              <CtaLink href={c5.affiliateUrl} productId={c5.id} placement="hero" className={ctaClass}>
                Shop the C5 AWD at Tesway
              </CtaLink>
              <p className="mt-3 text-center text-xs text-slate-400">{DISCLOSURE_TEXT}</p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="benefits">
          <h2 id="benefits" className={sectionTitle}>Why riders look at the C5 AWD</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Carries more", "Up to 450 lbs payload with a longtail rear cargo area for passengers or gear."],
              ["Dual-motor AWD", "2000W rated, 3600W peak, 200 N·m of torque for hills and heavy loads."],
              ["Long range", "52V 60Ah battery rated up to 200 miles with pedal assist in optimal conditions."],
              ["Confident control", "4-piston hydraulic brakes, 20\" × 4.0\" fat tires and a low-step frame."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-card p-5">
                <h3 className="font-bold text-ink">{t}</h3>
                <p className="mt-2 text-sm text-slate-300">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES: merchant photos of the C5 */}
        <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="uses">
          <h2 id="uses" className={sectionTitle}>Built around everyday hauling</h2>
          <p className="mt-2 text-slate-300">
            Tesway positions the C5 AWD for family outings, groceries, deliveries and weekend trips.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {c5Gallery.map((g) => (
              <ProductImage key={g.url} image={g} mode="scene" sizes="(min-width: 640px) 33vw, 100vw" />
            ))}
          </div>
        </section>

        {/* C5 SPECS */}
        <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="specs">
          <h2 id="specs" className={sectionTitle}>C5 AWD specifications</h2>
          <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-700 sm:grid-cols-2">
            {Object.entries({
              Motor: c5.specs.motor,
              Torque: c5.specs.torque,
              Battery: c5.specs.battery,
              Range: c5.specs.range,
              "Top speed": c5.specs.topSpeed,
              Brakes: c5.specs.brakes,
              Tires: c5.specs.tires,
              Suspension: c5.specs.suspension,
              Weight: c5.specs.weight,
              "Max payload": c5.specs.payload,
            }).map(([k, v]) => (
              <div key={k} className="min-w-0 bg-card p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{k}</dt>
                <dd className="mt-1 text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* OTHER MODELS */}
        <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="alts">
          <h2 id="alts" className={sectionTitle}>Not a cargo rider? Compare other Tesway models</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherProducts.map((p) => (
              <ProductCard key={p.id} product={p} placement="alternatives" />
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE (scrolls inside its own container, not the page) */}
        <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="compare">
          <h2 id="compare" className={sectionTitle}>Side-by-side</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl bg-card">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Specification comparison of TESWAY C5 AWD, X5 AWD, X7 AWD and X9 Ultra</caption>
              <thead>
                <tr className="border-b border-slate-700 text-slate-300">
                  <th scope="col" className="p-3">Spec</th>
                  {products.map((p) => (
                    <th key={p.id} scope="col" className="p-3 text-ink">{p.shortName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <th scope="row" className="p-3 font-semibold text-slate-300">Price</th>
                  {products.map((p) => (
                    <td key={p.id} className="p-3 font-bold text-ink">{p.priceLabel}</td>
                  ))}
                </tr>
                {compareRows.map((r) => (
                  <tr key={r.key} className="border-b border-slate-700 last:border-0">
                    <th scope="row" className="p-3 font-semibold text-slate-300">{r.label}</th>
                    {products.map((p) => (
                      <td key={p.id} className="p-3 align-top text-slate-200">{p.specs[r.key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Prices from teswaybike.com on Oct 11, 2026; they change often. Specs are the merchant&apos;s own figures.
          </p>
        </section>

        {/* FAQ: native details/summary = keyboard + touch accessible with no JS */}
        <section className="mx-auto max-w-3xl px-4 py-8" aria-labelledby="faq">
          <h2 id="faq" className={sectionTitle}>Questions before you buy</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-card">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3 font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  <span className="min-w-0">{f.q}</span>
                  <span aria-hidden="true" className="text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-4 pb-4 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA: image, then CTA */}
        <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="final">
          <div className="mx-auto max-w-md rounded-2xl bg-card p-5 text-center">
            <h2 id="final" className="text-xl font-extrabold text-ink">Ready to check the C5 AWD?</h2>
            <p className="mt-2 text-sm text-slate-300">Confirm current price, color options and delivery on the merchant site.</p>
            <div className="mt-4">
              <ProductImage image={c5.image} />
            </div>
            <div className="mt-4">
              <CtaLink href={c5.affiliateUrl} productId={c5.id} placement="final" className={ctaClass}>
                Shop the C5 AWD at Tesway
              </CtaLink>
            </div>
            <p className="mt-3 text-xs text-slate-400">{DISCLOSURE_TEXT}</p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta product={c5} />
    </>
  );
}
