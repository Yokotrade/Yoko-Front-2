import { useMemo } from "react";
import { useAppSelector } from "store/hook";
import { getModalType } from "store/Modals";
import { AutnModal, BotSettings } from "./components";

export const useModals = (): JSX.Element | null => {
  const modalType = useAppSelector(getModalType);

  return useMemo(() => {
    if (!modalType) return null;
    if (modalType === "botSettings") return <BotSettings />;
    return <AutnModal />;
  }, [modalType]);
};
