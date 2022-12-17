import { Formik, Form } from "formik";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { deepPurple, cyan, blue } from "@mui/material/colors";
import InputField from "ui/InputField";
import { AuthComponentProps } from "../../AutnModal.types";
import {
  RegisterInitialValues,
  initialValues,
  validationSchema,
} from "./Register.constants";
import * as Styled from "./Register.styled";

const Register = ({ handleChangeAuthMode }: AuthComponentProps) => {
  const handleSubmit = async (values: RegisterInitialValues) => {
    console.log(values);
  };

  return (
    <Styled.RegisterWrapper>
      <Styled.RegisterTitle variant="h3" align="center">
        Регистрация
      </Styled.RegisterTitle>
      <Formik onSubmit={handleSubmit} {...{ initialValues, validationSchema }}>
        {(props) => (
          <Stack spacing={4} sx={{ width: "100%" }}>
            <InputField
              name="email"
              placeholder="Email"
              handleChange={props.handleChange}
            />
            <InputField
              name="password"
              placeholder="Пароль"
              handleChange={props.handleChange}
            />
            <InputField
              name="passwordRetry"
              placeholder="Повторите пароль"
              handleChange={props.handleChange}
            />
            <Typography sx={{ color: deepPurple[100] }} variant="subtitle1">
              Уже есть логин?
              <Button
                sx={{ color: deepPurple[50] }}
                variant="text"
                color="secondary"
                size="small"
                onClick={() => handleChangeAuthMode("auth")}
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
              onClick={() => props.handleSubmit()}
            >
              Зарегистрироваться
            </Button>
          </Stack>
        )}
      </Formik>
    </Styled.RegisterWrapper>
  );
};

export default Register;
