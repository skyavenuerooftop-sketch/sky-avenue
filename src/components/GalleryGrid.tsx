import Image from "next/image";

const images = [
  {
    src: "/images/gallery-rooftop-1.jpg",
    alt: "Skyline view from SKY AVENUE rooftop terrace"
  },
  {
    src: "/images/gallery-dish-1.jpg",
    alt: "Signature main course at SKY AVENUE"
  },
  {
    src: "/images/gallery-bar-1.jpg",
    alt: "Craft cocktail bar with illuminated shelves"
  },
  {
    src: "/images/gallery-interior-1.jpg",
    alt: "Elegant interior seating at SKY AVENUE"
  },
  {
    src: "/images/gallery-dessert-1.jpg",
    alt: "Plated gourmet dessert"
  },
  {
    src: "/images/gallery-night-1.jpg",
    alt: "Nighttime city lights from the rooftop"
  }
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60"
        >
          <div className="relative h-52 sm:h-56 md:h-64">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80" />
          </div>
          <p className="pointer-events-none absolute bottom-3 left-3 text-xs font-medium text-slate-100">
            {img.alt}
          </p>
        </div>
      ))}
    </div>
  );
}