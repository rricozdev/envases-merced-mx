"use client";

import {
  IconClock,
  IconPhone,
  IconBrandFacebook,
  IconMapPin,
  IconBrandWhatsapp,
  IconCalendarEvent,
  IconMail,
} from "@tabler/icons-react";

import Button from "@/components/ui/Button";

const SucursalView = ({ sucursal }) => {
  const iconClass = "text-brand-accent mt-0.5 shrink-0";

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-txtligth-primary dark:text-txtdark-primary">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 dark:text-txtdark-secondary mb-6">
          Inicio / Sucursales / {sucursal.name}
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-black text-corporate-blue dark:text-txtdark-brand-primary mb-3">
          Sucursal {sucursal.name}
        </h1>
        <p className="text-gray-500 dark:text-txtdark-secondary mb-10">
          Encuentra nuestra ubicación, horarios y ponte en contacto con
          nosotros.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-5 gap-6 mb-10 items-stretch md:h-[600px]">
          {/* MAPA */}
          <div className="md:col-span-3 h-full">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-md dark:shadow-none">
              <iframe
                src={sucursal.mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* INFO */}
          <div className="md:col-span-2 h-full bg-white dark:bg-bgdark-secondary p-6 rounded-xl shadow-md border border-gray-200 dark:border-transparent space-y-6">
            {/* Dirección */}
            <div className="flex items-start gap-3">
              <IconMapPin className={iconClass} size={20} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Dirección
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  {sucursal.address}
                </p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-3">
              <IconClock className={iconClass} size={20} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Horario de Atención
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  Lunes a Jueves: 8:00 AM - 5:00 PM <br />
                  Viernes: 8:00 AM - 3:30 PM <br />
                  Sábado y Domingo: Cerrado
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-3">
              <IconPhone className={iconClass} size={20} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Contacto
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  {sucursal.phone.join(" / ")}
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <IconBrandWhatsapp className={iconClass} size={20} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-txtdark-secondary hover:underline"
                >
                  {sucursal.whatsapp}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <IconMail className={iconClass} size={20} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Email
                </h3>
                <a
                  href={`mailto:${sucursal.email}`}
                  className="text-gray-600 dark:text-txtdark-secondary hover:underline"
                >
                  {sucursal.email}
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-3">
              <IconBrandFacebook className={iconClass} size={20} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Facebook
                </h3>
                <a
                  href={sucursal.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-txtdark-secondary hover:underline"
                >
                  {sucursal.facebook}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white dark:bg-bgdark-tertiary p-6 rounded-xl shadow-md border border-gray-200 dark:border-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg text-corporate-blue dark:text-txtdark-brand-primary flex-1">
            ¿Listo para comenzar tu proyecto?
          </p>

          <Button
            type="primary"
            variant="solid"
            size="md"
            icon={<IconCalendarEvent size={18} />}
            iconPosition="left"
            onClick={() =>
              window.open(
                `https://wa.me/${sucursal.whatsapp.replace(
                  /\D/g,
                  "",
                )}?text=${encodeURIComponent(
                  `Hola, quiero agendar una visita a la sucursal ${sucursal.name}.`,
                )}`,
                "_blank",
              )
            }
          >
            Agendar visita
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SucursalView;
