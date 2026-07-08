"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { productCategories, products } from "@/lib/products";

type SortValue = "featured" | "price-low" | "price-high" | "name";

export function ShopClient({
  initialCategory,
  initialBadge
}: {
  initialCategory?: string;
  initialBadge?: string;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory ?? "All");
  const [badge, setBadge] = useState(initialBadge ?? "All");
  const [maxPrice, setMaxPrice] = useState(220);
  const [sort, setSort] = useState<SortValue>("featured");

  const filtered = useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    const next = products.filter((product) => {
      const matchesSearch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);
      const matchesCategory = category === "All" || product.category === category;
      const matchesBadge = badge === "All" || product.badges.includes(badge as never);
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesBadge && matchesPrice;
    });

    return [...next].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return Number(Boolean(b.featured || b.bestSeller)) - Number(Boolean(a.featured || a.bestSeller));
    });
  }, [badge, category, maxPrice, search, sort]);

  return (
    <div className="container-soft py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Shop boutique</p>
        <h1 className="mt-2 text-3xl font-black text-boutique-text sm:text-5xl">Find your next cute import</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-boutique-text/70 sm:text-base">
          Search dresses, shoes, bags, pants, accessories, cosmetics and kitty-style cute finds.
        </p>
      </div>

      <div className="mb-8 rounded-[1.75rem] bg-white p-4 shadow-card">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <label className="relative">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-boutique-text/45" size={18} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search cute products..."
              className="focus-ring h-12 w-full rounded-full border border-boutique-pink/40 bg-boutique-bg pl-11 pr-4 text-sm font-semibold"
            />
          </label>

          <select value={category} onChange={(event) => setCategory(event.target.value)} className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-bold">
            <option>All</option>
            {productCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select value={badge} onChange={(event) => setBadge(event.target.value)} className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-bold">
            <option>All</option>
            <option>New</option>
            <option>Best Seller</option>
            <option>Wholesale</option>
            <option>Imported</option>
          </select>

          <select value={sort} onChange={(event) => setSort(event.target.value as SortValue)} className="focus-ring h-12 rounded-full border border-boutique-pink/40 bg-boutique-bg px-4 text-sm font-bold">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="mt-5 rounded-3xl bg-boutique-bg p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-black text-boutique-text">
              <SlidersHorizontal size={17} /> Max price
            </span>
            <span className="text-sm font-black text-boutique-cta">¥{maxPrice}</span>
          </div>
          <input
            type="range"
            min="30"
            max="220"
            step="5"
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="mt-3 w-full accent-boutique-cta"
          />
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-boutique-text/65">{filtered.length} products found</p>
        {(search || category !== "All" || badge !== "All" || maxPrice !== 220) && (
          <Button
            variant="ghost"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setBadge("All");
              setMaxPrice(220);
              setSort("featured");
            }}
          >
            Reset
          </Button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-card">
          <h2 className="text-xl font-black">No products found</h2>
          <p className="mt-2 text-sm text-boutique-text/65">Try a softer filter or search another cute category.</p>
        </div>
      )}
    </div>
  );
}
