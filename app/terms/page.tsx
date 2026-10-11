import "../globals.css";
import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | PrimeGearLab",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};
export default function Page() {
  return (
    <LegalShell title="Terms of Use">
      <p>Last updated: October 2026. By using this website you agree to these general terms.</p>
      <h2 className="font-display text-2xl font-bold">Informational purpose</h2>
      <p>PrimeGearLab is an independent publisher. Content is provided for general information only. Product details, prices and availability come from the merchant and may change without notice. Always confirm them on the merchant website before you buy.</p>
      <h2 className="font-display text-2xl font-bold">No affiliation or endorsement</h2>
      <p>PrimeGearLab is not the manufacturer, seller or an authorized dealer of Tesway. Purchases, shipping, returns, warranty and support are handled by the merchant under its own terms.</p>
      <h2 className="font-display text-2xl font-bold">Liability</h2>
      <p>To the extent permitted by law, the site is provided as is, and we are not liable for losses arising from use of the site or from purchases made on third-party websites. Follow local e-bike laws and safety guidance.</p>
      <h2 className="font-display text-2xl font-bold">Contact</h2>
      <p>Questions: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalShell>
  );
}
