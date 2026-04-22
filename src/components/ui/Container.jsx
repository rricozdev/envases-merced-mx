const VARIANT = {
  default: "bg-bgligth-main dark:bg-bgdark-main",
  secondary: "bg-bgligth-secondary dark:bg-bgdark-secondary",
};

/**
 * Componente de contenedor para secciones de contenido este establece ancho maximo para cada vista  .
 * @param {React.ReactNode} props.children - Contenido a renderizar dentro del contenedor.
 * @param {string} [props.variant="default"] - Variante de estilo para el contenedor ("default" o "secondary") cambia el color de fondo .
 * @returns {JSX.Element} Componente de contenedor.
 */

export default function Container({ variant = "default", children }) {
  return (
    <section className={` md:py-20 py-10 w-full ${VARIANT[variant]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
