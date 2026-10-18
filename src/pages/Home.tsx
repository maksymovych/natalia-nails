import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "../config/site";
import { heroImage, portfolio } from "../data/portfolio";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import BookingButton from "../components/BookingButton";
import BookingBand from "../components/BookingBand";
import Gallery from "../components/Gallery";
import InstagramIcon from "../components/InstagramIcon";
import ReviewsSection from "../components/ReviewsSection";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";
import ServiceList from "../components/ServiceList";

const specialties = [
  { title: "European manicure", text: "Precise e-file cuticle work for a clean, natural-looking finish." },
  { title: "Dry pedicure", text: "A careful, hygienic, waterless approach to soft, tidy feet." },
  { title: "Nail extensions", text: "Elegant length and shape, sculpted to suit your hands." },
];

export default function Home() {
  usePageMeta(null, `${site.summary} Book with ${site.name} on ${site.booking.provider}.`);
  const featured = portfolio.filter((p) => p.featured && p.category !== "reviews").slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-10 pb-16 pt-6 sm:pt-10 md:grid-cols-2 md:gap-16 md:pb-24 lg:pt-14">
          <div className="animate-fade-up md:order-1">
            <p className="eyebrow">Nail artist · {site.location.label}</p>
            <h1 className="mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Beautiful nails.
              <br />
              <span className="italic text-beige-dark">Thoughtfully</span> crafted.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{site.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BookingButton />
              <Link to="/work" className="btn-secondary">
                Explore my work
              </Link>
            </div>
          </div>
          <div className="relative md:order-2">
            <div className="absolute -right-6 -top-6 hidden h-2/3 w-2/3 rounded-t-full bg-blush/40 md:block" aria-hidden="true" />
            <SafeImage
              src={heroImage.src}
              alt={heroImage.alt ?? "Nail work by Nataliia"}
              loading="eager"
              fetchPriority="high"
              wrapperClassName="relative aspect-[4/5] rounded-t-full"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div data-reveal>
            <SectionHeading eyebrow="Meet the artist" title={<>Hi, I'm {site.artist}.</>} />
          </div>
          <div data-reveal>
            <p className="text-lg leading-relaxed text-muted">
              I'm a nail artist at {site.studio.name} in {site.location.label}, specialising in European e-file
              manicure, dry pedicure, and nail extensions — with precise cuticle work, sterile single-use tools, and
              finishes that suit you.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {specialties.map((s) => (
                <li key={s.title} className="border-t border-ink/15 pt-5">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div data-reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Portfolio" title="Featured work" />
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium link-underline">
              View all work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12">
            <Gallery items={featured} />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div data-reveal>
            <SectionHeading eyebrow="Services" title="Care for hands and feet">
              <p>Current prices, durations, and availability are always up to date on {site.booking.provider}.</p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-secondary">
                All services
              </Link>
            </div>
          </div>
          <div data-reveal>
            <ServiceList groups={services.filter((s) => s.items.some((i) => i.price))} compact />
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Instagram + location */}
      <section className="pb-20 sm:pb-28">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group flex flex-col justify-between gap-10 bg-blush/40 p-8 transition-colors hover:bg-blush/60 sm:p-12"
          >
            <InstagramIcon className="h-7 w-7" />
            <div>
              <p className="eyebrow !text-ink/60">Follow along</p>
              <p className="mt-3 break-words font-serif text-3xl sm:text-4xl">{site.instagram.handle}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-ink">
                See the latest sets on Instagram <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </p>
            </div>
          </a>
          <div data-reveal className="flex flex-col justify-between gap-10 bg-cream p-8 sm:p-12">
            <MapPin className="h-7 w-7" aria-hidden="true" />
            <div>
              <p className="eyebrow !text-ink/60">Location</p>
              <p className="mt-3 font-serif text-3xl sm:text-4xl">{site.studio.name}</p>
              <p className="mt-3 text-sm text-muted">
                {site.studio.street}, {site.studio.city}
              </p>
              <a href={site.studio.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm link-underline">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingBand />
    </>
  );
}
