const SIZE_VARIANTS = {
  sm: {
    card: "md:p-4 md:gap-3",
    iconWrapper: "md:size-10",
    icon: "md:size-4",
    title: "md:text-sm",
    body: "md:text-xs",
  },
  md: {
    card: "md:p-5 md:gap-4",
    iconWrapper: "md:size-12",
    icon: "md:size-5",
    title: "md:text-base",
    body: "md:text-sm",
  },
  lg: {
    card: "md:p-7 md:gap-5",
    iconWrapper: "md:size-16",
    icon: "md:size-7",
    title: "md:text-lg",
    body: "md:text-base",
  },
};

const COLOR_VARIANTS = {
  primary: {
    card: "bg-bgligth-main dark:bg-bgdark-main border border-transparent hover:border-brand-accent/20",
    iconWrapper: "bg-brand-accent/10 text-brand-accent",
    title: "text-txtligth-primary dark:text-txtdark-primary",
    body: "text-txtligth-secondary dark:text-txtdark-secondary",
    detail: "text-brand-accent/70",
  },
  accent: {
    card: "bg-brand-accent text-white border border-transparent",
    iconWrapper: "bg-white/20 text-white",
    title: "text-white",
    body: "text-white/80",
    detail: "text-white/60",
  },
};

/**
 * Componente de tarjeta de información para destacar características, beneficios o detalles clave de un producto o servicio.
 * @param {string} title - Título principal de la tarjeta, que resume la información clave.
 * @param {string} description - Descripción detallada que proporciona más contexto o información sobre el título.
 * @param {React.ComponentType} [icon] - Componente de ícono opcional que se muestra en la parte superior de la tarjeta para representar visualmente la información.
 * @param {string} [detail] - Información adicional o detalle específico que se muestra debajo de la descripción, generalmente en un estilo más pequeño o destacado.
 * @param {string} [size="md"] - Tamaño de la tarjeta, que puede ser "sm", "md" o "lg", y ajusta el padding, tamaño del ícono y tipografía.
 * @param {string} [color="primary"] - Variante de color para la tarjeta, que puede ser "primary" o "accent", y ajusta los colores de fondo, texto e ícono.
 * @param {string} [align="center"] - Alineación del contenido dentro de la tarjeta, que puede ser "center" para centrar el texto o "left" para alinearlo a la izquierda.
 * @param {React.ReactNode} [children] - Contenido adicional que se puede renderizar dentro de la tarjeta, debajo de la descripción y el detalle.
 */

export default function CardInfo({
  title,
  description,
  icon: Icon,
  detail,
  size = "md",
  color = "primary",
  align = "center", // center | left
  children,
  className = "",
}) {
  const sizeVariant = SIZE_VARIANTS[size] || SIZE_VARIANTS.md;
  const colorVariant = COLOR_VARIANTS[color] || COLOR_VARIANTS.primary;

  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <article
      className={`
        relative flex flex-col
        ${alignment}
        gap-4 p-4 rounded-2xl shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        ${colorVariant.card}
        ${sizeVariant.card}
        ${className}
      `}
    >
      {/* Icono opcional */}
      {Icon && (
        <div
          className={`
            flex items-center justify-center
            size-14 rounded-full shrink-0
            ${colorVariant.iconWrapper}
            ${sizeVariant.iconWrapper}
          `}
        >
          <Icon className={`size-7 ${sizeVariant.icon}`} />
        </div>
      )}

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        {title && (
          <h3
            className={`
              font-bold text-base leading-snug font-primary
              ${colorVariant.title}
              ${sizeVariant.title}
            `}
          >
            {title}
          </h3>
        )}

        {description && (
          <p
            className={`
              text-sm leading-snug font-secondary font-medium
              ${colorVariant.body}
              ${sizeVariant.body}
            `}
          >
            {description}
          </p>
        )}

        {detail && (
          <span
            className={`
              mt-1 text-xs font-medium font-secondary dark:text-brand-accent-hover
              ${colorVariant.detail}
            `}
          >
            {detail}
          </span>
        )}

        {/* Slot libre 🔥 */}
        {children}
      </div>
    </article>
  );
}
