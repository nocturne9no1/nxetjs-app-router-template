import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { ReactNode } from "react";
import { detectLanguage } from "../i18n";

interface Props {
  children: ReactNode;
  params: {
    lng: "en" | "ko";
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
const RootLayout = ({ children, params: { lng } }: Props) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
