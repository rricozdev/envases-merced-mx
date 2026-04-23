"use client";

/**
 * 🚫 COMPONENTE: CatalogoEmpty
 *
 * Mensaje cuando no hay productos que coincidan con los filtros.
 */
export default function CatalogoEmpty() {
  return (
    <div className="text-center py-12" role="status" aria-live="polite">
      <h2 className="text-2xl font-bold text-txtligth-primary dark:text-txtdark-primary mb-4">
        No hay productos que coincidan con tu búsqueda
      </h2>
      <p className="text-txtligth-secondary dark:text-txtdark-secondary">
        Intenta ajustar tus filtros o prueba una nueva búsqueda.
      </p>
    </div>
  );
}
