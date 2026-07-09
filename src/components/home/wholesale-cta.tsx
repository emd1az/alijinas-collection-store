import { MessageCircle, PackageCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function WholesaleCta() {
  return (
    <section className="bg-boutique-bg py-12 sm:py-16">
      <div className="container-soft overflow-hidden rounded-[2rem] bg-boutique-footer text-white shadow-soft">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-boutique-pink">
              <PackageCheck size={16} /> Wholesale
            </div>
            <h2 className="text-2xl font-black sm:text-4xl">{siteConfig.wholesale.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">{siteConfig.wholesale.description}</p>
            <p className="mt-2 text-sm font-semibold text-boutique-pink">{siteConfig.wholesale.note}</p>
          </div>
          <LinkButton href="/contact" className="bg-white hover:bg-boutique-pink">
  <MessageCircle size={18} className="!text-[#1F1F1F]" />
  <span className="!text-[#1F1F1F]">Start Inquiry</span>
</LinkButton>
        </div>
      </div>
    </section>
  );
}