import styled from "@emotion/styled";

interface ButtonWrapperProps {
  background: string;
  isDisabled?: boolean;
  textColor: string;
  borderRadius: string;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  padding: 10px 10px;
  display: flex;
  cursor: pointer;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ textColor }) => textColor};
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  ${({ isDisabled }) =>
    isDisabled &&
    `
    color: grey;
    opacity: 0.4;
`};
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;
