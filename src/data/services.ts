/**
 * Services
 * ========
 * Fresha is the source of truth for services, prices and durations.
 *
 * Prices and durations below were copied from the ND Beauty Space Fresha listing
 * (Nataliia's booking profile) on the date in `PRICES_CHECKED`. Update them whenever
 * Fresha changes. Never invent values: leave `price` / `duration` as `null` and the
 * site will say "on Fresha" instead of showing a number.
 *
 * `duration` is in minutes exactly as Fresha shows it (a range when Fresha shows one).
 * A 90-minute duration must only be entered for services Fresha lists as 90 minutes.
 */

export const PRICES_CHECKED = "October 2026";

export interface ServiceItem {
  /** Name as on Fresha (tidied capitalisation). */
  name: string;
  /** Display price exactly as on Fresha, e.g. "from CA$65". */
  price: string | null;
  duration: { min: number; max?: number } | null;
  note?: string;
}

export interface ServiceGroup {
  id: string;
  name: string;
  description: string;
  items: ServiceItem[];
}

export const services: ServiceGroup[] = [
  {
    id: "european-manicure",
    name: "European e-file manicure",
    description:
      "A precise, waterless manicure using an electric file (European e-file / combined technique) for clean cuticle work and a neat, long-lasting finish.",
    items: [
      { name: "Classic manicure", price: "from CA$50", duration: { min: 30, max: 45 }, note: "Manicure, nail shaping and hand care" },
      { name: "Express gel manicure", price: "from CA$55", duration: { min: 50, max: 80 }, note: "A quick gel polish refresh" },
      {
        name: "Classic gel manicure",
        price: "from CA$65",
        duration: { min: 80, max: 105 },
        note: "Gel removal, deep e-file manicure, gel coating, minor nail repair and hand care",
      },
    ],
  },
  {
    id: "builder-gel",
    name: "Builder gel / BIAB",
    description:
      "A strengthening overlay for weak or fragile nails, nail-biting habits, or hands that work hard — structure and durability with a smooth finish.",
    items: [
      { name: "Builder gel manicure — short nails", price: "from CA$75", duration: { min: 80, max: 100 } },
      { name: "Builder gel manicure — medium nails", price: "from CA$80", duration: { min: 90, max: 110 } },
    ],
  },
  {
    id: "dry-pedicure",
    name: "Dry pedicure",
    description:
      "A waterless dry pedicure with toenail and heel care: shaping, buffing, cuticle work and gentle removal of calluses and dry skin.",
    items: [{ name: "Dry pedicure — gel or regular polish", price: "from CA$60", duration: { min: 60, max: 80 } }],
  },
  {
    id: "nail-extensions",
    name: "Nail extensions",
    description: "Added length and a refined shape, sculpted to suit your hands and lifestyle.",
    items: [{ name: "Nail extensions", price: null, duration: null }],
  },
  {
    id: "french-nail-art",
    name: "French manicure & nail art",
    description: "Classic or modern French, ombré, chrome and hand-painted details — see the portfolio for ideas.",
    items: [{ name: "French & nail art options", price: null, duration: null, note: "Choose design options when booking" }],
  },
];

export function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}

export function formatDuration(d: { min: number; max?: number }): string {
  return d.max && d.max !== d.min ? `${formatMinutes(d.min)} – ${formatMinutes(d.max)}` : formatMinutes(d.min);
}

/** Lowest "CA$" price in a group, for compact previews. */
export function lowestPrice(group: ServiceGroup): string | null {
  const values = group.items
    .map((i) => i.price?.match(/CA\$(\d+(?:\.\d+)?)/)?.[1])
    .filter((v): v is string => v !== undefined)
    .map(Number);
  return values.length ? `from CA$${Math.min(...values)}` : null;
}
