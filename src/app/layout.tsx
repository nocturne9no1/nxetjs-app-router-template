import "./global.css";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { dir } from "i18next";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const nowLang = cookies().get("i18next")?.value;

  return (
    <html lang={nowLang} dir={dir(nowLang)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
