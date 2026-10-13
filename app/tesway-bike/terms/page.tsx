import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | PrimeGearLab",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use">
      <p>Last updated: October 11, 2026. These terms have not been reviewed by a lawyer.</p>
      <h2 className="text-xl font-bold text-ink">Informational content only</h2>
      <p>This site is an independent guide. Product details, prices and promotions come from the merchant&apos;s website at the time we checked them and can change without notice. Always confirm details on the merchant site before buying.</p>
      <h2 className="text-xl font-bold text-ink">No sale on this site</h2>
      <p>We do not sell products, take payments, ship orders or handle returns, warranties or support. Those are provided by the merchant under its own terms.</p>
      <h2 className="text-xl font-bold text-ink">Electric bike safety and local laws</h2>
      <p>Speed, power and where you may ride an electric bike are regulated differently across the US. You are responsible for following local rules and for riding safely, including wearing a helmet.</p>
      <h2 className="text-xl font-bold text-ink">Limitation</h2>
      <p>The site is provided as is, without warranties. We are not liable for decisions made based on this content.</p>
      <p>Contact: <a className="text-brand underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </LegalPage>
  );
}
