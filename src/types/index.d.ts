import type { NextPage } from "next";

type LangType = "ko" | "en";

declare module "next" {
  interface PageProps {
    params: {
      lng: langType;
    };
  }
}
