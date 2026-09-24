import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { absoluteUrl, pageMetadata, serializeJsonLd, siteName } from "@/lib/seo";

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
  if (!product) {
    return {
      ...pageMetadata({
        title: `Product Not Found | ${siteName}`,
        description: "This electrical product is not available in the AL MASAR YELLOW catalogue.",
        path: `/products/${slug}`,
      }),
      robots: { index: false, follow: true },
    };
  }

  const title = `${product.title} | ${siteName}`;
  const description = `${product.description.replace(/\.$/, "")}. Wholesale supply from AL MASAR YELLOW across Saudi Arabia.`;

  return pageMetadata({
    title,
    description,
    path: `/products/${product.slug}`,
  });
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

  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    sku: defaultVariant ? defaultVariant.code : product.id,
    category: product.mainCategory,
    url: productUrl,
    image: product.image ? [absoluteUrl(product.image)] : [],
    brand: {
      "@type": "Brand",
      name: siteName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(productJsonLd) }}
      />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
