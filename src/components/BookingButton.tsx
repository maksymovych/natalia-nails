import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { isBookingConfigured, site } from "../config/site";

interface BookingButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "link";
  className?: string;
  /**
   * "fresha": open the Fresha booking flow directly (default).
   * "page": go to the on-site /book page, which explains the process first.
   */
  target?: "fresha" | "page";
  onClick?: () => void;
}

/**
 * Reusable booking call-to-action.
 * Opens the verified Fresha booking URL from src/config/site.ts in a new tab.
 * If no URL is configured yet, it falls back to the /book page.
 * It never confirms a booking itself — confirmation always happens on Fresha.
 */
export default function BookingButton({
  label = "Book an appointment",
  variant = "primary",
  className = "",
  target = "fresha",
  onClick,
}: BookingButtonProps) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    link: "inline-flex items-center gap-1.5 text-sm font-medium link-underline",
  }[variant];

  if (target === "page" || !isBookingConfigured) {
    return (
      <Link to="/book" className={`${classes} ${className}`} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <a
      href={site.booking.url!}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} ${className}`}
      onClick={onClick}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only"> (opens Fresha in a new tab)</span>
    </a>
  );
}
