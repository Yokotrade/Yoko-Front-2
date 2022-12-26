import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export const AuthWrapper = styled.div`
  padding: 42px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  gap: 24px;
  width: 690px;
  height: 690px
  box-sizing: border-box;

  @media screen and (max-width: 458px) {
    width: 100%;
    height: 100%;
  }
`;

export const AuthTitle = styled(Typography)`
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

export const ActionsAuthBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 10px;
  width: 100%;
`;

export const AuthErrorBlock = styled.div`
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
