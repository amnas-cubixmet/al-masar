import type { Metadata } from "next";
import ProductsExplorer from "@/components/products/ProductsExplorer";

export const metadata: Metadata = {
  title: "Electrical Products Catalogue | AL MASAR",
  description:
    "Explore AL MASAR's comprehensive range of electrical materials, accessories, and project-supply solutions across Saudi Arabia and the GCC.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-[#07111F] min-h-screen text-white">
      <section className="pb-10 sm:pb-16 lg:pb-20">
        <ProductsExplorer />
      </section>
    </div>
  );
}


