import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";
import { branches } from "@/data/branches";

export const metadata: Metadata = {
  title: "Contact AL MASAR YELLOW | Riyadh & Jeddah Branches",
  description:
    "Get in touch with AL MASAR YELLOW branches across Riyadh (Batha, Al Amal) and Jeddah (Al Aziziyah). Direct call lines, Google Maps locations, and enquiry form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: branches.map((branch, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Store",
        name: `AL MASAR YELLOW - ${branch.name}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.address,
          addressLocality: branch.city,
          addressCountry: "SA",
        },
        telephone: branch.phones[0],
        geo: {
          "@type": "GeoCoordinates",
          latitude: branch.coordinates.lat,
          longitude: branch.coordinates.lng,
        },
        url: "https://almasaryellow.com/contact",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactView />
    </>
  );
}
