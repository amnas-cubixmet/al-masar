import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";
import { branches } from "@/data/branches";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact AL MASAR | Electrical Material Enquiries & Quotations",
  description:
    "Get in touch with AL MASAR for electrical material enquiries, BOQ quotations, product availability, and branch locations across Saudi Arabia.",
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
        ...(branch.coordinates
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: branch.coordinates.lat,
                longitude: branch.coordinates.lng,
              },
            }
          : {}),
        url: `${company.website}/contact`,
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
