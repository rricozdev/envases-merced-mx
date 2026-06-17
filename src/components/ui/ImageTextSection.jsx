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
"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeSlide = (x) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
});

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

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
      <motion.div
        className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
        variants={fadeSlide(isImageLeft ? -48 : 48)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          width={4}
          height={3}
          loading="lazy"
          className="w-full aspect-4/3 object-cover rounded-2xl"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        className={`
          flex flex-col gap-4
          ${textAlign}
          ${isImageLeft ? "lg:order-2" : "lg:order-1"}
        `}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {eyebrow && (
          <motion.span
            variants={fadeUp}
            className="text-sm font-bold text-brand-accent uppercase tracking-wide font-secondary"
          >
            {eyebrow}
          </motion.span>
        )}

        {title && (
          <motion.h2
            variants={fadeUp}
            className="text-txtligth-primary dark:text-txtdark-primary text-3xl sm:text-4xl font-bold leading-tight font-primary"
          >
            {title}
          </motion.h2>
        )}

        {description && (
          <motion.p
            variants={fadeUp}
            className="text-txtligth-secondary font-medium dark:text-txtdark-secondary text-base leading-relaxed max-w-prose font-secondary"
          >
            {description}
          </motion.p>
        )}

        {children && <motion.div variants={fadeUp}>{children}</motion.div>}
      </motion.div>
    </div>
  );
}
