import { ImageResponse } from "next/og";
import { products } from "@/data/products";
import { OgCard, loadLogoDataUrl, ogSize } from "@/lib/ogCard";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  return [
    {
      id: "og",
      alt: product
        ? `${product.title} | AL MASAR YELLOW COMPANY`
        : "AL MASAR YELLOW COMPANY electrical products",
      size,
      contentType,
    },
  ];
}

export default async function ProductOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  const title = product?.title ?? "Electrical Products";
  const subtitle = product
    ? `${product.mainCategory} · Wholesale supply in Saudi Arabia`
    : "Wholesale electrical supply in Saudi Arabia";

  return new ImageResponse(
    <OgCard title={title} subtitle={subtitle} logoSrc={await loadLogoDataUrl()} />,
    size,
  );
}
