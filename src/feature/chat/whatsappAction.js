/**
 * 📲 WHATSAPP ACTION
 *
 * Abre WhatsApp con un mensaje predefinido.
 * Se usa desde componentes de UI (ej: CTASection).
 */

export function openWhatsApp({ phone, message }) {
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(url, "_blank");
}
