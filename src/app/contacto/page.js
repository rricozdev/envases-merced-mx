import ContactView from "@/components/feature/contacto/ContactView";

export const metadata = {
  title: "Contacto y Cotización de Envases PET | Envases La Merced",
  description:
    "Solicita tu cotización de envases PET al mayoreo. Contáctanos por WhatsApp, teléfono o correo.",
  alternates: {
    canonical: "https://envaseslamerced.mx/contacto",
    languages: {
      "es-MX": "https://envaseslamerced.mx/contacto",
      "x-default": "https://envaseslamerced.mx/contacto",
    },
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-bgligth-secondary dark:bg-bgdark-main">
      <ContactView />
    </div>
  );
}
