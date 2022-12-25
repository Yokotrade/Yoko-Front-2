import { useTranslation } from "react-i18next";
import { TableProps } from "ui/Table";

export const getFakeData = (): Pick<TableProps, "head" | "rows"> => {
  const { t } = useTranslation();

  const head: TableProps["head"] = [
    {
      value: t("general.date"),
      align: "center",
      color: "#9298B8",
    },
    {
      value: t("general.number_transactions"),
      align: "center",
      color: "#9298B8",
    },
    {
      value: t("general.profit"),
      align: "center",
      color: "#9298B8",
    },
  ];

  const rows: TableProps["rows"] = [
    [
      {
        value: "23.04.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "13",
        align: "center",
        color: "#181938",
      },
      {
        value: "28.72",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "05.05.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "16",
        align: "center",
        color: "#181938",
      },
      {
        value: "43.72",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "15.05.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "42",
        align: "center",
        color: "#181938",
      },
      {
        value: "22.72",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "10.05.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "21",
        align: "center",
        color: "#181938",
      },
      {
        value: "88.72",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "24.10.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "11",
        align: "center",
        color: "#181938",
      },
      {
        value: "11",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "05.06.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "41",
        align: "center",
        color: "#181938",
      },
      {
        value: "16.16",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "10.06.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "24",
        align: "center",
        color: "#181938",
      },
      {
        value: "42.24",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "12.06.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "25",
        align: "center",
        color: "#181938",
      },
      {
        value: "41.11",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "16.06.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "41",
        align: "center",
        color: "#181938",
      },
      {
        value: "12.72",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "19.06.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "49",
        align: "center",
        color: "#181938",
      },
      {
        value: "41.72",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
    [
      {
        value: "21.06.2022",
        align: "center",
        color: "#181938",
        isTitleGrafic: true,
      },
      {
        value: "31",
        align: "center",
        color: "#181938",
      },
      {
        value: "11.11",
        align: "center",
        color: "#181938",
        isValueGrafic: true,
      },
    ],
  ];
  return {
    head,
    rows,
  };
};
