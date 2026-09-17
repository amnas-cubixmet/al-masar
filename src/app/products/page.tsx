import type { Metadata } from "next";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsExplorer from "@/components/products/ProductsExplorer";

export const metadata: Metadata = {
  title: "Products Catalogue | AL MASAR YELLOW Company",
  description:
    "Explore AL MASAR YELLOW electrical product catalogue by category, SKU code, brand, and specification.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#0D1320] min-h-screen">
      <ProductsHeader />
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <ProductsExplorer />
        </div>
      </section>
    </div>
  );
}
