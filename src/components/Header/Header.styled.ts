import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

interface HeaderWrapperProps {
  isAuth: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: relative;
  z-index: 3;
  background: #ffffff;
  box-shadow: 0px 25px 20px -25px rgba(20, 25, 143, 0.1);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    display: ${({ isAuth }) => (isAuth ? "none" : "flex")};
  }
`;

export const ActionWrapper = styled(Stack)`
  margin-left: 5%;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 1276px) {
    display: none;
  }
`;

export const LeftBlock = styled(Stack)``;

export const RigthBlock = styled(Stack)`
  gap: 35px;
  justify-content: flex-end;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const HeaderMenuBlock = styled.div`
  margin-left: 0 !important;
  @media screen and (min-width: 1276px) {
    display: none;
  }
`;

export const HeaderMenuContentBlock = styled(Stack)`
  margin-left: 0 !important;
  align-content: space-between;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderMenuSocialBlock = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  @media screen and (min-width: 691px) {
    display: none;
  }
`;

export const UserRegistrationBtn = styled(Button)`
  margin-left: 0 !important;
  background: #f4f7fe;
  color: #5f5cec;
  font-weight: 600;
  font-size: 15px;
  line-height: 14px;
  padding: 12px 20px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const UserRegistrationIconButton = styled.div`
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export const LanguagesWrapper = styled(TextField)`
  margin-left: 0 !important;
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

export const LanguagesIcon = styled.img`
  margin-right: 5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
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
