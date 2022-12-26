import { useEffect } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import Button from "ui/Button";
import { deepPurple } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "store/hook";
import {
  registerUser,
  isLoadingSelector,
  errorSelector,
  cleanError,
} from "store/Auth";
import InputField from "ui/InputField";
import { AuthComponentProps } from "../../AutnModal.types";
import {
  RegisterInitialValues,
  initialValues,
  validationSchema,
} from "./Register.constants";
import * as Styled from "./Register.styled";

const Register = ({ handleChangeAuthMode }: AuthComponentProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const loading = useAppSelector(isLoadingSelector);
  const error = useAppSelector(errorSelector);
  const handleSubmit = async (values: RegisterInitialValues) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    return () => {
      dispatch(cleanError());
    };
  }, []);

  return (
    <Styled.RegisterWrapper>
      <Styled.RegisterTitle variant="h3" align="center">
        {t("register.title")}
      </Styled.RegisterTitle>
      <Formik
        onSubmit={handleSubmit}
        validateOnChange={false}
        {...{ initialValues, validationSchema }}
      >
        {(props) => (
          <Stack spacing={4} sx={{ width: "100%" }}>
            <InputField
              name="Login"
              placeholder="Email"
              handleChange={props.handleChange}
              error={props.errors.Login}
            />
            <InputField
              name="Password"
              placeholder={t("register.password_input_placeholder")}
              handleChange={props.handleChange}
              error={props.errors.Password}
            />
            <InputField
              name="PasswordRetry"
              placeholder={t("register.password_retry_input_placeholder")}
              handleChange={props.handleChange}
              error={props.errors.PasswordRetry}
            />
            {error && (
              <Styled.RegisterErrorBlock>
                {t("register.error")}
              </Styled.RegisterErrorBlock>
            )}
            <Styled.RegesterTextWrapper
              sx={{
                color: deepPurple[500],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              variant="subtitle1"
            >
              {t("register.have_login")}
              <Styled.RegisterTextBtn
                onClick={() => handleChangeAuthMode("auth")}
              >
                {t("register.authorization")}
              </Styled.RegisterTextBtn>
            </Styled.RegesterTextWrapper>
            <Button
              title={t("register.register")}
              background="#F4F7FE"
              textColor="#5F5CEC"
              borderRadius="15px"
              isLoading={loading}
              onClick={() => props.handleSubmit()}
            />
          </Stack>
        )}
      </Formik>
    </Styled.RegisterWrapper>
  );
};

export default Register;
