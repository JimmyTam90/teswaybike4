import type { Product } from "@/lib/products";
import CtaLink from "./CtaLink";
import ProductImage from "./ProductImage";

export const ctaClass =
  "inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-center text-base font-bold text-white transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/60";

/**
 * DOM order is the mobile order: title/price -> IMAGE -> CTA (separate block) -> specs.
 * The CTA is never positioned over the image.
 */
export default function ProductCard({ product, placement }: { product: Product; placement: string }) {
  return (
    <article className="flex min-w-0 flex-col gap-4 rounded-2xl bg-card p-4 sm:p-5">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{product.category}</p>
        <h3 className="mt-1 text-lg font-bold leading-snug text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-300">{product.tagline}</p>
        <p className="mt-2 text-xl font-extrabold text-ink">
          {product.priceLabel}{" "}
          <span className="text-sm font-normal text-slate-400 line-through">
            ${product.regularPrice.toLocaleString("en-US")}
          </span>
        </p>
      </header>

      <ProductImage image={product.image} />

      <div>
        <CtaLink href={product.affiliateUrl} productId={product.id} placement={placement} className={ctaClass}>
          View {product.shortName} at Tesway
        </CtaLink>
      </div>

      <ul className="space-y-1 text-sm text-slate-300">
        {product.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden="true" className="text-brand">✓</span>
            <span className="min-w-0">{f}</span>
          </li>
        ))}
      </ul>
      {product.availability === "PARTIAL" ? (
        <p className="text-xs text-slate-400">Some color/battery options may be sold out at the merchant.</p>
      ) : null}
    </article>
  );
}
