import HeroFall from "@/components/home/HeroFall";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandsMarquee from "@/components/brands/BrandsMarquee";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyUs from "@/components/home/WhyUs";
import BranchSection from "@/components/home/BranchSection";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";
import HomeScrollAnimations from "@/components/home/HomeScrollAnimations";
import { defaultDescription, defaultTitle, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <HomeScrollAnimations>
      {/* 1 — HERO FALL */}
      <HeroFall />

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
  );
}

