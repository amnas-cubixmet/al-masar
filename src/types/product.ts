import type { MainCategory, ProductVariant, Product as DataProduct } from "@/data/products";

export type { MainCategory, ProductVariant };

export interface Product {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  mainCategory: MainCategory;
  image: string;
  description: string;
  descriptionAr?: string;
  variantCount: number;
  variants: ProductVariant[];
  featured?: boolean;

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
