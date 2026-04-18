/**
 * component para secciones de contenido, con un header y un espacio para contenido extra
 * @param {string} eyebrow - Texto pequeño que aparece encima del título, generalmente para categorizar o destacar el contenido.
 * @param {React.ReactNode} title - Título principal de la sección, que resume el contenido o el mensaje principal.
 * @param {string} description - Texto descriptivo que proporciona más detalles sobre el contenido de la sección.
 * @param {React.ReactNode} children - Contenido adicional a renderizar dentro de la sección.
 */

export default function ContentSection({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <>
      {/* Header */}
      <header className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        {eyebrow && (
          <p className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent font-primary">
            {eyebrow}
          </p>
        )}

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-txtligth-primary dark:text-txtdark-primary font-primary">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-txtligth-secondary dark:text-txtdark-secondary font-secondary font-medium">
          {description}
        </p>
      </header>
      {/* contenido extra */}
      {children}
    </>
  );
}
