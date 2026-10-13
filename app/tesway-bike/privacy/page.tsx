import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, PATHS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | PrimeGearLab",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: October 11, 2026. This page describes how PrimeGearLab (&ldquo;we&rdquo;) handles information on this site. It is a plain-language notice and has not been reviewed by a lawyer.</p>
      <h2 className="text-xl font-bold text-ink">What we collect</h2>
      <p>We do not run accounts, forms or checkout on this page. If analytics or advertising measurement is enabled (Google Analytics, Google Ads, Meta Pixel), those providers may collect usage data such as pages viewed, device and browser details, approximate location, and whether you clicked a link to the merchant. They may use cookies or similar technologies.</p>
      <h2 className="text-xl font-bold text-ink">Links to the merchant</h2>
      <p>Product links lead to teswaybike.com, which is operated by Tesway, not by us. Once you leave this page, the merchant&apos;s own privacy policy applies. Affiliate links may carry a referral parameter so the merchant can attribute the visit to us.</p>
      <h2 className="text-xl font-bold text-ink">Your choices</h2>
      <p>You can block or delete cookies in your browser settings and use opt-out tools offered by the analytics and advertising providers. Where the law requires consent for non-essential cookies, we will not load those tools without it.</p>
      <h2 className="text-xl font-bold text-ink">Contact</h2>
      <p>Questions about this notice: <a className="text-brand underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See also our <a className="text-brand underline" href={PATHS.disclosure}>affiliate disclosure</a>.</p>
    </LegalPage>
  );
}
