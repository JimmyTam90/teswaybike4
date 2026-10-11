export type AffiliateStatus = "VERIFIED" | "PLAUSIBLE" | "UNKNOWN";
export interface Specs { power: string; speed: string; battery: string; range: string; suspension: string; load: string }
export interface Product {
  id: string; name: string; shortName: string; tagline: string; bestFor: string;
  productUrl: string; affiliateUrl: string; affiliateStatus: AffiliateStatus;
  availability: string; price: string; regularPrice: string;
  image: string; imageAlt: string; colors: string[]; specs: Specs; sourcePage: string;
}
export type Placement = "header" | "hero" | "card" | "table" | "final" | "sticky";
