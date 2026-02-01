import { NextRequest, NextResponse } from "next/server";
import { sendReservationEmail } from "@/src/lib/email";

// Ensure Node.js runtime so Resend works properly
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, date, time, guests, phone, notes } = body;

    // Basic validation
    if (!fullName || !date || !time || !phone || !guests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert guests to number if it comes as string
    const guestsNumber = typeof guests === "string" ? Number(guests) : guests;

    // Send email via Resend
    await sendReservationEmail({
      fullName,
      date,
      time,
      guests: guestsNumber,
      phone,
      notes
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Reservation API error:", err);
    return NextResponse.json(
      { error: "Unable to process reservation" },
      { status: 500 }
    );
  }
}