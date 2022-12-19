import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import CardContent from "components/CardContent";
import { commissionCards } from "./Commission.constants";
import * as Styled from "./Commission.styled";

const Commission = () => {
  const { t } = useTranslation();
  return (
    <Styled.CommissionPageWrapper>
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
        {t("pages.commission")}
      </Typography>
      <Typography
        sx={{
          marginBottom: "25px",
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "19px",
          letterSpacing: "0.3px",
          color: "#181938",
          maxWidth: "1044px",
        }}
      >
        {t("pages.commission_info1")}
      </Typography>
      <Typography
        sx={{
          marginBottom: "25px",
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "19px",
          letterSpacing: "0.3px",
          color: "#9298B8",
          maxWidth: "1044px",
        }}
      >
        {t("pages.commission_info2")}
      </Typography>
      <Styled.CommissionCardsBlock>
        {commissionCards.map((card) => (
          <CardContent {...card} />
        ))}
      </Styled.CommissionCardsBlock>
    </Styled.CommissionPageWrapper>
  );
};

export default Commission;
