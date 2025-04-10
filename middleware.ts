import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './app/i18n-config';

// 不需要添加语言前缀的特殊路径
const PUBLIC_PATHS = ['/favicon.ico', '/robots.txt', '/sitemap.xml', '/manifest.json'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查是否是特殊路径，如果是则直接放行
  if (PUBLIC_PATHS.some(path => pathname === path)) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 