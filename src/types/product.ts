import type { MainCategory, ProductVariant, Product as DataProduct } from "@/data/products";

export type { MainCategory, ProductVariant };

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  mainCategory: MainCategory;
  image: string;
  description: string;
  variantCount: number;
  variants: ProductVariant[];

  // Optional backward-compatibility fields for legacy UI components
  name?: string;
  code?: string;
  categorySlug?: string;
  brand?: string;
  shortDescription?: string;
  specifications?: Array<{ label: string; value: string }>;
  keywords?: string[];
  tags?: string[];
  price?: number;
  featured?: boolean;
}

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  shortLabel?: string;
  image: string;
  productCount: number;
  description?: string;
};
