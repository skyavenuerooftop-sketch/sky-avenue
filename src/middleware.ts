import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "sky_admin_auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /admin/* except /admin/login
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const cookie = req.cookies.get(ADMIN_COOKIE_NAME);

    if (!cookie || cookie.value !== "1") {
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};