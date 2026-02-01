// app/api/offers/route.ts
import { NextResponse } from "next/server";
import { getActiveOffers } from "@/src/lib/offersFirebase";

export async function GET() {
  try {
    const activeOffers = await getActiveOffers();

    const offers = activeOffers.map((o) => ({
      id: o.id,
      title: o.title,
      description: o.description,
      badge: o.badge ?? null,
      endsAt: o.endsAt ? o.endsAt.toISOString() : null,
    }));

    return NextResponse.json(offers);
  } catch (error) {
    console.error("Error fetching offers:", error);
    return NextResponse.json([]);
  }
}
