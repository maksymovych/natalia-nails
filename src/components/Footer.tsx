import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { site } from "../config/site";
import BookingButton from "./BookingButton";
import InstagramIcon from "./InstagramIcon";
import { navItems } from "./Header";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ivory">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="font-serif text-3xl">
            Nataliia <span className="italic text-beige-dark">Nails</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.summary}</p>
          <BookingButton className="mt-8" />
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Find me</p>
          <ul className="mt-5 space-y-4 text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {site.studio.name}
                <br />
                {site.studio.street}
                <br />
                {site.studio.city}
              </span>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                {site.instagram.handle}
              </a>
            </li>
            <li>Booking via {site.booking.provider}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/5">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All nail work shown is by Nataliia.
          </p>
          <p>{site.location.label}, {site.location.country}</p>
        </div>
      </div>
    </footer>
  );
}
