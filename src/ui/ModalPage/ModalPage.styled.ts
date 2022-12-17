import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export const ModalPageWrapper = styled(Dialog)`
  background: rgba(0, 0, 0, 0.2);
`;

export const ContentWrapper = styled(DialogContent)`
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;
