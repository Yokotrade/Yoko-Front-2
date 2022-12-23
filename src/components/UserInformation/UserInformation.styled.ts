import { UserInformationProps } from "./UserInformation";
import styled from "@emotion/styled";

export const UserInformationWrapper = styled.div<UserInformationProps>`
  margin: ${({ isSideBar }) => (isSideBar ? "0" : "0 30px 0 30px")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  width: 202px;
  height: 52px;
  background: ${({ isSideBar }) =>
    isSideBar ? "rgba(244, 247, 254, 0.1)" : "#f4f7fe"};
  border-radius: 5px;
  box-sizing: border-box;
  gap: 10px;
`;

export const UserInformationBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  background: #a3aed0;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const UserUIDBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
`;
