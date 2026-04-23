"use client";

/**
 * 🗺️ COMPONENTE: CatalogoBreadcrumbs
 *
 * Breadcrumbs para navegación SEO.
 * Actualiza dinámicamente según filtros.
 */
export default function CatalogoBreadcrumbs({ categories = [] }) {
  return (
    <nav
      className="text-sm text-txtligth-secondary dark:text-txtdark-secondary mb-8"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap gap-2">
        <li>
          <a
            href="/"
            className="hover:text-brand-primary transition-colors"
          >
            Inicio
          </a>
        </li>
        <li className="before:content-['/'] before:mr-2">
          <span className="font-semibold">Catálogo</span>
        </li>
        {categories.length > 0 && (
          <li className="before:content-['/'] before:mr-2">
            <span>{categories.join(", ")}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}