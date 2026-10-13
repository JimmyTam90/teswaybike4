// PRODUCT DATA MANIFEST: single source of truth. Every card, table row and CTA reads from here.
// Facts were taken from teswaybike.com product pages on 2026-10-11 (see `sources`).
// Prices/promotions on the merchant site change; the UI labels them "at time of review".

export type VerificationStatus = "VERIFIED" | "OBSERVED" | "PLAUSIBLE" | "UNKNOWN";
export type Availability = "IN_STOCK" | "PARTIAL" | "UNKNOWN";

export const AFFILIATE_REF_PARAM = "ref";
export const AFFILIATE_REF_VALUE = "pwcheysy"; // supplied by the project owner; not invented
export const MERCHANT_ORIGIN = "https://teswaybike.com";
export const LAST_CHECKED = "2026-10-11";

/** Fallback only. Not used for any product CTA while product-specific URLs exist. */
export const DEFAULT_AFFILIATE_URL = `${MERCHANT_ORIGIN}/?${AFFILIATE_REF_PARAM}=${AFFILIATE_REF_VALUE}`;

/** Adds ref once, preserving existing query params and hash. */
export function buildAffiliateUrl(originalUrl: string): string {
  const u = new URL(originalUrl);
  if (!u.searchParams.has(AFFILIATE_REF_PARAM)) {
    u.searchParams.set(AFFILIATE_REF_PARAM, AFFILIATE_REF_VALUE);
  }
  return u.toString();
}

export interface ProductImage {
  url: string;
  alt: string;
  source: string;
  verification: VerificationStatus;
}

export interface Specs {
  motor: string;
  torque: string;
  battery: string;
  range: string;
  topSpeed: string;
  brakes: string;
  tires: string;
  suspension: string;
  weight: string;
  payload: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  originalUrl: string;
  affiliateUrl: string;
  affiliateStatus: VerificationStatus;
  affiliateConfidence: "LOW" | "MEDIUM";
  availability: Availability;
  availabilityNote: string;
  priceLabel: string;
  salePrice: number;
  regularPrice: number;
  currency: "USD";
  image: ProductImage;
  features: string[];
  useCases: string[];
  specs: Specs;
  sources: string[];
  lastCheckedAt: string;
}

const CDN = `${MERCHANT_ORIGIN}/cdn/shop/files`;
function makeImage(file: string, v: string, alt: string, page: string): ProductImage {
  // Dimensions are intentionally not stored: containers use fixed aspect ratios + object-fit.
  return {
    url: `${CDN}/${file}?v=${v}&width=900`,
    alt,
    source: page,
    verification: "OBSERVED", // seen on the merchant product page; HTTP status checked separately
  };
}

function product(p: Omit<Product, "affiliateUrl" | "lastCheckedAt" | "affiliateStatus" | "affiliateConfidence" | "currency">): Product {
  return {
    ...p,
    currency: "USD",
    affiliateUrl: buildAffiliateUrl(p.originalUrl),
    // Product page exists (verified). ref attribution is NOT verifiable from here: the merchant
    // redirects/canonicalizes and the final URL no longer shows ref. Keep as PLAUSIBLE.
    affiliateStatus: "PLAUSIBLE",
    affiliateConfidence: "MEDIUM",
    lastCheckedAt: LAST_CHECKED,
  };
}

const C5_PAGE = `${MERCHANT_ORIGIN}/products/tesway-c5-awd-cargo-ebike`;
const X5_PAGE = `${MERCHANT_ORIGIN}/products/tesway-x5-awd`;
const X7_PAGE = `${MERCHANT_ORIGIN}/products/tesway-x7-awd`;
const X9_PAGE = `${MERCHANT_ORIGIN}/products/tesway-x9-ultra`;

