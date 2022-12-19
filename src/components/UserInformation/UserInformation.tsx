import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import UserAvatar from "icon/UserAvatar";
import * as Styled from "./UserInformation.styled";

const UserInformation = () => {
  return (
    <Styled.UserInformationWrapper>
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
            Tany
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
            ID: 301514
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
          tany@gmail.com
        </Typography>
      </Styled.UserInformationBlock>
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </Styled.UserInformationWrapper>
  );
};

export default UserInformation;
