import React from "react";
import { green } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import * as Styled from "./Button.styled";

interface ButtonProps {
  title: string;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  onClick: () => void;
  background: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  textColor: string;
  borderRadius: string;
}

const Button = (props: ButtonProps) => {
  const {
    title,
    LeftIcon,
    RightIcon,
    onClick,
    background,
    textColor,
    isLoading,
    isDisabled,
    borderRadius,
  } = props;
  return (
    <Styled.ButtonWrapper
      {...{ isDisabled, background, textColor, borderRadius, onClick }}
    >
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
      {!isLoading && (
        <>
          {LeftIcon && <LeftIcon />}
          {title}
          {RightIcon && <RightIcon />}
        </>
      )}
    </Styled.ButtonWrapper>
  );
};

export default Button;
