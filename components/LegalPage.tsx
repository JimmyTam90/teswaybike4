import type { ReactNode } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { PATHS } from "@/lib/site";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <Link href={PATHS.home} className="text-sm text-brand underline">← Back to the guide</Link>
        <h1 className="mt-4 text-3xl font-extrabold text-ink">{title}</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-slate-300">{children}</div>
      </main>
      <Footer />
    </>
  );
}
