import "../globals.css";
import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | PrimeGearLab",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};
export default function Page() {
  return (
    <LegalShell title="Privacy Policy">
      <p>Last updated: October 2026. This page describes how PrimeGearLab ("we") handles information on this website. It is a general-purpose notice, not legal advice.</p>
      <h2 className="font-display text-2xl font-bold">Information we collect</h2>
      <p>We do not sell products or take payments on this site. If you email us, we receive your email address and message. If analytics or advertising tags are enabled, they may collect usage data such as pages viewed, device and browser type, approximate location and the links you click, using cookies or similar technologies.</p>
      <h2 className="font-display text-2xl font-bold">How we use it</h2>
      <p>We use this information to operate and improve the site, measure advertising performance, and respond to messages.</p>
      <h2 className="font-display text-2xl font-bold">Third parties</h2>
      <p>Links on this page lead to the Tesway website, which has its own privacy policy and handles your purchase and personal data. Analytics and advertising providers (such as Google and Meta, when enabled) process data under their own policies.</p>
      <h2 className="font-display text-2xl font-bold">Your choices</h2>
      <p>You can block cookies in your browser settings or use the privacy controls offered by those providers. To ask about your data, email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalShell>
  );
}
