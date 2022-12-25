import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const TooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 162px;
  height: 84px;
  background: #f4f7fe;
  border-radius: 10px;
  gap: 5px;
  border: none !important;

  @media screen and (max-width: 420px) {
    width: 83px;
    height: 28px;
  }
`;

export const TooltipTitle = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: #181938;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const TooltipValue = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: #181938;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const TooltipLabel = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: #9298b8;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;
