"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
};

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (product: Product, quantity?: number, options?: { size?: string; color?: string }) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  total: number;
  getItemKey: (item: Pick<CartItem, "productId" | "size" | "color">) => string;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "alijinas-cart";

function itemKey(item: Pick<CartItem, "productId" | "size" | "color">) {
  return [item.productId, item.size ?? "default-size", item.color ?? "default-color"].join("|");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored) as CartItem[]);
      }
    } catch {
      setItems([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = useCallback(
    (product: Product, quantity = 1, options?: { size?: string; color?: string }) => {
      setItems((current) => {
        const nextItem: CartItem = {
          productId: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          image: product.images[0],
          quantity,
          size: options?.size,
          color: options?.color
        };
        const key = itemKey(nextItem);
        const existing = current.find((item) => itemKey(item) === key);
        if (existing) {
          return current.map((item) =>
            itemKey(item) === key ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [...current, nextItem];
      });
      setIsCartOpen(true);
    },
    []
  );

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => itemKey(item) !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) => (itemKey(item) === key ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return {
      items,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      itemCount,
      total,
      getItemKey: itemKey
    };
  }, [addItem, clearCart, closeCart, isCartOpen, items, openCart, removeItem, updateQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
