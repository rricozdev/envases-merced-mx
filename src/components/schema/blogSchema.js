export const blogPostingSchema = ({
  title,
  description,
  date,
  author,
  slug,
  image,
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: date,
  dateModified: date,
  author: {
    "@type": "Organization",
    name: author,
    url: "https://envaseslamerced.mx",
  },
  url: `https://envaseslamerced.mx/blog/${slug}`,
  image: image ? `https://envaseslamerced.mx${image}` : undefined,
  publisher: {
    "@id": "https://envaseslamerced.mx/#organization",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://envaseslamerced.mx/blog/${slug}#webpage`,
  },
});

export const blogWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://envaseslamerced.mx/blog#website",
  url: "https://envaseslamerced.mx/blog",
  name: "Blog de Envases La Merced",
  description:
    "Artículos y guías sobre envases PET, industria del packaging en México y soluciones de empaque para tu negocio.",
  publisher: {
    "@id": "https://envaseslamerced.mx/#organization",
  },
  isPartOf: {
    "@id": "https://envaseslamerced.mx/#website",
  },
};
