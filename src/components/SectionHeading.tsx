import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionHeading({ eyebrow, title, children, align = "left", as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag
        className={`mt-3 leading-[1.05] ${as === "h1" ? "text-5xl sm:text-6xl md:text-7xl" : "text-4xl sm:text-5xl"}`}
      >
        {title}
      </Tag>
      {children && <div className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{children}</div>}
    </div>
  );
}
