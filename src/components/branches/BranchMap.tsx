"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, LoaderCircle, MapPin } from "lucide-react";
import type { Branch } from "@/types/branch";
import { useLanguage } from "@/context/LanguageContext";

export default function BranchMap({ branch }: { branch: Branch }) {
  const { isArabic } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const mapSrc = useMemo(() => {
    const { lat, lng } = branch.coordinates;
    const language = isArabic ? "ar" : "en";
    return `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed&hl=${language}`;
  }, [branch.coordinates, isArabic]);

  useEffect(() => {
    setLoaded(false);
    setShowFallback(false);

    const timer = window.setTimeout(() => {
      setShowFallback(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [branch.id, isArabic]);

  const title = isArabic
    ? `خريطة ${branch.nameAr || branch.name}`
    : `${branch.name} map`;

  return (
    <div className="relative min-h-[190px] w-full overflow-hidden bg-[#0F1724] sm:min-h-[280px] lg:min-h-[380px]">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0F1724]">
          <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
            <LoaderCircle className="h-4 w-4 animate-spin text-[#6993CF]" />
            <span>{isArabic ? "جارٍ تحميل الخريطة..." : "Loading map..."}</span>
          </div>
        </div>
      )}

      <iframe
        key={`${branch.id}-${isArabic ? "ar" : "en"}`}
        src={mapSrc}
        title={title}
        loading="eager"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => {
          setLoaded(true);
          setShowFallback(false);
        }}
        className="absolute inset-0 h-full w-full border-0 grayscale invert contrast-125 opacity-85"
      />

      {showFallback && !loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0F1724]/95 p-5 text-center">
          <div className="max-w-xs">
            <MapPin className="mx-auto h-7 w-7 text-[#6993CF]" />
            <p className="mt-3 text-sm font-semibold text-white">
              {isArabic ? "تعذر تحميل الخريطة على هذا الجهاز" : "Map could not load on this device"}
            </p>
            <a
              href={branch.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#6993CF]/40 px-4 text-xs font-semibold text-[#8BB8EF] transition hover:bg-[#6993CF]/10"
            >
              {isArabic ? "فتح الموقع في خرائط Google" : "Open in Google Maps"}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
