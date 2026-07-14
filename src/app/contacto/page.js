import ContactView from "@/components/feature/contacto/ContactView";
import { organizationSchema } from "@/components/schema/organizationSchema";
import { breadcrumbSchema } from "@/components/schema/breadcrumbSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";

export const metadata = {
  title: "Contacto y Cotización de Envases PET | Envases La Merced",
  description:
    "Solicita tu cotización de envases PET al mayoreo con tu proveedor de confianza en la industria del packaging en México. Contáctanos por WhatsApp, teléfono o correo.",
  alternates: {
    canonical: "https://envaseslamerced.mx/contacto.html",
  },
};

export default function Page() {
  const breadcrumb = [
    { name: "Inicio", url: "/" },
    { name: "Contacto", url: "/contacto.html" },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[organizationSchema, breadcrumbSchema(breadcrumb)]}
      />
      <div className="min-h-screen bg-bgligth-secondary dark:bg-bgdark-main">
        <ContactView />
      </div>
    </>
  );
}
