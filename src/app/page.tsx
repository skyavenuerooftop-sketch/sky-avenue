
// import Hero from "@/src/components/Hero";
// import CTAButton from "@/src/components/CTAButton";
// import MenuCard from "@/src/components/MenuCard";
// import ReservationForm from "@/src/components/ReservationForm";
// import CurrentOfferBanner from "@/src/components/CurrentOfferBanner";
// import { menuItems } from "@/src/lib/menuData";
// import { createMetadata } from "@/src/lib/seo";
// import ContactForm from "@/src/components/ContactForm";
// import { getCurrentOffer } from "@/src/lib/offersFirebase";

// export const metadata = createMetadata({
//   title: "Elevate Your Dining Experience",
//   path: "/",
//   keywords: [
//     "SKY AVENUE restaurant",
//     "best rooftop restaurant",
//     "rooftop dining",
//     "romantic dinner with skyline view",
//     "roof top bar Your City"
//   ]
// });
// export const dynamic = "force-dynamic";

// export default function HomePage() {
//   const signatureItems = menuItems.filter((item) => item.isSignature).slice(0, 3);
  

//   return (
//     <>
//       <Hero />

//       {/* Current limited-time offer banner (visible on landing page) */}
//       <CurrentOfferBanner
//         title="Skyline Date Night – 3-Course Dinner for Two"
//         description="Enjoy a specially curated 3-course menu with a shared dessert and welcome cocktail, available this month only."
//         // Set a real end date/time in your timezone
//         endsAt="2025-12-31T23:59:00+05:30"
//       />

//       {/* Highlights */}
//       <section className="section section-padding">
//         <div className="grid gap-10 md:grid-cols-2">
//           <div>
//             <h2 className="heading-2">
//               Rooftop dining,
//               <span className="text-gold"> above the city lights.</span>
//             </h2>
//             <p className="mt-4 text-sm text-slate-300 sm:text-base">
//               SKY AVENUE is designed for golden-hour cocktails, late-night
//               celebrations, and everything in between. Floor-to-ceiling glass,
//               soft lighting, and curated playlists set the tone for a
//               city-defining dining experience.
//             </p>
//             <ul className="mt-5 space-y-2 text-sm text-slate-300">
//               <li>• Panoramic skyline views</li>
//               <li>• Seasonal chef-driven menu</li>
//               <li>• Signature cocktails & wine cellar</li>
//               <li>• Ideal for dates, celebrations & private events</li>
//             </ul>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <CTAButton href="/menu" variant="secondary">
//                 Explore Full Menu
//               </CTAButton>
//               <CTAButton href="/offers" variant="ghost">
//                 View Current Offers
//               </CTAButton>
//             </div>
//           </div>

