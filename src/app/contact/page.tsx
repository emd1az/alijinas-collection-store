import type { Metadata } from "next";
import { Instagram, Mail, MessageCircle, PackageCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Alijina's Collection for orders, wholesale inquiries and Instagram boutique support."
};

export default function ContactPage() {
  return (
    <div className="container-soft py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Contact</p>
        <h1 className="mt-2 text-3xl font-black text-boutique-text sm:text-5xl">Let’s talk cute imports</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-boutique-text/70 sm:text-base">{siteConfig.contact.intro}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <form className="rounded-[2rem] bg-white p-5 shadow-card sm:p-7">
          <h2 className="text-2xl font-black">Send a message</h2>
          <div className="mt-5 grid gap-4">
            <input className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-semibold" placeholder="Your name" />
            <input className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-semibold" placeholder="Phone or email" />
            <select className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-semibold">
              <option>Order inquiry</option>
              <option>Wholesale inquiry</option>
              <option>Product question</option>
              <option>Collaboration</option>
            </select>
            <textarea className="focus-ring min-h-36 rounded-3xl border border-boutique-pink/40 bg-boutique-bg px-4 py-3 text-sm font-semibold" placeholder="Tell us what you need..." />
          </div>
          <LinkButton href={buildWhatsAppUrl("Hello, I want to contact Alijina's Collection.")} className="mt-6 w-full" target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Continue on WhatsApp
          </LinkButton>
        </form>

        <div className="grid gap-5">
          <InfoCard icon={<MessageCircle size={22} />} title="WhatsApp inquiries" text={siteConfig.contact.phone} href={buildWhatsAppUrl("Hello, I want to ask about Alijina's Collection general or wholesale inquiry.")} />
          <InfoCard icon={<Instagram size={22} />} title="Instagram" text="@alijinas_collection_" href={siteConfig.instagramUrl} />
          <InfoCard icon={<Mail size={22} />} title="Email" text={siteConfig.contact.email} />
          <div className="rounded-[2rem] bg-boutique-footer p-6 text-white shadow-card">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-boutique-pink">
              <PackageCheck size={22} />
            </div>
            <h2 className="text-2xl font-black">{siteConfig.wholesale.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">{siteConfig.wholesale.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href?: string }) {
  const content = (
    <div className="flex gap-4 rounded-[1.75rem] bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-boutique-cream text-boutique-cta">{icon}</div>
      <div>
        <h2 className="font-black">{title}</h2>
        <p className="mt-1 text-sm text-boutique-text/65">{text}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
