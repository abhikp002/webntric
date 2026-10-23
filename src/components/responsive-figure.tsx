import Image from "next/image";

export interface ResponsiveFigureProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  creditCreator?: string;
  creditSourceUrl?: string;
  aspectRatio?: "16/10" | "16/9" | "4/3" | "3/2";
  aspectRatioClass?: string;
  className?: string;
  imageClassName?: string;
  badgeLabel?: string;
}

const ASPECT_MAP: Record<NonNullable<ResponsiveFigureProps["aspectRatio"]>, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
};

export function ResponsiveFigure({
  src,
  mobileSrc,
  alt,
  width = 1200,
  height = 800,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw",
  priority = false,
  aspectRatio = "16/10",
  aspectRatioClass,
  className = "",
  imageClassName = "",
  badgeLabel,
}: ResponsiveFigureProps) {
  const resolvedAspectClass = aspectRatioClass ?? ASPECT_MAP[aspectRatio];

  return (
    <figure
      className={`group relative overflow-hidden rounded-xl border border-border bg-surface shadow-sm ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-surface-muted ${resolvedAspectClass}`}
      >
        {badgeLabel && (
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-xs border border-border text-[11px] font-mono font-semibold text-primary shadow-2xs">
            {badgeLabel}
          </div>
        )}

        {mobileSrc ? (
          <>
            {/* Mobile art-directed crop (< 640px) */}
            <Image
              src={mobileSrc}
              alt={alt}
              width={800}
              height={600}
              sizes="100vw"
              priority={priority}
              className={`block sm:hidden h-full w-full object-cover object-center ${imageClassName}`}
            />
            {/* Tablet & Desktop crop (>= 640px) */}
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              className={`hidden sm:block h-full w-full object-cover object-center ${imageClassName}`}
            />
          </>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className={`h-full w-full object-cover object-center ${imageClassName}`}
          />
        )}
      </div>
    </figure>
  );
}
