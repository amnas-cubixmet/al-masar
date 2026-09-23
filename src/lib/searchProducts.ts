import type { Product } from "@/data/products";

/**
 * Reusable utility function to search product catalog data.
 * Matches product title, category, mainCategory, description, and variant title / code.
 * Always returns parent product families (no individual variant cards).
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const searchTerms = trimmed.split(/\s+/).filter(Boolean);

  return products.filter((product) => {
    // Collect text from variants (titles and SKU codes)
    const variantTexts = product.variants.flatMap((v) => [v.code, v.title]);

    const searchableBlob = [
      product.title,
      product.titleAr || "",
      product.category,
      product.categoryAr || "",
      product.mainCategory,
      product.mainCategoryAr || "",
      product.description,
      product.descriptionAr || "",
      ...variantTexts,
    ]
      .join(" ")
      .toLowerCase();

    // Ensure all search terms match the product's blob
    return searchTerms.every((term) => searchableBlob.includes(term));
  });
}
