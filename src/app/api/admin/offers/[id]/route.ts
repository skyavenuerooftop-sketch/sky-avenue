import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/src/lib/firebaseAdmin";

export const runtime = "nodejs";

const COLLECTION = "offers";

interface Params {
  params: { id: string };
}

// PUT /api/admin/offers/:id – update
export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;
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

    const docRef = firestore.collection(COLLECTION).doc(id);
    const existing = await docRef.get();
    if (!existing.exists) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }

    const updateData: any = {
      updatedAt: new Date()
    };

    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (badge !== undefined) updateData.badge = badge || null;
    if (startsAt !== undefined)
      updateData.startsAt = startsAt ? new Date(startsAt) : null;
    if (endsAt !== undefined)
      updateData.endsAt = endsAt ? new Date(endsAt) : null;
    if (isFeaturedOnHome !== undefined)
      updateData.isFeaturedOnHome = Boolean(isFeaturedOnHome);
    if (priority !== undefined) updateData.priority = priority ?? null;
    if (isActive !== undefined) updateData.isActive = Boolean(isActive);

    await docRef.update(updateData);
    const updated = await docRef.get();
    const data = updated.data() as any;

    return NextResponse.json({
      id: updated.id,
      title: data.title,
      description: data.description,
      badge: data.badge ?? null,
      startsAt: data.startsAt ? data.startsAt.toDate().toISOString() : null,
      endsAt: data.endsAt ? data.endsAt.toDate().toISOString() : null,
      isFeaturedOnHome: Boolean(data.isFeaturedOnHome),
      priority: data.priority ?? null,
      isActive: data.isActive ?? true
    });
  } catch (err) {
    console.error("Update offer error:", err);
    return NextResponse.json(
      { error: "Failed to update offer" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/offers/:id – delete
export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    await firestore.collection(COLLECTION).doc(id).delete();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete offer error:", err);
    return NextResponse.json(
      { error: "Failed to delete offer" },
      { status: 500 }
    );
  }
}