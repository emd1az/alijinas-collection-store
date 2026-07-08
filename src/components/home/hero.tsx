import Image from "next/image";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";

const heroProducts = products.slice(0, 4);

export function Hero() {
  return (
    <section className="overflow-hidden bg-boutique-bg py-10 sm:py-14 lg:py-16">
      <div className="container-soft grid items-center gap-9 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-boutique-cta shadow-card">
            <Sparkles size={15} /> Direct China Import
          </div>
          <h1 className="text-4xl font-black leading-[1.03] text-boutique-text sm:text-5xl lg:text-6xl">
            {siteConfig.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-boutique-text/72 sm:text-lg">{siteConfig.heroSubtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/shop">Shop Now</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              <MessageCircle size={17} /> Wholesale Inquiry
            </LinkButton>
          </div>
          <div className="mt-7 grid max-w-lg grid-cols-3 gap-3">
            {["Dresses", "Bags", "Cute items"].map((item) => (
              <div key={item} className="rounded-3xl bg-white px-4 py-3 text-center shadow-card">
                <p className="text-sm font-black text-boutique-text">{item}</p>
                <p className="mt-1 text-xs text-boutique-text/55">Imported</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 hidden rounded-full bg-boutique-blue px-4 py-2 text-sm font-black text-boutique-text shadow-card sm:block">
            Pastel picks
          </div>
          <div className="absolute -right-2 bottom-12 z-10 hidden rounded-full bg-white px-4 py-2 text-sm font-black text-boutique-cta shadow-card sm:flex sm:items-center sm:gap-2">
            <Heart size={16} fill="currentColor" /> New arrival
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroProducts.map((product, index) => (
              <div
                key={product.id}
                className={`relative overflow-hidden rounded-[1.6rem] bg-white shadow-card ${
                  index % 2 === 0 ? "aspect-[4/5]" : "mt-8 aspect-[4/5]"
                }`}
              >
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 260px, 45vw" priority={index < 2} />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/88 p-3 backdrop-blur">
                  <p className="truncate text-sm font-black">{product.name}</p>
                  <p className="text-xs font-bold text-boutique-cta">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
