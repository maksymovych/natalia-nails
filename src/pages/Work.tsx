import { useSearchParams } from "react-router-dom";
import { portfolio, portfolioCategories, type PortfolioCategory } from "../data/portfolio";
import { site } from "../config/site";
import { usePageMeta } from "../hooks/usePageMeta";
import Gallery from "../components/Gallery";
import SectionHeading from "../components/SectionHeading";
import BookingBand from "../components/BookingBand";

type Filter = PortfolioCategory | "all";
const validFilters = new Set<string>(portfolioCategories.map((c) => c.id));

export default function Work() {
  usePageMeta("Portfolio", `Nail work by ${site.name} in ${site.location.label}: nude nails, French, summer and spring sets.`);
  const [params, setParams] = useSearchParams();
  const raw = params.get("category") ?? "all";
  const active: Filter = validFilters.has(raw) ? (raw as Filter) : "all";
  const items = active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  const select = (id: Filter) => {
    setParams(id === "all" ? {} : { category: id }, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <section className="container-page pb-20 pt-10 sm:pt-16">
        <SectionHeading as="h1" eyebrow="Portfolio" title="My work">
          <p>A selection of recent sets. Follow along on Instagram for the newest work.</p>
        </SectionHeading>

        <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="group" aria-label="Filter by category" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {portfolioCategories.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => select(c.id)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    isActive ? "border-ink bg-ink text-ivory" : "border-ink/15 text-muted hover:border-ink/50 hover:text-ink"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10" aria-live="polite">
          {items.length > 0 ? (
            <Gallery key={active} items={items} />
          ) : (
            <p className="bg-ivory px-6 py-16 text-center text-muted">
              No photos in this category yet — check{" "}
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
                {site.instagram.handle}
              </a>{" "}
              for the latest work.
            </p>
          )}
        </div>
      </section>
      <BookingBand title="Love a look? Let's create yours." />
    </>
  );
}
