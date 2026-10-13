import Link from "next/link";
import { BUSINESS_NAME, CONTACT_EMAIL, DISCLOSURE_TEXT, PATHS } from "@/lib/site";

const link =
  "inline-flex min-h-[44px] items-center rounded px-1 text-slate-300 underline-offset-2 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-bg">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-8 text-sm text-slate-400">
        <p>{DISCLOSURE_TEXT}</p>
        <p>
          {BUSINESS_NAME} is an independent affiliate publisher. We are not the seller and are not affiliated with
          or endorsed by Tesway. Purchases, shipping, warranty and returns are handled by the merchant at
          teswaybike.com. Prices and promotions change; confirm details on the merchant site.
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-4">
          <Link href={PATHS.privacy} className={link}>Privacy</Link>
          <Link href={PATHS.terms} className={link}>Terms</Link>
          <Link href={PATHS.disclosure} className={link}>Affiliate Disclosure</Link>
          <Link href={PATHS.contact} className={link}>Contact</Link>
        </nav>
        <p>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-200 underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>© 2026 {BUSINESS_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
