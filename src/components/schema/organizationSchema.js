export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://envaseslamerced.mx/#organization",
  name: "Envases La Merced",
  url: "https://envaseslamerced.mx/",
  logo: "https://envaseslamerced.mx/logo_dark_mode.png",
  image: "https://envaseslamerced.mx/assets/bg_img/bg2.webp",
  description:
    "Proveedor de envases PET líder en la industria del packaging en México. Botellas, frascos y tapas al mayoreo para alimentos, cosméticos y limpieza. Amplio catálogo, precios competitivos y envío a todo México.",
  foundingDate: "2021",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 11,
    maxValue: 50,
  },
  areaServed: {
    "@type": "Country",
    name: "México",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  knowsAbout: [
    {
      "@type": "Thing",
      name: "Envases PET",
    },
    {
      "@type": "Thing",
      name: "Botellas PET al mayoreo",
    },
    {
      "@type": "Thing",
      name: "Frascos PET",
    },
    {
      "@type": "Thing",
      name: "Tapas y accesorios PET",
    },
    {
      "@type": "Thing",
      name: "Industria del packaging en México",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
  sameAs: [
    "https://www.facebook.com/EnvasesLaMercedCDMX",
    "https://www.facebook.com/EnvasesLaMercedPuebla",
    "https://www.facebook.com/EnvasesLaMercedVeracruz",
  ],
};
