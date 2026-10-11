import Image from "next/image";

// Constrained wrapper: image can never overflow or create dead space. CTA is rendered by the parent BELOW this block.
export default function ProductImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-xl bg-slate-900/50 lg:max-w-lg">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 512px, (min-width: 448px) 448px, 100vw" className="object-contain" priority={priority} unoptimized />
    </div>
  );
}
