import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  padding: 40px 40px;
  background: #f4f7fe;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    padding: 65px 20px 20px 20px;
  }
`;
