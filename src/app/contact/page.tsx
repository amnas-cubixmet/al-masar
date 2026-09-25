import ContactView from "@/components/contact/ContactView";
import { branches } from "@/data/branches";
import { absoluteUrl, pageMetadata, serializeJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact AL MASAR YELLOW COMPANY | Quotations & Branch Locations",
  description:
    "Request a quotation from AL MASAR YELLOW COMPANY or visit our electrical supply branches in Riyadh, Jeddah and Qassim. Call, WhatsApp or send an enquiry.",
  path: "/contact",
  image: "/opengraph-image",
});

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: branches.map((branch, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Store",
        name: `AL MASAR YELLOW COMPANY - ${branch.name}`,
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
        url: absoluteUrl("/contact"),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <ContactView />
    </>
  );
}
