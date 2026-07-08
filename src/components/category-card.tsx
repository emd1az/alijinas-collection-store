import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryCard({ name, href, color }: { name: string; href: string; color: string }) {
  return (
    <Link
      href={href}
      className="group flex min-h-32 flex-col justify-between rounded-3xl border border-white bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
      style={{ background: `linear-gradient(145deg, ${color}, #ffffff 74%)` }}
    >
      <span className="text-lg font-black text-boutique-text">{name}</span>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-boutique-cta shadow-card transition group-hover:translate-x-1">
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}
