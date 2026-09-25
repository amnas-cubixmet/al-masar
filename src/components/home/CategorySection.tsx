"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CategorySection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language].categories;

  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const rawCategories = [
    {
      id: "01",
      titleEn: "Cables & Wires",
      titleAr: "الكابلات والأسلاك",
      descEn:
        "Single & multi-core power cables, armoured cables, low voltage conductors, and wiring supplies.",
      descAr:
        "كابلات قوى أحادية ومتعددة النواة، كابلات مسلحة وموصلات جهد منخفض.",
      image: "/images/categories/cable-management.png",
      href: "/products?category=cables",
    },
    {
      id: "02",
      titleEn: "Lighting Solutions",
      titleAr: "حلول الإضاءة",
      descEn:
        "Commercial LED fixtures, industrial floodlights, emergency lights, and smart architectural controls.",
      descAr:
        "وحدات إضاءة تجارية، كشافات صناعية، إضاءة طوارئ وأنظمة تحكم معمارية.",
      image: "/images/categories/wiring-accessories.png",
      href: "/products?category=lighting",
    },
    {
      id: "03",
      titleEn: "Switches & Sockets",
      titleAr: "المفاتيح والمقابس",
      descEn:
        "Modular wiring devices, weatherproof sockets, industrial plugs, and decorative wall plates.",
      descAr:
        "مفاتيح ومقابس مقاومة للطقس والمياه، فيش صناعية ولوحات جدارية.",
      image: "/images/categories/boxes-enclosures.png",
      href: "/products?category=switches",
    },
    {
      id: "04",
      titleEn: "Electrical Panels",
      titleAr: "اللوحات الكهربائية",
      descEn:
        "Distribution boards, MCCB breakers, contactors, isolators, and modular enclosure cabinets.",
      descAr:
        "لوحات توزيع، قواطع MCCB، كونتاكتورات، عوازل وكبائن حماية.",
      image: "/images/categories/circuit-protection.png",
      href: "/products?category=panels",
    },
    {
      id: "05",
      titleEn: "Conduits & Accessories",
      titleAr: "الأنابيب والإكسسوارات",
      descEn:
        "Rigid metallic EMT conduits, flexible PVC pipes, junction boxes, and channel fittings.",
      descAr:
        "أنابيب معدنية صلبة EMT، أنابيب PVC مرنة، صناديق تجميع وعلب وصل.",
      image: "/images/categories/conduit-fittings.png",
      href: "/products?category=conduits",
    },
    {
      id: "06",
      titleEn: "Industrial Electrical",
      titleAr: "التجهيزات الصناعية",
      descEn:
        "Heavy-duty control gear, grounding systems, cable glands, lugs, and power distribution units.",
      descAr:
        "أجهزة تحكم صناعية، أنظمة تأريض، جلاندات ومكابس كابلات.",
      image: "/images/categories/support-systems.png",
      href: "/products?category=industrial",
    },
  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      setVisibleCards(width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, rawCategories.length - visibleCards);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const target = slider.children[index] as HTMLElement | undefined;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handlePrev = () => {
    const next = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const handleNext = () => {
    const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider || slider.children.length === 0) return;

    const sliderRect = slider.getBoundingClientRect();
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(slider.children).forEach((child, index) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const distance = Math.abs(rect.left - sliderRect.left);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setCurrentIndex(Math.min(nearestIndex, maxIndex));
  };

  return (
    <section
      id="categories"
      className="relative w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        <div className="mb-5 flex items-end justify-between gap-3 sm:mb-10 lg:mb-14">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
              {t.eyebrow}
            </p>
            <h2 className="text-[26px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
              {t.headline}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-9 w-10 items-center justify-center rounded-full border border-white/10 bg-[#101A2B] text-white transition hover:border-[#8A63E8]/60 sm:h-10 sm:w-10"
              aria-label={isArabic ? "الفئة السابقة" : "Previous category"}
            >
              {isArabic ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-9 w-10 items-center justify-center rounded-full border border-white/10 bg-[#101A2B] text-white transition hover:border-[#8A63E8]/60 sm:h-10 sm:w-10"
              aria-label={isArabic ? "الفئة التالية" : "Next category"}
            >
              {isArabic ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={handleScroll}
          dir={isArabic ? "rtl" : "ltr"}
          className="flex touch-pan-x gap-3 overflow-x-auto scroll-smooth pb-1 pr-[22%] scrollbar-none snap-x snap-mandatory sm:gap-4 sm:pr-0 lg:gap-5"
        >
          {rawCategories.map((cat) => (
            <div
              key={cat.id}
              className="w-[78%] flex-none snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-40px)/3)]"
            >
              <Link
                href={cat.href}
                className="group block h-full min-w-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0D1727] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8A63E8]/50 hover:bg-[#142033] sm:rounded-2xl sm:hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#07111F]">
                  <span
                    className={`absolute top-2.5 z-10 ${
                      isArabic ? "right-2.5" : "left-2.5"
                    } bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-[17px] font-extrabold leading-none text-transparent sm:top-4 sm:text-2xl ${
                      isArabic ? "sm:right-4" : "sm:left-4"
                    }`}
                  >
                    {cat.id}
                  </span>

                  <img
                    src={cat.image}
                    alt={isArabic ? cat.titleAr : cat.titleEn}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex min-h-[108px] flex-col justify-between p-3 sm:min-h-[178px] sm:p-5 lg:p-6">
                  <div>
                    <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-white transition-colors group-hover:text-[#6EA8FF] sm:text-xl">
                      {isArabic ? cat.titleAr : cat.titleEn}
                    </h3>

                    <p className="mt-2 hidden text-sm leading-relaxed text-[#AAB4C3] sm:line-clamp-3 sm:block">
                      {isArabic ? cat.descAr : cat.descEn}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#6EA8FF] transition-colors group-hover:text-white sm:mt-5 sm:text-[11px] sm:tracking-wider">
                    <span className="truncate">{t.viewProducts}</span>
                    {isArabic ? (
                      <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
