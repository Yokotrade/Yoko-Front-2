import { useEffect } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import ButtonLib from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "store/hook";
import {
  loginUser,
  isLoadingSelector,
  errorSelector,
  cleanError,
} from "store/Auth";
import InputField from "ui/InputField";
import Button from "ui/Button";
import { AuthComponentProps } from "../../AutnModal.types";
import {
  AuthInitialValues,
  initialValues,
  validationSchema,
} from "./Auth.constants";
import * as Styled from "./Auth.styled";

const Auth = ({ handleChangeAuthMode }: AuthComponentProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const loading = useAppSelector(isLoadingSelector);
  const error = useAppSelector(errorSelector);
  const handleSubmit = async (values: AuthInitialValues) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    return () => {
      dispatch(cleanError());
    };
  }, []);

  return (
    <Styled.AuthWrapper>
      <Styled.AuthTitle variant="h3" align="center">
        {t("auth.title")}
      </Styled.AuthTitle>
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
              placeholder={t("auth.password_input_placeholder")}
              handleChange={props.handleChange}
              error={props.errors.Password}
            />
            {error && (
              <Styled.AuthErrorBlock>{t("auth.error")}</Styled.AuthErrorBlock>
            )}
            <ButtonLib
              sx={{ color: deepPurple[100] }}
              variant="text"
              size="small"
            >
              {t("auth.forgot")}
            </ButtonLib>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Styled.ActionsAuthBlock>
                <Button
                  title={t("auth.register")}
                  background="#5F5CEC"
                  textColor="#FFFFFF"
                  borderRadius="15px"
                  onClick={() => handleChangeAuthMode("register")}
                />
                <Button
                  title={t("auth.authorization")}
                  background="#F4F7FE"
                  textColor="#5F5CEC"
                  borderRadius="15px"
                  isLoading={loading}
                  onClick={() => props.handleSubmit()}
                />
              </Styled.ActionsAuthBlock>
            </Stack>
          </Stack>
        )}
      </Formik>
    </Styled.AuthWrapper>
  );
};

export default Auth;
