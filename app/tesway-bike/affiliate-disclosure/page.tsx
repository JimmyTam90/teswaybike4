import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS_NAME, DISCLOSURE_TEXT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | PrimeGearLab",
  alternates: { canonical: `${SITE_URL}/affiliate-disclosure` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p className="font-semibold text-ink">{DISCLOSURE_TEXT}</p>
      <p>{BUSINESS_NAME} is an independent affiliate publisher. Links to Tesway products on this page contain a referral parameter. If you click one and buy, the merchant may pay us a commission. The price you pay is set by the merchant and is not increased by our link.</p>
      <p>We are not owned by, operated by, or an authorized dealer of Tesway, and we do not claim the merchant endorses this site. Specifications and prices are taken from the merchant&apos;s own pages; they can change, so check the merchant site before purchasing.</p>
    </LegalPage>
  );
}
