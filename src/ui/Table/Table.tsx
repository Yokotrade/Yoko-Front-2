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

  return (
    <Styled.TableWrapper>
      <Styled.HeadRow>
        {head.map(({ color, align, value }) => (
          <Styled.HeadCell {...{ color, align, cellWidth }}>
            {value}
          </Styled.HeadCell>
        ))}
      </Styled.HeadRow>
      <Styled.BodyBlock>
        {rows.map((cells) => (
          <Styled.BodyRow>
            {cells.map(({ color, align, value }) => (
              <Styled.BodyCell {...{ color, align, cellWidth }}>
                {value}
              </Styled.BodyCell>
            ))}
          </Styled.BodyRow>
        ))}
      </Styled.BodyBlock>
    </Styled.TableWrapper>
  );
};

export default Table;
