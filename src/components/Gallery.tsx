import { useCallback, useState } from "react";
import { Expand } from "lucide-react";
import type { PortfolioItem } from "../data/portfolio";
import SafeImage from "./SafeImage";
import Lightbox from "./Lightbox";

interface GalleryProps {
  items: PortfolioItem[];
  /** Tailwind grid-cols classes. */
  columns?: string;
}

/** Responsive, uniformly cropped image grid that opens a lightbox on click. */
export default function Gallery({ items, columns = "grid-cols-2 lg:grid-cols-3" }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <ul className={`grid gap-3 sm:gap-5 ${columns}`}>
        {items.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full text-left"
              aria-label={`View larger: ${item.caption}`}
            >
              <div className="relative overflow-hidden">
                <SafeImage
                  src={item.src}
                  alt={item.alt ?? item.caption}
                  wrapperClassName={`aspect-[4/5] ${item.category === "reviews" ? "!bg-ivory" : ""}`}
                  className={`transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${
                    item.category === "reviews" ? "!object-contain" : ""
                  }`}
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                <span className="pointer-events-none absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 font-serif text-lg leading-tight text-ink/90">{item.caption}</p>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onClose={close} onIndexChange={setOpenIndex} />
      )}
    </>
  );
}
