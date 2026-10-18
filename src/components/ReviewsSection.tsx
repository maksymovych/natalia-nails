import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reviews } from "../data/reviews";
import { site } from "../config/site";
import SectionHeading from "./SectionHeading";

/**
 * Shows only verified reviews from src/data/reviews.ts.
 * With no reviews entered, it links to the external source instead of inventing any.
 */
export default function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="reviews-heading">
      <div className="container-page">
        <div data-reveal>
          <SectionHeading eyebrow="Kind words" title={<span id="reviews-heading">From clients</span>} align="center">
            {reviews.length === 0 && <p>Verified client reviews live on {site.booking.provider}.</p>}
          </SectionHeading>
        </div>

        {reviews.length > 0 && (
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <li
                key={r.id}
                data-reveal
                className={`flex flex-col p-7 sm:p-8 ${["bg-blush/45", "bg-ivory", "bg-lilac/45", "bg-cream"][i % 4]}`}
              >
                <span className="font-serif text-5xl leading-none text-accent/60" aria-hidden="true">
                  “
                </span>
                <blockquote className="mt-2 flex-1 font-serif text-xl leading-snug sm:text-2xl">{r.quote}</blockquote>
                <p className="mt-6 text-sm text-ink">{r.author}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {[r.source, r.service, r.date].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={site.booking.studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium link-underline"
          >
            More reviews on {site.booking.provider}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link to="/work?category=reviews" className="font-medium link-underline">
            Client stories
          </Link>
        </div>
      </div>
    </section>
  );
}
