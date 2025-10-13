import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

const AUTH_COOKIE_NAME = "access_token";

const publicRoutes = [
  {
    pattern: /^\/$/,
    whenAuthenticated: "next"
  },
  {
    pattern: /^\/login\/?$/,
    whenAuthenticated: "redirect"
  },
  {
    pattern: /^\/pedidos\/?$/,
    whenAuthenticated: "next"
  },
  {
    pattern: /^\/contato\/?$/,
    whenAuthenticated: "next"
  },
] as const;

const privateRoutes = [
  {
    pattern: /^\/admin(\/.*)?$/,
    whenAuthenticated: "next",
    necessaryRole: "ADMIN"
  },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.pattern.test(pathname));
  const privateRoute = privateRoutes.find((route) => route.pattern.test(pathname));
  const authToken = request.cookies.get(AUTH_COOKIE_NAME);

  // Não autenticado e rota pública
  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  // Não autenticado e rota privada
  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  // Autenticado e rota pública que redireciona
  if (authToken && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  // Autenticado e rota privada
  if (authToken && privateRoute) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value as string;
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico)).*)"
  ],
};
