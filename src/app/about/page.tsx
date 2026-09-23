import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import AboutStats from "@/components/about/AboutStats";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import OurValues from "@/components/about/OurValues";
import WhyChooseAbout from "@/components/about/WhyChooseAbout";
import BrandsMarquee from "@/components/brands/BrandsMarquee";
import AboutCTA from "@/components/about/AboutCTA";
import AboutScrollAnimations from "@/components/about/AboutScrollAnimations";

export const metadata: Metadata = {
  title: "About AL MASAR | Electrical Materials Supplier Saudi Arabia",
  description:
    "Learn about AL MASAR, a leading electrical materials supplier in Saudi Arabia offering certified products, project procurement solutions, and nation-wide distribution.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <AboutScrollAnimations>
      {/* 1. ABOUT HERO */}
      <AboutHero />

      {/* 2. COMPANY INTRODUCTION */}
      <CompanyOverview />

      {/* 3. COMPANY STATS */}
      <AboutStats />

      {/* 4. OUR STORY */}
      <OurStory />

      {/* 5. MISSION / VISION */}
      <MissionVision />

      {/* 6. VALUES */}
      <OurValues />

      {/* 7. WHY AL MASAR */}
      <WhyChooseAbout />

      {/* 8. BRANDS */}
      <BrandsMarquee />

      {/* 9. FINAL CTA */}
      <AboutCTA />
    </AboutScrollAnimations>
  );
}
