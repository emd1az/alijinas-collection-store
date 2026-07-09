"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/cart-drawer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openCart, closeCart } = useCart();

  useEffect(() => {
    closeCart();
    setIsMenuOpen(false);
  }, [closeCart, pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-boutique-pink/25 bg-boutique-bg/92 backdrop-blur-xl">
        <div className="container-soft flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2">
  <img
    src="/images/alijina-logo.png"
    alt="Alijina's Collection"
    className="h-10 w-auto object-contain sm:h-12"
  />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-boutique-text/75 transition hover:bg-white hover:text-boutique-cta"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="focus-ring relative grid h-11 w-11 place-items-center rounded-full bg-white text-boutique-text shadow-card transition hover:-translate-y-0.5 hover:text-boutique-cta"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-boutique-cta px-1 text-[11px] font-bold text-white">
                  {itemCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white text-boutique-text shadow-card lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-boutique-pink/25 bg-white lg:hidden">
            <nav className="container-soft grid gap-1 py-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-boutique-text transition hover:bg-boutique-bg hover:text-boutique-cta"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-2 w-full" onClick={openCart}>
                Open Cart
              </Button>
            </nav>
          </div>
        ) : null}
      </header>
      <CartDrawer />
    </>
  );
}
