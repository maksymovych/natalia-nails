import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "../config/site";
import BookingButton from "./BookingButton";
import InstagramIcon from "./InstagramIcon";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-ink/5 bg-white/90 backdrop-blur-md" : "bg-white/0"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="font-serif text-2xl tracking-tight" aria-label={`${site.name} — home`}>
          Nataliia <span className="italic text-beige-dark">Nails</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative py-1 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-300 ${
                      isActive ? "text-ink after:scale-x-100" : "text-muted hover:text-ink after:scale-x-0 hover:after:scale-x-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
            aria-label={`Instagram ${site.instagram.handle} (opens in a new tab)`}
          >
            <InstagramIcon />
          </a>
          <BookingButton label="Book" className="!px-5 !py-2.5" />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 animate-fade-in overflow-y-auto bg-white md:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex min-h-full flex-col pb-10 pt-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.to} className="border-b border-ink/5">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-4 font-serif text-3xl ${isActive ? "text-ink" : "text-muted"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4 pt-10">
              <BookingButton className="w-full" />
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                <InstagramIcon className="h-4 w-4" />
                {site.instagram.handle}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
