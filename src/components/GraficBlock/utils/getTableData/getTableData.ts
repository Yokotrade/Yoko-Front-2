import { TableProps } from "components/Table";

export const getTableData = () => {
  return "asd";
};

interface ReturnValueForGraficData {
  labels: string[];
  data: number[];
}

export const getGraficData = (
  tableData: Pick<TableProps, "headCell" | "valueCell">,
  page: number,
  elementOfPage: number
): ReturnValueForGraficData => {
  const labels: string[] = [];
  const data: number[] = [];

  tableData.valueCell
    .slice(page * elementOfPage, page * elementOfPage + elementOfPage)
    .forEach((row) =>
      row.forEach(({ value }, index) => {
        if (index === 0) {
          labels.push(value);
        }
        if (index === row.length - 1) {
          data.push(+value);
        }
      })
    );

  return { labels, data };
};
