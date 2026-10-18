import { CalendarCheck, ListChecks, MailCheck, MapPin } from "lucide-react";
import { isBookingConfigured, site } from "../config/site";
import { usePageMeta } from "../hooks/usePageMeta";
import BookingButton from "../components/BookingButton";
import InstagramIcon from "../components/InstagramIcon";
import SectionHeading from "../components/SectionHeading";

const steps = [
  { icon: ListChecks, title: "Choose a service", text: "Pick your service on Fresha, with current prices and durations." },
  { icon: CalendarCheck, title: "Pick a time", text: "See Nataliia's live availability and select a slot that suits you." },
  { icon: MailCheck, title: "Get confirmation", text: "Fresha confirms your appointment and sends you the details." },
];

export default function Book() {
  usePageMeta("Book an appointment", `Book your appointment with ${site.artist} at ${site.studio.name}, ${site.location.label}, on Fresha.`);

  return (
    <section className="container-page pb-20 pt-10 sm:pt-16 sm:pb-28">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading as="h1" eyebrow="Booking" title="Book an appointment">
            <p>
              Appointments are booked through {site.booking.provider}, where you'll see live availability, current
              prices, and service durations.
            </p>
          </SectionHeading>

          {isBookingConfigured ? (
            <div className="mt-10">
              <BookingButton label={`Book with ${site.artist} on ${site.booking.provider}`} />
              <p className="mt-4 max-w-md text-sm text-muted">
                Opens {site.booking.provider} in a new tab. Your appointment is confirmed only once{" "}
                {site.booking.provider} confirms it.
              </p>
            </div>
          ) : (
            <div className="mt-10 border border-beige/60 bg-ivory p-6 sm:p-8" role="status">
              <p className="font-serif text-2xl">Online booking is being set up.</p>
              <p className="mt-3 text-muted">In the meantime, send a message on Instagram to arrange an appointment.</p>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                <InstagramIcon className="h-4 w-4" />
                Message {site.instagram.handle}
              </a>
            </div>
          )}

          <div className="mt-12 flex gap-4 border-t border-ink/10 pt-8">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="font-serif text-2xl">{site.studio.name}</p>
              <p className="mt-1 text-muted">
                {site.studio.street}
                <br />
                {site.studio.city}
              </p>
              <a href={site.studio.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm link-underline">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div>
          <ol className="space-y-px bg-ink/10">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 bg-white py-6 first:pt-0 sm:gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush/50">
                  <s.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Step {i + 1}</p>
                  <h2 className="mt-1 text-2xl">{s.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">
            Questions before booking?{" "}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
              Message on Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
