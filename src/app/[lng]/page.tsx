import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }) {
  const { t, i18n } = await useTranslation(lng);
  console.log(i18n);
  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
}
