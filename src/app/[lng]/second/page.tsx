import { translation } from "@/app/i18n";
import { NextPage, PageProps } from "next";
import Link from "next/link";

const Page: NextPage<PageProps> = async ({ params: { lng } }) => {
  const { t } = await translation(lng);
  return (
    <div>
      <h1>{t("second")}</h1>
      <Link href={`/${lng}`}>홈으로</Link>
    </div>
  );
};

export default Page;
