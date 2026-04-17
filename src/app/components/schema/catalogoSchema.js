// actualizar en función de los datos
export const catalogSchema = (products) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Catálogo de Envases PET al Mayoreo",
  itemListElement: products.map((product) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: product.image,
    },
  })),
});
