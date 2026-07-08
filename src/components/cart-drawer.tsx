"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/button";
import { QuantityControl } from "@/components/ui/quantity-control";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, total, getItemKey } = useCart();

  return (
    <div className={isCartOpen ? "fixed inset-0 z-50" : "pointer-events-none fixed inset-0 z-50"}>
      <div
        className={`absolute inset-0 bg-boutique-footer/35 backdrop-blur-sm transition-opacity ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-boutique-bg shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-boutique-pink/30 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-boutique-cta">Shopping bag</p>
            <h2 className="text-xl font-black text-boutique-text">Your cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white text-boutique-text shadow-card"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="grid flex-1 place-items-center px-6 text-center">
            <div>
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-boutique-pink/55 text-boutique-cta">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-xl font-black">Your cart is waiting for cute things.</h3>
              <p className="mt-2 text-sm leading-6 text-boutique-text/70">Add dresses, bags, cosmetics or accessories from the shop.</p>
              <LinkButton href="/shop" className="mt-6" onClick={closeCart}>
                Shop Now
              </LinkButton>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="grid gap-4">
                {items.map((item) => {
                  const key = getItemKey(item);
                  return (
                    <div key={key} className="grid grid-cols-[5rem_1fr] gap-3 rounded-3xl bg-white p-3 shadow-card">
                      <Link href={`/product/${item.slug}`} onClick={closeCart} className="relative aspect-square overflow-hidden rounded-2xl bg-boutique-cream">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                      </Link>
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link href={`/product/${item.slug}`} onClick={closeCart} className="font-bold leading-snug hover:text-boutique-cta">
                              {item.name}
                            </Link>
                            <p className="mt-1 text-sm font-semibold text-boutique-cta">{formatPrice(item.price)}</p>
                            {(item.size || item.color) && (
                              <p className="mt-1 text-xs text-boutique-text/60">
                                {[item.size, item.color].filter(Boolean).join(" / ")}
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-boutique-bg text-boutique-text/65 transition hover:text-boutique-cta"
                            onClick={() => removeItem(key)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="mt-3">
                          <QuantityControl value={item.quantity} onChange={(quantity) => updateQuantity(key, quantity)} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-boutique-pink/30 bg-white p-5">
              <div className="mb-4 flex items-center justify-between text-lg font-black">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <LinkButton href="/cart" variant="secondary" onClick={closeCart}>
                  View Cart
                </LinkButton>
                <LinkButton href="/checkout" onClick={closeCart}>
                  Checkout
                </LinkButton>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
