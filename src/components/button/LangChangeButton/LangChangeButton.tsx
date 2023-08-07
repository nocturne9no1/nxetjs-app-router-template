"use client";
import classNames from "classnames/bind";
import useLangChange from "./handler";
import useClientMounted from "@/hooks/useClientMounted";
import style from "./LangChangeButton.module.scss";

const cx = classNames.bind(style);

interface Props {}

const LangChangeButton = ({}: Props) => {
  const { handleClick, nowLang, targetLang } = useLangChange();
  const { isClient } = useClientMounted();

  return (
    <a onClick={handleClick}>{isClient && `${nowLang} to ${targetLang}`}</a>
  );
};

export { LangChangeButton };
