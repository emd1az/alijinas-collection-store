export const siteConfig = {
  brandName: "Alijina's Collection",
  tagline: "Cute Fashion & Accessories from China",
  announcement: "Direct import from China | Wholesale available",
  heroTitle: "Cute Fashion & Accessories from China",
  heroSubtitle: "Shop dresses, shoes, bags, cosmetics and trendy accessories.",
  currency: "¥",
  whatsappNumber: "000000000000",
  instagramUrl: "https://www.instagram.com/alijinas_collection_",
  contact: {
    email: "hello@alijinascollection.com",
    phone: "WhatsApp placeholder",
    address: "Online boutique, direct import from China",
    intro:
      "Alijina's Collection is a soft, cute boutique for dresses, shoes, bags, cosmetics and trendy imported finds."
  },
  wholesale: {
    title: "Wholesale available for boutiques and resellers",
    description:
      "Order direct import fashion pieces, cute accessories, cosmetics and giftable items from China with friendly wholesale support.",
    note: "Message us on WhatsApp with your preferred category, quantity and delivery location."
  },
  seo: {
    title: "Alijina's Collection | Cute Fashion & Accessories from China",
    description:
      "Shop pastel dresses, shoes, bags, cosmetics and trendy accessories from Alijina's Collection, a cute Instagram boutique with wholesale available.",
    keywords: [
      "Alijina's Collection",
      "Instagram boutique",
      "cute fashion",
      "China import fashion",
      "wholesale dresses",
      "ladies bags",
      "pastel accessories"
    ]
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Dress", href: "/shop?category=Dress" },
    { label: "Shoes", href: "/shop?category=Shoe" },
    { label: "Bags", href: "/shop?category=Bag" },
    { label: "Accessories", href: "/shop?category=Accessories" },
    { label: "Contact", href: "/contact" }
  ],
  categories: [
    { name: "Dress", href: "/shop?category=Dress", color: "#FFF1E6" },
    { name: "Shoe", href: "/shop?category=Shoe", color: "#DFF3FF" },
    { name: "Ladies Bag", href: "/shop?category=Bag", color: "#EEE7FF" },
    { name: "Pant", href: "/shop?category=Pant", color: "#FFE7F0" },
    { name: "Accessories", href: "/shop?category=Accessories", color: "#F8F0FF" },
    { name: "Cosmetics", href: "/shop?category=Cosmetics", color: "#FFF1E6" },
    { name: "New Arrival", href: "/shop?badge=New", color: "#EAF8F1" },
    { name: "Best Seller", href: "/shop?badge=Best Seller", color: "#FFE5EF" }
  ],
  reviews: [
    {
      name: "Mina",
      text: "The dress quality was lovely and the pastel packaging felt so cute."
    },
    {
      name: "Tania",
      text: "Fast replies on WhatsApp and the bag looked exactly like the photos."
    },
    {
      name: "Sara",
      text: "Perfect boutique for imported accessories and pretty daily outfits."
    }
  ],
  policies: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: July 2026",
      sections: [
        "We collect customer details only to confirm orders, arrange delivery and provide support.",
        "Contact form and checkout details may include your name, phone number, address and order notes.",
        "We do not sell customer information. Messages may be handled through WhatsApp or Instagram."
      ]
    },
    shipping: {
      title: "Shipping Policy",
      updated: "Last updated: July 2026",
      sections: [
        "Delivery time depends on product availability, location and import schedule.",
        "Some items are ready stock while direct import items may take longer to arrive.",
        "Shipping fees and estimated timelines are confirmed before final order processing."
      ]
    },
    returns: {
      title: "Returns & Exchanges",
      updated: "Last updated: July 2026",
      sections: [
        "Please check product size, color and details carefully before confirming an order.",
        "Exchange requests are reviewed case by case for damaged, incorrect or defective items.",
        "Cosmetics, accessories and sale items may not be eligible for return after delivery."
      ]
    },
    terms: {
      title: "Terms & Conditions",
      updated: "Last updated: July 2026",
      sections: [
        "Prices, product availability and import timelines may change without prior notice.",
        "Orders are confirmed through WhatsApp after customer details and stock are verified.",
        "By placing an order, customers agree to the product details, delivery terms and payment note shared during checkout."
      ]
    }
  },
  footerLinks: {
    shop: [
      { label: "All Products", href: "/shop" },
      { label: "New Arrivals", href: "/shop?badge=New" },
      { label: "Best Sellers", href: "/shop?badge=Best Seller" },
      { label: "Wholesale", href: "/contact" }
    ],
    policies: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Returns & Exchanges", href: "/returns-exchanges" },
      { label: "Terms & Conditions", href: "/terms-conditions" }
    ]
  }
} as const;

export type PolicyKey = keyof typeof siteConfig.policies;
