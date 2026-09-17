export type SpecificationItem = { label: string; value: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  code?: string;
  category: string;
  categorySlug: string;
  brand?: string;
  image: string;
  shortDescription?: string;
  description?: string;
  specifications?: SpecificationItem[];
  keywords?: string[];
  tags?: string[];
  price?: number;
  featured?: boolean;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  shortLabel: string;
  image: string;
  productCount: number;
  description?: string;
};


