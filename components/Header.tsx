import { hero } from "@/lib/products";
import { ShopCta } from "./Cta";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-700 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <a href="/tesway-bike" className="flex items-center gap-2" aria-label="PrimeGearLab home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/tesway-bike/logo.png" alt="PrimeGearLab" width={160} height={40} className="h-8 w-auto max-w-[140px] object-contain" />
        </a>
        <nav aria-label="Page sections" className="hidden items-center gap-6 text-sm md:flex">
          <a href="#models" className="hover:text-eco">Models</a>
          <a href="#compare" className="hover:text-eco">Compare</a>
          <a href="#faq" className="hover:text-eco">FAQ</a>
        </nav>
        <div className="hidden md:block"><ShopCta product={hero} placement="header" label="View C5 AWD" /></div>
      </div>
    </header>
  );
}
