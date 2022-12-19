import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import CardContent from "components/CardContent";
import { referralCards } from "./Referral.constants";
import * as Styled from "./Referral.styled";

const Referral = () => {
  const { t } = useTranslation();
  return (
    <Styled.ReferralPageWrapper>
      <Typography
        sx={{
          marginBottom: "25px",
          fontWeight: "700",
          fontSize: "34px",
          lineHeight: "34px",
          letterSpacing: "0.3px",
          color: "#181938",
        }}
      >
        {t("pages.referral")}
      </Typography>
      <Styled.ReferralCardsBlock>
        {referralCards.map((card) => (
          <CardContent {...card} />
        ))}
      </Styled.ReferralCardsBlock>
    </Styled.ReferralPageWrapper>
  );
};

export default Referral;
