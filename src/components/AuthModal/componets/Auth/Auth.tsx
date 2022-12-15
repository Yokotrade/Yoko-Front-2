import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { cyan, blue, deepPurple } from "@mui/material/colors";
import { AuthComponentProps } from "../../AutnModal.types";
import InputField from "ui/InputField";
import * as Styled from "./Auth.styled";

const Auth = ({ handleChangeAuthMode }: AuthComponentProps) => {
  return (
    <Styled.AuthWrapper>
      <Styled.AuthTitle variant="h3" align="center">
        Авторизация
      </Styled.AuthTitle>
      <InputField placeholder="Email" />
      <InputField placeholder="Пароль" />
      <Button sx={{ color: deepPurple[100] }} variant="text" size="small">
        Забыли пароль?
      </Button>
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          sx={{ background: cyan[50], color: blue[700] }}
          fullWidth
          size="large"
          color="info"
          variant="contained"
          onClick={() => handleChangeAuthMode("register")}
        >
          Зарегистрироваться
        </Button>
        <Button
          sx={{ background: cyan[50], color: blue[700] }}
          fullWidth
          size="large"
          color="info"
          variant="contained"
        >
          Авторизация
        </Button>
      </Stack>
    </Styled.AuthWrapper>
  );
};

export default Auth;
