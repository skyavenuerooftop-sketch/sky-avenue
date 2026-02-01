// app/api/admin/logout/route.ts
import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "sky_admin_auth";

export async function POST(_req: NextRequest) {
  const res = NextResponse.json({ success: true });

  // Clear the admin cookie
  res.cookies.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0 // immediately expires
  });

  return res;
}