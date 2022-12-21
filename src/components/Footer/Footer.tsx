import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import SocialIconBlock from "components/SocialIconBlock";
import LogoWhiteIcon from "icon/LogoWhite";

import * as Styled from "./Footer.styled";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Styled.FooterWrapper>
      <LogoWhiteIcon />
      <Styled.PoliticsBlock>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("footer.terms_of_use")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("footer.privacy_policy")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("footer.cookie_policy")}
        </Typography>
      </Styled.PoliticsBlock>
      <Styled.SectionsBlock>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("header.profit")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("header.robot")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("header.referral_program")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("header.questions")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            color: "#fff",
          }}
        >
          {t("header.about")}
        </Typography>
      </Styled.SectionsBlock>
      <SocialIconBlock color="#ffffff" />
    </Styled.FooterWrapper>
  );
};

export default Footer;
