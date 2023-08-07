import { translation } from "../i18n";
import { NextPage, PageProps } from "next";
// 제공 언어 import
import { languages } from "../i18n/settings";
// 404 페이지로 리다이렉트 시키는 메소드
import { notFound } from "next/navigation";
import Link from "next/link";
import { LangChangeButton } from "@/components/button/LangChangeButton";

const Page: NextPage<PageProps> = async ({ params: { lang } }) => {
  const { t } = await translation(lang);

  // 현재 제공하는 언어 외의 route 에 접근 시 404 페이지로 리다이렉트
  if (languages.indexOf(lang) === -1) {
    notFound();
  }

  return (
    <>
      <h1>{t("title")}</h1>
      <div>
        <Link href={`/${lang}/second`}>두번째 페이지 이동</Link>
      </div>
      <div>
        <Link href={`/${lang}/loading`}>로딩 예시</Link>
      </div>
      <div>
        <Link href={`/${lang}/error`}>에러 페이지 예시</Link>
      </div>
      <div>
        <Link href={`/${lang}/errorrrrrrrr`}>404 에러 페이지 예시</Link>
      </div>
      <LangChangeButton />
    </>
  );
};

export default Page;
