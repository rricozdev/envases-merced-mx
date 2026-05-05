"use client";

/**
 * component para secciones de contenido, con un header y un espacio para contenido extra
 * @param {string} eyebrow - Texto pequeño que aparece encima del título, generalmente para categorizar o destacar el contenido.
 * @param {React.ReactNode} title - Título principal de la sección, que resume el contenido o el mensaje principal.
 * @param {string} description - Texto descriptivo que proporciona más detalles sobre el contenido de la sección.
 * @param {React.ReactNode} children - Contenido adicional a renderizar dentro de la sección.
 */

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 18 },
  },
};

export default function ContentSection({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <>
      {/* Header */}
      <motion.header
        className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {eyebrow && (
          <motion.p
            variants={fadeUp}
            className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent font-primary"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-txtligth-primary dark:text-txtdark-primary font-primary"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-base sm:text-lg leading-relaxed text-txtligth-secondary dark:text-txtdark-secondary font-secondary font-medium"
        >
          {description}
        </motion.p>
      </motion.header>

      {/* contenido extra */}
      {children}
    </>
  );
}
