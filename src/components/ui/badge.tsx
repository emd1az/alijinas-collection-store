import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-full bg-boutique-cream px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-boutique-cta", className)}>
      {children}
    </span>
  );
}
