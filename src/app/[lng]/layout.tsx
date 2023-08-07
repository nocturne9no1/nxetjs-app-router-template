import { languages } from "../i18n/settings";
import { ReactNode } from "react";

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
  return <div>{children}</div>;
};

export default RootLayout;
