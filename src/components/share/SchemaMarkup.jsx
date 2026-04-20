export default function SchemaMarkup({ schemas = [] }) {
  /**
   * 📌 COMPONENTE: SchemaMarkup
   *
   * Responsabilidad:
   * Inyectar datos estructurados (JSON-LD) en el HTML para SEO.
   *
   * Google utiliza este formato para entender:
   * - Negocios
   * - Ubicaciones
   * - Productos
   * - Organización
   *
   * Recibe:
   * schemas → array de objetos JSON-LD
   */
  return (
    <>
      {schemas
        .filter(Boolean)
        /**
         * 🔁 ITERACIÓN
         *
         * Permite renderizar múltiples schemas en una misma página:
         * - organization
         * - localBusiness (sucursal)
         * - breadcrumbs
         */
        .map((schema, index) => (
          <script
            key={index}
            /**
             * 📄 Tipo requerido por Google
             */
            type="application/ld+json"
            /**
             * ⚠️ IMPORTANTE
             *
             * React no permite inyectar JSON directamente en <script>,
             * por eso usamos dangerouslySetInnerHTML.
             *
             * Aquí convertimos el objeto JS → string JSON válido.
             */
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
    </>
  );
}
