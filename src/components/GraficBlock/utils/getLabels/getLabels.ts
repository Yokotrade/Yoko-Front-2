import { mounths } from "../../GraficBlock.constants";
import { useTranslation } from "react-i18next";

export const getLabels = () => {
  const { t } = useTranslation();
  return mounths.map((el) => t(el));
};
