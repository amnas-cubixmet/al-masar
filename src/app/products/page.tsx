import ProductsExplorer from "@/components/products/ProductsExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Electrical Products Catalogue | AL MASAR YELLOW",
  description:
    "Browse EMT conduit, fittings, boxes, cable management, glands and circuit protection from AL MASAR YELLOW. Wholesale electrical supply across Saudi Arabia.",
  path: "/products",
  image: "/opengraph-image",
});

export default function ProductsPage() {
  return (
    <div className="bg-[#07111F] min-h-screen text-white">
      <section className="pb-10 sm:pb-16 lg:pb-20">
        <ProductsExplorer />
      </section>
    </div>
  );
}


