import type { Metadata } from "next";
import { company } from "@/data/company";

export const siteUrl = "https://www.almasarelectricals.com";
export const siteName = company.shortName;

export const defaultTitle =
  "AL MASAR YELLOW COMPANY | Electrical Materials Supplier in Saudi Arabia";

export const defaultDescription =
  "Wholesale electrical materials from AL MASAR YELLOW COMPANY: EMT conduit, fittings, cable management and circuit protection. Branches in Riyadh, Jeddah and Qassim.";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      type: "website",
      locale: "en_SA",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images: [image as string] } : {}),
    },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: company.name,
        url: siteUrl,
        email: company.email,
        logo: absoluteUrl("/logo/logo.png"),
        image: absoluteUrl("/logo/logo.png"),
        telephone: company.quoteWhatsapp,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.registeredAddress,
          addressLocality: "Riyadh",
          postalCode: "12644",
          addressCountry: "SA",
        },
        vatID: company.vatNumber,
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: company.quoteWhatsapp,
          email: company.email,
          contactType: "sales",
          areaServed: "SA",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: defaultDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}
