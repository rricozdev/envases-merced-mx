import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// TODO: cambiar fuentes por la usadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// METADATA (SEO COMPLETO)
export const metadata = {
  metadataBase: new URL("https://envaseslamerced.mx"),

  title: {
    default:
      "Envases PET al Mayoreo en México — Cotiza Hoy | Envases La Merced",
    template: "%s | Envases La Merced",
  },

  description:
    "Fabricante de envases PET al mayoreo en México. Botellas, frascos y tapas para alimentos, cosméticos y limpieza. Amplio catálogo, precios competitivos y envío a todo México.",

  applicationName: "Envases La Merced",

  authors: [{ name: "Envases La Merced" }],
  creator: "Envases La Merced",
  publisher: "Envases La Merced",
  category: "business",

  // SEO técnico
  // TODO: Abilitar cuando cuando se haga el build
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-image-preview": "large",
  //   },
  // },

  // googleSiteVerification: "g07mTuT-0s6Z8PU3SjFGC5F5bhqo6HnTwzd9Mn5MKL8",

  alternates: {
    canonical: "https://envaseslamerced.mx/",
    languages: {
      "es-MX": "https://envaseslamerced.mx/",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://envaseslamerced.mx/",
    siteName: "Envases La Merced",
    title: "Envases PET al Mayoreo en México — Envases La Merced",
    description:
      "Botellas, frascos y tapas PET para alimentos, cosméticos y limpieza. Precios de mayoreo · Envío a todo México · Cotiza sin compromiso.",
    images: [
      {
        url: "https://envaseslamerced.mx/assets/bg_img/bg2.webp",
        width: 1200,
        height: 630,
        alt: "Catálogo de envases PET al mayoreo en México",
      },
      {
        url: "https://envaseslamerced.mx/1000156628.jpeg",
        width: 800,
        height: 600,
        alt: "Envases La Merced - Distribuidor",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@EnvasesLaMerced",
    creator: "@EnvasesLaMerced",
    title: "Envases PET al Mayoreo en México — Envases La Merced",
    description:
      "Botellas, frascos y tapas PET para alimentos, cosméticos y limpieza. Precios de mayoreo. Cotiza sin compromiso.",
    images: ["https://envaseslamerced.mx/bg2.webp"],
  },

  // Iconos
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  manifest: "/site.webmanifest",

  // PWA / mobile
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Envases La Merced",
  },

  formatDetection: {
    telephone: false,
  },

  themeColor: "#ffffff",

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

// STRUCTURED DATA (SEO AVANZADO)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: "Envases La Merced",
  url: "https://envaseslamerced.mx/",
  logo: "https://envaseslamerced.mx/logo_dark_mode.png",
  image: "https://envaseslamerced.mx/assets/bg_img/bg2.webp",
  description:
    "Distribuidor de envases PET al mayoreo en México. Botellas, frascos y tapas para alimentos, cosméticos y limpieza.",
  sameAs: [
    "https://www.facebook.com/EnvasesLaMercedCDMX",
    "https://www.facebook.com/EnvasesLaMercedPuebla",
    "https://www.facebook.com/EnvasesLaMercedVeracruz",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-55-7667-6045",
      contactType: "customer service",
    },
  ],
};

// LAYOUT
export default function RootLayout({ children }) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* GOOGLE TAG MANAGER  */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-W4JS5W3L"
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4JS5W3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* STRUCTURED DATA  */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
