"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProductSearch from "@/components/products/ProductSearch";
import CategoryFilters from "@/components/products/CategoryFilters";
import ProductSort from "@/components/products/ProductSort";
import ProductGrid from "@/components/products/ProductGrid";
import ProductsEmptyState from "@/components/products/ProductsEmptyState";
import LoadMoreProducts from "@/components/products/LoadMoreProducts";
import { categories, getCategoryBySlug } from "@/data/categories";
import { products } from "@/data/products";
import { searchProducts } from "@/lib/searchProducts";

const BATCH_SIZE = 24;

function ProductsExplorerContent() {
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

    // Filter by Search Query (Product title, category, mainCategory, description, variant code/title)
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
    <div className="flex flex-col gap-6">
      {/* Search Bar & Sort Dropdown */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <ProductSearch value={query} onChange={setQuery} />
        <ProductSort value={sort} onChange={setSort} />
      </div>

      {/* Category Chips */}
      <CategoryFilters selectedCategory={category} onSelectCategory={setCategory} />

      {/* Results Summary Bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-semibold text-slate-400 sm:text-sm">
          {category !== "all" ? (
            <>
              Showing <span className="text-white">{filteredProducts.length}</span> Products in{" "}
              <span className="text-[#6993CF]">{categoryName}</span>
            </>
          ) : (
            <>
              Showing <span className="text-white">{Math.min(visibleCount, filteredProducts.length)}</span> of{" "}
              <span className="text-white">{filteredProducts.length}</span> Products
              <span className="ml-2 text-slate-500 font-normal">(749 available variants)</span>
            </>
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
  );
}

export default function ProductsExplorer() {
  return (
    <Suspense fallback={<div className="py-8 text-center text-slate-400">Loading catalogue...</div>}>
      <ProductsExplorerContent />
    </Suspense>
  );
}
