import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyUs from "@/components/home/WhyUs";
import ClientsPreview from "@/components/home/ClientsPreview";
import BranchSection from "@/components/home/BranchSection";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "AL MASAR YELLOW | Electrical Materials Supplier Saudi Arabia",
  description:
    "AL MASAR YELLOW supplies electrical materials, conduits, fittings, cable management, circuit protection and related products across Saudi Arabia.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AL MASAR YELLOW Company",
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
