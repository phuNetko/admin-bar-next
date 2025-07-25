import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'vi'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (!hasLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // chỉ áp dụng với những route không phải asset tĩnh
    '/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|css|js|ico)).*)',
  ],
};

