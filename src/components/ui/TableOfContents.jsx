"use client";

import { useState, useEffect } from "react";

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function TableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const id = slugify(item);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav className="rounded-2xl border border-light-border dark:border-dark-border bg-bgligth-main dark:bg-bgdark-secondary p-5">
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-txtligth-primary dark:text-txtdark-primary font-primary">
        Contenido
      </h4>
      <ul className="space-y-1.5">
        {items.map((item) => {
          const id = slugify(item);
          const isActive = activeId === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`block rounded-lg px-3 py-2 text-sm leading-snug font-secondary transition-colors ${
                  isActive
                    ? "bg-brand-accent/10 text-brand-accent font-semibold"
                    : "text-txtligth-secondary dark:text-txtdark-secondary hover:text-txtligth-primary dark:hover:text-txtdark-primary hover:bg-bgligth-secondary dark:hover:bg-bgdark-tertiary"
                }`}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
