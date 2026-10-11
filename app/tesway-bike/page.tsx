import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import Faq, { type FaqItem } from "@/components/Faq";
import ProductImage from "@/components/ProductImage";
import TrackedLink from "@/components/TrackedLink";
import { ShopCta, secondaryCls } from "@/components/Cta";
import { hero, others, products } from "@/lib/products";
import { SITE } from "@/lib/site";

const faqs: FaqItem[] = [
  { q: "How much do Tesway e-bikes cost?", a: "On the merchant's site at the time of writing, the C5 AWD is listed at $2,099 (regular $3,099), the X5 AWD at $1,799 (regular $2,699), the X7 AWD from $1,799 (regular $2,699) and the X9 Ultra from $1,859 (regular $2,599). Prices and promotions change, so confirm the current price at checkout." },
  { q: "Does Tesway ship for free?", a: "The merchant's site advertises free shipping with delivery in 3-7 business days. Check the shipping policy on the merchant's site for details that apply to your address." },
  { q: "What warranty is included?", a: "The merchant advertises a 2-year warranty covering product defects or malfunctions. Read the warranty policy on the merchant's site for exact coverage." },
  { q: "Are the range figures realistic?", a: "Ranges are manufacturer-stated maximums (\"up to\"). Real range depends on rider and cargo weight, terrain, assist level, speed and temperature. Some independent reviewers and third-party retailer listings describe lower figures or more modest motor performance than the headline numbers, so treat the maximums as best-case." },
  { q: "Which model is best for cargo and deliveries?", a: "The C5 AWD has the highest listed max load (450 lbs) and a cargo-focused design. The X5 AWD and X7 AWD list 400 lbs and add dual suspension." },
  { q: "Do I need to check local e-bike laws?", a: "Yes. Rules on speed, power and where you can ride vary by state and city, and high top speeds may limit where a bike can be used legally. Check your local regulations before buying." },
  { q: "Is PrimeGearLab the seller?", a: "No. PrimeGearLab is an independent guide and affiliate. Purchases, shipping, returns and support are handled by the merchant on its own website." },
];
const rows: { label: string; key: keyof (typeof products)[number]["specs"] }[] = [
  { label: "Peak power", key: "power" }, { label: "Top speed", key: "speed" }, { label: "Battery", key: "battery" },
  { label: "Max range (merchant-stated)", key: "range" }, { label: "Suspension", key: "suspension" }, { label: "Max load", key: "load" },
];
const wrap = "mx-auto max-w-6xl px-4 py-8 md:py-12";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* HERO: text -> image -> CTA (CTA is always below the image, never overlaid) */}
        <section className={`${wrap} grid grid-cols-1 items-center gap-8 lg:grid-cols-2`} aria-labelledby="hero-title">
          <div>
            <p className="mb-3 text-sm font-semibold text-eco">Independent buying guide for US riders</p>
            <h1 id="hero-title" className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Tesway C5 AWD cargo e-bike: up to 200 miles and a 450 lb max load
            </h1>
            <p className="mt-4 max-w-prose text-lg text-slate-300">
              Built for delivery riders, commuters and anyone who hauls heavy loads. Compare it with the X5, X7 and X9 Ultra below, then buy direct from Tesway.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2 text-slate-200 sm:grid-cols-2">
              <li>3600W peak power</li><li>52V 60AH battery</li><li>38 mph max speed</li><li>Free shipping, 3-7 business days</li><li>2-year warranty</li>
              <li>{hero.price} sale price (regular {hero.regularPrice})</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ProductImage src={hero.image} alt={hero.imageAlt} priority />
            <div className="mx-auto flex w-full max-w-md flex-col gap-3 lg:max-w-lg">
              <ShopCta product={hero} placement="hero" />
              <a href="#compare" className={secondaryCls}>Compare models</a>
              <p className="text-xs text-slate-400">Range and power are manufacturer-stated. Price as listed on the merchant site at time of writing.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-700 bg-carbon" aria-label="Offer highlights">
          <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-5 text-center sm:grid-cols-3">
            <li><span className="font-display text-xl font-bold text-eco">Free shipping</span><br />3-7 business days</li>
            <li><span className="font-display text-xl font-bold text-eco">2-year warranty</span><br />Defects and malfunctions</li>
            <li><span className="font-display text-xl font-bold text-eco">Up to 200 miles</span><br />On the 52V 60AH models</li>
          </ul>
        </section>

        {/* COMPARISON TABLE */}
        <section id="compare" className={wrap} aria-labelledby="compare-title">
          <h2 id="compare-title" className="font-display text-3xl font-bold">Tesway e-bikes compared</h2>
          <p className="mt-2 max-w-prose text-slate-300">Specifications as listed by the merchant. The X9 Ultra trades range for speed and power; the others share the 52V 60AH battery.</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Specification comparison of Tesway C5 AWD, X5 AWD, X7 AWD and X9 Ultra</caption>
              <thead className="bg-carbon">
                <tr>
                  <th scope="col" className="sticky left-0 bg-carbon p-3">Spec</th>
                  {products.map((p) => (<th scope="col" key={p.id} className="p-3 font-display text-lg">{p.shortName}</th>))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.key} className="border-t border-slate-700">
                    <th scope="row" className="sticky left-0 bg-ink p-3 font-medium text-slate-300">{r.label}</th>
                    {products.map((p) => (<td key={p.id} className="p-3">{p.specs[r.key]}</td>))}
                  </tr>
                ))}
                <tr className="border-t border-slate-700">
                  <th scope="row" className="sticky left-0 bg-ink p-3 font-medium text-slate-300">Listed price</th>
                  {products.map((p) => (<td key={p.id} className="p-3">{p.price} <span className="text-slate-400 line-through">{p.regularPrice}</span></td>))}
                </tr>
                <tr className="border-t border-slate-700">
                  <th scope="row" className="sticky left-0 bg-ink p-3 font-medium text-slate-300">Shop</th>
                  {products.map((p) => (
                    <td key={p.id} className="p-3">
                      <TrackedLink href={p.affiliateUrl} productId={p.id} placement="table" ariaLabel={`Shop ${p.name} at Tesway (opens in a new tab)`}
                        className="inline-flex min-h-[44px] items-center font-semibold text-eco underline">Shop {p.shortName}</TrackedLink>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MODEL CARDS: info -> image -> CTA on every viewport */}
        <section id="models" className={wrap} aria-labelledby="models-title">
          <h2 id="models-title" className="font-display text-3xl font-bold">Which Tesway fits your riding?</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <article key={p.id} className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-carbon p-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-slate-300">{p.tagline}</p>
                  <p className="mt-2 text-sm"><span className="font-semibold text-eco">Best for:</span> {p.bestFor}</p>
                </div>
                <ProductImage src={p.image} alt={p.imageAlt} />
                <div className="mt-auto flex flex-col gap-3">
                  <ShopCta product={p} placement="card" label={`Shop ${p.shortName}`} />
                  <p className="text-sm text-slate-300">{p.specs.power} &middot; {p.specs.battery} &middot; {p.specs.range} &middot; {p.price} (regular {p.regularPrice})</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={wrap} aria-labelledby="know-title">
          <h2 id="know-title" className="font-display text-3xl font-bold">Before you buy</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["Treat range as a best case", "Listed ranges are maximums. Heavy loads, hills, speed and cold weather reduce real-world distance."],
              ["Check local e-bike rules", "Speed and power limits, and where you can ride, vary by state and city. Confirm yours first."],
              ["Confirm details at checkout", "Prices, colors, promotions and delivery estimates are set by the merchant and can change."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-slate-700 bg-carbon p-4"><h3 className="font-display text-xl font-bold">{t}</h3><p className="mt-1 text-slate-300">{d}</p></div>
            ))}
          </div>
        </section>

        <section id="faq" className={`${wrap} max-w-3xl`} aria-labelledby="faq-title">
          <h2 id="faq-title" className="mb-4 font-display text-3xl font-bold">Frequently asked questions</h2>
          <Faq items={faqs} />
        </section>

        <section className={`${wrap} text-center`} aria-labelledby="final-title">
          <div className="mx-auto max-w-2xl rounded-xl border border-slate-700 bg-carbon p-6">
            <h2 id="final-title" className="font-display text-3xl font-bold">Ready to see the C5 AWD?</h2>
            <p className="mt-2 text-slate-300">Check current price, colors and delivery on the Tesway website.</p>
            <div className="mx-auto mt-5 flex max-w-sm flex-col gap-3"><ShopCta product={hero} placement="final" /></div>
            <p className="mt-4 text-xs text-slate-400">{SITE.disclosure}</p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
