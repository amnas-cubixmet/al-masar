import type { Branch } from "@/types/branch";

export default function BranchMap({ branch }: { branch: Branch }) {
  const mapSrc = `https://maps.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}&z=17&output=embed`;

  return (
    <div className="relative min-h-[190px] w-full overflow-hidden bg-[#0F1724] sm:min-h-[280px] lg:min-h-[380px]">
      <iframe
        key={branch.id}
        src={mapSrc}
        title={`${branch.name} map`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0 grayscale invert contrast-125 opacity-85"
      />
    </div>
  );
}
