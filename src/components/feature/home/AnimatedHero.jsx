"use client";

/**
 * AnimatedHero
 *
 * Solución correcta:
 * - NO animar props por separado
 * - Construir TODO dentro de un único motion container
 */

import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";

export default function AnimatedHero({
  title,
  description,
  children,
  ...rest
}) {
  /**
   * Contenedor con stagger
   */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  /**
   * Animación individual
   */
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Hero
      {...rest}
      /**
       * 🔥 IMPORTANTE:
       * Vaciamos title y description del Hero
       * porque los vamos a renderizar nosotros
       */
      title={null}
      description={null}
    >
      {/**
       * 🔥 UN SOLO CONTEXTO DE ANIMACIÓN
       */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        {/**
         * TÍTULO (ANTES ERA H1 EN HERO)
         */}
        <motion.h1
          variants={item}
          className="
            text-white font-black font-primary leading-tight
            text-4xl lg:text-5xl
          "
        >
          {title}
        </motion.h1>

        {/**
         * DESCRIPCIÓN
         */}
        {description && (
          <motion.p
            variants={item}
            className="text-gray-200 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/**
         * BOTONES / CHILDREN
         */}
        {children && <motion.div variants={item}>{children}</motion.div>}
      </motion.div>
    </Hero>
  );
}
