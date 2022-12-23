import { useState } from "react";
import { isDesktop } from "react-device-detect";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleIcon from "@mui/icons-material/People";
import PercentIcon from "@mui/icons-material/Percent";
import SocialIconBlock from "components/SocialIconBlock";
import UserInformation from "components/UserInformation";
import LogoWhiteIcon from "icon/LogoWhite";
import {
  GENERAL_PATH,
  STATISTICS_PATH,
  REFERRAL_PATH,
  COMMISSION_PATH,
} from "constants/path";
import * as Styled from "./SideBar.styled";

const SideBar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(isDesktop);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const handleNavigate = (path: string) => navigate(path);
  console.log(open);

  if (!open)
    return (
      <Styled.MenuButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </Styled.MenuButton>
    );
  return (
    <Styled.SideBarWrapper isPosition={!isDesktop}>
      <Styled.SideBarActionsBlock>
        {!isDesktop && (
          <Styled.MenuSideBarHeaderBlock>
            <LogoWhiteIcon />
            <Styled.MenuSideBarButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </Styled.MenuSideBarButton>
          </Styled.MenuSideBarHeaderBlock>
        )}
        {!isDesktop && <UserInformation isSideBar />}
        <Styled.ListElementBlock
          selected={path === GENERAL_PATH}
          onClick={() => handleNavigate(GENERAL_PATH)}
        >
          <HomeIcon sx={{ color: "#CFCEF9" }} />
          <Styled.listItemText>{t("pages.general")}</Styled.listItemText>
        </Styled.ListElementBlock>
        <Styled.ListElementBlock
          selected={path === STATISTICS_PATH}
          onClick={() => handleNavigate(STATISTICS_PATH)}
        >
          <SignalCellularAltIcon sx={{ color: "#CFCEF9" }} />
          <Styled.listItemText>{t("pages.statistics")}</Styled.listItemText>
        </Styled.ListElementBlock>
        <Styled.ListElementBlock
          selected={path === REFERRAL_PATH}
          onClick={() => handleNavigate(REFERRAL_PATH)}
        >
          <PeopleIcon sx={{ color: "#CFCEF9" }} />
          <Styled.listItemText>{t("pages.referral")}</Styled.listItemText>
        </Styled.ListElementBlock>
        <Styled.ListElementBlock
          selected={path === COMMISSION_PATH}
          onClick={() => handleNavigate(COMMISSION_PATH)}
        >
          <PercentIcon sx={{ color: "#CFCEF9" }} />
          <Styled.listItemText>{t("pages.commission")}</Styled.listItemText>
        </Styled.ListElementBlock>
      </Styled.SideBarActionsBlock>
      {!isDesktop && (
        <Styled.SideBarInfomationBlock>
          <Styled.SideBarInfomationTitle>
            {t("general.join_us")}
          </Styled.SideBarInfomationTitle>
          <SocialIconBlock color="#CFCEF9" />
          <Styled.SideBarInfomationDescription>
            {t("footer.privacy_policy")}
          </Styled.SideBarInfomationDescription>
          <Styled.SideBarInfomationDescription>
            {t("footer.cookie_policy")}
          </Styled.SideBarInfomationDescription>
        </Styled.SideBarInfomationBlock>
      )}
    </Styled.SideBarWrapper>
  );
};

export default SideBar;
