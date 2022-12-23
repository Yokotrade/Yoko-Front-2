import { useState, useMemo } from "react";
import { isDesktop } from "react-device-detect";
import Paper from "@mui/material/Paper";
import TableUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./Table.styled";

interface ValueCell {
  value: string;
  align: TableCellProps["align"];
  color: string;
}

type RowsType = ValueCell[];

export interface TableProps {
  headCell: ValueCell[];
  valueCell: RowsType[];
  elementOfPage: number;
  handleChangePage: (newPage: number) => void;
}

const Table = (props: TableProps) => {
  const { headCell, valueCell, handleChangePage, elementOfPage } = props;

  const [page, setPage] = useState(0);

  const handleChange = (_: any, newPage: number) => {
    setPage(newPage);
    handleChangePage(newPage);
  };

  const rowValue = useMemo(() => {
    return valueCell.slice(
      page * elementOfPage,
      page * elementOfPage + elementOfPage
    );
  }, [page, elementOfPage]);
  
  if (!isDesktop) {
    return (
      <Styled.TableWrapper>
        {rowValue.map((row) => {
          return (
            <Styled.Cell>
              {row.map(({ align, value, color }, index) => {
                const headeCell = headCell[index];
                return (
                  <Styled.CellContent>
                    <Styled.CellTitle
                      {...{ align: headeCell.align, color: headeCell.color }}
                    >
                      {headeCell.value}
                    </Styled.CellTitle>
                    <Styled.CellValue {...{ align, color }}>
                      {value}
                    </Styled.CellValue>
                  </Styled.CellContent>
                );
              })}
            </Styled.Cell>
          );
        })}
        <TablePagination
          sx={{ boxSizing: "border-box" }}
          component="div"
          count={valueCell.length}
          rowsPerPage={elementOfPage}
          page={page}
          onPageChange={handleChange}
          rowsPerPageOptions={[{ label: "", value: 1 }]}
        />
      </Styled.TableWrapper>
    );
  }

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        padding: "5px 5px",
        boxSizing: "border-box",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <TableUI stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headCell.map(({ align, value, color }) => (
                <TableCell key={value} {...{ align }} sx={{ color }}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowValue.map((row) => (
              <TableRow>
                {row.map(({ align, value, color }) => (
                  <TableCell key={value} {...{ align }} sx={{ color }}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableUI>
      </TableContainer>
      <TablePagination
        component="div"
        count={valueCell.length}
        rowsPerPage={elementOfPage}
        page={page}
        onPageChange={handleChange}
        rowsPerPageOptions={[{ label: "", value: 1 }]}
      />
    </Paper>
  );
};

export default Table;
