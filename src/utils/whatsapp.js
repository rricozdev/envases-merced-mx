const PHONE_MIN_LENGTH = 10;

function sanitizePhone(phone) {
  if (!phone || typeof phone !== "string") return null;
  return phone.replace(/\D/g, "");
}

export function safeWhatsAppUrl(phone, message) {
  const clean = sanitizePhone(phone);
  if (!clean || clean.length < PHONE_MIN_LENGTH) return null;

  const base = `https://wa.me/${clean}`;
  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}
