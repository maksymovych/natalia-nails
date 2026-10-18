/**
 * Verified reviews
 * ================
 * Only add reviews that genuinely exist, copied word-for-word from the source
 * (e.g. Fresha or Google). Never invent or paraphrase testimonials.
 *
 * Sources for the current entries:
 * - Instagram: client stories saved in the "Reviews" highlight on @nataliia.nails.ndbeauty.
 * - Fresha: public reviews for appointments with Nataliia at ND Beauty Space.
 */

export interface Review {
  id: string;
  /** Exact review text. */
  quote: string;
  /** Client name as displayed on the source platform, e.g. "Anna K." */
  author: string;
  /** Where the review was published. */
  source: "Fresha" | "Google" | "Instagram";
  /** Service, if the source shows it. */
  service?: string;
  /** Optional date as shown on the source, e.g. "August 2024". */
  date?: string;
}

export const reviews: Review[] = [
  {
    id: "ig-nadia",
    quote: "The best European Mani & Pedi. Sterile/single use tools. One of a kind nail tech.",
    author: "@nadia_hazhir",
    source: "Instagram",
    date: "August 2024",
  },
  {
    id: "ig-moody",
    quote: "Builder gel for life",
    author: "@moody.irl",
    source: "Instagram",
    date: "July 2024",
  },
  {
    id: "fresha-rita",
    quote: "Natalia is wonderful and, as always happy with how they turned out.",
    author: "Rita F.",
    source: "Fresha",
    service: "Express gel manicure",
  },
  {
    id: "fresha-judith",
    quote: "Amazing as always!",
    author: "Judith S.",
    source: "Fresha",
    service: "Classic gel manicure",
  },
];
