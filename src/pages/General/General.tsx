import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import CardContent from "components/CardContent";
import { generalCards } from "./General.constants";
import * as Styled from "./General.styled";

const General = () => {
  const { t } = useTranslation();
  return (
    <Styled.GeneralPageWrapper>
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
        {t("pages.general")}
      </Typography>
      <Styled.GeneralCardsBlock>
        {generalCards.map((card) => (
          <CardContent {...card} />
        ))}
      </Styled.GeneralCardsBlock>
    </Styled.GeneralPageWrapper>
  );
};

export default General;
