/**
 * 🧩 SECTION HEADER
 *
 * Encabezado reutilizable para secciones.
 * Muestra título y descripción opcional.
 */

export default function SectionHeader({ title, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-4 text-center ${className}`}>
      {/* TÍTULO */}
      <h2
        className="
          text-2xl sm:text-3xl font-bold
          text-[var(--color-txtligth-primary)]
          dark:text-[var(--color-txtdark-primary)]
        "
      >
        {title}
      </h2>

      {/* DESCRIPCIÓN */}
      {description && (
        <p
          className="
            max-w-2xl mx-auto
            text-base sm:text-lg leading-relaxed
            text-[var(--color-txtligth-secondary)]
            dark:text-[var(--color-txtdark-secondary)]
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
