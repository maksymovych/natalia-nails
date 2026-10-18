import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found");
  return (
    <section className="container-page flex flex-col items-start py-24 sm:py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-5xl sm:text-6xl">This page doesn't exist.</h1>
      <p className="mt-4 text-muted">It may have moved. Let's get you back.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
        <Link to="/work" className="btn-secondary">
          Explore my work
        </Link>
      </div>
    </section>
  );
}
