import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingQuoteButton from "@/components/layout/FloatingQuoteButton";
import { defaultDescription, defaultTitle, serializeJsonLd, siteJsonLd, siteName, siteUrl } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const notoArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-noto-arabic", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "AL MASAR YELLOW COMPANY",
    "AL MASAR Electricals",
    "electrical materials supplier Saudi Arabia",
    "EMT conduit supplier",
    "electrical fittings Riyadh",
    "cable management",
    "wholesale electrical supplies",
  ],
  authors: [{ name: "AL MASAR YELLOW Company", url: siteUrl }],
  creator: "AL MASAR YELLOW Company",
  publisher: "AL MASAR YELLOW Company",
  category: "Electrical wholesale",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "AL MASAR YELLOW COMPANY",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0D1320",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} ${notoArabic.variable} min-h-[100svh] bg-[#0D1320] text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd()) }}
        />
        <AppProviders>
          <Header />
          <main className="min-w-0 overflow-x-hidden">{children}</main>
          <FloatingQuoteButton />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
