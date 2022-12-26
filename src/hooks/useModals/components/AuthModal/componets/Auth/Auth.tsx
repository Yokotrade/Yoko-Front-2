import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { cyan, blue, deepPurple } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "store/hook";
import { loginUser, isLoading } from "store/Auth";
import InputField from "ui/InputField";
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
  const loading = useAppSelector(isLoading);
  const handleSubmit = async (values: AuthInitialValues) => {
    dispatch(loginUser(values));
  };

  return (
    <Styled.AuthWrapper>
      <Styled.AuthTitle variant="h3" align="center">
        {t("auth.title")}
      </Styled.AuthTitle>
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
              placeholder={t("auth.password_input_placeholder")}
              handleChange={props.handleChange}
            />
            <Button sx={{ color: deepPurple[100] }} variant="text" size="small">
              {t("auth.forgot")}
            </Button>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Styled.ActionsAuthBlock>
                {/* <Button
                  sx={{ background: cyan[50], color: blue[700] }}
                  fullWidth
                  size="large"
                  color="info"
                  variant="contained"
                  onClick={() => handleChangeAuthMode("register")}
                >
                  {t("auth.register")}
                </Button> */}

                <Box sx={{ width: "100%", position: "relative" }}>
                  {/* <Button
                    sx={{ background: cyan[50], color: blue[700] }}
                    fullWidth
                    size="large"
                    color="info"
                    variant="contained"
                    onClick={() => props.handleSubmit()}
                  >
                    {t("auth.authorization")}
                  </Button> */}
                  {loading && (
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
                </Box>
              </Styled.ActionsAuthBlock>
            </Stack>
          </Stack>
        )}
      </Formik>
    </Styled.AuthWrapper>
  );
};

export default Auth;
