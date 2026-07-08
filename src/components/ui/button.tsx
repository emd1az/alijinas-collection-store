import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<Variant, string> = {
  primary: "bg-boutique-cta text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#d94673]",
  secondary: "bg-white text-boutique-text ring-1 ring-boutique-pink/55 hover:-translate-y-0.5 hover:bg-boutique-cream",
  ghost: "bg-transparent text-boutique-text hover:bg-white/70",
  dark: "bg-boutique-footer text-white hover:-translate-y-0.5 hover:bg-black"
};

const base =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ className, variant = "primary", href, children, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
