import { products, type MainCategory } from "./products";

export interface Category {
  id: string;
  slug: string;
  name: MainCategory;
  shortLabel?: string;
  image: string;
  productCount: number;
}

const categoryMeta: Array<Omit<Category, "id" | "productCount">> = [
  {
    slug: "conduit-fittings",
    name: "Conduit & Fittings",
    image: "/images/categories/conduit-fittings.png",
  },
  {
    slug: "boxes-enclosures",
    name: "Boxes & Enclosures",
    image: "/images/categories/boxes-enclosures.png",
  },
  {
    slug: "cable-management",
    name: "Cable Management",
    image: "/images/categories/cable-management.png",
  },
  {
    slug: "glands-lugs",
    name: "Glands & Lugs",
    image: "/images/categories/glands-lugs.png",
  },
  {
    slug: "circuit-protection",
    name: "Circuit Protection",
    image: "/images/categories/circuit-protection.png",
  },
  {
    slug: "wiring-accessories",
    name: "Wiring Accessories",
    image: "/images/categories/wiring-accessories.png",
  },
  {
    slug: "flexible-conduit",
    name: "Flexible Conduit",
    image: "/images/categories/flexible-conduit.png",
  },
  {
    slug: "tools-accessories",
    name: "Tools & Accessories",
    image: "/images/categories/tools-accessories.png",
  },
  {
    slug: "support-systems",
    name: "Support Systems",
    image: "/images/categories/support-systems.png",
  },
  {
    slug: "grounding",
    name: "Grounding",
    image: "/images/categories/grounding.png",
  },
];

const countByMainCategory = products.reduce<Record<MainCategory, number>>(
  (acc, product) => {
    acc[product.mainCategory] = (acc[product.mainCategory] ?? 0) + 1;
    return acc;
  },
  {
    "Conduit & Fittings": 0,
    "Boxes & Enclosures": 0,
    "Cable Management": 0,
    "Glands & Lugs": 0,
    "Circuit Protection": 0,
    "Wiring Accessories": 0,
    "Flexible Conduit": 0,
    "Tools & Accessories": 0,
    "Support Systems": 0,
    Grounding: 0,
  }
);

export const categories: Category[] = categoryMeta.map((category) => ({
  id: category.slug,
  ...category,
  productCount: countByMainCategory[category.name],
}));

export const categoryBySlug = Object.fromEntries(
  categories.map((category) => [category.slug, category])
) as Record<string, Category>;

export function getCategoryBySlug(slug: string) {
  return categoryBySlug[slug];
}

export function getProductsByCategorySlug(slug: string) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return [];
  }

  return products.filter(
    (product) => product.mainCategory === category.name
  );
}
