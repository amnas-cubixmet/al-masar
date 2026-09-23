import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingQuoteButton from "@/components/layout/FloatingQuoteButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const notoArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-noto-arabic", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://almasaryellow.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AL MASAR YELLOW | Electrical Materials Supplier Saudi Arabia",
    template: "%s | AL MASAR YELLOW",
  },
  description:
    "AL MASAR YELLOW supplies electrical materials, conduits, fittings, cable management, circuit protection and related products across Saudi Arabia.",
  applicationName: "AL MASAR YELLOW",
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
    title: "AL MASAR YELLOW",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "AL MASAR YELLOW | Electrical Materials Supplier Saudi Arabia",
    description:
      "AL MASAR YELLOW supplies electrical materials, conduits, fittings, cable management, circuit protection and related products across Saudi Arabia.",
    siteName: "AL MASAR YELLOW Company",
    type: "website",
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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} ${notoArabic.variable} min-h-[100svh] bg-[#0D1320] text-white antialiased`}>
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
