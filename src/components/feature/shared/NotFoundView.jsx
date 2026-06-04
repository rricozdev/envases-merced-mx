import Link from "next/link";

/**
 * NotFoundView
 *
 * - Vista reutilizable para estados 404
 * - Sigue el design system (variables global.css)
 * - Independiente de Next (puede usarse en otros flujos)
 */

export default function NotFoundView() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center flex flex-col gap-6">
        {/* Código */}
        <span className="text-6xl font-black text-[var(--color-brand-accent)]">
          404
        </span>

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl font-bold">Página no encontrada</h1>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)]">
          La ruta que estás buscando no existe o fue movida.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium transition cursor-pointer bg-[var(--color-brand-accent)] text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
