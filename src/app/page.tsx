import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyUs from "@/components/home/WhyUs";
import ClientsPreview from "@/components/home/ClientsPreview";
import BranchSection from "@/components/home/BranchSection";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <WhyUs />
      <ClientsPreview />
      <BranchSection />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
