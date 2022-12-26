import * as Yup from "yup";

export interface RegisterInitialValues {
  Login: string;
  Password: string;
  PasswordRetry: string;
}

export const initialValues: RegisterInitialValues = {
  Login: "",
  Password: "",
  PasswordRetry: "",
};

export const validationSchema = Yup.object().shape({
  Login: Yup.string().required(),
  Password: Yup.string().required(),
  PasswordRetry: Yup.string().required(),
});
