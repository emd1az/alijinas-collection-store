import Image from "next/image";
import { Instagram } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export function InstagramGallery() {
  const gallery = products.slice(4, 12);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-soft">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Instagram mood</p>
            <h2 className="mt-2 text-2xl font-black text-boutique-text sm:text-4xl">Cute drops, soft photos, boutique energy</h2>
          </div>
          <LinkButton href={siteConfig.instagramUrl} variant="secondary" target="_blank" rel="noreferrer">
            <Instagram size={17} /> Follow Instagram
          </LinkButton>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {gallery.map((product) => (
            <a
              key={product.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-boutique-cream"
            >
              <Image src={product.images[0]} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 640px) 25vw, 50vw" />
              <div className="absolute inset-0 bg-boutique-footer/0 transition group-hover:bg-boutique-footer/18" />
              <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-lg bg-white/90 text-boutique-text">
                <Instagram size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
