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
        "grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5",
        className
      )}
    >
      {items.map((product) => (
        <div key={product.id} className="catalogue-card-wrapper h-full min-w-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
