import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product | AL MASAR YELLOW" };

  const title = `${product.title} | AL MASAR YELLOW`;
  const description = `${product.title} available from AL MASAR YELLOW with multiple sizes and specifications for wholesale electrical supply.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  // Related products from the same mainCategory, excluding current product, limit 4-6
  const relatedProducts = products
    .filter(
      (item) => item.mainCategory === product.mainCategory && item.id !== product.id
    )
    .slice(0, 4);

  const defaultVariant = product.variants[0];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    sku: defaultVariant ? defaultVariant.code : product.id,
    category: product.mainCategory,
    image: product.image ? [product.image] : [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
