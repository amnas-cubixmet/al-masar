import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import CredentialsGrid from "@/components/about/CredentialsGrid";
import RegisteredAddress from "@/components/about/RegisteredAddress";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | AL MASAR YELLOW Company",
  description:
    "Product-led electrical materials company in Saudi Arabia offering digital catalogue discovery, company credentials, and branch access.",
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
