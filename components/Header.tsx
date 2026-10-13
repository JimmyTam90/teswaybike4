import Link from "next/link";
import { BUSINESS_NAME, PATHS } from "@/lib/site";

// No logo file was supplied (/tesway-bike/logo.png does not exist), so a text wordmark is used.
export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href={PATHS.home}
          className="rounded text-lg font-extrabold tracking-tight text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          Prime<span className="text-brand">Gear</span>Lab
          <span className="sr-only"> ({BUSINESS_NAME})</span>
        </Link>
        <p className="text-xs text-slate-400">Independent e-bike guide</p>
      </div>
    </header>
  );
}
