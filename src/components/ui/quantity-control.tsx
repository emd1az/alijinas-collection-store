"use client";

import { Minus, Plus } from "lucide-react";

export function QuantityControl({
  value,
  onChange,
  min = 1
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
}) {
  return (
    <div className="inline-grid h-11 grid-cols-[2.75rem_3.25rem_2.75rem] overflow-hidden rounded-full border border-boutique-pink/50 bg-white">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="grid place-items-center text-boutique-text transition hover:bg-boutique-cream"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus size={16} />
      </button>
      <span className="grid place-items-center text-sm font-bold">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="grid place-items-center text-boutique-text transition hover:bg-boutique-cream"
        onClick={() => onChange(value + 1)}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
