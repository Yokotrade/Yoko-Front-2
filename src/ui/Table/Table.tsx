import { useState } from "react";
import Pagination from "./components/Pagination";
import * as Styled from "./Table.styled";
interface CellValues {
  color: string;
  align: string;
  value: string;
}

type RowsType = CellValues[];

export interface TableProps {
  head: CellValues[];
  rows: RowsType[];
  cellWidth: string;
}

const Table = (props: TableProps) => {
  const { head, rows, cellWidth } = props;
  const [activePage, setActivePage] = useState(1);
  const handleChangeActivePage = (pageNumber: number) =>
    setActivePage(pageNumber);

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
            .slice((activePage - 1) * 10, (activePage - 1) * 10 + 10)
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
