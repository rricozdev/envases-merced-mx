import AboutView from "@/components/feature/about/AboutView";
import { breadcrumbSchema } from "@/components/schema/breadcrumbSchema";
import { organizationSchema } from "@/components/schema/organizationSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import { aboutData } from "@/utils/constants/about/aboutData";

export const metadata = {
  // Títulos optimizados
  title: "Sobre Nosotros - Soluciones en Envases PET",
  description:
    "Descubre quiénes somos. Envases la Merced ofrece soluciones premium en envases PET para empresas de Mexico. Misión, visión y presencia nacional.",

  // Keywords (usa en atributos o en schema)
  keywords: [
    "envases PET",
    "envases plásticos Mexico",
    "soluciones de empaque",
    "empresa envases",
    "sobre nosotros",
    "Envases la Merced",
  ],

  // Open Graph (Social Media)
  openGraph: {
    type: "website",
    url: "https://envaseslamerced.mx/sobre-nosotros",
    title: "Sobre Nosotros | Envases la Merced - Soluciones en Envases PET",
    description:
      "Descubre nuestra misión, visión y valores. Presencia en múltiples ciudades de Mexico",
    images: [
      {
        url: " ",
        width: 1200,
        height: 630,
        alt: "Envases la Merced - Sobre Nosotros",
      },
    ],
    siteName: "Envases la Merced",
    locale: "es_MX",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Envases la Merced",
    description:
      "Soluciones premium en envases PET. Presencia nacional en todo Mexico",
    images: [" "],
  },

  // Otros meta tags
  robots: "index, follow",
  canonical: "https://envaseslamerced.mx/",
  language: "es",
  alternates: {
    canonical: "https://envaseslamerced.mx/",
  },
};

export default function SobreNosotrosPage() {
  const breadscrumb = [
    { name: "inicio", url: "/" },
    { name: "Sobre Nosotros", url: "/sobre-nostros" },
  ];

  const faqSchemaAbout = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quiénes somos en Envases La Merced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Envases La Merced es una empresa fundada en 2021 dedicada a la distribución de envases PET, con el objetivo de acercar productos de calidad directamente desde fábrica a sus clientes de forma accesible, práctica y confiable. Gracias a alianzas directas con fabricantes, ofrecemos altos estándares de calidad, precios competitivos y atención personalizada.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hacemos en Envases La Merced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Distribuimos envases PET para usos comerciales e industriales, brindando soluciones eficientes a empresas y emprendedores. Ofrecemos beneficios como ahorro en costos de traslado, reducción de tiempos de compra, calidad constante y atención personalizada.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué ciudades tenemos presencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contamos con sucursales en Ciudad de México, Nezahualcóyotl, Puebla, Veracruz y Querétaro. Además, realizamos envíos a Guadalajara y a diversas zonas dentro del radio metropolitano de nuestras sucursales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la misión de Envases La Merced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brindar soluciones en envases PET de calidad, acercando productos directamente desde fábrica mediante una red de sucursales estratégicamente ubicadas, ofreciendo precios accesibles, atención personalizada y un servicio eficiente que impulse el crecimiento de nuestros clientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la visión de la empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ser una empresa referente a nivel nacional en la distribución de envases PET, reconocida por su cercanía con el cliente, confiabilidad, precios competitivos y capacidad de adaptación, expandiendo continuamente nuestra presencia en el mercado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los valores de Envases La Merced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestros valores incluyen calidad, innovación, compromiso y servicio, principios que guían cada decisión para garantizar productos confiables y una atención excepcional a nuestros clientes.",
        },
      },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schemas={[
          organizationSchema,
          breadcrumbSchema(breadscrumb),
          faqSchemaAbout,
        ]}
      />
      <main>
        <AboutView data={aboutData} />
      </main>
    </>
  );
}
