import { generateCatalogSchema } from "@/components/schema/catalogoSchema";
import { organizationSchema } from "@/components/schema/organizationSchema";
import { breadcrumbSchema } from "@/components/schema/breadcrumbSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import { CatalogoProductos } from "@/utils/constants/products/listProducts";

export const metadata = {
  title: "Catálogo de Envases y Botellas PET | Envases La Merced",
  description:
    "Tu proveedor de envases PET de confianza. Descubre nuestra amplia gama de botellas, frascos y tapas PET de alta calidad para alimentos, cosméticos y productos de limpieza. Venta al mayoreo con envío a toda la República Mexicana.",

  keywords: [
    "envases PET",
    "envases plásticos México",
    "proveedor de envases PET",
    "packaging industrial",
    "soluciones de empaque",
    "empresa envases",
    "Catálogo de envases",
    "Envases la Merced",
  ],

  openGraph: {
    type: "website",
    url: "https://envaseslamerced.mx/catalogo.html",
    title: "Catálogo de Envases y Botellas PET | Envases La Merced",
    description:
      "Explora el catálogo de tu proveedor de envases PET. Botellas, frascos y tapas PET de calidad premium. Venta al mayoreo con envío a toda la República Mexicana.",
    images: [
      {
        url: "https://envaseslamerced.mx/assets/bg_img/bg2.webp",
        width: 1200,
        height: 630,
        alt: "Catálogo de envases PET al mayoreo - Envases La Merced",
      },
    ],
    siteName: "Envases La Merced",
    locale: "es_MX",
  },

  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Envases PET | Envases La Merced",
    description:
      "Explora nuestro catálogo completo de botellas, frascos y tapas PET. Calidad premium, venta al mayoreo.",
    images: ["https://envaseslamerced.mx/assets/bg_img/bg2.webp"],
  },

  robots: "index, follow",
  alternates: {
    canonical: "https://envaseslamerced.mx/catalogo.html",
  },
};

export default function layoutCatalogo({ children }) {
  const breadcrumb = [
    { name: "Inicio", url: "/" },
    { name: "Catálogo", url: "/catalogo.html" },
  ];

  const schemas = [
    organizationSchema,
    breadcrumbSchema(breadcrumb),
    generateCatalogSchema(CatalogoProductos.productos),
  ];

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      {children}
    </>
  );
}
