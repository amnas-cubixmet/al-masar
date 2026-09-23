import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandsMarquee from "@/components/brands/BrandsMarquee";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyUs from "@/components/home/WhyUs";
import BranchSection from "@/components/home/BranchSection";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";
import HomeScrollAnimations from "@/components/home/HomeScrollAnimations";

export const metadata: Metadata = {
  title: "AL MASAR | Electrical Materials Supplier Saudi Arabia",
  description:
    "AL MASAR supplies electrical materials, conduits, fittings, cable management, circuit protection and related products across Saudi Arabia.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AL MASAR Company",
    description: "Electrical materials supplier in Saudi Arabia.",
    url: "https://almasaryellow.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeScrollAnimations>
        {/* 1 — CLEAN FULL-SCREEN HERO */}
        <Hero />

        {/* 2 — CATEGORY SECTION */}
        <CategorySection />

        {/* 4 — PRODUCT SHOWCASE */}
        <FeaturedProducts />

        {/* 5 — AUTOMATIC BRAND LOGO SLIDER */}
        <BrandsMarquee />

        {/* 6 — SOLUTIONS & WHY AL MASAR & CTA */}
        <SolutionsSection />
        <WhyUs />
        <BranchSection />
        <AboutPreview />
        <ContactCTA />
      </HomeScrollAnimations>
    </>
  );
}

