import VKIcon from "icon/social/VK";
import InstagramIcon from "icon/social/Instagram";
import TelegramIcon from "icon/social/Telegram";
import TwitterIcon from "icon/social/Twitter";
import * as Styled from "./SocialIconBlock.styled";

interface SocialIconBlockProps {
    color: string;
}

const SocialIconBlock = ({color} : SocialIconBlockProps) => {
  return (
    <Styled.SocialBlock>
      <TwitterIcon {...{ color }} />
      <TelegramIcon {...{ color }} />
      <VKIcon {...{ color }} />
      <InstagramIcon {...{ color }} />
    </Styled.SocialBlock>
  );
};

export default SocialIconBlock;