export const products: Product[] = [
  product({
    id: "c5-awd",
    name: "TESWAY C5 AWD Cargo E-Bike",
    shortName: "C5 AWD Cargo",
    tagline: "Dual-motor longtail cargo e-bike for family rides, errands and hauling",
    category: "Cargo E-Bike",
    originalUrl: C5_PAGE,
    availability: "IN_STOCK",
    availabilityNote: "Black and Sage variants both listed at $2,099 with no sold-out flag.",
    priceLabel: "$2,099",
    salePrice: 2099,
    regularPrice: 3099,
    image: makeImage("TESWAYC5AWDEbike.webp", "1787827627", "TESWAY C5 AWD longtail cargo e-bike", C5_PAGE),
    features: [
      "Dual-motor AWD, 3600W peak",
      "Up to 450 lbs payload",
      "Longtail rear cargo area",
      "Low-step frame, hydraulic brakes",
    ],
    useCases: ["Family rides", "Grocery and school runs", "Delivery work", "Camping and weekend trips"],
    specs: {
      motor: "Dual motor AWD, 2000W rated / 3600W peak (52V)",
      torque: "200 N·m",
      battery: "52V 60Ah",
      range: "Up to 200 mi pedal assist (180 mi pure electric), optimal conditions",
      topSpeed: "38 mph (default 16 mph)",
      brakes: "Front and rear 4-piston hydraulic, 203 mm rotors",
      tires: '20" × 4.0" Kenda fat tires',
      suspension: "Front hydraulic fork",
      weight: "132 lbs",
      payload: "450 lbs",
    },
    sources: [C5_PAGE],
  }),
  product({
    id: "x5-awd",
    name: "TESWAY X5 AWD Step-Thru E-Bike",
    shortName: "X5 AWD Step-Thru",
    tagline: "Easy-mount step-thru frame with dual-motor power",
    category: "Step-Thru E-Bike",
    originalUrl: X5_PAGE,
    availability: "IN_STOCK",
    availabilityNote: "Black, Gray and Dark Green variants listed at $1,799 with no sold-out flag.",
    priceLabel: "$1,799",
    salePrice: 1799,
    regularPrice: 2699,
    image: makeImage("3_35444739-fcb1-4abe-b463-5f9254d7d4de.webp", "1782374932", "TESWAY X5 AWD step-thru electric bike", X5_PAGE),
    features: ["Step-thru frame", "Dual-motor AWD, 3600W peak", "52V 60Ah battery", "Front and rear suspension"],
    useCases: ["Commuting", "Casual rides", "Trails and light off-road"],
    specs: {
      motor: "Dual motor AWD, 2000W rated / 3600W peak (52V)",
      torque: "200 N·m",
      battery: "52V 60Ah",
      range: "Up to 200 mi pedal assist (180 mi pure electric), optimal conditions",
      topSpeed: "38 mph (default 16 mph)",
      brakes: "Front and rear 4-piston hydraulic, 203 mm rotors",
      tires: '20" × 4.0" Kenda fat tires',
      suspension: "Front hydraulic fork + rear spring",
      weight: "119 lbs",
      payload: "400 lbs",
    },
    sources: [X5_PAGE],
  }),
  product({
    id: "x7-awd",
    name: "TESWAY X7 AWD Fat Tire E-Bike",
    shortName: "X7 AWD Step-Over",
    tagline: "Step-over dual-motor fat-tire e-bike for commuting and off-road",
    category: "Fat Tire E-Bike",
    originalUrl: X7_PAGE,
    availability: "IN_STOCK",
    availabilityNote: "Black, Blue, Camouflage and Green variants listed, none flagged sold out.",
    priceLabel: "From $1,799",
    salePrice: 1799,
    regularPrice: 2699,
    image: makeImage("2_a06c81ae-d08c-4540-b152-691d79d21436.webp", "1782380388", "TESWAY X7 AWD fat tire electric bike", X7_PAGE),
    features: ["Step-over frame", "Dual-motor AWD, 3600W peak", "52V 60Ah battery", "Full suspension"],
    useCases: ["Commuting", "Off-road trails", "Long-distance touring"],
    specs: {
      motor: "Dual motor AWD, 2000W rated / 3600W peak (52V)",
      torque: "200 N·m",
      battery: "52V 60Ah",
      range: "Up to 200 mi pedal assist (180 mi pure electric), optimal conditions",
      topSpeed: "38 mph (default 16 mph)",
      brakes: "Front and rear 4-piston hydraulic, 203 mm rotors",
      tires: '20" × 4.0" Kenda fat tires',
      suspension: "Front hydraulic fork + rear spring",
      weight: "119 lbs",
      payload: "400 lbs",
    },
    sources: [X7_PAGE],
  }),
  product({
    id: "x9-ultra",
    name: "TESWAY X9 Ultra 60V Dual-Motor E-MTB",
    shortName: "X9 Ultra",
    tagline: "60V dual-motor, full-suspension e-bike with 4000W peak power",
    category: "Dual-Motor E-MTB",
    originalUrl: X9_PAGE,
    availability: "PARTIAL",
    availabilityNote: "Most variants purchasable; Orange / 60V 30Ah is flagged Sold Out.",
    priceLabel: "From $1,859",
    salePrice: 1859,
    regularPrice: 2599,
    image: makeImage("1_8ff0d5a5-ca6a-4431-b73f-9313f4806dc7.webp", "1782381232", "TESWAY X9 Ultra dual-motor fat tire electric bike", X9_PAGE),
    features: ["4000W peak dual motors", "Up to 43 mph", "Full suspension", "26\" × 4.0\" fat tires"],
    useCases: ["Mountain trails", "Steep climbs", "Fast all-terrain riding"],
    specs: {
      motor: "Dual motor, 1200W rated / 2000W peak each (60V)",
      torque: "120 N·m × 2",
      battery: "60V 25Ah or 30Ah (variant dependent)",
      range: "70–100 mi single-motor; 50–70 mi dual-motor",
      topSpeed: "43 mph (default 15 mph)",
      brakes: "Front and rear 4-piston hydraulic, 180 mm rotors",
      tires: '26" × 4.0" Kenda fat tires',
      suspension: "Front hydraulic fork + rear suspension",
      weight: "139 lbs",
      payload: "400 lbs",
    },
    sources: [X9_PAGE],
  }),
];

export const heroProduct = products[0];
export const otherProducts = products.slice(1);

/** Lifestyle images from the C5 page (merchant photos), used with object-cover. */
export const c5Gallery: ProductImage[] = [
  makeImage("TESWAY_C5_AWD_Ebike_Family_Riding.webp", "1787827711", "TESWAY C5 AWD cargo e-bike used for family riding", C5_PAGE),
  makeImage("TESWAY_C5_AWD_Ebike_Delivery.webp", "1787827703", "TESWAY C5 AWD cargo e-bike used for deliveries", C5_PAGE),
  makeImage("TESWAY_C5_AWD_Cargo_Ebike_Garden_Transport.webp", "1787827699", "TESWAY C5 AWD cargo e-bike carrying garden supplies", C5_PAGE),
];
