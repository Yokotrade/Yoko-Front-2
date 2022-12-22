import { useState } from "react";
import ModalPage from "ui/ModalPage";
import { useAppDispatch } from "store/hook";
import { deactiveModal } from "store/Modals";
import Auth from "./componets/Auth";
import Register from "./componets/Register";
import { AuthMode } from "./AutnModal.types";

export const AutnModal = (): JSX.Element => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  const [authMode, setAuthMode] = useState<AuthMode>("auth");

  const handleChangeAuthMode = (newMode: AuthMode) => setAuthMode(newMode);

  const onClose = () => {
    setOpen((prev) => !prev);
    dispatch(deactiveModal());
  };

  return (
    <ModalPage {...{ open, onClose }}>
      {authMode === "auth" && <Auth {...{ handleChangeAuthMode }} />}
      {authMode === "register" && <Register {...{ handleChangeAuthMode }} />}
    </ModalPage>
  );
};
