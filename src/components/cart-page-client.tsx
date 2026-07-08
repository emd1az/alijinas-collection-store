"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { QuantityControl } from "@/components/ui/quantity-control";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartPageClient() {
  const { items, total, removeItem, updateQuantity, getItemKey } = useCart();

  return (
    <div className="container-soft py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Shopping bag</p>
        <h1 className="mt-2 text-3xl font-black text-boutique-text sm:text-5xl">Your cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-card">
          <h2 className="text-2xl font-black">Your cart is empty</h2>
          <p className="mt-2 text-boutique-text/65">Cute dresses, bags and accessories are waiting in the shop.</p>
          <LinkButton href="/shop" className="mt-6">Shop Now</LinkButton>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="grid gap-4">
            {items.map((item) => {
              const key = getItemKey(item);
              return (
                <article key={key} className="grid gap-4 rounded-[1.75rem] bg-white p-4 shadow-card sm:grid-cols-[7rem_1fr_auto] sm:items-center">
                  <Link href={`/product/${item.slug}`} className="relative aspect-square overflow-hidden rounded-2xl bg-boutique-cream">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="112px" />
                  </Link>
                  <div>
                    <Link href={`/product/${item.slug}`} className="text-lg font-black hover:text-boutique-cta">{item.name}</Link>
                    <p className="mt-1 text-sm font-bold text-boutique-cta">{formatPrice(item.price)}</p>
                    {(item.size || item.color) && <p className="mt-1 text-sm text-boutique-text/55">{[item.size, item.color].filter(Boolean).join(" / ")}</p>}
                    <div className="mt-4">
                      <QuantityControl value={item.quantity} onChange={(quantity) => updateQuantity(key, quantity)} />
                    </div>
                  </div>
                  <button type="button" onClick={() => removeItem(key)} className="grid h-11 w-11 place-items-center rounded-full bg-boutique-bg text-boutique-text transition hover:text-boutique-cta" aria-label={`Remove ${item.name}`}>
                    <Trash2 size={18} />
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="h-fit rounded-[1.75rem] bg-white p-6 shadow-card">
            <h2 className="text-xl font-black">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span className="font-black">{formatPrice(total)}</span></div>
              <div className="flex justify-between text-boutique-text/65"><span>Shipping</span><span>Confirm at checkout</span></div>
            </div>
            <div className="mt-5 flex justify-between border-t border-boutique-pink/30 pt-5 text-lg font-black">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <LinkButton href="/checkout" className="mt-6 w-full">Checkout</LinkButton>
          </aside>
        </div>
      )}
    </div>
  );
}
