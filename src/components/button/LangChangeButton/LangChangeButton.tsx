"use client";
import classNames from "classnames/bind";
import useLangChange from "./handler";
import style from "./LangChangeButton.module.scss";

const cx = classNames.bind(style);

interface Props {}

const LangChangeButton = ({}: Props) => {
  const { handleClick, nowLang, targetLang } = useLangChange();

  return (
    <a onClick={handleClick}>
      {nowLang} to {targetLang}
    </a>
  );
};

export { LangChangeButton };
