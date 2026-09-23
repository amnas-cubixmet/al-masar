"use client";

import { categories } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export default function CategoryFilters({
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  const { isArabic } = useLanguage();

  const allCategories = [
    { slug: "all", name: "All Products", nameAr: "جميع المنتجات" },
    ...categories.map((c) => ({
      slug: c.slug,
      name: c.name,
      nameAr: getArabicCategoryName(c.slug, c.name),
    })),
  ];

  return (
    <div
      className="category-filter-bar flex touch-pan-x gap-1.5 overflow-x-auto scroll-smooth pb-1.5 scrollbar-none sm:flex-wrap sm:gap-2 sm:pb-2"
      aria-label="Product categories filter"
    >
      {allCategories.map((cat) => {
        const isActive = selectedCategory === cat.slug;
        const displayName = isArabic ? cat.nameAr : cat.name;

        return (
          <button
            key={cat.slug}
            onClick={() => onSelectCategory(cat.slug)}
            className={
              (isActive
                ? "flex h-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-3 sm:px-5 text-[10px] sm:text-xs font-bold text-white shadow-lg shadow-[#8A63E8]/20 transition-all duration-300 "
                : "flex h-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:rounded-xl border border-white/10 bg-[#0D1727] px-3 sm:px-5 text-[10px] sm:text-xs font-semibold text-[#AAB4C3] transition-all duration-200 hover:border-white/20 hover:bg-[#142033] hover:text-white ") +
              "category-chip-item"
            }
          >
            {displayName}
          </button>
        );
      })}
    </div>
  );
}

function getArabicCategoryName(slug: string, defaultName: string): string {
  const map: Record<string, string> = {
    "conduit-fittings": "الأنابيب والتوصيلات",
    "boxes-enclosures": "الصناديق ولوحات التوزيع",
    "cable-management": "إدارة الكابلات",
    "glands-lugs": "المجاري الكهربائية والوصلات",
    "circuit-protection": "حماية الدوائر الكهربائية",
    "wiring-accessories": "إكسسوارات التمديدات",
    "flexible-conduit": "الأنابيب المرنة",
    "tools-accessories": "الأدوات والمعدات",
    "support-systems": "أنظمة التثبيت والأنظمة الداعمة",
    grounding: "أنظمة التأريض",
  };
  return map[slug] || defaultName;
}

