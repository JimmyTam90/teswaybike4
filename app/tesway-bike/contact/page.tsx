import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | PrimeGearLab",
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>Questions about this site, corrections to product information, or privacy requests:</p>
      <p>
        <a className="text-lg font-semibold text-brand underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>For orders, shipping, warranty or returns, contact the merchant directly through teswaybike.com. We cannot access or change orders.</p>
    </LegalPage>
  );
}
