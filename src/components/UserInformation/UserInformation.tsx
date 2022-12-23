import { useAppSelector } from "store/hook";
import { userSelectors } from "store/Auth";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import UserAvatar from "icon/UserAvatar";
import * as Styled from "./UserInformation.styled";

export interface UserInformationProps {
  isSideBar?: boolean;
}

const UserInformation = (props: UserInformationProps) => {
  const { isSideBar } = props;
  const user = useAppSelector(userSelectors);
  return (
    <Styled.UserInformationWrapper {...{ isSideBar }}>
      <Styled.IconBlock>
        <UserAvatar />
      </Styled.IconBlock>
      <Styled.UserInformationBlock>
        <Styled.UserUIDBlock>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "13px",
              letterSpacing: "0.3px",
              color: "#181938",
            }}
          >
            {user?.FirstName || ""}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "11px",
              lineHeight: "11px",
              letterSpacing: "0.3px",
              color: "#9298B8",
            }}
          >
            ID: {user?.ID || ""}
          </Typography>
        </Styled.UserUIDBlock>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "13px",
            letterSpacing: "0.3px",
            color: "#181938",
          }}
        >
          {user?.Login || ""}
        </Typography>
      </Styled.UserInformationBlock>
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </Styled.UserInformationWrapper>
  );
};

export default UserInformation;
