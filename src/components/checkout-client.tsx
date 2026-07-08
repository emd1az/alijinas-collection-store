"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { buildWhatsAppUrl, formatPrice } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function CheckoutClient() {
  const { items, total } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "Payment will be confirmed on WhatsApp."
  });

  const message = useMemo(() => {
    const productLines = items
      .map((item) => {
        const options = [item.size, item.color].filter(Boolean).join(" / ");
        return `- ${item.name}${options ? ` (${options})` : ""}, Quantity: ${item.quantity}, Price: ${formatPrice(item.price)}`;
      })
      .join("\n");

    return [
      "Hello, I want to place an order from Alijina's Collection.",
      "",
      `Customer name: ${form.name || "[name]"}`,
      `Phone: ${form.phone || "[phone]"}`,
      `Address: ${form.address || "[address]"}`,
      "",
      "Products:",
      productLines || "- [cart items]",
      "",
      `Total: ${formatPrice(total)}`,
      `Payment note: ${form.note || "Payment will be confirmed on WhatsApp."}`
    ].join("\n");
  }, [form.address, form.name, form.note, form.phone, items, total]);

  return (
    <div className="container-soft py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Checkout</p>
        <h1 className="mt-2 text-3xl font-black text-boutique-text sm:text-5xl">Send order on WhatsApp</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-boutique-text/70">
          No payment gateway yet. Fill in your details and send the prepared order message to {siteConfig.brandName}.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-card">
          <h2 className="text-2xl font-black">Your cart is empty</h2>
          <LinkButton href="/shop" className="mt-6">Shop Products</LinkButton>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
          <form className="rounded-[2rem] bg-white p-5 shadow-card sm:p-7">
            <div className="grid gap-4">
              <Field label="Customer name" value={form.name} onChange={(value) => setForm((current) => ({ ...current, name: value }))} />
              <Field label="Phone number" value={form.phone} onChange={(value) => setForm((current) => ({ ...current, phone: value }))} />
              <label className="grid gap-2">
                <span className="text-sm font-black">Address</span>
                <textarea
                  value={form.address}
                  onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
                  className="focus-ring min-h-32 rounded-3xl border border-boutique-pink/40 bg-boutique-bg px-4 py-3 text-sm font-semibold"
                  placeholder="Delivery address"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-black">Payment note</span>
                <textarea
                  value={form.note}
                  onChange={(event) => setForm((current) => ({ ...current, note: event.target.value }))}
                  className="focus-ring min-h-24 rounded-3xl border border-boutique-pink/40 bg-boutique-bg px-4 py-3 text-sm font-semibold"
                />
              </label>
            </div>
            <a href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full">
              <Button type="button" className="w-full">
                <MessageCircle size={18} /> Submit Order on WhatsApp
              </Button>
            </a>
          </form>

          <aside className="h-fit rounded-[2rem] bg-white p-5 shadow-card sm:p-6">
            <h2 className="text-xl font-black">Product summary</h2>
            <div className="mt-5 grid gap-3">
              {items.map((item) => (
                <div key={[item.productId, item.size, item.color].join("|")} className="flex justify-between gap-3 text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-black">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-between border-t border-boutique-pink/30 pt-5 text-lg font-black">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-semibold"
      />
    </label>
  );
}
