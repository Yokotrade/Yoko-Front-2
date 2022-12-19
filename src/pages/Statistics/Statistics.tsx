import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import CardContent from "components/CardContent";
import { staticCards } from "./Statistics.constants";
import * as Styled from "./Statistics.styled";

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <Styled.StatisticsPageWrapper>
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
        {t("pages.statistics")}
      </Typography>
      <Styled.StatisticsCardsBlock>
        {staticCards.map((card) => (
          <CardContent {...card} />
        ))}
      </Styled.StatisticsCardsBlock>
    </Styled.StatisticsPageWrapper>
  );
};

export default Statistics;
