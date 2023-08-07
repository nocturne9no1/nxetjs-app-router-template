"use client";
import { useRouter, usePathname } from "next/navigation";
import { dir } from "i18next";
import { setCookie } from "cookies-next";
import { languages } from "@/app/i18n/settings";
import {
  extractFirstLanguageCode,
  removeFirstLangSegment,
} from "@/utils/router";

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
