import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowLeft, Search } from "lucide-react";

const notFoundTitle = "Page Not Found | AL MASAR YELLOW";
const notFoundDescription = "The page you requested is not available on the AL MASAR YELLOW website.";

export const metadata: Metadata = {
  title: { absolute: notFoundTitle },
  description: notFoundDescription,
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: notFoundTitle,
    description: notFoundDescription,
    siteName: "AL MASAR YELLOW",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: notFoundTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: notFoundTitle,
    description: notFoundDescription,
    images: ["/opengraph-image"],
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] min-h-[70svh] flex-col items-center justify-center bg-[#0D1320] py-16 text-center text-white">
      <Container>
        <div className="mx-auto max-w-md">
          <span className="text-6xl font-extrabold tracking-tight text-[#6993CF] sm:text-7xl">
            404
          </span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            The page you are looking for does not exist or has been moved. Explore our electrical products catalogue or return home.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back Home</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex h-11 min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
              <span>Browse Products</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
