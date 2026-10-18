import { useEffect } from "react";
import { site } from "../config/site";

/** Sets the document title (and description) for the current route. */
export function usePageMeta(title: string | null, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — Nail Artist in ${site.location.label}`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
