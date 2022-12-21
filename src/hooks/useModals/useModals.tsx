import { useMemo } from "react";
import { useAppSelector } from "store/hook";
import { getModalType } from "store/Modals";
import { AutnModal } from "./components";

export const useModals = (): JSX.Element | null => {
  const modalType = useAppSelector(getModalType);

  return useMemo(() => {
    if (!modalType) return null;
    return <AutnModal />;
  }, [modalType]);
};
