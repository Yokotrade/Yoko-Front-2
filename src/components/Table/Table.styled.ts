import styled from "@emotion/styled";
import { TableCellProps } from "@mui/material/TableCell";

interface CellProps {
  align: TableCellProps["align"];
  color: string;
}

export const TableWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 10px;
  background: none;
`;

export const Cell = styled.div`
  padding: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-between;
  width: 342px;
  height: 65px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 25px 20px -25px rgba(20, 25, 143, 0.15);
  border-radius: 10px;
  width: 100%;
`;

export const CellContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;
`;

export const CellTitle = styled.div<CellProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
`;

export const CellValue = styled.div<CellProps>`
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
`;
