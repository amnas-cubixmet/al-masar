export function normalizePhone(value: string) {
  const cleaned = value.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+")) return cleaned;
  if (cleaned.startsWith("0")) return `+966${cleaned.slice(1)}`;
  return cleaned;
}

export function whatsappHref(value: string, message?: string) {
  const normalized = normalizePhone(value).replace("+", "");
  const base = `https://wa.me/${normalized}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
