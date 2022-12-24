import { useEffect, useMemo, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TableProps } from "../../Table";
import * as Styled from "./Pagination.styled";

interface PaginationProps {
  handleChangeActivePage: (pageNumber: number) => void;
  tableRows: TableProps["rows"];
}

const Pagination = (props: PaginationProps) => {
  const { handleChangeActivePage, tableRows } = props;
  const [activePage, setActivePage] = useState(1);
  const countPages = Math.ceil(tableRows.length / 10);
  useEffect(() => {
    handleChangeActivePage(activePage);
  }, []);
  const isShowLeftAction = activePage > 1;
  const isShowRightAction = activePage < countPages;
  const pagesActions = useMemo(() => {
    let actions = new Array(countPages)
      .fill("")
      .map((_, index) => `${index + 1}`);
    if (actions.length <= 7) return actions;
    if (activePage > 2) actions[1] = "...";
    if (countPages - 2 >= activePage) actions[countPages - 2] = "...";
    if (activePage <= 4) {
      return [...actions.slice(0, 4), "...", `${countPages}`];
    }
    return [
      ...actions.slice(0, 1),
      ...actions.slice(activePage - 1, countPages + 1),
      ...actions.slice(countPages - 2, countPages),
    ];
  }, [activePage]);

  const handleClickNextPage = () => {
    setActivePage(activePage + 1);
    handleChangeActivePage(activePage + 1);
  };

  const handleClickPrevPage = () => {
    setActivePage(activePage - 1);
    handleChangeActivePage(activePage - 1);
  };

  const handleClickPage = (pageNumber: number) => {
    setActivePage(pageNumber);
    handleChangeActivePage(pageNumber);
  };
  return (
    <Styled.PaginationWrapper>
      <IconButton
        onClick={() => handleClickPrevPage()}
        disabled={!isShowLeftAction}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <Styled.PaginationActionsBlock>
        {pagesActions.map((el, index) => (
          <Styled.PaginationPageButton
            onClick={() => handleClickPage(index + 1)}
            selected={index + 1 === activePage}
          >
            {el}
          </Styled.PaginationPageButton>
        ))}
      </Styled.PaginationActionsBlock>

      <IconButton
        onClick={() => handleClickNextPage()}
        disabled={!isShowRightAction}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Styled.PaginationWrapper>
  );
};

export default Pagination;
