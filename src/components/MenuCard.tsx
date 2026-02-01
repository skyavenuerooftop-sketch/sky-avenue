import type { MenuItem } from "@/src/lib/menuData";
import CTAButton from "./CTAButton";
import { WHATSAPP_ORDER_URL } from "@/src/lib/config";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="card-surface flex flex-col justify-between p-4 sm:p-5">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg text-white">{item.name}</h3>
          <p className="shrink-0 font-semibold text-gold">
  ₹{item.price}
</p>
        </div>
        {item.description && (
          <p className="mt-2 text-sm text-slate-300">{item.description}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em]">
          {item.isSignature && (
            <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">
              Signature
            </span>
          )}
          {item.isPopular && (
            <span className="rounded-full bg-skybrand/10 px-3 py-1 text-skybrand">
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-red-400">
              Spicy
            </span>
          )}
        </div>
      </div>
      {/* <div className="mt-4 flex justify-end"> */}
        {/* <CTAButton
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          variant="ghost"
          className="text-xs"
        >
          Order Now
        </CTAButton> */}
      {/* </div> */}
    </article>
  );
}