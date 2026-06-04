import { safeWhatsAppUrl } from "@/utils/whatsapp";

export function openWhatsApp({ phone, message }) {
  const url = safeWhatsAppUrl(phone, message);
  if (!url) return;

  window.open(url, "_blank");
}
