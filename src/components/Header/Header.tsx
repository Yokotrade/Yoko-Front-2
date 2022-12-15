import { useState } from 'react';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AutnModal from 'components/AuthModal'
import LogoIcon from "icon/Logo";
import UserIcon from "icon/User";
import VKIcon from "icon/social/VK";
import InstagramIcon from "icon/social/Instagram";
import TelegramIcon from "icon/social/Telegram";
import TwitterIcon from "icon/social/Twitter";
import { languages } from "constants/languages";
import * as Styled from "./Header.styled";

const Header = (): JSX.Element => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleOpenAuthModal = () => setOpenAuthModal(prev => !prev)

  return (
    <Styled.HeaderWrapper>
      <AutnModal open={openAuthModal} onClose={handleOpenAuthModal} />
      <LogoIcon />
      <Styled.ActionWrapper direction="row" spacing={8}>
        <Button disabled size="small">
          Прибыль
        </Button>
        <Button disabled size="small">
          Робот
        </Button>
        <Button disabled size="small">
          Реферальная программа
        </Button>
        <Button disabled size="small">
          Вопросы
        </Button>
        <Button disabled size="small">
          О нас
        </Button>
      </Styled.ActionWrapper>
      <Styled.SocialWrapper direction="row" spacing={2}>
        <TwitterIcon />
        <TelegramIcon />
        <VKIcon />
        <InstagramIcon />
      </Styled.SocialWrapper>
      <Styled.UserRegistrationBtn startIcon={<UserIcon />} onClick={handleOpenAuthModal}>
        Вход / Регистрация
      </Styled.UserRegistrationBtn>
      <Styled.LanguagesWrapper
        select
        defaultValue="RU"
        variant="standard"
        size="small"
      >
        {languages.map(({ label, Icon }) => (
          <MenuItem sx={{ display: "flex" }} key={label} value={label}>
            <Styled.LanguagesItem>
              <Icon />
              <Styled.LanguagesText>{label}</Styled.LanguagesText>
            </Styled.LanguagesItem>
          </MenuItem>
        ))}
      </Styled.LanguagesWrapper>
    </Styled.HeaderWrapper>
  );
};

export default Header;
