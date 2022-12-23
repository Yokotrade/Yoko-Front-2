import { useState } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch, useAppSelector } from "store/hook";
import { isAuthUser } from "store/Auth";
import { activeModal } from "store/Modals";
import UserInformation from "components/UserInformation";
import SocialIconBlock from "components/SocialIconBlock";
import LogoIcon from "icon/Logo";
import UserIcon from "icon/User";
import { getSelectedLanguage } from "helpers/getSelectedLanguage";
import { getIconLng } from "./utils/getIconLng";
import { languages } from "constants/languages";
import { headerMenuItems } from "./Header.constants";
import * as Styled from "./Header.styled";

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthUser);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  // const handleOpenAuthModal = () => setOpenAuthModal((prev) => !prev);

  const handleOpenAuthModal = () => {
    dispatch(activeModal("auth"));
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Styled.HeaderWrapper {...{ isAuth }}>
      <Styled.LeftBlock direction="row" spacing={8}>
        <LogoIcon />
        {!isAuth && (
          <Styled.ActionWrapper direction="row" spacing={8}>
            <Button disabled size="small">
              {t("header.profit")}
            </Button>
            <Button disabled size="small">
              {t("header.robot")}
            </Button>
            <Button disabled size="small">
              {t("header.referral_program")}
            </Button>
            <Button disabled size="small">
              {t("header.questions")}
            </Button>
            <Button disabled size="small">
              {t("header.about")}
            </Button>
          </Styled.ActionWrapper>
        )}
      </Styled.LeftBlock>
      <Styled.RigthBlock direction="row" spacing={8}>
        <Styled.SocialWrapper>
          <SocialIconBlock color="#9298B8" />
        </Styled.SocialWrapper>
        {!isAuth && (
          <>
            <Styled.UserRegistrationBtn
              startIcon={<UserIcon />}
              onClick={handleOpenAuthModal}
            >
              {t("header.register")}
            </Styled.UserRegistrationBtn>
            <Styled.UserRegistrationIconButton onClick={handleOpenAuthModal}>
              <UserIcon />
            </Styled.UserRegistrationIconButton>
          </>
        )}
        {isAuth && <UserInformation />}
        <Styled.LanguagesWrapper
          select
          defaultValue={getSelectedLanguage()}
          variant="standard"
          size="small"
          onChange={(evt) => handleChangeLanguage(evt.target.value)}
        >
          {languages.map(({ label, code }) => (
            <MenuItem sx={{ display: "flex" }} key={label} value={label}>
              <Styled.LanguagesItem>
                {getIconLng(code)}
                <Styled.LanguagesText>{label}</Styled.LanguagesText>
              </Styled.LanguagesItem>
            </MenuItem>
          ))}
        </Styled.LanguagesWrapper>
        <Styled.HeaderMenuBlock>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={openMenu ? "long-menu" : undefined}
            aria-expanded={openMenu ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleOpenMenu}
          >
            <MenuIcon sx={{ color: "#5F5CEC" }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={openMenu}
            onClose={() => handleOpenMenu()}
          >
            <Styled.HeaderMenuContentBlock direction="column" spacing={2}>
              <List>
                {headerMenuItems.map(({ title }) => (
                  <ListItem sx={{ width: "286px" }}>
                    <ListItemButton>
                      <ListItemText primary={t(title)} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Styled.HeaderMenuSocialBlock>
                <SocialIconBlock color="#9298B8" />
              </Styled.HeaderMenuSocialBlock>
            </Styled.HeaderMenuContentBlock>
          </Drawer>
        </Styled.HeaderMenuBlock>
      </Styled.RigthBlock>
    </Styled.HeaderWrapper>
  );
};

export default Header;
