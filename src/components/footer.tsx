import { Instagram } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-boutique-footer text-white">
      <div className="container-soft grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-boutique-pink text-lg font-black text-boutique-cta">
              A
            </span>
            <span className="text-xl font-black">{siteConfig.brandName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">{siteConfig.contact.intro}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-boutique-cta"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <FooterGroup title="Shop" links={siteConfig.footerLinks.shop} />
        <FooterGroup title="Policies" links={siteConfig.footerLinks.policies} />

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-boutique-pink">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/68">
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-soft flex flex-col gap-2 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 {siteConfig.brandName}. All rights reserved.</p>
          <p>Direct import boutique | Wholesale available</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-boutique-pink">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-white/68 transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
