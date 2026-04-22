export default function ValueCard({
  icon: Icon,
  title,
  description,
  hover = true,
}) {
  return (
    <article
      className={`
        group relative flex flex-col gap-5 items-center text-center p-8 rounded-2xl
        transition-all duration-300

        /* 🎨 FONDO MEJORADO */
        bg-white/70 dark:bg-bgdark-main/60
        backdrop-blur-md

        /* 🧱 BORDE MÁS VISIBLE */
        border border-light-border/50 dark:border-dark-border/50

        /* 🌫 SOMBRA MÁS SUAVE Y PROFUNDA */
        shadow-md hover:shadow-xl

        ${
          hover
            ? `
              hover:-translate-y-2
              hover:border-color-brand-accent/40
            `
            : ""
        }
      `}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-brand-accent/5 to-transparent pointer-events-none" />

      <div
        className="
          flex items-center justify-center size-16 rounded-full
          bg-brand-accent/10
          text-brand-accent

          transition-transform duration-300
          group-hover:scale-110
        "
      >
        <Icon />
      </div>

      {/* TÍTULO */}
      <h3
        className="
          text-xl font-semibold

          text-color-txtligth-primary
          dark:text-color-txtdark-primary
        "
      >
        {title}
      </h3>

      {/* DESCRIPCIÓN */}
      <p
        className="
          text-base leading-relaxed

          text-color-txtligth-secondary
          dark:text-color-txtdark-secondary
        "
      >
        {description}
      </p>
    </article>
  );
}
