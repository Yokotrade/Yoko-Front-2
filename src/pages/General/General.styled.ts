import styled from "@emotion/styled";

export const GeneralPageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
`;

export const GeneralCardsBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (max-width: 1392px) {
    flex-flow: column nowrap;
  }

  @media screen and (max-width: 1024px) {
    flex-flow: row nowrap;
  }

  @media screen and (max-width: 715px) {
    flex-flow: column nowrap;
  }
`;

export const GeneralInformationBlock = styled.div`
  margin-top: 10px;
  padding: 10px 0 0 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(112, 144, 176, 0.07);
  border-radius: 20px;
  overflow: hidden;
`;
