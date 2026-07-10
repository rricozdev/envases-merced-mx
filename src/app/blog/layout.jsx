import SchemaMarkup from "@/components/share/SchemaMarkup";
import { breadcrumbSchema } from "@/components/schema/breadcrumbSchema";
import { organizationSchema } from "@/components/schema/organizationSchema";
import { blogWebSiteSchema } from "@/components/schema/blogSchema";

export const metadata = {
  title: "Blog de Envases PET | Guías y Artículos Técnicos",
  description:
    "Descubre guías, artículos y contenido especializado sobre envases PET, industria del packaging en México y soluciones de empaque para tu negocio. Información actualizada por Envases La Merced.",
  keywords: [
    "blog envases PET",
    "artículos de packaging",
    "guías envases plásticos",
    "industria del packaging México",
    "proveedor de envases PET",
    "Envases la Merced",
  ],
  openGraph: {
    type: "website",
    url: "https://envaseslamerced.mx/blog",
    title: "Blog de Envases PET | Guías y Artículos | Envases La Merced",
    description:
      "Contenido especializado sobre envases PET, packaging industrial y soluciones de empaque en México.",
    images: [
      {
        url: "https://envaseslamerced.mx/assets/bg_img/bg2.webp",
        width: 1200,
        height: 630,
        alt: "Blog de Envases La Merced - Artículos sobre envases PET",
      },
    ],
    siteName: "Envases La Merced",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Envases PET | Envases La Merced",
    description:
      "Guías y artículos técnicos sobre envases PET y packaging industrial en México.",
    images: ["https://envaseslamerced.mx/assets/bg_img/bg2.webp"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://envaseslamerced.mx/blog",
  },
};

export default function BlogLayout({ children }) {
  const breadcrumb = [
    { name: "Inicio", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[
          organizationSchema,
          breadcrumbSchema(breadcrumb),
          blogWebSiteSchema,
        ]}
      />
      {children}
    </>
  );
}
