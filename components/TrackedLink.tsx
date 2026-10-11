"use client";
import type { ReactNode } from "react";
import type { Placement } from "@/lib/types";

interface TrackWindow extends Window {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
}
interface Props { href: string; productId: string; placement: Placement; className?: string; children: ReactNode; ariaLabel?: string }

// Native anchor: navigation never depends on JS. Tracking is fire-and-forget and non-blocking.
export default function TrackedLink({ href, productId, placement, className, children, ariaLabel }: Props) {
  const onClick = () => {
    try {
      const w = window as TrackWindow;
      const payload = { product_id: productId, placement, destination: href };
      w.gtag?.("event", "affiliate_click", { ...payload, transport_type: "beacon" });
      w.fbq?.("trackCustom", "AffiliateClick", { product_id: productId, placement });
      const ep = process.env.NEXT_PUBLIC_CLICK_ENDPOINT;
      if (ep && navigator.sendBeacon) navigator.sendBeacon(ep, JSON.stringify({ ...payload, ts: Date.now() }));
    } catch {
      /* analytics must never block navigation */
    }
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}
