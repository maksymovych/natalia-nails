/**
 * Site-wide configuration — the single place to edit contact and booking details.
 *
 * BOOKING (Fresha is the booking system of record)
 * ------------------------------------------------
 * `FRESHA_BOOKING_URL` is Nataliia's own booking link (her employee profile at
 * ND Beauty Space on Fresha), supplied by the owner. Do not include a `cartId`
 * parameter — that is a one-off shopping-cart session.
 *
 * It can be overridden with the VITE_FRESHA_BOOKING_URL environment variable (e.g. in
 * Vercel). Only https://*.fresha.com links are accepted; anything else is ignored and
 * booking buttons fall back to the /book page.
 *
 * Embedding: Fresha currently sends `Content-Security-Policy: frame-ancestors 'self'
 * https://*.fresha.com`, so the booking flow cannot be embedded in an iframe on this
 * site. Booking buttons open Fresha in a new tab instead.
 */
const FRESHA_BOOKING_URL =
  "https://www.fresha.com/a/nd-beauty-space-hamilton-608-upper-wellington-street-sstmitbq/booking?modal=employee-profile&employeeId=3039894&back=%2Fa%2Fnd-beauty-space-hamilton-608-upper-wellington-street-sstmitbq";

/** The studio's public Fresha page (all services, reviews, opening hours). */
const FRESHA_STUDIO_URL = "https://www.fresha.com/a/nd-beauty-space-hamilton-608-upper-wellington-street-sstmitbq";

function resolveFreshaUrl(raw: string | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    const isFresha = url.hostname === "fresha.com" || url.hostname.endsWith(".fresha.com");
    if (url.protocol !== "https:" || !isFresha) {
      console.warn("[site config] Ignoring booking URL that is not an https Fresha link:", value);
      return null;
    }
    return url.toString();
  } catch {
    console.warn("[site config] Invalid booking URL:", value);
    return null;
  }
}

const bookingUrl = resolveFreshaUrl(
  (import.meta.env.VITE_FRESHA_BOOKING_URL as string | undefined) || FRESHA_BOOKING_URL,
);

export const site = {
  name: "Nataliia Nails",
  artist: "Nataliia",
  tagline: "Beautiful nails. Thoughtfully crafted.",
  summary: "European manicure, dry pedicure, and nail extensions in Hamilton, Ontario.",
  location: {
    city: "Hamilton",
    region: "Ontario",
    country: "Canada",
    label: "Hamilton, Ontario",
  },
  /** Studio where Nataliia works — as listed publicly on Fresha. */
  studio: {
    name: "ND Beauty Space",
    street: "608 Upper Wellington Street, Suite 1",
    city: "Hamilton, ON L9A 3P9",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=ND+Beauty+Space+608+Upper+Wellington+Street+Hamilton+ON",
  },
  instagram: {
    handle: "@nataliia.nails.ndbeauty",
    url: "https://www.instagram.com/nataliia.nails.ndbeauty/",
  },
  booking: {
    provider: "Fresha",
    /** Nataliia's personal booking link. */
    url: bookingUrl,
    /** Studio page with the full service menu, reviews and opening hours. */
    studioUrl: FRESHA_STUDIO_URL,
  },
} as const;

export const isBookingConfigured = site.booking.url !== null;
