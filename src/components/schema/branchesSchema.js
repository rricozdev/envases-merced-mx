export const branchesSchema = (sucursal) => {
  if (!sucursal) return null;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "WholesaleStore"],
    "@id": `https://envaseslamerced.mx/${sucursal.path}#localbusiness`,

    name: `Envases La Merced ${sucursal.name}`,

    parentOrganization: {
      "@id": "https://envaseslamerced.mx/#organization",
    },

    telephone: sucursal.phone?.[0] || "",

    address: {
      "@type": "PostalAddress",
      streetAddress: sucursal.address,
      addressLocality: sucursal.name,
      addressCountry: "MX",
    },

    email: Array.isArray(sucursal.email) ? sucursal.email[0] : sucursal.email,

    url: `https://envaseslamerced.mx/${sucursal.path}`,
    sameAs: [sucursal.facebookUrl],

    description: sucursal.seo?.description || "",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: sucursal.whatsapp,
      contactType: "customer service",
    },
  };
};
