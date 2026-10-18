import { ArrowUpRight } from "lucide-react";
import { site } from "../config/site";
import { PRICES_CHECKED, services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import BookingBand from "../components/BookingBand";
import SectionHeading from "../components/SectionHeading";
import ServiceList from "../components/ServiceList";

export default function Services() {
  usePageMeta("Services", `European e-file manicure, builder gel, dry pedicure, and nail extensions in ${site.location.label}.`);
  const pricesUrl = site.booking.url ?? site.booking.studioUrl;

  return (
    <>
      <section className="container-page pb-20 pt-10 sm:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading as="h1" eyebrow="Services" title="Services & care">
            <p>
              Every appointment is unhurried and detail-focused. Prices start from the amounts shown and depend on the
              options you choose when booking on {site.booking.provider}.
            </p>
          </SectionHeading>
          <a href={pricesUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0">
            View services and prices
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> on Fresha (opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-16">
          <ServiceList groups={services} />
        </div>

        <p className="mt-12 text-sm text-muted">
          Prices and durations as listed on {site.booking.provider} ({PRICES_CHECKED}). The {site.booking.provider} listing
          is always the most current.
        </p>
      </section>
      <BookingBand />
    </>
  );
}
