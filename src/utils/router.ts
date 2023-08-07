import { LangType } from "@/types";

// 현재 선택 언어 추출 함수
function extractFirstLanguageCode(urlPath: string, languageCodes: LangType[]) {
  const pattern = languageCodes.join("|");
  const regex = new RegExp(`\/(${pattern})`);
  const match = urlPath.match(regex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}

function removeFirstLangSegment(urlPath: string, languageCodes: LangType[]) {
  const pattern = languageCodes.join("|");
  const regex = new RegExp(`^\/(${pattern})`);

  // 첫 번째 세그먼트가 언어 코드일 경우 제거
  return urlPath.replace(regex, "");
}

export { extractFirstLanguageCode, removeFirstLangSegment };
