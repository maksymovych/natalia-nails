/**
 * Portfolio configuration
 * =======================
 * Each entry renders one tile in the gallery (/work) and, if `featured` is true,
 * on the home page.
 *
 * HOW TO ADD A PHOTO
 * 1. Copy the image into  public/images/portfolio/   (review screenshots go in
 *    public/images/reviews/). JPG, PNG and WebP are supported.
 * 2. Add an entry below. `src` is the path relative to /public, starting with "/images/...".
 * 3. Pick one category from `PortfolioCategory`.
 *
 * Rules: use only Nataliia's own work (or photos she has permission to publish).
 * Never use stock photos, and never use Instagram screenshots with app UI — crop the
 * original nail photo instead.
 *
 * Missing files are handled gracefully: the tile shows a neutral "photo coming soon"
 * placeholder instead of a broken image.
 *
 * NOTE: the current photos were cropped from phone screenshots of the
 * @nataliia.nails.ndbeauty profile supplied by the owner, so they are small
 * (about 200–540px wide). Replace them with the original photo files when available,
 * keeping the same filenames to avoid editing this list.
 */

export type PortfolioCategory = "nude" | "french" | "summer" | "spring" | "reviews";

export interface PortfolioItem {
  /** Unique, stable identifier. */
  id: string;
  /** Local path under /public, e.g. "/images/portfolio/nude-almond-01.webp". */
  src: string;
  category: PortfolioCategory;
  /** Short caption shown in the gallery and lightbox. */
  caption: string;
  /** Describes the image for screen readers. Falls back to the caption. */
  alt?: string;
  /** Show on the home page "Featured work" grid. */
  featured?: boolean;
}

export const portfolioCategories: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "nude", label: "Nude Nails" },
  { id: "french", label: "French" },
  { id: "summer", label: "Summer Nails" },
  { id: "spring", label: "Spring Nails" },
  { id: "reviews", label: "Reviews" },
];

const p = (file: string) => `/images/portfolio/${file}`;
const r = (file: string) => `/images/reviews/${file}`;

export const portfolio: PortfolioItem[] = [
  {
    id: "nude-pink-ombre-square",
    src: p("nude-pink-ombre-square.webp"),
    category: "nude",
    caption: "Soft pink ombré",
    alt: "Two hands with short square nails in a soft milky-pink ombré",
    featured: true,
  },
  {
    id: "french-black-tips-bow",
    src: p("french-black-tips-bow.webp"),
    category: "french",
    caption: "Black French with bow detail",
    alt: "Almond nails with black French tips, one black nail and a hand-painted bow accent",
    featured: true,
  },
  {
    id: "spring-lavender",
    src: p("spring-lavender.webp"),
    category: "spring",
    caption: "Lavender gel",
    alt: "Hand holding fresh lavender, nails in a soft shimmering lilac gel",
    featured: true,
  },
  {
    id: "french-classic-square",
    src: p("french-classic-square.webp"),
    category: "french",
    caption: "Classic white French",
    alt: "Square nails with a crisp classic white French tip on a nude base",
    featured: true,
  },
  {
    id: "spring-yellow-lilac-floral",
    src: p("spring-yellow-lilac-floral.webp"),
    category: "spring",
    caption: "Butter yellow & lilac florals",
    alt: "Almond nails in butter yellow with lilac hand-painted flowers",
    featured: true,
  },
  {
    id: "nude-white-ombre-almond",
    src: p("nude-white-ombre-almond.webp"),
    category: "nude",
    caption: "Nude-to-white ombré",
    alt: "Almond nails with a soft nude-to-white ombré finish",
    featured: true,
  },
  {
    id: "summer-lime-french-floral",
    src: p("summer-lime-french-floral.webp"),
    category: "summer",
    caption: "Lime French with florals",
    alt: "Square nude nails with lime-yellow French tips and delicate floral art",
  },
  {
    id: "french-mocha-tips-dots",
    src: p("french-mocha-tips-dots.webp"),
    category: "french",
    caption: "Mocha French with dots",
    alt: "Long almond nails with mocha-brown French tips and tiny white dots",
  },
  {
    id: "summer-aurora-chrome",
    src: p("summer-aurora-chrome.webp"),
    category: "summer",
    caption: "Aurora chrome",
    alt: "Almond nails with an iridescent aurora chrome finish",
  },
  {
    id: "spring-blue-french-floral",
    src: p("spring-blue-french-floral.webp"),
    category: "spring",
    caption: "Blue French & florals",
    alt: "Almond nails with slate-blue French tips, accent nails and painted flowers",
  },
  {
    id: "nude-short-tiny-hearts",
    src: p("nude-short-tiny-hearts.webp"),
    category: "nude",
    caption: "Tiny hearts",
    alt: "Short sheer-pink nails with tiny red hearts",
  },
  {
    id: "nude-pink-glitter-almond",
    src: p("nude-pink-glitter-almond.webp"),
    category: "nude",
    caption: "Glitter ombré",
    alt: "Almond nude nails with silver glitter fading from the tips",
  },
  {
    id: "french-glitter-white-tips",
    src: p("french-glitter-white-tips.webp"),
    category: "french",
    caption: "Shimmer French",
    alt: "Long almond nails with a shimmering nude base and white French tips",
  },
  {
    id: "nude-sparkle-square",
    src: p("nude-sparkle-square.webp"),
    category: "nude",
    caption: "Sparkle nude",
    alt: "Square nails in a sparkling champagne nude with a shimmer French accent",
  },
  {
    id: "nude-silver-glitter-art",
    src: p("nude-silver-glitter-art.webp"),
    category: "nude",
    caption: "Silver sparkle art",
    alt: "Almond nails in pale shimmer with silver foil and glitter nail art",
  },
  {
    id: "french-soft-pink-short",
    src: p("french-soft-pink-short.webp"),
    category: "french",
    caption: "Soft pink French",
    alt: "Short square nails with a soft pink base and fine white French tips",
  },
  // Review screenshots (from the "Reviews" highlight). Shown uncropped in the gallery.
  {
    id: "review-best-european-mani-pedi",
    src: r("review-best-european-mani-pedi.webp"),
    category: "reviews",
    caption: "“The best European Mani & Pedi”",
    alt: "Client photo of lilac nails holding lavender, with notes: the best European mani and pedi, sterile single-use tools, one of a kind nail tech",
  },
  {
    id: "review-builder-gel",
    src: r("review-builder-gel.webp"),
    category: "reviews",
    caption: "“Builder gel for life”",
    alt: "Client photo of short pale-pink builder gel nails with the note: builder gel for life",
  },
  {
    id: "review-simplicity-elegance",
    src: r("review-simplicity-elegance.webp"),
    category: "reviews",
    caption: "Simplicity, elegance and brilliance",
    alt: "Pink ombré square nails shared by a client with a heart-eyes reaction",
  },
];

/** The photo used in the home-page hero. Point this at the strongest portfolio image. */
export const heroImage: Pick<PortfolioItem, "src" | "alt"> = {
  src: p("hero-pink-ombre-square.webp"),
  alt: "Soft milky-pink ombré manicure on short square nails by Nataliia",
};
