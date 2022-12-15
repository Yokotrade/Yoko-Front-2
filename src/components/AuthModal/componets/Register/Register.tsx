import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { deepPurple, cyan, blue } from "@mui/material/colors";
import { AuthComponentProps } from "../../AutnModal.types";
import InputField from "ui/InputField";
import * as Styled from "./Register.styled";

const Register = ({ handleChangeAuthMode }: AuthComponentProps) => {
  return (
    <Styled.RegisterWrapper>
      <Styled.RegisterTitle variant="h3" align="center">
        Регистрация
      </Styled.RegisterTitle>
      <InputField placeholder="Email" />
      <InputField placeholder="Пароль" />
      <InputField placeholder="Повторите пароль" />
      <Typography sx={{ color: deepPurple[100] }} variant="subtitle1">
        Уже есть логин?
        <Button
          sx={{ color: deepPurple[50] }}
          variant="text"
          color="secondary"
          size="small"
        >
          Авторизоваться
        </Button>
      </Typography>
      <Button
          sx={{ background: cyan[50], color: blue[700] }}
          fullWidth
          size="large"
          color="info"
          variant="contained"
        >
          Зарегистрироваться
        </Button>
    </Styled.RegisterWrapper>
  );
};

export default Register;
