import { site } from "../config/site";
import BookingButton from "./BookingButton";

/** Full-width booking call-to-action used near the bottom of pages. */
export default function BookingBand({ title = "Ready for your next set?" }: { title?: string }) {
  return (
    <section className="bg-ink text-ivory">
      <div className="container-page flex flex-col items-start gap-8 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div data-reveal>
          <h2 className="text-4xl leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-md text-ivory/70">
            Choose your service and time on {site.booking.provider}. Your appointment is confirmed by{" "}
            {site.booking.provider}.
          </p>
        </div>
        <BookingButton className="!bg-ivory !text-ink hover:!bg-white" />
      </div>
    </section>
  );
}
