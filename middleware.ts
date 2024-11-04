import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession, removeSession, setSession } from "./lib/auth";
import { ROUTES } from "./lib/routes";

const protectedRoutes = "/dashboard";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = pathname.startsWith(protectedRoutes);
  const session = await getSession();

  if (!session) {
    await removeSession();
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL(ROUTES.AUTH.LOG_IN, request.url));
    }
  }

  if (session && isProtectedRoute) {
    await setSession(session.userId, session.role);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.svg|sitemap.xml|robots.txt).*)",
  ],
};
