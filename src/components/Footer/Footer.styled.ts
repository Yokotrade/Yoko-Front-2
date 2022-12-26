import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 50px 50px;
  gap: 228px;
  width: 100%;
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
  }
`;

export const FooterAuthWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  align-self: flex-start;
`;

export const FooterAuthText = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: #9298b8;
`;
