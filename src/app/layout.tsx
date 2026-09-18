import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://almasaryellow.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AL MASAR YELLOW | Electrical Materials Supplier Saudi Arabia",
    template: "%s | AL MASAR YELLOW",
  },
  description:
    "AL MASAR YELLOW supplies electrical materials, conduits, fittings, cable management, circuit protection and related products across Saudi Arabia.",
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
      <body className={`${inter.variable} ${manrope.variable} min-h-[100svh] bg-[#0D1320] text-white antialiased`}>
        <AppProviders>
          <Header />
          <main className="min-w-0 overflow-x-hidden">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
