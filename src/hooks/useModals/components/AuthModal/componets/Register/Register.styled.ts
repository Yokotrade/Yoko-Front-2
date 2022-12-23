import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export const RegisterWrapper = styled.div`
  padding: 42px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  background: #5f5cec;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const RegisterTitle = styled(Typography)`
  font-weight: 800;
  line-height: 63px;
  color: #ffffff;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
    text-align: center;
  }
`;
