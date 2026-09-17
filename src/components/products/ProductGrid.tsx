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
        "grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5",
        className
      )}
    >
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
