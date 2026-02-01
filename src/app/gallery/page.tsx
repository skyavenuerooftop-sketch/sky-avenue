import { createMetadata } from "@/src/lib/seo";
import GalleryGrid from "@/src/components/GalleryGrid";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Explore photos of SKY AVENUE's rooftop restaurant, skyline views, cocktails and ambiance.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <div className="section section-padding">
      <header className="max-w-2xl">
        <h1 className="heading-1 text-4xl sm:text-5xl">Gallery</h1>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          A glimpse into golden-hour sunsets, candlelit dinners, and
          late-night skyline views from SKY AVENUE.
        </p>
      </header>

      <div className="mt-8">
        <GalleryGrid />
      </div>
    </div>
  );
}