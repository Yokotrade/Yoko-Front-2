import { useState } from "react";
import { isMobile } from "react-device-detect";
import Pagination from "./components/Pagination";
import * as Styled from "./Table.styled";
interface CellValues {
  color: string;
  align: string;
  value: string;
  isTitleGrafic?: boolean;
  isValueGrafic?: boolean;
}

type RowsType = CellValues[];
export const VALUES_OF_PAGE = isMobile ? 4 : 10;
export interface TableProps {
  head: CellValues[];
  rows: RowsType[];
  cellWidth: string;
  handleSetActivePage: (pageNumber: number) => void;
}

const Table = (props: TableProps) => {
  const { head, rows, cellWidth, handleSetActivePage } = props;
  const [activePage, setActivePage] = useState(1);
  const handleChangeActivePage = (pageNumber: number) => {
    setActivePage(pageNumber);
    handleSetActivePage(pageNumber);
  };

  return (
    <Styled.TableWrapper>
      <Styled.TableContentBlock>
        <Styled.HeadRow>
          {head.map(({ color, align, value }) => (
            <Styled.HeadCell {...{ color, align, cellWidth }}>
              {value}
            </Styled.HeadCell>
          ))}
        </Styled.HeadRow>
        <Styled.BodyBlock>
          {rows
            .slice(
              (activePage - 1) * VALUES_OF_PAGE,
              (activePage - 1) * VALUES_OF_PAGE + VALUES_OF_PAGE
            )
            .map((cells) => (
              <Styled.BodyRow>
                {cells.map(({ color, align, value }) => (
                  <Styled.BodyCell {...{ color, align, cellWidth }}>
                    {value}
                  </Styled.BodyCell>
                ))}
              </Styled.BodyRow>
            ))}
        </Styled.BodyBlock>
      </Styled.TableContentBlock>
      <Pagination tableRows={rows} {...{ handleChangeActivePage }} />
    </Styled.TableWrapper>
  );
};

export default Table;
