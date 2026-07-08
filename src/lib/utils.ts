import { siteConfig } from "./site-config";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number) {
  return `${siteConfig.currency}${price.toFixed(2)}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
