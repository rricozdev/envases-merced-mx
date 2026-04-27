"use client";

/**
 * Hook personalizado para manejar el formulario de contacto.
 *
 * Responsabilidades:
 * - Validar datos con Zod + React Hook Form
 * - Preparar el payload según la sucursal seleccionada
 * - Enviar la información mediante EmailJS
 * - Mostrar notificaciones visuales
 */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "@/components/schema/contactSchema";
import { sendContactAction } from "@/feature/contact/contactAction";
import { BRANCH_PHONES } from "@/utils/constants/branchPhones";

import { toast } from "react-toastify";

export default function useContactForm() {
  /**
   * Configuración principal del formulario.
   *
   * - register: conecta inputs con React Hook Form
   * - handleSubmit: ejecuta validación antes del submit
   * - reset: limpia el formulario
   * - errors: contiene errores por campo
   * - isSubmitting: indica si se está enviando
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema), // Validación automática con Zod
    mode: "onSubmit", // valida al enviar
  });

  /**
   * Función principal al enviar el formulario.
   *
   * Solo se ejecuta si la validación fue exitosa.
   */
  const onSubmit = async (data) => {
    /**
     * Normalizamos la sucursal para asegurar coincidencia
     * con las llaves del objeto BRANCH_PHONES.
     */
    const branchKey = data.branch?.toUpperCase() || "CDMX";

    /**
     * Obtenemos el correo real de envío.
     *
     * Prioridad:
     * 1. sendEmail (correo Gmail real)
     * 2. email (correo corporativo visible)
     */
    const to_email =
      BRANCH_PHONES[branchKey]?.sendEmail?.[0] ||
      BRANCH_PHONES[branchKey]?.email?.[0];

    /**
     * Seguridad extra:
     * si no existe destinatario, detenemos el proceso.
     */
    if (!to_email) {
      toast.error("No se encontró correo para la sucursal seleccionada");
      return;
    }

    /**
     * Construimos el payload final
     * que será enviado a EmailJS.
     */
    const payload = {
      ...data,
      branch: branchKey,
      to_email,
    };

    try {
      /**
       * Ejecutamos el envío.
       * Mientras esto ocurre, isSubmitting se mantiene activo.
       */
      await sendContactAction(payload);

      // Confirmación visual al usuario
      toast.success("Mensaje enviado correctamente");

      // Limpiamos formulario
      reset();
    } catch (error) {
      /**
       * Captura de errores del servicio.
       */
      console.error("Error enviando contacto:", error);

      toast.error("Error al enviar el mensaje");
    }
  };

  /**
   * Retornamos las utilidades necesarias
   * para el componente del formulario.
   */
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
