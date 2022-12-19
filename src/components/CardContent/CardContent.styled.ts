import styled from "@emotion/styled";

export const CardContentWrapper = styled.div`
  position: relative;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 510px;
  height: 76px;
  background: #ffffff;
  box-shadow: 0px 25px 20px -25px rgba(20, 25, 143, 0.15);
  border-radius: 20px;
  box-sizing: border-box;
  gap: 20px;
`;

export const CardInformationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
  gap: 8px;
`;

export const PopupMenuWrapper = styled.div`
  position: absolute;
  right: 10px;
`;
