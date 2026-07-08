import { CategoryCard } from "@/components/category-card";
import { Hero } from "@/components/home/hero";
import { InstagramGallery } from "@/components/home/instagram-gallery";
import { Reviews } from "@/components/home/reviews";
import { WholesaleCta } from "@/components/home/wholesale-cta";
import { ProductCard } from "@/components/product-card";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const newArrivals = products.filter((product) => product.badges.includes("New")).slice(0, 4);
  const bestSellers = products.filter((product) => product.bestSeller || product.badges.includes("Best Seller")).slice(0, 4);

  return (
    <>
      <Hero />
      <section className="bg-boutique-bg py-12 sm:py-16">
        <div className="container-soft">
          <SectionHeading eyebrow="Categories" title="Shop by your cute mood" text="Dresses, shoes, bags, cosmetics, pants, accessories and tiny imported treasures." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-soft">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="New arrivals" title="Fresh from China" text="Pretty pieces selected for Instagram boutique shoppers." className="mb-0" />
            <LinkButton href="/shop?badge=New" variant="secondary">View All</LinkButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-boutique-bg py-12 sm:py-16">
        <div className="container-soft">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Best sellers" title="Loved by boutique shoppers" text="Cute styles with easy daily wear and photo-ready details." className="mb-0" />
            <LinkButton href="/shop?badge=Best Seller" variant="secondary">Shop Best Sellers</LinkButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <InstagramGallery />
      <WholesaleCta />
      <Reviews />
    </>
  );
}
