import {
  Box,
  Cable,
  CircleDot,
  Drill,
  PackageOpen,
  PlugZap,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "conduit-fittings": Cable,
  "boxes-enclosures": Box,
  "support-systems": PackageOpen,
  "glands-lugs": PlugZap,
  "cable-management": CircleDot,
  grounding: ShieldCheck,
  "tools-accessories": Drill,
  "waterproof-solutions": Wrench,
};

export default function ProductVisual({ categorySlug }: { categorySlug: string }) {
  const Icon = icons[categorySlug] ?? Box;
  return (
    <div className="product-visual" aria-hidden="true">
      <span className="product-visual-orbit" />
      <Icon size={54} strokeWidth={1.25} />
    </div>
  );
}
