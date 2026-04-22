/**
 * 🧩 VALUE CARD
 *
 * Componente para mostrar un valor institucional.
 * Recibe icono como componente, título y descripción.
 *
 * ⚠️ No contiene lógica de negocio, solo presentación.
 */

export default function ValueCard({
  icon: Icon,
  title,
  description,
  hover = true,
}) {
  return (
    <article
      className={`
        flex flex-col gap-5 items-center text-center p-8 rounded-xl shadow-lg transition-transform

        bg-[var(--color-bgligth-main)]
        dark:bg-[var(--color-bgdark-main)]

        border
        border-[var(--color-light-border)]
        dark:border-[var(--color-dark-border)]

        ${
          hover
            ? `
              hover:-translate-y-1
              hover:border-[var(--color-brand-accent)]
              dark:hover:bg-[var(--color-bgdark-secondary)]
              hover:bg-[var(--color-bgligth-secondary)]
            `
            : ""
        }
      `}
    >
      {/* ICONO */}
      <div
        className="
          flex items-center justify-center size-16 rounded-full

          bg-[var(--color-brand-accent)]/10
          text-[var(--color-brand-accent)]
        "
      >
        <Icon />
      </div>

      {/* TÍTULO */}
      <h3
        className="
          text-xl font-bold

          text-[var(--color-txtligth-primary)]
          dark:text-[var(--color-txtdark-primary)]
        "
      >
        {title}
      </h3>

      {/* DESCRIPCIÓN */}
      <p
        className="
          text-base leading-relaxed

          text-[var(--color-txtligth-secondary)]
          dark:text-[var(--color-txtdark-secondary)]
        "
      >
        {description}
      </p>
    </article>
  );
}
