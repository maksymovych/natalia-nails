import { CalendarDays, MapPin } from "lucide-react";
import { site } from "../config/site";
import { usePageMeta } from "../hooks/usePageMeta";
import BookingButton from "../components/BookingButton";
import InstagramIcon from "../components/InstagramIcon";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  usePageMeta("Contact", `Contact ${site.name} in ${site.location.label} via Instagram, or book on Fresha.`);

  return (
    <section className="container-page pb-20 pt-10 sm:pt-16 sm:pb-28">
      <SectionHeading as="h1" eyebrow="Contact" title="Say hello">
        <p>The quickest way to reach me is on Instagram. For appointments, please book through Fresha.</p>
      </SectionHeading>

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        <li className="flex flex-col bg-blush/50 p-8">
          <InstagramIcon className="h-6 w-6" />
          <h2 className="mt-8 font-sans text-sm uppercase tracking-[0.2em] text-muted">Instagram</h2>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 break-words font-serif text-2xl link-underline"
          >
            {site.instagram.handle}
          </a>
        </li>
        <li className="flex flex-col bg-cream p-8">
          <MapPin className="h-6 w-6" aria-hidden="true" />
          <h2 className="mt-8 font-sans text-sm uppercase tracking-[0.2em] text-muted">Location</h2>
          <p className="mt-2 font-serif text-2xl">{site.studio.name}</p>
          <p className="mt-2 text-sm text-muted">
            {site.studio.street}
            <br />
            {site.studio.city}
          </p>
          <a href={site.studio.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 self-start text-sm link-underline">
            Open in Google Maps
          </a>
        </li>
        <li className="flex flex-col bg-lilac/50 p-8">
          <CalendarDays className="h-6 w-6" aria-hidden="true" />
          <h2 className="mt-8 font-sans text-sm uppercase tracking-[0.2em] text-muted">Booking</h2>
          <p className="mt-2 font-serif text-2xl">{site.booking.provider}</p>
          <p className="mt-2 text-sm text-muted">Live availability and opening hours are shown on Fresha.</p>
          <BookingButton variant="link" className="mt-4 self-start" />
        </li>
      </ul>
    </section>
  );
}
