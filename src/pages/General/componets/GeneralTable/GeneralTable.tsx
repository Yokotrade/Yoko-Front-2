import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Table, { TableProps } from "ui/Table";
import LinerGrafic from "ui/LineCharts";
import { getGraficData } from "../util/getGraficData";

const GeneralTable = (props: Pick<TableProps, "head" | "rows">) => {
  const { head, rows } = props;
  const { t } = useTranslation();
  const valueKey = t("general.profit");
  const [page, setPage] = useState(0);
  const handleSetActivePage = (pageNumber: number) => setPage(pageNumber);
  const data = useMemo(() => getGraficData(page, rows, valueKey), [page, rows]);
  return (
    <>
      <LinerGrafic parentId="generalInformationBlock" {...{ data, valueKey }} />
      <Table cellWidth="120px" {...{ head, rows, handleSetActivePage }} />
    </>
  );
};

export default GeneralTable;
