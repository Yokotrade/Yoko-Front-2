import { TableProps, VALUES_OF_PAGE } from "ui/Table";
import { LineChartsProps } from "ui/LineCharts";

export const getGraficData = (
  page: number,
  rows: TableProps["rows"],
  valueKey: string
): LineChartsProps["data"] => {
  return rows
    .slice(
      (page - 1) * VALUES_OF_PAGE,
      (page - 1) * VALUES_OF_PAGE + VALUES_OF_PAGE
    )
    .map((cells) =>
      cells.reduce((acc, { value, isTitleGrafic, isValueGrafic }) => {
        if (isTitleGrafic) return { ...acc, name: value };
        if (isValueGrafic) return { ...acc, [valueKey]: value };
        return acc;
      }, {})
    );
};
