import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AutnModal from "components/AuthModal";
import LogoIcon from "icon/Logo";
import UserIcon from "icon/User";
import VKIcon from "icon/social/VK";
import InstagramIcon from "icon/social/Instagram";
import TelegramIcon from "icon/social/Telegram";
import TwitterIcon from "icon/social/Twitter";
import { getSelectedLanguage } from "helpers/getSelectedLanguage";
import { languages } from "constants/languages";
import * as Styled from "./Header.styled";

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleOpenAuthModal = () => setOpenAuthModal((prev) => !prev);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Styled.HeaderWrapper>
      <AutnModal open={openAuthModal} onClose={handleOpenAuthModal} />
      <LogoIcon />
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
      <Styled.SocialWrapper direction="row" spacing={2}>
        <TwitterIcon color="#9298B8" />
        <TelegramIcon color="#9298B8" />
        <VKIcon color="#9298B8" />
        <InstagramIcon color="#9298B8" />
      </Styled.SocialWrapper>
      <Styled.UserRegistrationBtn
        startIcon={<UserIcon />}
        onClick={handleOpenAuthModal}
      >
        {t("header.register")}
      </Styled.UserRegistrationBtn>
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
              <Styled.LanguagesIcon
                src={`https://flagcdn.com/w20/${code}.png`}
                srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
                alt="{label}"
              />
              <Styled.LanguagesText>{label}</Styled.LanguagesText>
            </Styled.LanguagesItem>
          </MenuItem>
        ))}
      </Styled.LanguagesWrapper>
    </Styled.HeaderWrapper>
  );
};

export default Header;
