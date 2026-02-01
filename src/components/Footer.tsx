import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/60 bg-slate-950/80">
      <div className="section section-padding grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
          <div className="hidden flex-col leading-tight sm:flex">
      <span className="font-display text-2xl tracking-tight text-white">
        SKY AVENUE
      </span>
      {/* <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
        Rooftop Dining
      </span> */}
    </div>
 
</Link>

          {/* <h3 className="font-display text-xl text-white">SKY AVENUE</h3> */}
          <p className="mt-3 text-sm text-muted">
            A premium rooftop restaurant overlooking the city skyline. Crafted
            cocktails, seasonal cuisine, and an unforgettable ambience.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            1,Circus Avenue,Kalim Avenue Rooftop ,
            <br />
             Kol-17, WestBengal
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-gold">
              +91 9831710777
            </a>
            <br />
            Email:{" "}
            <a href="mailto:reservations@skyavenuerestaurant.com" className="hover:text-gold">
              reservations@skyavenuerestaurant.com
            </a>
          </p>
          <div className="flex gap-4 mt-3"><Link
            href="https://www.instagram.com/skyavenueafterparty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow SKY AVENUE on Instagram"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={22} />
          </Link></div>
           
        </div>

        <div>
          <h4 className="heading-3 text-lg">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>     We are open </li>
            <li>Mon – Sun: 4:00 PM – 4:00 AM</li>
          </ul>
        </div>

        <div>
          <h4 className="heading-3 text-lg">Explore</h4>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>
              <Link href="/menu" className="hover:text-gold">
                View Menu
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-gold">
                Latest Offers
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold">
                Rooftop Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact & Location
              </Link>
            </li>
          </ul>
          <br></br>
          <p>Prices inclusive of all applicable taxes.</p>
        </div>
      </div>
      <div className="border-t border-slate-800/60 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SKY AVENUE. All rights reserved.
      </div>
    </footer>
  );
}