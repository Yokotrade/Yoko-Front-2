import styled from "@emotion/styled";

interface CellProps {
  color: string;
  align: string;
  cellWidth: string;
}

export const TableWrapper = styled.table`
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  flex-flow: column nowrap;
  padding: 30px;
  width: 100%;
  box-shadow: 0px 10px 20px rgba(112, 144, 176, 0.07);
  border-radius: 20px;
  background: #ffffff;
`;

export const TableContentBlock = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

export const HeadRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
  background: none;
`;

export const HeadCell = styled.div<CellProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  width: ${({ cellWidth }) => cellWidth};
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  box-sizing: border-box;
`;

export const BodyBlock = styled.div`
  padding: 24px 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

export const BodyRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
`;

export const BodyCell = styled.div<CellProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  width: ${({ cellWidth }) => cellWidth};
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.3px;
  box-sizing: border-box;
`;
