import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BotSettingsWrapper = styled.div`
  padding: 40px 40px;
  width: 1000px;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  gap: 40px;
  box-sizing: border-box;
`;
export const BotSettingsTitle = styled(Typography)`
  font-weight: 700;
  font-size: 32px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #2b3674;
`;

export const SecretBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
`;

export const SecretInput = styled.input`
  padding: 10px 20px;
  width: 465px;
  height: 50px;
  background: #f4f7fe;
  border-radius: 49px;
  border: none;
  color: #5f5cec;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

export const CategoryBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 40px;
  width: 100%;
  box-sizing: border-box;
`;

export const FiledsBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 30%;
  box-sizing: border-box;
`;

export const FiledsTitle = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2b3674;
`;
