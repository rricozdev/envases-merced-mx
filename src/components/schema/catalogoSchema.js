// actualizar en función de los datos
export const generateCatalogSchema = (products = []) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Catálogo de Envases PET al Mayoreo",
  description:
    "Amplia gama de botellas, frascos y tapas PET para alimentos, cosméticos y limpieza",

  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,

    item: {
      "@type": "Product",

      // ✅ Nombre más descriptivo (mejor para SEO)
      name: `${product.nombre} ${product.volumen ? product.volumen + " ml" : ""} ${product.color}`,

      // ✅ Construyes una descripción útil
      description: `
Envase PET tipo ${product.nombre} de ${product.volumen}ml.
Color: ${product.color}.
Rosca: ${product.rosca?.diametro}.
Piezas por paquete: ${product.piezasPorPaquete}.
      `.trim(),

      // ✅ Imagen correcta según tu estructura
      image: product.img?.src || "",

      // ✅ URL amigable
      url: `https://envaseslamerced.mx/catalogo?producto=${encodeURIComponent(product.id)}`,

      // ✅ Extras importantes para Google
      sku: product.id,

      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Volumen",
          value: `${product.volumen} ml`,
        },
        {
          "@type": "PropertyValue",
          name: "Color",
          value: product.color,
        },
        {
          "@type": "PropertyValue",
          name: "Rosca",
          value: product.rosca?.diametro,
        },
        {
          "@type": "PropertyValue",
          name: "Piezas por paquete",
          value: product.piezasPorPaquete,
        },
      ],
    },
  })),
});
