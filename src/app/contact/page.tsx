import { createMetadata } from "@/src/lib/seo";
import ReservationForm from "@/src/components/ReservationForm";
import QuickContactForm from "@/src/components/QuickContactForm";
import ContactForm from "@/src/components/ContactForm";
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_RAW,
  RESERVATION_EMAIL,
  RESTAURANT_ADDRESS
} from "@/src/lib/config";

export const metadata = createMetadata({
  title: "Contact & Location",
  description:
    "Contact SKY AVENUE rooftop restaurant, view our address, phone, email, and opening hours.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="section section-padding space-y-10">
      <header className="max-w-2xl">
        <h1 className="heading-1 text-4xl sm:text-5xl">Contact & Location</h1>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Reach out to our team for reservations, private events, or general
          inquiries. We&apos;re here to help you plan your perfect rooftop
          evening.
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-6">
          <div className="card-surface p-5 sm:p-6">
            <h2 className="heading-3 text-xl">Visit SKY AVENUE</h2>
            <p className="mt-3 text-sm text-slate-300">
              {RESTAURANT_ADDRESS.street}
              <br />
              {RESTAURANT_ADDRESS.city}, {RESTAURANT_ADDRESS.state}{" "}
              {RESTAURANT_ADDRESS.postalCode}
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Phone:{" "}
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="hover:text-gold"
              >
                {PHONE_NUMBER_DISPLAY}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${RESERVATION_EMAIL}`}
                className="hover:text-gold"
              >
                {RESERVATION_EMAIL}
              </a>
            </p>
            <div className="mt-4 text-sm text-slate-300">
              <p className="font-semibold">Opening Hours</p>
              <p>Mon – Thu: 5:00 PM – 11:00 PM</p>
              <p>Fri – Sat: 5:00 PM – 1:00 AM</p>
              <p>Sun: 5:00 PM – 10:00 PM</p>
            </div>
          </div>

          <div className="card-surface overflow-hidden">
            <iframe
              title="SKY AVENUE location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..." // replace with real Google Maps embed URL
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Reservation form (API-backed) */}
        <ContactForm/>
        {/* <ReservationForm /> */}
      </section>

      {/* Quick contact form */}
      {/* <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="heading-3 text-2xl">Quick Message</h2>
          <p className="mt-3 text-sm text-slate-300">
            Have a question about private events, dietary requirements, or
            something else? Send us a quick message and we&apos;ll get back to
            you shortly.
          </p>
        </div>
        
      </section> */}
    </div>
  );
}