//           {/* Signature dishes */}
//           <div>
//             <h3 className="heading-3 text-xl">Signature Dishes</h3>
//             <p className="mt-2 text-sm text-muted">
//               Curated highlights from our chef, blending seasonal produce with
//               modern techniques.
//             </p>
//             <div className="mt-4 grid gap-4">
//               {signatureItems.map((item) => (
//                 <MenuCard key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Offers teaser */}
//       <section className="section section-padding border-y border-slate-800/60 bg-slate-950/60">
//         <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] md:items-center">
//           <div>
//             <h2 className="heading-2 text-3xl">
//               Limited-time rooftop
//               <span className="text-gold"> experiences.</span>
//             </h2>
//             <p className="mt-4 text-sm text-slate-300 sm:text-base">
//               From golden-hour happy hours to chef&apos;s tasting menus, our
//               rotating offers are designed to make your visit unforgettable.
//             </p>
//           </div>
//           <div className="flex flex-col gap-3 text-sm text-slate-300">
//             <div className="card-surface px-4 py-3">
//               <p className="font-medium text-gold">
//                 Sunset Hour • Daily 5:00–7:00 PM
//               </p>
//               <p className="mt-1 text-xs text-slate-300">
//                 2-for-1 signature cocktails & curated bar bites.
//               </p>
//             </div>
//             <div className="card-surface px-4 py-3">
//               <p className="font-medium text-gold">
//                 Chef&apos;s Skyline Tasting • Weekends
//               </p>
//               <p className="mt-1 text-xs text-slate-300">
//                 5-course tasting with wine pairing, limited seats.
//               </p>
//             </div>
//             <CTAButton href="/offers" className="mt-2">
//               View All Offers
//             </CTAButton>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="section section-padding">
//         <div className="grid gap-10 md:grid-cols-2 md:items-center">
//           <div>
//             <h2 className="heading-2">Loved by guests, night after night.</h2>
//             <p className="mt-4 text-sm text-slate-300 sm:text-base">
//               Couples, friends, and travelers choose SKY AVENUE as their go-to
//               rooftop spot in the city.
//             </p>
//             <ul className="mt-5 space-y-2 text-sm text-slate-300">
//               <li>• 4.8 / 5 average rating across major platforms</li>
//               <li>• Frequently listed among the best rooftop restaurants</li>
//               <li>• Dedicated concierge for private events & celebrations</li>
//             </ul>
//           </div>
//           <div className="grid gap-4">
//             <blockquote className="card-surface p-5 text-sm text-slate-200">
//               “The best rooftop restaurant experience we&apos;ve had. The view,
//               the service, and the food were all exceptional.”
//               <footer className="mt-3 text-xs text-slate-400">
//                 — Aisha R., Anniversary Dinner
//               </footer>
//             </blockquote>
//             <blockquote className="card-surface p-5 text-sm text-slate-200">
//               “Perfect for golden hour cocktails. The skyline backdrop is
//               unreal.”
//               <footer className="mt-3 text-xs text-slate-400">
//                 — Daniel M., After-work Drinks
//               </footer>
//             </blockquote>
//           </div>
//         </div>
//       </section>

//       {/* Reservation section */}
//       <section className="section section-padding">
//         <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
//           <div>
//             <h2 className="heading-2">
//               Reserve your
//               <span className="text-gold"> sky-high</span> table.
//             </h2>
//             <p className="mt-4 text-sm text-slate-300 sm:text-base">
//               Whether you&apos;re planning a romantic dinner, celebrating a
//               milestone, or booking out the rooftop for a private event, our
//               team is here to help you create the perfect evening.
//             </p>
//             <ul className="mt-5 space-y-2 text-sm text-slate-300">
//               <li>• Same-day reservations are welcome.</li>
//               <li>• Groups of 8+ receive dedicated event support.</li>
//               <li>• Custom tasting menus available upon request.</li>
//             </ul>
//           </div>
//           {/* <ReservationForm /> */}
//           <ContactForm/>
//         </div>
//       </section>
//     </>
//   );
// }

// app/page.tsx

import Hero from "@/src/components/Hero";
import CTAButton from "@/src/components/CTAButton";
import MenuCard from "@/src/components/MenuCard";
import CurrentOfferBanner from "@/src/components/CurrentOfferBanner";
import ContactForm from "@/src/components/ContactForm";
import { menuItems } from "@/src/lib/menuData";
import { createMetadata } from "@/src/lib/seo";
import { getCurrentOffer } from "@/src/lib/offersFirebase";

export const metadata = createMetadata({
  title: "Elevate Your Dining Experience",
  path: "/",
  keywords: [
    "SKY AVENUE restaurant",
    "best rooftop restaurant",
    "rooftop dining",
    "romantic dinner with skyline view",
    "roof top bar Your City"
  ]
});

