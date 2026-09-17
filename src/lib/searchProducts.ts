import type { Product } from "@/types/product";

/**
 * Reusable utility function to search product catalog data.
 * Searches product name, product code (SKU), category, brand, keywords/tags, and specifications.
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  // Split query into terms for multi-word matching (e.g. "cable gland", "3/4 emt")
  const searchTerms = trimmed.split(/\s+/).filter(Boolean);

  return products.filter((product) => {
    // Extract searchable specification values
    const specTexts: string[] = [];
    if (Array.isArray(product.specifications)) {
      product.specifications.forEach((spec) => {
        if (typeof spec === "string") {
          specTexts.push(spec);
        } else if (spec && typeof spec === "object") {
          specTexts.push(spec.label || "", spec.value || "");
        }
      });
    }

    const searchableBlob = [
      product.name,
      product.code || "",
      product.category,
      product.brand || "",
      product.shortDescription || "",
      product.description || "",
      ...(product.keywords || []),
      ...(product.tags || []),
      ...specTexts,
    ]
      .join(" ")
      .toLowerCase();

    // Ensure all search terms match the product's blob
    return searchTerms.every((term) => searchableBlob.includes(term));
  });
}
