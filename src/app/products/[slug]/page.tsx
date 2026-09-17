import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductVisual from "@/components/products/ProductVisual";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="product-detail-section">
        <Container>
          <Link href="/products" className="back-link"><ArrowLeft size={16} /> Back to products</Link>
          <div className="product-detail-grid">
            <div className="product-detail-visual"><ProductVisual categorySlug={product.categorySlug} /></div>
            <div className="product-detail-copy">
              <span className="eyebrow">{product.category}</span>
              <h1>{product.name}</h1>
              <span className="product-detail-code">{product.code}</span>
              <p className="lead">{product.description}</p>
              <div className="spec-list">
                {(product.specifications || []).map((spec) => (
                  <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>
                ))}
              </div>
              <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="button button--primary">
                <MessageCircle size={17} /> Enquire about this product
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {related.length ? (
        <section className="section section--soft">
          <Container>
            <div className="section-title"><span className="eyebrow">Related products</span><h2>More in {product.category}</h2></div>
            <ProductGrid items={related} />
          </Container>
        </section>
      ) : null}
    </>
  );
}
