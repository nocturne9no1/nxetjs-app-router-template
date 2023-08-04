import { TFunction, createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

type initType = (lng: string, ns?: string) => Promise<i18n>;
type translationType = (
  lng: string,
  ns?: string,
  options?: { [key: string]: any }
) => Promise<{ t: TFunction<any, any>; i18n: i18n }>;

const initI18next: initType = async (lng, ns) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

const cookieName = "i18next";

export const translation: translationType = async (lng, ns, options = {}) => {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
};
