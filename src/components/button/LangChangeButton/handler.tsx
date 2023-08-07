"use client";
import { useRouter, usePathname } from "next/navigation";
import {
  extractFirstLanguageCode,
  removeFirstLangSegment,
} from "@/utils/router";
import { languages } from "@/app/i18n/settings";
import { setCookie } from "cookies-next";
import { dir } from "i18next";

const useLangChange = () => {
  const router = useRouter();
  const pathName = usePathname();
  const nowLang = extractFirstLanguageCode(pathName, languages);
  const targetLang = nowLang === "ko" ? "en" : "ko";

  const handleClick = () => {
    const langRemovedPath = removeFirstLangSegment(pathName, languages);
    const HTMLDom = document.querySelector("html");
    setCookie("i18next", targetLang);
    if (HTMLDom) {
      HTMLDom.lang = targetLang;
      HTMLDom.dir = dir(targetLang);
    }
    router.push(`/${targetLang}${langRemovedPath}`);
  };

  return { handleClick, nowLang, targetLang };
};

export default useLangChange;
