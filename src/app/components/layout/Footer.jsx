"use client";

import Link from "next/link";
import Image from "next/image";

// ICONOS (recomendado)
import { Phone, MapPin, Mail } from "lucide-react";
import { sucursales, navLinks } from "@/app/utils/constants/navLinks";

export default function Footer() {
  return (
    <footer className="bg-bgligth-footer text-txtdark-brand-primary dark:bg-bgdark-footer dark:text-txtdark-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* LOGO */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo_dark_mode.webp"
                alt="Envases La Merced"
                width={80}
                height={40}
                className="object-contain"
              />
              <h2 className="text-xl font-bold">Envases La Merced</h2>
            </div>

            <p className="text-base text-gray-300 max-w-xs">
              Comprometidos con la calidad y el servicio, somos su socio
              estratégico en soluciones de envasado.
            </p>
          </div>

          {/* CONTACTO */}
          <address className="flex flex-col items-center md:items-start space-y-4 not-italic">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>

            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Azafrán 380, Granjas México Iztacalco, CP 08400 Ciudad de
                  México, CDMX
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+5215576576045" className="hover:underline">
                  +52 1 55 7657 6045
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:grangas@envaseslamerced.mx"
                  className="hover:underline"
                >
                  grangas@envaseslamerced.mx
                </a>
              </li>
            </ul>
          </address>

          {/* SUCURSALES */}
          <section className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Sucursales</h3>

            <ul className="space-y-3 text-base text-gray-300">
              {sucursales.map((sucursal) => (
                <li key={sucursal.name}>
                  <Link
                    href={`/sucursales/${sucursal.path}`}
                    className="hover:text-brand-accent-hover transition-colors"
                  >
                    {sucursal.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* ENLACES */}
          <nav
            className="flex flex-col items-center md:items-start space-y-4"
            aria-label="Enlaces útiles"
          >
            <h3 className="text-lg font-semibold text-white">Enlaces útiles</h3>

            <ul className="space-y-3 text-base text-gray-300">
              {navLinks
                .filter((link) => !link.submenu)
                .map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-accent-hover transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Envases La Merced. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
