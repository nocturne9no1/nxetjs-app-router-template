import { languages } from "../i18n/settings";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: {
    lang: "en" | "ko";
  };
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

const RootLayout = ({ children, params: { lang } }: Props) => {
  return (
    <div>
      루트 레이아웃
      {children}
    </div>
  );
};

export default RootLayout;
