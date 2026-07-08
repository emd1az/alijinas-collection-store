export type ProductCategory = "Dress" | "Shoe" | "Bag" | "Pant" | "Accessories" | "Cosmetics";
export type ProductBadge = "New" | "Best Seller" | "Wholesale" | "Imported";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  images: string[];
  badges: ProductBadge[];
  colors?: string[];
  sizes?: string[];
  featured?: boolean;
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "blush-korean-midi-dress",
    name: "Blush Korean Midi Dress",
    category: "Dress",
    price: 168,
    description: "Soft blush midi dress with a sweet boutique silhouette for brunch, dates and everyday pretty styling.",
    images: ["/images/dress-blush.svg", "/images/dress-lavender.svg"],
    badges: ["New", "Imported"],
    colors: ["Blush Pink", "Cream"],
    sizes: ["S", "M", "L"],
    featured: true
  },
  {
    id: "p2",
    slug: "cream-ribbon-mini-dress",
    name: "Cream Ribbon Mini Dress",
    category: "Dress",
    price: 149,
    description: "Cream mini dress with a cute ribbon detail and clean soft-girl finish.",
    images: ["/images/dress-cream.svg", "/images/dress-blush.svg"],
    badges: ["Best Seller", "Imported"],
    colors: ["Cream", "Pink"],
    sizes: ["S", "M", "L"],
    bestSeller: true
  },
  {
    id: "p3",
    slug: "baby-blue-platform-sneaker",
    name: "Baby Blue Platform Sneaker",
    category: "Shoe",
    price: 132,
    description: "Lightweight platform sneaker in a baby blue tone, easy to style with dresses or pants.",
    images: ["/images/shoe-blue.svg", "/images/shoe-pink.svg"],
    badges: ["New", "Wholesale"],
    colors: ["Baby Blue", "White"],
    sizes: ["35", "36", "37", "38", "39"],
    featured: true
  },
  {
    id: "p4",
    slug: "pink-mary-jane-shoes",
    name: "Pink Mary Jane Shoes",
    category: "Shoe",
    price: 158,
    description: "Sweet Mary Jane shoes with glossy pastel finish for a cute Korean boutique look.",
    images: ["/images/shoe-pink.svg", "/images/shoe-blue.svg"],
    badges: ["Best Seller", "Imported"],
    colors: ["Pink", "Ivory"],
    sizes: ["35", "36", "37", "38", "39"],
    bestSeller: true
  },
  {
    id: "p5",
    slug: "heart-charm-shoulder-bag",
    name: "Heart Charm Shoulder Bag",
    category: "Bag",
    price: 119,
    description: "Compact shoulder bag with heart charm detail and soft structured shape.",
    images: ["/images/bag-heart.svg", "/images/bag-lavender.svg"],
    badges: ["New", "Imported"],
    colors: ["Pink", "White"],
    featured: true
  },
  {
    id: "p6",
    slug: "lavender-cloud-tote",
    name: "Lavender Cloud Tote",
    category: "Bag",
    price: 126,
    description: "Roomy lavender tote for daily essentials, boutique orders and pretty casual outfits.",
    images: ["/images/bag-lavender.svg", "/images/bag-heart.svg"],
    badges: ["Wholesale", "Imported"],
    colors: ["Lavender", "Cream"]
  },
  {
    id: "p7",
    slug: "cream-wide-leg-pants",
    name: "Cream Wide Leg Pants",
    category: "Pant",
    price: 138,
    description: "Soft cream wide-leg pants with an easy high-waist fit for clean everyday styling.",
    images: ["/images/pant-cream.svg", "/images/pant-pink.svg"],
    badges: ["Best Seller"],
    colors: ["Cream", "Mocha"],
    sizes: ["S", "M", "L", "XL"],
    bestSeller: true
  },
  {
    id: "p8",
    slug: "pink-cargo-cute-pants",
    name: "Pink Cargo Cute Pants",
    category: "Pant",
    price: 145,
    description: "Pastel cargo pants with a relaxed street-cute shape and practical pockets.",
    images: ["/images/pant-pink.svg", "/images/pant-cream.svg"],
    badges: ["New", "Wholesale"],
    colors: ["Pink", "Beige"],
    sizes: ["S", "M", "L"],
    featured: true
  },
  {
    id: "p9",
    slug: "pearl-bow-hair-clip-set",
    name: "Pearl Bow Hair Clip Set",
    category: "Accessories",
    price: 36,
    description: "Cute pearl and bow clip set for soft hairstyles and photo-ready looks.",
    images: ["/images/accessory-bow.svg", "/images/accessory-kitty.svg"],
    badges: ["Best Seller", "Wholesale"],
    colors: ["Pearl", "Pink"],
    bestSeller: true
  },
  {
    id: "p10",
    slug: "kitty-style-keychain",
    name: "Kitty Style Keychain",
    category: "Accessories",
    price: 28,
    description: "Cute character-inspired keychain with a soft boutique charm style.",
    images: ["/images/accessory-kitty.svg", "/images/accessory-bow.svg"],
    badges: ["New", "Wholesale"],
    colors: ["Pink", "Red", "White"],
    featured: true
  },
  {
    id: "p11",
    slug: "glossy-lip-tint-set",
    name: "Glossy Lip Tint Set",
    category: "Cosmetics",
    price: 59,
    description: "Juicy lip tint set with soft wearable shades for daily makeup looks.",
    images: ["/images/cosmetic-lip.svg", "/images/cosmetic-blush.svg"],
    badges: ["New", "Imported"],
    colors: ["Rose", "Peach", "Berry"]
  },
  {
    id: "p12",
    slug: "pastel-blush-palette",
    name: "Pastel Blush Palette",
    category: "Cosmetics",
    price: 72,
    description: "Soft blush palette with peach and pink tones for a clean romantic glow.",
    images: ["/images/cosmetic-blush.svg", "/images/cosmetic-lip.svg"],
    badges: ["Best Seller", "Imported"],
    colors: ["Peach Pink"],
    bestSeller: true
  },
  {
    id: "p13",
    slug: "floral-chiffon-dress",
    name: "Floral Chiffon Dress",
    category: "Dress",
    price: 188,
    description: "Airy floral chiffon dress with gentle movement and a sweet imported boutique mood.",
    images: ["/images/dress-floral.svg", "/images/dress-cream.svg"],
    badges: ["Imported", "Wholesale"],
    colors: ["Floral Pink", "Ivory"],
    sizes: ["S", "M", "L"]
  },
  {
    id: "p14",
    slug: "soft-bow-sandals",
    name: "Soft Bow Sandals",
    category: "Shoe",
    price: 118,
    description: "Pretty bow sandals for warm days, casual outings and cute outfit photos.",
    images: ["/images/shoe-bow.svg", "/images/shoe-pink.svg"],
    badges: ["New"],
    colors: ["Cream", "Pink"],
    sizes: ["35", "36", "37", "38", "39"]
  },
  {
    id: "p15",
    slug: "mini-quilted-bag",
    name: "Mini Quilted Bag",
    category: "Bag",
    price: 109,
    description: "Mini quilted crossbody bag with a polished boutique finish.",
    images: ["/images/bag-quilted.svg", "/images/bag-heart.svg"],
    badges: ["Best Seller", "Imported"],
    colors: ["White", "Pink"],
    bestSeller: true
  },
  {
    id: "p16",
    slug: "cute-makeup-pouch",
    name: "Cute Makeup Pouch",
    category: "Accessories",
    price: 42,
    description: "Soft zip pouch for cosmetics, tiny accessories and everyday cute things.",
    images: ["/images/accessory-pouch.svg", "/images/cosmetic-blush.svg"],
    badges: ["Wholesale", "Imported"],
    colors: ["Pink", "Lavender", "Cream"]
  }
];

export const productCategories: ProductCategory[] = ["Dress", "Shoe", "Bag", "Pant", "Accessories", "Cosmetics"];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .concat(products.filter((item) => item.id !== product.id && item.category !== product.category))
    .slice(0, limit);
}
