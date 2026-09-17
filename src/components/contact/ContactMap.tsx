"use client";

import type { Branch } from "@/types/branch";

export default function ContactMap({ branch }: { branch: Branch }) {
  const mapSrc = `https://maps.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}&z=16&output=embed`;

  return (
    <div className="relative min-h-[280px] w-full overflow-hidden bg-[#0F1724] lg:min-h-[420px]">
      <iframe
        title={`Map location for ${branch.name}`}
        src={mapSrc}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
