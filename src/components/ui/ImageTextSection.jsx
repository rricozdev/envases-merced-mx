/**
 * Componente para mostrar una sección con imagen y texto, con opciones de alineación y orden de la imagen
 * @param {string} imageSrc - URL de la imagen a mostrar
 * @param {string} imageAlt - Texto alternativo para la imagen
 * @param {React.ReactNode} title - Título de la sección, puede ser un string o un elemento React
 * @param {string} description - Descripción o contenido de la sección
 * @param {string} imagePosition - Posición de la imagen ("left" o "right")
 * @param {string} eyebrow - Texto pequeño encima del título (opcional)
 * @param {string} align - Alineación del texto ("left" o "center")
 * @param {string} as - Etiqueta HTML para el contenedor principal (por defecto "section")
 * @param {string} className - Clases adicionales para el contenedor principal
 * @param {React.ReactNode} children - Contenido adicional que se renderizará debajo de la descripción
 */

import React from "react";

export default function ImageTextSection({
  imageSrc,
  imageAlt = "",
  title,
  description,
  imagePosition = "left",
  eyebrow,
  children,
  align = "left",
  as: Tag = "section",
  className = "",
}) {
  const isImageLeft = imagePosition === "left";

  const textAlign =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* Imagen */}
      <div className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full aspect-4/3 object-cover rounded-2xl"
        />
      </div>

      {/* Texto */}
      <div
        className={`
              flex flex-col gap-4
              ${textAlign}
              ${isImageLeft ? "lg:order-2" : "lg:order-1"}
            `}
      >
        {eyebrow && (
          <span className="text-sm font-bold text-brand-accent uppercase tracking-wide font-secondary">
            {eyebrow}
          </span>
        )}

        {title && (
          <h2 className="text-txtligth-primary dark:text-txtdark-primary text-3xl sm:text-4xl font-bold leading-tight font-primary">
            {title}
          </h2>
        )}

        {description && (
          <p className="text-txtligth-secondary font-medium dark:text-txtdark-secondary text-base leading-relaxed max-w-prose font-secondary">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
