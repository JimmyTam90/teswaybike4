import "../globals.css";
import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | PrimeGearLab",
  alternates: { canonical: `${SITE.url}/affiliate-disclosure` },
  robots: { index: true, follow: true },
};
export default function Page() {
  return (
    <LegalShell title="Affiliate Disclosure">
      <p className="font-semibold">{SITE.disclosure}</p>
      <p>PrimeGearLab is an independent affiliate publisher. Links to teswaybike.com on this site carry an affiliate reference. If you buy after clicking, the merchant may pay us a commission. The price you pay is not increased.</p>
      <p>We aim to describe products using information published by the merchant and to say when figures are manufacturer-stated. We are not the seller; the merchant handles all orders and support.</p>
    </LegalShell>
  );
}
