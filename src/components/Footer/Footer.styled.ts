import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 50px 50px;
  gap: 228px;
  width: 1920px;
  background: #181938;
  box-sizing: border-box;

  @media screen and (max-width: 1920px) {
    width: 100%;
    gap: 5%;
  }

  @media screen and (max-width: 834px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 25px 25px;
  }
`;

export const PoliticsBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 834px) {
    justify-content: center;
    align-items: center;
  }
`;

export const SectionsBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 834px) {
    justify-content: center;
    align-items: center;
 
`;
