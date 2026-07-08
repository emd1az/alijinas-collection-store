import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Reviews() {
  return (
    <section className="bg-boutique-bg py-12 sm:py-16">
      <div className="container-soft">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Customer love</p>
          <h2 className="mt-2 text-2xl font-black text-boutique-text sm:text-4xl">Pretty orders, happy shoppers</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.reviews.map((review) => (
            <article key={review.name} className="rounded-3xl bg-white p-6 shadow-card">
              <div className="mb-4 flex gap-1 text-boutique-cta">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Heart key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-6 text-boutique-text/72">“{review.text}”</p>
              <p className="mt-4 font-black text-boutique-text">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
