"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductSearch from "@/components/products/ProductSearch";
import CategoryFilters from "@/components/products/CategoryFilters";
import ProductSort from "@/components/products/ProductSort";
import ProductGrid from "@/components/products/ProductGrid";
import ProductsEmptyState from "@/components/products/ProductsEmptyState";
import LoadMoreProducts from "@/components/products/LoadMoreProducts";
import ProductsScrollAnimations from "@/components/products/ProductsScrollAnimations";
import { categories, getCategoryBySlug } from "@/data/categories";
import { products } from "@/data/products";
import { searchProducts } from "@/lib/searchProducts";
import { useLanguage } from "@/context/LanguageContext";

const BATCH_SIZE = 12;

function ProductsExplorerContent() {
  const { isArabic } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "default";

  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialSearch);
  const [sort, setSort] = useState(initialSort);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Sync state with URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== "all") params.set("category", category);
    if (query.trim()) params.set("search", query.trim());
    if (sort && sort !== "default") params.set("sort", sort);

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(newUrl, { scroll: false });
  }, [category, query, sort, pathname, router]);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [category, query, sort]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (category !== "all") {
      const catObj = getCategoryBySlug(category);
      if (catObj) {
        result = result.filter((product) => product.mainCategory === catObj.name);
      }
    }

    // Filter by Search Query
    if (query.trim()) {
      result = searchProducts(result, query);
    }

    // Sort Options
    if (sort === "name-asc") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "name-desc") {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "most-variants") {
      result = [...result].sort((a, b) => b.variantCount - a.variantCount);
    }

    return result;
  }, [category, query, sort]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const categoryName = useMemo(() => {
    if (category === "all") return "";
    return categories.find((c) => c.slug === category)?.name || category;
  }, [category]);

  const handleClearFilters = () => {
    setCategory("all");
    setQuery("");
    setSort("default");
  };

  return (
    <ProductsScrollAnimations
      category={category}
      query={query}
      sort={sort}
      visibleCount={visibleProducts.length}
    >
      {/* Clean Single-Column Hero */}
      <ProductsHeader />

      {/* Catalogue Filter & Grid Container - Seamless Transition */}
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-5 sm:px-6 sm:pt-8 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Search Bar & Sort Dropdown */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <ProductSearch value={query} onChange={setQuery} />
            <ProductSort value={sort} onChange={setSort} />
          </div>

          {/* Category Chips */}
          <CategoryFilters selectedCategory={category} onSelectCategory={setCategory} />

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between pb-1 sm:pb-2">
            <p className="text-[10px] font-semibold text-[#AAB4C3] sm:text-sm">
              {category !== "all" ? (
                isArabic ? (
                  <>
                    عرض <span className="text-white">{filteredProducts.length}</span> منتجات في{" "}
                    <span className="text-[#6EA8FF]">{categoryName}</span>
                  </>
                ) : (
                  <>
                    Showing <span className="text-white">{filteredProducts.length}</span> Products in{" "}
                    <span className="text-[#6EA8FF]">{categoryName}</span>
                  </>
                )
              ) : (
                isArabic ? (
                  <>
                    عرض <span className="text-white">{Math.min(visibleCount, filteredProducts.length)}</span> من أصل{" "}
                    <span className="text-white">{filteredProducts.length}</span> منتج
                  </>
                ) : (
                  <>
                    Showing <span className="text-white">{Math.min(visibleCount, filteredProducts.length)}</span> of{" "}
                    <span className="text-white">{filteredProducts.length}</span> Products
                  </>
                )
              )}
            </p>
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <>
              <ProductGrid items={visibleProducts} />
              <LoadMoreProducts
                visibleCount={visibleProducts.length}
                totalCount={filteredProducts.length}
                onLoadMore={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
              />
            </>
          ) : (
            <ProductsEmptyState onClearFilters={handleClearFilters} />
          )}
        </div>
      </div>
    </ProductsScrollAnimations>
  );
}

export default function ProductsExplorer() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-[#AAB4C3]">Loading catalogue...</div>}>
      <ProductsExplorerContent />
    </Suspense>
  );
}
