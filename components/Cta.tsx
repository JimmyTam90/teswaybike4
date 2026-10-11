import TrackedLink from "./TrackedLink";
import type { Placement, Product } from "@/lib/types";

const base = "inline-flex min-h-[48px] items-center justify-center rounded-lg px-5 py-3 text-base font-bold text-center transition-colors";
export const primaryCls = `${base} bg-eco text-white hover:bg-green-700 w-full sm:w-auto`;
export const secondaryCls = `${base} border border-slate-500 text-mist hover:bg-slate-700 w-full sm:w-auto`;

export function ShopCta({ product, placement, label }: { product: Product; placement: Placement; label?: string }) {
  return (
    <TrackedLink href={product.affiliateUrl} productId={product.id} placement={placement} className={primaryCls}
      ariaLabel={`${label ?? "Shop now at Tesway"}: ${product.name} (opens in a new tab)`}>
      {label ?? "Shop now at Tesway"}
    </TrackedLink>
  );
}
