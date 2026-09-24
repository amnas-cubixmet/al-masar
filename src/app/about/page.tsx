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
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About AL MASAR YELLOW COMPANY | Electrical Supplier in Saudi Arabia",
  description:
    "AL MASAR YELLOW supplies electrical materials across Saudi Arabia, with project procurement support and branches in Riyadh, Jeddah and Qassim.",
  path: "/about",
  image: "/opengraph-image",
});

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
