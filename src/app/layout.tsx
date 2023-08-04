import "./global.css";
import { ReactNode } from "react";
import { cookies } from "next/headers";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
