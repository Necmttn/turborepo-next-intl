import * as React from "react";
import { useTranslations } from "next-intl";

export const Button = () => {
  const t = useTranslations('hero');
  return <button>{t('cta')}</button>;
};
