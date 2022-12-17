import { ReactNode } from "react";
import DialogContent from "@mui/material/DialogContent";
import * as Styled from "./ModalPage.styled";

export interface ModalPageProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalPage = ({ open, onClose, children }: ModalPageProps) => {
  return (
    <Styled.ModalPageWrapper {...{ open, onClose }}>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
    </Styled.ModalPageWrapper>
  );
};

export default ModalPage;
