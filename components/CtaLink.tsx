"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface CtaLinkProps {
  href: string;
  productId: string;
  placement: string;
  className?: string;
  children: ReactNode;
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";
const ADS_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CTA_LABEL || "";

/**
 * Native anchor. Tracking is fire-and-forget and never delays navigation.
 * New tab is the project default for external affiliate CTAs; `sponsored` marks paid/affiliate links.
 */
export default function CtaLink({ href, productId, placement, className, children }: CtaLinkProps) {
  const onClick = () => {
    try {
      window.gtag?.("event", "affiliate_cta_click", {
        product_id: productId,
        placement,
        outbound_url: href,
      });
      if (ADS_ID && ADS_LABEL) {
        window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABEL}` });
      }
      window.fbq?.("trackCustom", "AffiliateCtaClick", { product_id: productId, placement });
    } catch {
      /* tracking must never block navigation */
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
