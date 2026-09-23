import type { Product } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import { cn } from "@/lib/cn";

export default function ProductGrid({
  items,
  className,
}: {
  items: Product[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "product-grid-container grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {items.map((product) => (
        <div key={product.id} className="catalogue-card-wrapper h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

