import type { Metadata } from "next";

export const siteUrl = "https://skyavenuerestaurant.com"; // TODO: set your real domain

const defaultDescription =
  "SKY AVENUE is a premium rooftop restaurant offering elevated dining, craft cocktails, and panoramic city views.";

const defaultKeywords = [
  "SKY AVENUE restaurant",
  "best rooftop restaurant",
  "rooftop dining",
  "rooftop restaurant in Your City",
  "skyline view restaurant"
];

interface CreateMetadataArgs {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords
}: CreateMetadataArgs): Metadata {
  const fullTitle = `${title} | SKY AVENUE Rooftop Restaurant`;
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title: fullTitle,
    description: description ?? defaultDescription,
    keywords: keywords ?? defaultKeywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description: description ?? defaultDescription,
      url,
      siteName: "SKY AVENUE",
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description ?? defaultDescription
    },
    alternates: {
      canonical: url
    }
  };
}