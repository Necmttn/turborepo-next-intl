import * as React from "react";
import { useTranslations } from "next-intl";

export const Button = () => {
  const t = useTranslations('hero');
  return <button>{t('cta')}</button>;
};

/** Wish there was a way to get good type defination generated  */
export const ButtonTwo: React.FC<{ t: any }> = ({ t }) => {
  return <button>{t('cta')}</button>;
}