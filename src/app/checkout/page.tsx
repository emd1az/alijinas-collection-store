import type { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout-client";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Send your Alijina's Collection order details on WhatsApp."
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
