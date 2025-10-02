"use client";
import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: "H2" | "H3";
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements: Heading[] = Array.from(
      document.querySelectorAll("article h2, article h3")
    ).map((el) => {
      const text = el.textContent ?? "";
      const id =
        el.id || text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      // Ensure each heading has an ID
      if (!el.id) el.id = id;

      return {
        id,
        text,
        level: el.tagName as "H2" | "H3",
      };
    });

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -70% 0%" }
    );

    elements.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="space-y-2 text-sm">
      <h2 className="mb-2 font-semibold text-foreground">Table of Contents</h2>
      <ul className="space-y-1 text-muted-foreground">
        {headings.map((h) => (
          <li key={h.id} className={h.level === "H3" ? "ml-3" : ""}>
            <a
              href={`#${h.id}`}
              className={`block hover:text-primary ${
                activeId === h.id ? "text-primary font-medium" : ""
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
