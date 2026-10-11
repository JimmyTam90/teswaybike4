import { hero } from "@/lib/products";
import TrackedLink from "./TrackedLink";

// Separate from product images; fixed to the viewport bottom, mobile only, safe-area aware.
export default function StickyCta() {
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-ink/95 px-4 pt-3 safe-bottom md:hidden">
      <TrackedLink href={hero.affiliateUrl} productId={hero.id} placement="sticky"
        className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-lg bg-eco px-4 py-2 font-bold text-white"
        ariaLabel={`Shop ${hero.name} at Tesway (opens in a new tab)`}>
        <span>{hero.shortName} from {hero.price}</span>
        <span>Shop now</span>
      </TrackedLink>
    </div>
  );
}
