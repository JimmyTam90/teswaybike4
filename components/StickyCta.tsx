import type { Product } from "@/lib/products";
import CtaLink from "./CtaLink";

/**
 * Mobile-only bar, fixed at the bottom. It is a separate element (never over a product image)
 * and the page reserves matching bottom padding so the footer stays reachable.
 */
export default function StickyCta({ product }: { product: Product }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-bg/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CtaLink
        href={product.affiliateUrl}
        productId={product.id}
        placement="sticky_mobile"
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-4 py-3 text-center text-base font-bold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/60"
      >
        See {product.shortName} · {product.priceLabel}
      </CtaLink>
    </div>
  );
}
