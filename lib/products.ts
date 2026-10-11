import type { Product } from "./types";

// PRODUCT DATA MANIFEST: single source of truth. Facts observed on https://teswaybike.com
// (homepage product listing, Oct 2026). Affiliate status is PLAUSIBLE: ?ref=pwcheysy is the
// merchant-provided pattern on the default link; product-page tracking is not independently confirmed.
const REF = "?ref=pwcheysy";
const prod = (slug: string) => `https://teswaybike.com/products/${slug}`;
const img = (file: string) => `https://teswaybike.com/cdn/shop/files/${file}&width=1200`;
const PAGE = "https://teswaybike.com/ (homepage product listing)";

export const products: Product[] = [
  {
    id: "c5-awd", name: "TESWAY C5 AWD Cargo Ebike", shortName: "C5 AWD Cargo",
    tagline: "Cargo-focused all-wheel-drive e-bike with a 450 lb max load.",
    bestFor: "Delivery riders, family hauling and heavy loads",
    productUrl: prod("tesway-c5-awd-cargo-ebike"), affiliateUrl: prod("tesway-c5-awd-cargo-ebike") + REF, affiliateStatus: "PLAUSIBLE",
    availability: "Listed as purchasable (Black, Sage)", price: "$2,099", regularPrice: "$3,099",
    image: img("TESWAYC5AWDEbike.webp?v=1787827627"), imageAlt: "TESWAY C5 AWD cargo e-bike",
    colors: ["Black", "Sage"],
    specs: { power: "3600W peak", speed: "38 mph", battery: "52V 60AH", range: "Up to 200 mi", suspension: "Front fork", load: "450 lbs" },
    sourcePage: PAGE,
  },
  {
    id: "x5-awd", name: "TESWAY X5 AWD Step-Thru E-Bike", shortName: "X5 AWD Step-Thru",
    tagline: "Easy-mount step-thru frame with dual motors and dual suspension.",
    bestFor: "Riders who want easy mounting and a long-range commuter",
    productUrl: prod("tesway-x5-awd"), affiliateUrl: prod("tesway-x5-awd") + REF, affiliateStatus: "PLAUSIBLE",
    availability: "Listed as purchasable (Black, Gray, Dark Green)", price: "$1,799", regularPrice: "$2,699",
    image: img("3_35444739-fcb1-4abe-b463-5f9254d7d4de.webp?v=1782374932"), imageAlt: "TESWAY X5 AWD step-thru e-bike",
    colors: ["Black", "Gray", "Dark Green"],
    specs: { power: "3600W peak", speed: "38 mph", battery: "52V 60AH", range: "Up to 200 mi", suspension: "Dual", load: "400 lbs" },
    sourcePage: PAGE,
  },
  {
    id: "x7-awd", name: "TESWAY X7 AWD Dual Motor E-Bike", shortName: "X7 AWD",
    tagline: "3600W dual motor with 200 Nm torque and dual suspension.",
    bestFor: "Hills, mixed terrain and mixed commute-and-adventure riding",
    productUrl: prod("tesway-x7-awd"), affiliateUrl: prod("tesway-x7-awd") + REF, affiliateStatus: "PLAUSIBLE",
    availability: "Listed as purchasable (Black, Blue, Camouflage, Green)", price: "From $1,799", regularPrice: "$2,699",
    image: img("2_a06c81ae-d08c-4540-b152-691d79d21436.webp?v=1782380388"), imageAlt: "TESWAY X7 AWD dual motor e-bike",
    colors: ["Black", "Blue", "Camouflage", "Green"],
    specs: { power: "3600W peak", speed: "38 mph", battery: "52V 60AH", range: "Up to 200 mi", suspension: "Dual", load: "400 lbs" },
    sourcePage: PAGE,
  },
  {
    id: "x9-ultra", name: "TESWAY X9 Ultra 60V Dual-Motor E-MTB", shortName: "X9 Ultra",
    tagline: "The fastest and most powerful model in the lineup: 4000W peak, 43 mph.",
    bestFor: "Performance riders who prioritise speed and power over maximum range",
    productUrl: prod("tesway-x9-ultra"), affiliateUrl: prod("tesway-x9-ultra") + REF, affiliateStatus: "PLAUSIBLE",
    availability: "Listed as purchasable (Black, Orange, Blue, Camouflage)", price: "From $1,859", regularPrice: "$2,599",
    image: img("1_8ff0d5a5-ca6a-4431-b73f-9313f4806dc7.webp?v=1782381232"), imageAlt: "TESWAY X9 Ultra dual motor fat tire e-bike",
    colors: ["Black", "Orange", "Blue", "Camouflage"],
    specs: { power: "4000W peak", speed: "43 mph", battery: "60V 25-30AH", range: "70-100 mi", suspension: "Dual", load: "400 lbs" },
    sourcePage: PAGE,
  },
];
export const hero = products[0];
export const others = products.slice(1);
