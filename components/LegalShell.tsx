import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export default function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 text-slate-200">
      <a href="/tesway-bike" className="inline-flex min-h-[44px] items-center text-sm underline hover:text-eco">&larr; Back to the Tesway e-bike guide</a>
      <h1 className="mb-6 mt-4 font-display text-3xl font-bold text-mist">{title}</h1>
      <div className="space-y-4 leading-relaxed">{children}</div>
      <p className="mt-10 border-t border-slate-700 pt-4 text-sm text-slate-400">
        {SITE.name} &middot; <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </main>
  );
}
