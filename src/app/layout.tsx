import type { Metadata } from "next";
import "./globals.css";
import { createMetadata } from "@/src/lib/seo";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import {
  PHONE_NUMBER_RAW,
  PHONE_NUMBER_DISPLAY,
  RESERVATION_EMAIL,
  RESTAURANT_ADDRESS
} from "@/src/lib/config";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = createMetadata({
  title: "SKY AVENUE",
  description:
    "SKY AVENUE is a premium rooftop restaurant offering elevated dining, craft cocktails, and panoramic city views.",
  path: "/"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "SKY AVENUE",
    description:
      "Premium rooftop restaurant with panoramic city views, crafted cocktails and elevated dining.",
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT_ADDRESS.street,
      addressLocality: RESTAURANT_ADDRESS.city,
      addressRegion: RESTAURANT_ADDRESS.state,
      postalCode: RESTAURANT_ADDRESS.postalCode,
      addressCountry: RESTAURANT_ADDRESS.country
    },
    telephone: PHONE_NUMBER_DISPLAY,
    url: "https://skyavenuerestaurant.com",
    servesCuisine: ["International", "Modern European"],
    priceRange: "$$",
    email: RESERVATION_EMAIL
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-navy-950 via-slate-950 to-slate-900 text-slate-100">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />

        {/* Floating WhatsApp CTA */}
        <a
          href={`https://wa.me/${PHONE_NUMBER_RAW.replace(
            "+",
            ""
          )}?text=Hi%20SKY%20AVENUE,%20I%27d%20like%20to%20reserve%20a%20table.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-soft hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
        >
          <span>WhatsApp</span>
        </a>

        {/* JSON-LD for Local SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}