import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'es'];

function getLocale(request:Request) { 

  const header = {headers: { 'accept-language': request.headers.get('Accept-Language') as string}}
  const negotiator =  new Negotiator(header)
  const languages = negotiator.languages();
  const defaultLocale = 'en';

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!_next).*)',
    '/'
  ],
}
