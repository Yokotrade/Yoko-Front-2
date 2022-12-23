import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";

interface SideBarWrapperprops {
  isPosition: boolean;
}
export const SideBarWrapper = styled.div<SideBarWrapperprops>`
  padding: 15px 10px;
  width: 276px;
  background: #5f5cec;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  ${({ isPosition }) =>
    isPosition &&
    `
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
`}
`;

export const SideBarActionsBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
`;

interface ListElementBlockProps {
  selected: boolean;
}

export const ListElementBlock = styled.div<ListElementBlockProps>`
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  box-sizing: border-box;
  width: 228px;
  height: 40px;
  background: ${({ selected }) => (selected ? "rgba(0,0,0,0.1)" : "none")};
  border-radius: ${({ selected }) => (selected ? "10px" : "0")};
  cursor: pointer;
`;

export const listItemText = styled(Typography)`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: #cfcef9;
`;

export const MenuButton = styled(IconButton)`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const MenuSideBarHeaderBlock = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MenuSideBarButton = styled(IconButton)``;

export const SideBarInfomationBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 10px;
`;

export const SideBarInfomationTitle = styled(Typography)`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: #ffffff;
`;

export const SideBarInfomationDescription = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: #ffffff;
`;
