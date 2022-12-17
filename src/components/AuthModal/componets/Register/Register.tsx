import { Formik } from "formik";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation()
  const handleSubmit = async (values: RegisterInitialValues) => {
    console.log(values);
  };

  return (
    <Styled.RegisterWrapper>
      <Styled.RegisterTitle variant="h3" align="center">
      {t("register.title")}
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
              placeholder={t("register.password_input_placeholder")}
              handleChange={props.handleChange}
            />
            <InputField
              name="passwordRetry"
              placeholder={t("register.password_retry_input_placeholder")}
              handleChange={props.handleChange}
            />
            <Typography sx={{ color: deepPurple[100] }} variant="subtitle1">
            {t("register.have_login")}
              <Button
                sx={{ color: deepPurple[50] }}
                variant="text"
                color="secondary"
                size="small"
                onClick={() => handleChangeAuthMode("auth")}
              >
                {t("register.authorization")}
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
              {t("register.register")}
            </Button>
          </Stack>
        )}
      </Formik>
    </Styled.RegisterWrapper>
  );
};

export default Register;
