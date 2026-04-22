"use client";

import { openWhatsApp } from "@/feature/chat/whatsappAction";
import { BRANCH_PHONES } from "@/utils/constants/branchPhones";

/**
 * 📣 CTA SECTION
 *
 * Componente reutilizable de llamada a la acción.
 *
 * 🔹 Responsabilidad:
 * - Mostrar un bloque visual con título, descripción y botón
 * - Ejecutar una acción (abrir WhatsApp en este caso)
 *
 * 🔹 Importante:
 * - Es un Client Component porque maneja eventos (onClick)
 * - La lógica de interacción se define aquí para evitar pasar funciones desde Server Components
 *
 * 🔹 Props:
 * - title: string → título principal del CTA
 * - description: string → texto descriptivo
 */

export default function CTASection({ title, description }) {
  /**
   * 📲 HANDLE CLICK
   *
   * Abre WhatsApp con un mensaje predefinido.
   * Se ejecuta únicamente en el cliente.
   */
  const handleClick = () => {
    openWhatsApp({
      phone: BRANCH_PHONES.CDMX.whatsapp,
      message: "Estoy interesado en sus productos.",
    });
  };

  return (
    <section
      className="
        p-10 rounded-2xl text-center bg-brand-primary text-txtligth-brand-primary  dark:bg-bgdark-hero
      "
    >
      <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
        {/* 🧾 TÍTULO */}
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>

        {/* 📝 DESCRIPCIÓN */}
        <p
          className="
            text-base sm:text-lg leading-relaxed
            text-txtligth-brand-primary/90
          "
        >
          {description}
        </p>

        {/* 🔘 BOTÓN DE ACCIÓN */}
        <button
          onClick={handleClick}
          className="
            mt-4 px-6 py-3 rounded-lg font-semibold transition bg-brand-accent text-txtligth-brand-primary hover:bg-brand-accent-hover
          "
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
}
