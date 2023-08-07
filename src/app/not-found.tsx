import { LangType } from "@/types";
import { translation } from "./i18n";
import { cookies } from "next/headers";
import Link from "next/link";

/**
 * 404 페이지
 * 무한 리로딩 일어나나 dev 모드에서만 일어나는 현상
 */
const NotFound = async () => {
  // 언어값 가져옴 -> /src/middleware.ts 참고
  const lang = cookies().get("i18next")?.value;
  const { t } = await translation(lang as LangType);
  return (
    <div>
      {t("404")}
      <div>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </div>
  );
};

export default NotFound;
