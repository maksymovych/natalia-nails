import { useState, type ImgHTMLAttributes } from "react";

interface SafeImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  /** Classes for the wrapper; the wrapper defines the size/aspect ratio. */
  wrapperClassName?: string;
  fallbackLabel?: string;
}

/**
 * Image with a graceful fallback: shows a soft placeholder while loading and,
 * if the file is missing, a neutral "photo coming soon" tile instead of a broken image.
 */
export default function SafeImage({
  src,
  alt,
  wrapperClassName = "",
  className = "",
  fallbackLabel = "Photo coming soon",
  loading = "lazy",
  ...rest
}: SafeImageProps) {
  // Track results per src so the component resets correctly when `src` changes.
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const status = failedSrc === src ? "error" : loadedSrc === src ? "loaded" : "loading";

  return (
    <div className={`relative overflow-hidden bg-cream ${wrapperClassName}`}>
      {status === "error" ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ivory via-cream to-blush/50 p-4 text-center"
        >
          <span className="font-serif text-3xl italic text-beige-dark/70" aria-hidden="true">
            N
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">{fallbackLabel}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setLoadedSrc(src)}
          onError={() => setFailedSrc(src)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  );
}
