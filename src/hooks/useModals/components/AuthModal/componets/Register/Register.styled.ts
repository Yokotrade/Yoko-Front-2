import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { deepPurple } from "@mui/material/colors";

export const RegisterWrapper = styled.div`
  padding: 42px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  gap: 24px;
  width: 690px;
  min-height: 690px
  box-sizing: border-box;

  @media screen and (max-width: 458px) {
    width: 100%;
    height: 100%;
  }
`;

export const RegisterTitle = styled(Typography)`
  font-weight: 800;
  line-height: 63px;
  color: #181938;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
    text-align: center;
  }
`;

export const RegesterTextWrapper = styled(Typography)`
  @media screen and (max-width: 458px) {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
  }
`;

export const RegisterTextBtn = styled.div`
  color: ${deepPurple[800]};
`;

export const RegisterErrorBlock = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #f87c92;
`;
