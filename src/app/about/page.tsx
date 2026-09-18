import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import CredentialsGrid from "@/components/about/CredentialsGrid";
import RegisteredAddress from "@/components/about/RegisteredAddress";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About AL MASAR YELLOW | Electrical Materials Company",
  description:
    "Learn about AL MASAR YELLOW, a leading electrical materials supplier in Saudi Arabia offering product discovery, quality credentials, and extensive branch support.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <CredentialsGrid />
      <RegisteredAddress />
      <AboutCTA />
    </>
  );
}
