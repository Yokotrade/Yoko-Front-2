import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 3;
  background: #ffffff;
  box-shadow: 0px 25px 20px -25px rgba(20, 25, 143, 0.1);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
`;

export const ActionWrapper = styled(Stack)`
  margin-left: 5%;
  align-items: center;
  justify-items: center;
`;

export const SocialWrapper = styled(Stack)`
  margin-left: 5%;
  align-items: center;
  justify-items: center;
`;

export const UserRegistrationBtn = styled(Button)`
  background: #f4f7fe;
  color: #5f5cec;
  font-weight: 600;
  font-size: 15px;
  line-height: 14px;
  padding: 12px 20px;
  margin-left: 2%;
`;

export const LanguagesWrapper = styled(TextField)`
  margin-left: 30px;
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  border: none;
`;

export const LanguagesItem = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 12px;
  color: #181938;
  padding: 0;
`;

export const LanguagesText = styled.span`
  display: flex;
  align-item: center;
  justify-item: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 12px;
  color: #181938;
  padding: 0;
  margin: 0;
`;
