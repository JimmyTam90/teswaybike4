import "../globals.css";
import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | PrimeGearLab",
  alternates: { canonical: `${SITE.url}/contact` },
  robots: { index: true, follow: true },
};
export default function Page() {
  return (
    <LegalShell title="Contact">
      <p>Questions about this website or its content? Email us and we will reply as soon as we can.</p>
      <p><a className="inline-flex min-h-[44px] items-center text-lg underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      <p>For orders, shipping, returns or warranty, contact Tesway directly through its website. We cannot access or change merchant orders.</p>
    </LegalShell>
  );
}
