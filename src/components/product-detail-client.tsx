"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuantityControl } from "@/components/ui/quantity-control";
import type { Product } from "@/lib/products";
import { getRelatedProducts } from "@/lib/products";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function ProductDetailClient({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [color, setColor] = useState(product.colors?.[0]);
  const { addItem } = useCart();
  const related = useMemo(() => getRelatedProducts(product), [product]);

  return (
    <div className="container-soft py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-boutique-cream shadow-card">
            <Image src={selectedImage} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square overflow-hidden rounded-2xl bg-white shadow-card ring-2 transition ${
                  selectedImage === image ? "ring-boutique-cta" : "ring-transparent"
                }`}
                aria-label={`View ${product.name} image`}
              >
                <Image src={image} alt={product.name} fill className="object-cover" sizes="120px" />
              </button>
            ))}
          </div>
        </div>

        <section className="rounded-[2rem] bg-white p-5 shadow-card sm:p-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-boutique-cta">{product.category}</p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-boutique-text sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-3xl font-black text-boutique-cta">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm leading-7 text-boutique-text/70 sm:text-base">{product.description}</p>

          {product.sizes?.length ? (
            <div className="mt-7">
              <p className="mb-3 text-sm font-black">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSize(item)}
                    className={`h-11 min-w-11 rounded-full px-4 text-sm font-black transition ${
                      size === item ? "bg-boutique-cta text-white" : "bg-boutique-bg text-boutique-text hover:bg-boutique-pink"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {product.colors?.length ? (
            <div className="mt-7">
              <p className="mb-3 text-sm font-black">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setColor(item)}
                    className={`rounded-full px-4 py-2.5 text-sm font-black transition ${
                      color === item ? "bg-boutique-cta text-white" : "bg-boutique-bg text-boutique-text hover:bg-boutique-pink"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-7">
            <p className="mb-3 text-sm font-black">Quantity</p>
            <QuantityControl value={quantity} onChange={setQuantity} />
          </div>

          <div className="mt-8">
            <Button className="w-full sm:w-auto" onClick={() => addItem(product, quantity, { size, color })}>
              <ShoppingBag size={18} /> Add to Cart
            </Button>
          </div>
        </section>
      </div>

      <section className="mt-14">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Related</p>
          <h2 className="mt-2 text-2xl font-black text-boutique-text sm:text-4xl">More pieces you may love</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
