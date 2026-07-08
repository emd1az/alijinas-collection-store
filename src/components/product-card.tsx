"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-boutique-cream">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.badges.slice(0, 2).map((badge) => (
            <Badge key={badge} className="bg-white/90 backdrop-blur">
              {badge}
            </Badge>
          ))}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-2 pt-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-boutique-cta">{product.category}</p>
          <p className="text-lg font-black text-boutique-text">{formatPrice(product.price)}</p>
        </div>
        <Link href={`/product/${product.slug}`} className="line-clamp-2 text-base font-black leading-snug text-boutique-text hover:text-boutique-cta">
          {product.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-boutique-text/65">{product.description}</p>
        <div className="mt-auto flex items-center justify-end gap-2 pt-4">
          <Link
            href={`/product/${product.slug}`}
            aria-label="View product details"
            title="View product details"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-boutique-cream text-boutique-text transition hover:-translate-y-0.5 hover:bg-boutique-pink hover:text-boutique-cta"
          >
            <Eye size={18} aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label="Add product to cart"
            title="Add product to cart"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-boutique-cta text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#d94673]"
            onClick={() => addItem(product)}
          >
            <ShoppingBag size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
