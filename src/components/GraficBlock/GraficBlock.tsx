import { isDesktop } from "react-device-detect";
import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Table, { TableProps } from "components/Table";
import { getGraficWidthHeigth } from "./utils/getGraficWidthHeigth";
import { getGraficData } from "./utils/getTableData";
import * as Styled from "./GraficBlock.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface GraficBlockProps {
  title: string;
  description: string;
  tabs?: string;
  tableData: Pick<TableProps, "headCell" | "valueCell">;
}

const GraficBlock = (props: GraficBlockProps) => {
  const { title, description, tableData } = props;
  const elementOfPage = isDesktop ? 10 : 5;
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const options = {
    responsive: true,
  };

  const { labels, data: graficData } = useMemo(
    () => getGraficData(tableData, page, elementOfPage),
    [page, tableData]
  );
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Прибыль",
        data: graficData,
        borderColor: "#5F5CEC",
        backgroundColor: "rgba(45,49,253,0.23573179271708689)",
        hitRadius: 3,
        borderJoinStyle: "bevel" as const,
      },
    ],
  };

  const { width, height } = getGraficWidthHeigth();
  return (
    <Styled.GraficWrapper>
      <Styled.GraficActionsBlock>
        <Styled.GraficActionsInformationBlock>
          <Styled.GraficActionTitle>{title}</Styled.GraficActionTitle>
          <Styled.GraficActionDescription>
            {description}
          </Styled.GraficActionDescription>
        </Styled.GraficActionsInformationBlock>
      </Styled.GraficActionsBlock>
      <Line options={options} data={data} width={width} height={height} />
      <Table {...tableData} {...{ elementOfPage, handleChangePage }} />
    </Styled.GraficWrapper>
  );
};

export default GraficBlock;
