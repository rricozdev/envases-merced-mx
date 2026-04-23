import { generateCatalogSchema } from "@/components/schema/catalogoSchema";
import { organizationSchema } from "@/components/schema/organizationSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import { CatalogoProductos } from "@/utils/constants/products/listProducts";

export const metadata = {
  title: "Catalogo envases y Botellas PET",
  description:
    "Descubre nuestra amplia gama de botellas, frascos y tapas PET de alta calidad para alimentos, cosméticos y productos de limpieza. Venta al mayoreo con envío a toda la República Mexicana.",

  // Keywords (usa en atributos o en schema)
  keywords: [
    "envases PET",
    "envases plásticos Colombia",
    "soluciones de empaque",
    "empresa envases",
    "Catalogo de envases",
    "Envases la Merced",
  ],

  // Open Graph (Social Media)
  openGraph: {
    type: "website",
    url: "https://envaseslamerced.mx/catalogo",
    title: "Sobre Nosotros | Envases la Merced - Soluciones en Envases PET",
    description:
      "Descubre nuestra misión, visión y valores. Presencia en múltiples ciudades de Colombia.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Envases la Merced - Sobre Nosotros",
      },
    ],
    siteName: "Envases la Merced",
    locale: "es_CO",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Envases la Merced",
    description:
      "Soluciones premium en envases PET. Presencia nacional en Colombia.",
    images: ["https://www.tudominio.com/images/about-og.jpg"],
  },

  // Otros meta tags
  robots: "index, follow",
  canonical: "https://www.tudominio.com/about",
  language: "es",
  alternates: {
    canonical: "https://www.tudominio.com/about",
  },
};

export default function layoutCatalogo({ children }) {
  const schemas = [
    organizationSchema,
    generateCatalogSchema(CatalogoProductos.productos),
  ];

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      {children}
    </>
  );
}
