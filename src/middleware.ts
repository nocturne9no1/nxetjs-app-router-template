import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { languages, fallbackLng } from "./app/i18n/settings";
import { extractFirstLanguageCode } from "./utils/router";
import { LangType } from "./types";

acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const cookieName = "i18next";

function redirectToLangPath(req: NextRequest, lng: LangType) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${lng}`, req.url));
  }
}

export async function middleware(req: any) {
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  let lng;

  // cookie에 기존 언어 값있으면 -> 현재 선택 언어와 비교
  // 같으면 - 즉시 종료 | 다르면 - 현재 선택 언어로 변경 후 종료
  if (req.cookies.has(cookieName)) {
    const nowPath = req.nextUrl.pathname;
    const nowLng = extractFirstLanguageCode(nowPath, languages);
    const nowCookieLng = req.cookies.get(cookieName).value;
    // nowLng가 undefined면 404페이지이므로 즉시 리턴 (서비스 내 다른 페이지 방문 중 404로 들어가는 시나리오)
    if (nowLng && nowLng !== nowCookieLng) {
      response.cookies.set(cookieName, nowLng as LangType);
    }
    lng = nowLng ? nowLng : nowCookieLng;
  }

  // cookie에 없을 시 브라우저 언어 가져 온 뒤 cookie set
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language")) as LangType;
    // 서비스 지원 언어 외에는 영어로 변환
    if (languages.indexOf(lng) === -1) {
      lng = fallbackLng;
    }
    response.cookies.set(cookieName, lng);
  }

  const isRootRedirect = redirectToLangPath(req, lng as LangType);

  // '/' root 주소로 들어왔을 시 설정 언어 홈으로 리다이렉트
  if (isRootRedirect) {
    isRootRedirect.cookies.set(cookieName, lng);
    return isRootRedirect;
  }

  return response;

  // 지원하지않는 언어로 접속할 경우 로직
  // if (
  //   !languages.some((loc: any) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
  //   !req.nextUrl.pathname.startsWith("/_next")
  // ) {
  //   return NextResponse.redirect(
  //     new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
  //   );
  // }

  // 직전 페이지 기준으로 언어 가져오는 로직
  // if (req.headers.has("referer")) {
  //   const refererUrl = new URL(req.headers.get("referer"));
  //   const lngInReferer = languages.find((l) =>
  //     refererUrl.pathname.startsWith(`/${l}`)
  //   );
  //   const response = NextResponse.next();
  //   if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
  //   return response;
  // }

  return NextResponse.next();
}
