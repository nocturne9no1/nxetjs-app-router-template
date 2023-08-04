import { translation } from "../i18n";
import { NextPage, PageProps } from "next";
// 제공 언어 import
import { languages } from "../i18n/settings";
// 404 페이지로 리다이렉트 시키는 메소드
import { notFound } from "next/navigation";

const Page: NextPage<PageProps> = async ({ params: { lng } }) => {
  const { t } = await translation(lng);

  // 현재 제공하는 언어 외의 route 에 접근 시 404 페이지로 리다이렉트
  if (languages.indexOf(lng) === -1) {
    notFound();
  }

  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
};

export default Page;
