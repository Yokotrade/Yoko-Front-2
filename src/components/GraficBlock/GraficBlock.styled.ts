import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export const GraficWrapper = styled.div`
  margin-top: 24px;
  padding: 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  justify-content: center;
  background: none;
  box-shadow: 0px 25px 20px -25px rgba(20, 25, 143, 0.15);
  border-radius: 20px;
  width: 99%;
  box-sizing: border-box;
  gap: 20px;
`;

export const GraficActionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  box-sizing: border-box;
`;

export const GraficActionsButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const GraficActionsInformationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-flow: column nowrap;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;
  }
`;

export const GraficActionTitle = styled(Typography)`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #181938;

  @media screen and (max-width: 1024px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.3px;
  }
`;

export const GraficActionDescription = styled(Typography)`
  font-weight: 900;
  font-size: 34px;
  line-height: 34px;
  letter-spacing: 0.3px;
  color: #5f5cec;

  @media screen and (max-width: 1024px) {
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const GraficToggleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const GraficBlock = styled.div`
  width: 100%;
  height: 30%;
  box-sizing: border-box;
`;
