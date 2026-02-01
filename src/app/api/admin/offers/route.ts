import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/src/lib/firebaseAdmin";

export const runtime = "nodejs";

const COLLECTION = "offers";

// GET /api/admin/offers – list all offers
export async function GET() {
  const snapshot = await firestore
    .collection(COLLECTION)
    .orderBy("createdAt", "desc")
    .get();

  const offers = snapshot.docs.map((doc) => {
    const data = doc.data() as any;
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      badge: data.badge ?? null,
      startsAt: data.startsAt ? data.startsAt.toDate().toISOString() : null,
      endsAt: data.endsAt ? data.endsAt.toDate().toISOString() : null,
      isFeaturedOnHome: Boolean(data.isFeaturedOnHome),
      priority: data.priority ?? null,
      isActive: data.isActive ?? true
    };
  });

  return NextResponse.json(offers);
}

// POST /api/admin/offers – create a new offer
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      description,
      badge,
      startsAt,
      endsAt,
      isFeaturedOnHome,
      priority,
      isActive
    } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const now = new Date();

    const docRef = await firestore.collection(COLLECTION).add({
      title,
      description,
      badge: badge || null,
      startsAt: startsAt ? new Date(startsAt) : null,
      endsAt: endsAt ? new Date(endsAt) : null,
      isFeaturedOnHome: Boolean(isFeaturedOnHome),
      priority: priority ?? null,
      isActive: isActive ?? true,
      createdAt: now,
      updatedAt: now
    });

    const doc = await docRef.get();
    const data = doc.data() as any;

    return NextResponse.json(
      {
        id: doc.id,
        title: data.title,
        description: data.description,
        badge: data.badge ?? null,
        startsAt: data.startsAt ? data.startsAt.toDate().toISOString() : null,
        endsAt: data.endsAt ? data.endsAt.toDate().toISOString() : null,
        isFeaturedOnHome: Boolean(data.isFeaturedOnHome),
        priority: data.priority ?? null,
        isActive: data.isActive ?? true
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Create offer error:", err);
    return NextResponse.json(
      { error: "Failed to create offer" },
      { status: 500 }
    );
  }
}