import type { Metadata } from "next";
import { ShopClient } from "@/components/shop/shop-client";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop cute imported dresses, shoes, bags, cosmetics and accessories from Alijina's Collection."
};

export default function ShopPage({
  searchParams
}: {
  searchParams: { category?: string; badge?: string };
}) {
  return <ShopClient initialCategory={searchParams.category} initialBadge={searchParams.badge} />;
}