// So the page always revalidates offers based on current time / Firebase
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const signatureItems = menuItems.filter((item) => item.isSignature).slice(0, 3);
  const currentOffer = await getCurrentOffer();

  return (
    <>
      <Hero />

      {/* Dynamic current offer from Firebase (shown only if exists) */}
      {currentOffer && (
        <CurrentOfferBanner
          title={currentOffer.title}
          description={currentOffer.description}
          endsAt={
            currentOffer.endsAt ? currentOffer.endsAt.toISOString() : undefined
          }
        />
      )}

      {/* Highlights */}
      <section className="section section-padding">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="heading-2">
              Rooftop dining,
              <span className="text-gold"> above the city lights.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              SKY AVENUE is designed for golden-hour cocktails, late-night
              celebrations, and everything in between. Floor-to-ceiling glass,
              soft lighting, and curated playlists set the tone for a
              city-defining dining experience.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>• Panoramic skyline views</li>
              <li>• Seasonal chef-driven menu</li>
              <li>• Signature cocktails & wine cellar</li>
              <li>• Ideal for dates, celebrations & private events</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/menu" variant="secondary">
                Explore Full Menu
              </CTAButton>
              <CTAButton href="/offers" variant="ghost">
                View Current Offers
              </CTAButton>
            </div>
          </div>

          {/* Signature dishes */}
          <div>
            <h3 className="heading-3 text-xl">Signature Dishes</h3>
            <p className="mt-2 text-sm text-muted">
              Curated highlights from our chef, blending seasonal produce with
              modern techniques.
            </p>
            <div className="mt-4 grid gap-4">
              {signatureItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers teaser */}
      <section className="section section-padding border-y border-slate-800/60 bg-slate-950/60">
        <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] md:items-center">
          <div>
            <h2 className="heading-2 text-3xl">
              Limited-time rooftop
              <span className="text-gold"> experiences.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              From golden-hour happy hours to chef&apos;s tasting menus, our
              rotating offers are designed to make your visit unforgettable.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <div className="card-surface px-4 py-3">
              <p className="font-medium text-gold">
                Sunset Hour • Daily 5:00–7:00 PM
              </p>
              <p className="mt-1 text-xs text-slate-300">
                2-for-1 signature cocktails & curated bar bites.
              </p>
            </div>
            <div className="card-surface px-4 py-3">
              <p className="font-medium text-gold">
                Chef&apos;s Skyline Tasting • Weekends
              </p>
              <p className="mt-1 text-xs text-slate-300">
                5-course tasting with wine pairing, limited seats.
              </p>
            </div>
            <CTAButton href="/offers" className="mt-2">
              View All Offers
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-padding">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="heading-2">Loved by guests, night after night.</h2>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              Couples, friends, and travelers choose SKY AVENUE as their go-to
              rooftop spot in the city.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>• 4.8 / 5 average rating across major platforms</li>
              <li>• Frequently listed among the best rooftop restaurants</li>
              <li>• Dedicated concierge for private events & celebrations</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <blockquote className="card-surface p-5 text-sm text-slate-200">
              “The best rooftop restaurant experience we&apos;ve had. The view,
              the service, and the food were all exceptional.”
              <footer className="mt-3 text-xs text-slate-400">
                — Aisha R., Anniversary Dinner
              </footer>
            </blockquote>
            <blockquote className="card-surface p-5 text-sm text-slate-200">
              “Perfect for golden hour mocktails. The skyline backdrop is
              unreal.”
              <footer className="mt-3 text-xs text-slate-400">
                — Daniel M., After-work Drinks
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Unified contact/reservation form section */}
      <section className="section section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="heading-2">
              Reserve your
              <span className="text-gold"> sky-high</span> table.
            </h2>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              Whether you&apos;re planning a romantic dinner, celebrating a
              milestone, or booking out the rooftop for a private event, our
              team is here to help you create the perfect evening.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>• Same-day reservations are welcome.</li>
              <li>• Groups of 8+ receive dedicated event support.</li>
              <li>• Custom tasting menus available upon request.</li>
            </ul>
          </div>

          {/* One unified form for reservation + quick contact */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}