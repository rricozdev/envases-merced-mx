"use client";

/**
 * 🎨 COMPONENTE: CatalogoHeader
 *
 * Header del catálogo con título y descripción.
 * Separado para mantener el componente principal limpio.
 */
export default function CatalogoHeader({ productsCount = 0 }) {
  return (
    <section className="bg-bgligth-tertiary dark:bg-bgdark-tertiary py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center w-full">
        <h1 className="text-txtligth-primary dark:text-txtdark-primary tracking-light text-3xl font-bold leading-tight sm:text-4xl max-w-2xl">
          Catálogo Completo de{" "}
          <span className="text-brand-accent">Envases PET</span> para Mayoreo
        </h1>

        <p className="mt-4 text-txtligth-secondary dark:text-txtdark-secondary max-w-xl text-lg">
          Descubre nuestra amplia gama de botellas, frascos y tapas PET de alta
          calidad para alimentos, cosméticos y productos de limpieza. Venta al
          mayoreo con envío a toda la República Mexicana.
        </p>

        {productsCount > 0 && (
          <p className="mt-2 text-sm text-txtligth-secondary dark:text-txtdark-secondary">
            {productsCount} productos disponibles
          </p>
        )}
      </div>
    </section>
  );
}
