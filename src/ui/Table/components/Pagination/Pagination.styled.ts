import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

interface PaginationPageButtonProps {
  selected: boolean;
}

export const PaginationActionsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const PaginationPageButton = styled.div<PaginationPageButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  background: ${({ selected }) => (selected ? "#5F5CEC" : "#F4F7FE")};
  border-radius: 20px;
`;
