export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://envaseslamerced.mx/#website",
  url: "https://envaseslamerced.mx/",
  name: "Envases La Merced",
  description:
    "Proveedor de envases PET líder en la industria del packaging en México. Botellas, frascos y tapas al mayoreo para alimentos, cosméticos y limpieza. 5 sucursales con envío a toda la República Mexicana.",
  publisher: {
    "@id": "https://envaseslamerced.mx/#organization",
  },
  inLanguage: "es-MX",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://envaseslamerced.mx/catalogo.html?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
