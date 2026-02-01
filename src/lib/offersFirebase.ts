// lib/offersFirebase.ts
import "server-only";
import { firestore } from "./firebaseAdmin";

export interface Offer {
  id: string;
  title: string;
  description: string;
  badge?: string | null;
  startsAt?: Date | null;
  endsAt?: Date | null;
  isFeaturedOnHome: boolean;
  priority?: number | null;
  isActive: boolean;
}

const COLLECTION = "offers";

function docToOffer(
  doc: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>
): Offer {
  const data = doc.data() as any;
  return {
    id: doc.id,
    title: data.title,
    description: data.description,
    badge: data.badge ?? null,
    startsAt: data.startsAt ? data.startsAt.toDate() : null,
    endsAt: data.endsAt ? data.endsAt.toDate() : null,
    isFeaturedOnHome: Boolean(data.isFeaturedOnHome),
    priority:
      typeof data.priority === "number" ? data.priority : data.priority ?? null,
    isActive: data.isActive ?? true
  };
}

export async function getAllOffers(): Promise<Offer[]> {
  const snapshot = await firestore
    .collection(COLLECTION)
    .orderBy("createdAt", "desc")
    .get();
  return snapshot.docs.map(docToOffer);
}

function isOfferActiveRaw(offer: Offer, now: Date) {
  if (!offer.isActive) return false;
  const startsOk =
    !offer.startsAt || offer.startsAt.getTime() <= now.getTime();
  const endsOk =
    !offer.endsAt || offer.endsAt.getTime() >= now.getTime();
  return startsOk && endsOk;
}

export async function getActiveOffers(
  now = new Date()
): Promise<Offer[]> {
  const snapshot = await firestore
    .collection(COLLECTION)
    .where("isActive", "==", true)
    .get();

  const offers = snapshot.docs.map(docToOffer);
  return offers
    .filter((o) => isOfferActiveRaw(o, now))
    .sort((a, b) => {
      const pa = a.priority ?? 999;
      const pb = b.priority ?? 999;
      if (pa !== pb) return pa - pb;
      const aEnd = a.endsAt ? a.endsAt.getTime() : Number.POSITIVE_INFINITY;
      const bEnd = b.endsAt ? b.endsAt.getTime() : Number.POSITIVE_INFINITY;
      return aEnd - bEnd;
    });
}

export async function getCurrentOffer(
  now = new Date()
): Promise<Offer | null> {
  const active = await getActiveOffers(now);
  if (!active.length) return null;

  const featured = active.filter((o) => o.isFeaturedOnHome);
  if (featured.length) return featured[0];

  return active[0];
}