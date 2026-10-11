"use client";
import { useState } from "react";

export interface FaqItem { q: string; a: string }

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-700 rounded-xl border border-slate-700 bg-carbon">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button
                type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[48px] w-full items-center justify-between gap-4 px-4 py-3 text-left text-base font-semibold"
              >
                <span>{it.q}</span>
                <span aria-hidden="true" className="text-xl text-eco">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-4 pb-4 text-slate-300">
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
