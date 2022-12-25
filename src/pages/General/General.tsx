import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "store/hook";
import { userSelectors } from "store/Auth/selectors";
import CardContent from "components/CardContent";
import Table from "ui/Table";
import LinerGrafic from "ui/LineCharts";
import { getGeneralCards } from "./utils/getGeneralCards";
import { getFakeData } from "./utils/getFakeData";
import { getGraficData } from "./utils/getGraficData";
import * as Styled from "./General.styled";

const General = () => {
  const { t } = useTranslation();
  const user = useAppSelector(userSelectors);
  const generalCards = getGeneralCards(user?.balance_local || 0);
  const { head, rows } = getFakeData();
  const valueKey = t("general.profit");
  const [page, setPage] = useState(0);
  const handleSetActivePage = (pageNumber: number) => setPage(pageNumber);
  const data = useMemo(() => getGraficData(page, rows, valueKey), [page, rows]);
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
      <Styled.GeneralInformationBlock id="generalInformationBlock">
        <LinerGrafic
          parentId="generalInformationBlock"
          {...{ data, valueKey }}
        />
        <Table cellWidth="120px" {...{ head, rows, handleSetActivePage }} />
      </Styled.GeneralInformationBlock>
    </Styled.GeneralPageWrapper>
  );
};

export default General;
