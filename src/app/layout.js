import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// TODO: Cambiar la fuents por la usadas en el diseño
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Envases PET al Mayoreo en México — Cotiza Hoy | Envases La Merced",
  description:
    "Fabricante de envases PET al mayoreo en México. Botellas, frascos y tapas para alimentos, cosméticos y limpieza. Amplio catálogo, precios competitivos y envío a todo México. ¡Solicita tu cotización hoy!",
  keywords:
    "envases PET mayoreo México, botellas PET al mayoreo, frascos plástico para cosméticos, envases grado alimenticio México, proveedores envases PET CDMX, frascos PET transparentes mayoreo, envases para productos de limpieza, botellas plástico mayoreo, tapas y envases PET, cotización envases PET, comprar frascos PET mayoreo, envases para alimentos y bebidas México, packaging PET México, Envases La Merced",
  authors: [{ name: "Envases La Merced" }],
  openGraph: {
    title: "Envases PET al Mayoreo en México — Envases La Merced",
    description:
      "Botellas, frascos y tapas PET para alimentos, cosméticos y limpieza.",
    url: "https://envaseslamerced.mx/",
    siteName: "Envases La Merced",
    images: [
      {
        url: "https://envaseslamerced.mx/bg2.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Envases PET al Mayoreo en México — Envases La Merced",
    description:
      "Botellas, frascos y tapas PET para alimentos, cosméticos y limpieza.",
    image: "https://envaseslamerced.mx/bg2.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-W4JS5W3L");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4JS5W3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* // TODO: Se debe agregar los SCHEMAS por pagina, para eso componetizar  */}
        {/* // TODO: Añadir header */}
        {children}
        {/* // TODO: Añadir footer */}
      </body>
    </html>
  );
}
