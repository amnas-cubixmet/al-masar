import type { ProductCategory } from "@/types/product";
import { products } from "@/data/products";

const baseCategories: Array<Omit<ProductCategory, "productCount">> = [
  {
    id: "conduit-fittings",
    name: "Conduit & Fittings",
    slug: "conduit-fittings",
    shortLabel: "Conduit",
    image: "/images/categories/conduit-fittings.png",
  },
  {
    id: "boxes-enclosures",
    name: "Boxes & Enclosures",
    slug: "boxes-enclosures",
    shortLabel: "Boxes",
    image: "/images/categories/boxes-enclosures.png",
  },
  {
    id: "cable-management",
    name: "Cable Management",
    slug: "cable-management",
    shortLabel: "Cable",
    image: "/images/categories/cable-management.png",
  },
  {
    id: "glands-lugs",
    name: "Glands & Lugs",
    slug: "glands-lugs",
    shortLabel: "Glands",
    image: "/images/categories/glands-lugs.png",
  },
  {
    id: "circuit-protection",
    name: "Circuit Protection",
    slug: "circuit-protection",
    shortLabel: "Circuit",
    image: "/images/categories/circuit-protection.png",
  },
  {
    id: "wiring-accessories",
    name: "Wiring Accessories",
    slug: "wiring-accessories",
    shortLabel: "Wiring",
    image: "/images/categories/wiring-accessories.png",
  },
  {
    id: "flexible-conduit",
    name: "Flexible Conduit",
    slug: "flexible-conduit",
    shortLabel: "Flexible",
    image: "/images/categories/flexible-conduit.png",
  },
  {
    id: "tools-accessories",
    name: "Tools & Accessories",
    slug: "tools-accessories",
    shortLabel: "Tools",
    image: "/images/categories/tools-accessories.png",
  },
  {
    id: "support-systems",
    name: "Support Systems",
    slug: "support-systems",
    shortLabel: "Support",
    image: "/images/categories/support-systems.png",
  },
  {
    id: "grounding",
    name: "Grounding",
    slug: "grounding",
    shortLabel: "Grounding",
    image: "/images/categories/grounding.png",
  },
];

const defaultCounts: Record<string, number> = {
  "conduit-fittings": 125,
  "boxes-enclosures": 90,
  "cable-management": 84,
  "glands-lugs": 72,
  "circuit-protection": 68,
  "wiring-accessories": 96,
  "flexible-conduit": 54,
  "tools-accessories": 62,
  "support-systems": 51,
  grounding: 47,
};

export const categories: ProductCategory[] = baseCategories.map((cat) => {
  const realCount = products.filter((product) => product.categorySlug === cat.slug).length;
  return {
    ...cat,
    productCount: realCount > 0 ? realCount : (defaultCounts[cat.slug] ?? 25),
  };
});
