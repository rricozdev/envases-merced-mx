/**
 * 📦 ABOUT DATA (Fuente única de contenido)
 *
 * Este archivo centraliza toda la información utilizada en la página `/about`.
 *
 * 🎯 Objetivo:
 * - Separar completamente el contenido de la lógica y la UI
 * - Facilitar mantenimiento y escalabilidad
 * - Permitir reutilización futura (CMS, API, etc.)
 *
 * ⚠️ Reglas:
 * - NO incluir lógica (funciones, hooks, etc.)
 * - NO incluir JSX
 * - Solo datos puros (serializables)
 *
 * 🧠 Este archivo es consumido por:
 * - /app/about/page.jsx (routing + SEO)
 * - /components/feature/about/AboutView.jsx (render)
 */

export const aboutData = {
  /**
   * 🟦 HERO SECTION
   *
   * Contenido principal de apertura de la página.
   * Se renderiza en el componente <Hero />
   */
  hero: {
    title: "Forjando el Futuro del Embalaje",
    description:
      "Desde nuestra fundación, hemos estado comprometidos con la calidad y la innovación en cada envase que fabricamos y distribuimos.",

    /**
     * 🖼️ Imágenes responsivas
     *
     * Se espera que el componente Hero maneje:
     * - desktop → pantallas grandes
     * - mobile → pantallas pequeñas
     */
    images: {
      desktop: "/images/bg_img/bg_about.webp",
      mobile: "/images/bg_img/bg_about-mobile.webp",
    },
  },

  /**
   * 🟨 SECCIÓN: ¿QUIÉNES SOMOS?
   *
   * Contenido informativo institucional.
   * Se usa en <ImageTextSection />
   */
  quienesSomos: {
    title: "¿Quiénes somos?",

    /**
     * 📄 Descripción larga
     *
     * Se permite uso de saltos de línea (\n\n)
     * para mantener legibilidad en el render.
     */
    description: `Envases La Merced nació en el año 2021 como una empresa dedicada a la distribución de envases PET, con un objetivo claro: acercar productos de calidad directamente desde fábrica a nuestros clientes, de forma accesible, práctica y confiable.

Gracias a nuestras alianzas directas con fabricantes, ofrecemos envases PET con altos estándares de calidad, precios competitivos y una atención cercana y personalizada, enfocada en brindar soluciones reales a las necesidades de cada negocio.`,

    srcImg: "/images/section_img/about_quienes_somos.webp",
    altImg: "Banner con productos de envases PET",
  },

  /**
   * 🟩 SECCIÓN: ¿QUÉ HACEMOS?
   *
   * Explica el servicio principal + beneficios clave.
   */
  queHacemos: {
    title: "¿Qué hacemos?",

    /**
     * 🧾 Subtítulo usado como refuerzo SEO / UX
     */
    subtitle:
      "Distribuimos soluciones prácticas en envases PET para negocios de todos los tamaños.",

    description:
      "En Envases La Merced distribuimos envases PET para distintos usos comerciales e industriales, brindando soluciones eficientes a empresas y emprendedores que buscan calidad, disponibilidad y un servicio confiable.",

    /**
     * ✅ Lista de beneficios
     *
     * Se renderiza como lista en la UI
     */
    benefits: [
      "Ahorro en costos de traslado",
      "Reducción de tiempos de compra",
      "Calidad constante en cada producto",
      "Atención personalizada según sus necesidades",
    ],
  },

  /**
   * 🟪 SECCIÓN: PRESENCIA
   *
   * Información geográfica y cobertura de la empresa.
   */
  presencia: {
    title: "Nuestra presencia",

    description:
      "Contamos con sucursales estratégicamente ubicadas para brindar un servicio ágil y cercano.",

    /**
     * 📍 Ciudades activas
     *
     * NOTA: Idealmente esto podría conectarse en el futuro
     * con `sucursales.js` para evitar duplicación.
     */
    cities: [
      "Ciudad de México",
      "Nezahualcóyotl",
      "Puebla",
      "Veracruz",
      "Querétaro",
    ],

    footer:
      "Además, realizamos envíos a Guadalajara y a diversas zonas del país dentro del radio metropolitano de nuestras sucursales.",
  },

  /**
   * 🟧 SECCIÓN: MISIÓN
   */
  mision: {
    title: "Misión",

    description:
      "Brindar soluciones en envases PET de calidad, acercando productos directamente desde fábrica a nuestros clientes mediante una red de sucursales estratégicamente ubicadas, ofreciendo precios accesibles, atención personalizada y un servicio eficiente que impulse el crecimiento de sus negocios.",

    srcImg: "/images/section_img/fondo_home_envaces.webp",
    altImg: "Equipo de trabajo colaborando",
  },

  /**
   * 🟥 SECCIÓN: VISIÓN
   */
  vision: {
    title: "Visión",

    description:
      "Ser una empresa referente en la distribución de envases PET a nivel nacional, reconocida por su cercanía con el cliente, confiabilidad, precios competitivos y capacidad de adaptación a las necesidades del mercado, expandiendo continuamente nuestra presencia para llegar a más zonas comerciales del país.",

    srcImg: "/images/section_img/about-nostros-mision.webp",
    altImg: "Instalaciones modernas y sostenibles",
  },
};
