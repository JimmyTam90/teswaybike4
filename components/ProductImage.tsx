import Image from "next/image";
import type { ProductImage as ProductImageData } from "@/lib/products";

interface Props {
  image: ProductImageData;
  priority?: boolean;
  /** "product" = isolated shot, fully visible. "scene" = lifestyle photo, intentional crop. */
  mode?: "product" | "scene";
  sizes?: string;
}

/** Every image sits in an explicitly constrained, fixed-aspect wrapper. */
export default function ProductImage({ image, priority = false, mode = "product", sizes }: Props) {
  const wrapper =
    mode === "product"
      ? "relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl bg-slate-900/50"
      : "relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900/50";
  return (
    <div className={wrapper}>
      <Image
        src={image.url}
        alt={image.alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes ?? "(min-width: 1024px) 480px, (min-width: 640px) 400px, 100vw"}
        className={mode === "product" ? "object-contain p-2" : "object-cover"}
      />
    </div>
  );
}
