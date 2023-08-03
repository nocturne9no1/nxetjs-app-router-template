import Link from "next/link";
import { translation } from "../i18n";

export default async function Page({ params: { lng } }) {
  const { t, i18n } = await translation(lng);
  console.log(i18n);
  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
}
