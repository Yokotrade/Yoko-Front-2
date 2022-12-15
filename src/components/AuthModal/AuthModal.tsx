import { useState } from "react";
import ModalPage, { ModalPageProps } from "ui/ModalPage";
import Auth from "./componets/Auth";
import Register from "./componets/Register";
import { AuthMode } from "./AutnModal.types";

type AutnModalProps = Pick<ModalPageProps, "open" | "onClose">;

const AutnModal = ({ open, onClose }: AutnModalProps) => {
  const [authMode, setAuthMode] = useState<AuthMode>("auth");

  const handleChangeAuthMode = (newMode: AuthMode) => setAuthMode(newMode);

  return (
    <ModalPage {...{ open, onClose }}>
      {authMode === "auth" && <Auth {...{ handleChangeAuthMode }} />}
      {authMode === "register" && <Register {...{ handleChangeAuthMode }} />}
    </ModalPage>
  );
};

export default AutnModal;
