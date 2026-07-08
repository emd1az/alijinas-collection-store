import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart-page-client";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Alijina's Collection cart."
};

export default function CartPage() {
  return <CartPageClient />;
}
