import { useEffect, useState } from "react";
import { isDesktop, isTablet, isMobile } from "react-device-detect";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./components/Tooltip";

export interface LineChartsProps {
  parentId: string;
  data: Record<string, number | string>[];
  valueKey: string;
}

const LineCharts = (props: LineChartsProps) => {
  const { parentId, data, valueKey } = props;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const parentElement = document.getElementById(parentId);
    setWidth((parentElement?.offsetWidth || 250) - 10);
  }, []);

  useEffect(() => {
    if (isDesktop) setHeight(259);
    if (isTablet) setHeight(252);
    if (isMobile) setHeight(238);
  }, [isDesktop, isTablet, isMobile]);

  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="5%"
            stopColor="rgba(95, 92, 236, 0.15)"
            stopOpacity={0.6}
          />
          <stop offset="95%" stopColor="rgba(95, 92, 236, 0)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        content={<CustomTooltip title={valueKey} valuePrifix="USDT" />}
      />
      <Area
        type="monotone"
        dataKey={valueKey}
        stroke="#5F5CEC"
        fillOpacity={1}
        fill="url(#colorUv)"
        activeDot={{ stroke: "#5F5CEC", strokeWidth: 1, r: 5 }}
      />
    </AreaChart>
  );
};

export default LineCharts;
