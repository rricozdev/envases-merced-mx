import emailjs from "@emailjs/browser";

/**
 * Envía un correo con la información del formulario de contacto
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
  const templateParams = {
    from_name: name,
    from_email: email,
    phone,
    company,
    message,
    branch: branch || "CDMX",
    to_email,
  };

  try {
    return await emailjs.send(
      "service_qbqsolr",
      "template_fnjow19",
      templateParams,
      "hED2TuRfdGVwaZgb0",
    );
  } catch (error) {
    console.error("Error enviando el email:", error);
    throw error;
  }
};
