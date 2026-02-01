import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about SKY AVENUE rooftop restaurant, our story, philosophy, and culinary vision.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="section section-padding space-y-10">
      <header className="max-w-2xl">
        <h1 className="heading-1 text-4xl sm:text-5xl">Our Story</h1>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          SKY AVENUE was born from a simple idea: elevate everyday dining into a
          skyline experience. Perched high above the city, we blend thoughtful
          design, refined flavors, and warm hospitality to create a destination
          worth dressing up for.
        </p>
      </header>

      <section className="max-w-3xl space-y-4 text-sm text-slate-300 sm:text-base">
        <h2 className="heading-3 text-2xl">Vision & Values</h2>
        <p>
          We believe that great restaurants are about more than tasting menus
          and wine lists—they&apos;re about the people, the stories, and the
          moments they hold. At SKY AVENUE, every detail, from the playlist to
          the plating, is designed to amplify your evening above the city.
        </p>
        <p>
          Our culinary team works closely with local producers to highlight
          seasonal ingredients, while our bar focuses on vibrant, modern
          cocktails inspired by the skyline.
        </p>
      </section>

      <section className="max-w-3xl space-y-4 text-sm text-slate-300 sm:text-base">
        <h2 className="heading-3 text-2xl">The Chef</h2>
        <p>
          Executive Chef Alex Rivera brings experience from Michelin-starred
          kitchens around the world, blending classic French technique with
          global influences. Expect bold flavors, thoughtful textures, and
          visually striking plates that echo the city below.
        </p>
      </section>
    </div>
  );
}