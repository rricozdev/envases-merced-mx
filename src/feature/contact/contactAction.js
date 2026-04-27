// Importamos la librería oficial de EmailJS
import emailjs from "@emailjs/browser";

/**
 * Envía la información del formulario de contacto
 * mediante EmailJS.
 */
export const sendContactAction = async ({
  name,
  email,
  phone,
  company,
  message,
  branch,
  to_email,
}) => {
  // Variables de entorno
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Validación preventiva
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Faltan variables de entorno de EmailJS");
  }

  // Parámetros esperados por el template
  const templateParams = {
    from_name: name,
    from_email: email,
    phone,
    company,
    message,
    branch: branch || "CDMX",
    to_email,
  };

  // Envío del correo
  return await emailjs.send(serviceId, templateId, templateParams, publicKey);
};
