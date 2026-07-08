import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  className
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-7 flex flex-col gap-2 sm:mb-10", className)}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">{eyebrow}</p> : null}
      <h2 className="text-2xl font-extrabold leading-tight text-boutique-text sm:text-3xl lg:text-4xl">{title}</h2>
      {text ? <p className="max-w-2xl text-sm leading-6 text-boutique-text/70 sm:text-base">{text}</p> : null}
    </div>
  );
}
