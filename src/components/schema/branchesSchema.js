export const branchesSchema = (sucursal) => {
  if (!sucursal) return null;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "WholesaleStore"],

    name: `Envases La Merced ${sucursal.name}`,

    // Teléfono → toma el primero disponible
    telephone: sucursal.phone?.[0] || "",

    // Dirección (adaptada a la estructura actual del proyecto)
    address: {
      "@type": "PostalAddress",
      streetAddress: sucursal.address,
      addressLocality: sucursal.name,
      addressCountry: "MX",
    },

    // Contacto
    email: Array.isArray(sucursal.email) ? sucursal.email[0] : sucursal.email,

    // Links útiles
    url: `https://envaseslamerced.mx/${sucursal.path}`,
    sameAs: [sucursal.facebookUrl],

    // Geo opcional (si luego queremos mejorarlo)
    // geo: {
    //   "@type": "GeoCoordinates",
    //   latitude: "",
    //   longitude: "",
    // },

    // Tipo de negocio
    description: sucursal.seo?.description || "",

    // WhatsApp como contacto adicional
    contactPoint: {
      "@type": "ContactPoint",
      telephone: sucursal.whatsapp,
      contactType: "customer service",
    },
  };
};
