import { ImageResponse } from "next/og";
import { OgCard, loadLogoDataUrl, ogSize } from "@/lib/ogCard";

export const runtime = "nodejs";
export const alt = "AL MASAR YELLOW | Electrical materials supplier in Saudi Arabia";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <OgCard
        title="Electrical Materials Supplier in Saudi Arabia"
        subtitle="EMT conduit, fittings, cable management and circuit protection."
        logoSrc={await loadLogoDataUrl()}
      />
    ),
    size,
  );
}
